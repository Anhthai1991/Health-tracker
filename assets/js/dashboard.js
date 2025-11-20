// --- KHAI BÁO BIẾN TOÀN CỤC (GLOBAL VARIABLES) ---
let foodDB = [], healthProfile = {};
let globalData = null; // Biến này sẽ lưu dữ liệu để dùng đi dùng lại, không cần fetch nhiều lần
let labChartInstance = null, weightChartInstance = null;
const CUP_SIZE = 0.25; 
let dailyTarget = 2.5; 
const MODEL_LIST = ["gemini-2.5-flash", "gemini-2.0-flash-001", "gemini-2.0-flash-lite-001"];
let workoutLogs = []; // Biến lưu lịch sử tập luyện

// --- 1. QUẢN LÝ GIAO DIỆN (THEME) ---
function initTheme() {
    const stored = localStorage.getItem('theme') || 'light';
    setTheme(stored);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const btn = document.getElementById('themeBtn');
    
    // Đổi màu icon và cấu hình ChartJS
    if(theme === 'dark') {
        if(btn) btn.innerHTML = '<i class="bi bi-sun-fill"></i>';
        Chart.defaults.color = '#e0e0e0';
        Chart.defaults.borderColor = '#444';
    } else {
        if(btn) btn.innerHTML = '<i class="bi bi-moon-fill"></i>';
        Chart.defaults.color = '#666';
        Chart.defaults.borderColor = '#ddd';
    }

    // QUAN TRỌNG: Nếu đã có dữ liệu (globalData), thì vẽ lại biểu đồ ngay
    // Không cần gọi fetch('data.json') ở đây nữa
    if(globalData) {
        renderLabChart(globalData.medical_checkups);
        renderWeightChart(globalData.weight_log, globalData.profile.target_weight);
    }
}

// Chạy theme ngay khi mở web
initTheme(); 

// --- 2. TẢI DỮ LIỆU CHÍNH (MAIN FETCH) ---
// Thêm dấu chấm (.) vào trước data.json để sửa lỗi đường dẫn trên GitHub
fetch('./data.json')
    .then(r => {
        if (!r.ok) throw new Error("Không tìm thấy file data.json");
        return r.json();
    })
    .then(data => {
        // Lưu dữ liệu vào biến toàn cục để dùng lại ở hàm setTheme
        globalData = data; 
        foodDB = data.food_database;
        
        // Sắp xếp dữ liệu theo thời gian
        data.medical_checkups.sort((a, b) => new Date(a.date) - new Date(b.date));
        data.weight_log.sort((a, b) => new Date(a.date) - new Date(b.date));

        // Thiết lập Profile
        healthProfile = {
            conditions: data.profile.conditions.join(", "),
            lastCheckup: data.medical_checkups[data.medical_checkups.length - 1],
            targetCal: data.profile.daily_calories_target || 1800
        };
        
        // Hiển thị thông tin cá nhân lên HTML
        document.getElementById('headerName').innerText = data.profile.name;
        document.getElementById('pName').innerText = data.profile.name;
        const currentYear = new Date().getFullYear();
        const age = currentYear - parseInt(data.profile.dob);
        document.getElementById('pAge').innerText = age;
        document.getElementById('pGender').innerText = data.profile.gender;
        document.getElementById('pHeight').innerText = data.profile.height;
        const lastWeight = data.weight_log.length > 0 ? data.weight_log[data.weight_log.length - 1].value : "--";
        document.getElementById('pWeight').innerText = lastWeight;
        document.getElementById('pBlood').innerText = data.profile.blood_type;
        document.getElementById('pConditions').innerText = healthProfile.conditions;

        document.getElementById('targetCal').innerText = healthProfile.targetCal;
        document.getElementById('targetWeightDisplay').innerText = data.profile.target_weight;
        
        // Vẽ biểu đồ và bảng
        renderLabChart(data.medical_checkups);
        renderWeightChart(data.weight_log, data.profile.target_weight);
        renderCompareTable(data.medical_checkups);
        renderMeals(data.meal_logs);
        renderLifestyle(data.lifestyle_tips);
        
        // Các tính năng phụ
        calculateTarget(data.medical_checkups[data.medical_checkups.length - 1]);
        loadWater(); 
        loadDailyCalories();

        // Load API Key nếu đã lưu
        const key = localStorage.getItem('geminiKey');
        if(key && document.getElementById('apiKeyInput')) {
            document.getElementById('apiKeyInput').value = key;
        }
    })
    .catch(error => {
        console.error("Lỗi tải dữ liệu:", error);
        alert("Không tải được dữ liệu! Hãy kiểm tra lại file data.json.");
    });

// --- 3. AI ENGINE (GEMINI) ---
async function callGemini(prompt) {
    const key = localStorage.getItem('geminiKey');
    if(!key) { alert('Chưa nhập API Key! Hãy vào cài đặt.'); return null; }
    
    const loadingEl = document.getElementById('aiLoading');
    if(loadingEl) loadingEl.style.display = 'block';
    
    let finalResult = null;
    
    for (let modelName of MODEL_LIST) {
        try {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${key}`;
            const res = await fetch(url, {
                method: 'POST', headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
            });
            const data = await res.json();
            if (data.candidates && data.candidates.length > 0) {
                finalResult = data.candidates[0].content.parts[0].text;
                const statusEl = document.getElementById('modelStatus');
                if(statusEl) statusEl.innerText = `✅ ${modelName}`;
                break;
            }
        } catch(e) { console.error(e); }
    }
    
    if(loadingEl) loadingEl.style.display = 'none';
    if (!finalResult) alert('Lỗi AI (Hết quota hoặc sai Key).');
    return finalResult;
}

async function askAI() {
    const q = document.getElementById('aiInput').value; if(!q) return;
    const prompt = `Đóng vai bác sĩ dinh dưỡng. Phân tích món: "${q}". Bệnh lý: ${healthProfile.conditions}. Trả về JSON (không markdown): {"name": "Tên chuẩn", "calories": số_nguyên, "portion": "khẩu phần", "status": "green/yellow/red", "reason": "lý do ngắn"}`;
    const res = await callGemini(prompt);
    if(res) {
        try {
            const d = JSON.parse(res.replace(/```json|```/g, '').trim());
            const c = d.status=='green'?'success':(d.status=='yellow'?'warning':'danger');
            document.getElementById('aiResult').innerHTML = `<div class="alert alert-${c} p-2"><strong>${d.name}</strong> <span class="badge bg-dark">${d.calories} kcal</span><br><small>${d.reason}</small><button class="btn btn-sm btn-outline-dark w-100 mt-1" onclick="addTempCal(${d.calories})">+ Thêm Calo</button></div>`;
        } catch(e) { document.getElementById('aiResult').innerHTML = `<div class="alert alert-secondary small">${res}</div>`; }
    }
}

// --- 4. VẼ BIỂU ĐỒ (CHARTING) ---
function renderLabChart(logs) {
    const ctx = document.getElementById('labChart').getContext('2d');
    if(labChartInstance) labChartInstance.destroy(); 

    const pStyles = logs.map(l => { const n=(l.note||'').toLowerCase(); if(n.includes('tốt')||n.includes('hồi phục')) return 'star'; if(n.includes('cấp')||n.includes('cao')||n.includes('tăng')) return 'rectRot'; return 'circle'; });
    const pColors = logs.map(l => { const n=(l.note||'').toLowerCase(); if(n.includes('cấp')||n.includes('tăng')) return '#e74c3c'; if(n.includes('tốt')) return '#27ae60'; return '#e74c3c'; });
    const pSizes = logs.map(l => (l.note && l.note.length>5)?8:4);

    labChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: logs.map(l => l.date),
            datasets: [
                { label: 'Gout', data: logs.map(l => l.uric_acid), borderColor: '#e74c3c', backgroundColor: 'rgba(231,76,60,0.1)', fill:true, yAxisID:'y', pointStyle:pStyles, pointBackgroundColor:pColors, pointRadius:pSizes, tension:0.4 },
                { label: 'Gan (ALT)', data: logs.map(l => l.alt_liver), borderColor: '#f1c40f', borderDash:[5,5], yAxisID:'y1', pointRadius:0, tension:0.4 }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: {
                y: { type:'linear', position:'left', title:{display:true,text:'Gout (µmol/L)'}, suggestedMin:200, suggestedMax:650 },
                y1: { type:'linear', position:'right', title:{display:true,text:'Gan (U/L)'}, grid:{drawOnChartArea:false}, suggestedMin:0, suggestedMax:150 }
            },
            plugins: { legend: {display:false}, tooltip: {callbacks:{footer: (items) => {const n=logs[items[0].dataIndex].note; return n?'📌 '+n:'';}}} }
        }
    });
}

function renderWeightChart(logs, target) {
    const ctx = document.getElementById('weightChart').getContext('2d');
    if(weightChartInstance) weightChartInstance.destroy();

    const gradient = ctx.createLinearGradient(0,0,0,200); gradient.addColorStop(0,'rgba(52,152,219,0.4)'); gradient.addColorStop(1,'rgba(52,152,219,0.0)');
    weightChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: logs.map(l => l.date),
            datasets: [
                { label:'Cân nặng', data:logs.map(l=>l.value), borderColor:'#3498db', backgroundColor:gradient, fill:true, tension:0.4, pointRadius:4 },
                { label:'Mục tiêu', data:Array(logs.length).fill(target), borderColor:'#2ecc71', borderDash:[5,5], pointRadius:0 }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: { y: { suggestedMin: 58, suggestedMax: 80 }, x:{grid:{display:false}} },
            plugins: { legend:{display:false} }
        }
    });
}

// --- 5. CÁC HÀM HỖ TRỢ UI ---
function renderCompareTable(logs) {
    const thead = document.querySelector('#compareTable thead');
    const tbody = document.querySelector('#compareTable tbody');
    if(!thead || !tbody) return;

    let hHTML = `<tr><th class="text-start" style="width: 35%;">Chỉ số & Ý nghĩa</th><th>Ngưỡng</th>`;
    logs.forEach(l => hHTML += `<th>${l.date}</th>`);
    thead.innerHTML = hHTML + '</tr>';
    const metrics = [
        {group:true, name:'GOUT & THẬN'},
        {n:'Acid Uric', k:'uric_acid', u:'µmol/L', max:420, d:'Tác nhân gây bệnh Gout.'}, 
        {n:'Creatinine', k:'creatinine', u:'µmol/L', min:62, max:120, d:'Đánh giá chức năng thận.'}, 
        {n:'eGFR', k:'egfr', u:'ml/min', min:90, d:'Độ lọc cầu thận. <60 là suy thận.'},
        {group:true, name:'GAN (MEN GAN)'},
        {n:'ALT (GPT)', k:'alt_liver', u:'U/L', max:40, d:'Men gan đặc hiệu. Tăng khi gan tổn thương.'}, 
        {n:'AST (GOT)', k:'ast_liver', u:'U/L', max:37, d:'Men gan.'}, 
        {n:'GGT', k:'ggt_liver', u:'U/L', max:50, d:'Nhạy cảm với rượu bia.'},
        {group:true, name:'MỠ MÁU & ĐƯỜNG'},
        {n:'Cholesterol', k:'cholesterol', u:'mmol/L', max:5.2, d:'Mỡ máu tổng phần.'}, 
        {n:'Triglyceride', k:'triglyceride', u:'mmol/L', max:1.88, d:'Chất béo trung tính.'}, 
        {n:'HDL-C', k:'hdl', u:'mmol/L', min:0.9, d:'Mỡ tốt. Càng cao càng tốt.'},
        {n:'Glucose', k:'glucose', u:'mmol/L', max:6.4, d:'Đường huyết lúc đói.'},
        {group:true, name:'MÁU'},
        {n:'WBC', k:'wbc', u:'K/µL', min:4.5, max:9.0, d:'Bạch cầu (Miễn dịch).'}, 
        {n:'RBC', k:'rbc', u:'M/µL', min:3.7, max:5.2, d:'Hồng cầu (Oxy).'}, 
        {n:'HGB', k:'hgb', u:'g/dL', min:9.0, max:16.5, d:'Huyết sắc tố.'},
        {n:'PLT', k:'plt', u:'K/µL', min:150, max:350, d:'Tiểu cầu (Đông máu).'}
    ];
    tbody.innerHTML = '';
    metrics.forEach(m => {
        if(m.group) {
            tbody.innerHTML += `<tr style="background: var(--border-color);"><td colspan="${logs.length+2}" class="fw-bold text-primary text-uppercase small ps-3 pt-3">${m.name}</td></tr>`;
        } else {
            let range = m.min && m.max ? `${m.min}-${m.max}` : (m.max ? `< ${m.max}` : `> ${m.min}`);
            let row = `<tr>
                <td class="text-start ps-3">
                    <div class="fw-bold">${m.n} <span class="opacity-75 fw-normal" style="font-size:0.85em">(${m.u})</span></div>
                    <div class="opacity-75 fst-italic mt-1" style="font-size: 0.75rem;">${m.d}</div>
                </td>
                <td class="small align-middle opacity-75"><em>${range}</em></td>`;
            logs.forEach(l => {
                let v = l[m.k] !== undefined && l[m.k] !== null ? l[m.k] : '-';
                let cls = 'align-middle';
                if(typeof v === 'number') {
                    if ((m.max && v > m.max) || (m.min && v < m.min)) cls += ' text-danger fw-bold';
                    else if (m.k === 'hdl' && v >= m.min) cls += ' text-success fw-bold';
                }
                row += `<td class="${cls}">${v}</td>`;
            });
            tbody.innerHTML += row + '</tr>';
        }
    });
}

function loadWater() { const t=new Date().toLocaleDateString(); if(localStorage.getItem('wDate')!=t){localStorage.setItem('wDate',t);localStorage.setItem('wCount',0);} updateWaterUI(parseInt(localStorage.getItem('wCount'))||0); }
function addWater() { let c=(parseInt(localStorage.getItem('wCount'))||0)+1; localStorage.setItem('wCount',c); updateWaterUI(c); }
function resetWater() { if(confirm('Reset?')){localStorage.setItem('wCount',0); updateWaterUI(0);} }
function updateWaterUI(c) {
    document.getElementById('waterCount').innerText = c;
    const pct = Math.min((c * CUP_SIZE / dailyTarget) * 100, 100);
    const bar = document.getElementById('waterProgress');
    if(bar) { bar.style.width=pct+'%'; if(pct>=100){bar.classList.remove('bg-primary');bar.classList.add('bg-success');}else{bar.classList.add('bg-primary');bar.classList.remove('bg-success');} }
    document.getElementById('waterPercentText').innerText = Math.round(pct)+'%';
}

function renderMeals(logs) { document.getElementById('mealTable').innerHTML=logs.slice().reverse().slice(0,5).map(l=>`<tr><td>${l.date}</td><td>${l.content}</td><td>${l.calories||'-'}</td><td>${l.evaluation}</td></tr>`).join(''); }
function renderLifestyle(t) { document.getElementById('lifestyleTips').innerHTML=`<div class="col-3">🌅 ${t.morning}</div><div class="col-3">🍱 ${t.eating}</div><div class="col-3">🌙 ${t.evening}</div><div class="col-3">🏃 ${t.exercise}</div>`; }
function loadDailyCalories() { const t=new Date().toLocaleDateString(); if(localStorage.getItem('cDate')!=t){localStorage.setItem('cDate',t);localStorage.setItem('dCal',0);} updateCalUI(parseInt(localStorage.getItem('dCal'))); }
function addTempCal(n) { let c=parseInt(localStorage.getItem('dCal'))+n; localStorage.setItem('dCal',c); updateCalUI(c); }
function addManualCal() { const v = parseInt(document.getElementById('manualCalInput').value); if(v > 0) { addTempCal(v); document.getElementById('manualCalInput').value=''; } }
function resetDailyCal() { localStorage.setItem('dCal',0); updateCalUI(0); }
function updateCalUI(v) { document.getElementById('dailyCal').innerText=v; document.getElementById('calProgress').style.width=Math.min((v/healthProfile.targetCal)*100,100)+'%'; }
function calculateTarget(l) { dailyTarget = (l.uric_acid>400||l.alt_liver>40)?3.0:2.5; document.getElementById('waterTargetDisplay').innerText=dailyTarget; }

// JSON GENERATORS
function genCheckupJSON() { const o={date:document.getElementById('inpDate').value, uric_acid:parseFloat(document.getElementById('inpUric').value), alt_liver:parseFloat(document.getElementById('inpAlt').value), ast_liver:parseFloat(document.getElementById('inpAst').value), ggt_liver:parseFloat(document.getElementById('inpGgt').value), creatinine:parseFloat(document.getElementById('inpCre').value), egfr:parseFloat(document.getElementById('inpEgfr').value), cholesterol:parseFloat(document.getElementById('inpChol').value), triglyceride:parseFloat(document.getElementById('inpTri').value), hdl:parseFloat(document.getElementById('inpHdl').value), glucose:parseFloat(document.getElementById('inpGlu').value), hgb:parseFloat(document.getElementById('inpHgb').value), rbc:parseFloat(document.getElementById('inpRbc').value), wbc:parseFloat(document.getElementById('inpWbc').value), plt:parseFloat(document.getElementById('inpPlt').value), note:document.getElementById('inpNote').value}; showJSON(o); }
function genWeightJSON() { showJSON({date:document.getElementById('inpWDate').value, value:parseFloat(document.getElementById('inpWeight').value)}); }
function genMealJSON() { showJSON({date:document.getElementById('inpMDate').value, content:document.getElementById('inpMContent').value, calories:parseFloat(document.getElementById('inpMCal').value), evaluation:document.getElementById('inpMEval').value}); }
function showJSON(o) { const t=document.getElementById('jsonOutput'); t.value=JSON.stringify(o,null,2)+","; t.select(); document.execCommand('copy'); alert('Đã copy!'); }
function saveKey() { localStorage.setItem('geminiKey', document.getElementById('apiKeyInput').value); location.reload(); }
function handleEnter(e) { if(e.key==='Enter') askAI(); }
async function generateAIMenu() { const r=await callGemini(`Gợi ý thực đơn 1 ngày cho: ${healthProfile.conditions}. Calo: ${healthProfile.targetCal}. Markdown.`); if(r){document.getElementById('menuResult').style.display='block';document.getElementById('menuContent').innerHTML=marked.parse(r);} }
async function checkHealthAI() { const r=await callGemini(`Phân tích chỉ số: ${JSON.stringify(healthProfile.lastCheckup)}. Markdown.`); if(r){document.getElementById('menuResult').style.display='block';document.getElementById('menuContent').innerHTML=marked.parse(r);} }

// --- 6. WORKOUT LOGIC (TẬP LUYỆN) ---
function toggleView(view) {
    const main = document.querySelector('.main-content > .row:not(#workoutSection)'); 
    const woSection = document.getElementById('workoutSection');
    
    if (view === 'workout') {
        // Ẩn tất cả các row của dashboard (trừ header/nav)
        const rows = document.querySelectorAll('.main-content > .row:not(#workoutSection)');
        rows.forEach(r => r.style.display = 'none');
        
        if(woSection) {
            woSection.style.display = 'block';
            renderWorkouts();
            if(workoutLogs.length === 0) askAIWorkout(); 
        }
    } else {
        // Reload để về Dashboard cho nhanh và sạch
        location.reload(); 
    }
}

function estimateBurn(type, mins, weight) {
    const mets = { 'walk': 3.5, 'gym': 5.0, 'swim': 6.0, 'badminton': 5.5, 'pilates': 3.0, 'kegel': 1.5 };
    const met = mets[type] || 3.0;
    return Math.round(met * weight * (mins / 60));
}

function addWorkoutLog() {
    const type = document.getElementById('inpWType').value;
    const dur = parseInt(document.getElementById('inpWDuration').value);
    const note = document.getElementById('inpWNote').value;
    const currentWeight = parseFloat(document.getElementById('pWeight').innerText) || 70;

    if (!dur) return alert("Vui lòng nhập thời gian tập!");

    const cal = estimateBurn(type, dur, currentWeight);
    const log = {
        date: new Date().toLocaleDateString('vi-VN'),
        type: type,
        duration: dur,
        calories: cal,
        note: note
    };

    let storedLogs = JSON.parse(localStorage.getItem('workoutLogs') || '[]');
    storedLogs.push(log);
    localStorage.setItem('workoutLogs', JSON.stringify(storedLogs));
    
    alert(`Đã lưu! Bạn đốt được khoảng ${cal} kcal.`);
    renderWorkouts();
}

function renderWorkouts() {
    let storedLogs = JSON.parse(localStorage.getItem('workoutLogs') || '[]');
    workoutLogs = storedLogs; 
    
    const tbody = document.getElementById('workoutTable');
    if(tbody) {
        tbody.innerHTML = storedLogs.slice().reverse().map(l => `
            <tr>
                <td>${l.date}</td>
                <td><span class="badge bg-info text-dark">${l.type.toUpperCase()}</span><br><span class="text-muted" style="font-size:0.7em">${l.note}</span></td>
                <td>${l.duration}p</td>
                <td>🔥 ${l.calories}</td>
            </tr>
        `).join('');
    }
    
    const countEl = document.getElementById('woCount');
    const burnEl = document.getElementById('woBurn');
    
    if(countEl) countEl.innerText = storedLogs.length;
    if(burnEl) {
        const totalBurn = storedLogs.reduce((sum, l) => sum + l.calories, 0);
        burnEl.innerText = totalBurn;
    }
}

async function askAIWorkout() {
    const tipEl = document.getElementById('aiWorkoutTip');
    if(tipEl) tipEl.innerHTML = '<div class="spinner-border spinner-border-sm"></div> Đang suy nghĩ...';
    
    const prompt = `Đóng vai PT Gym & Bác sĩ. Người dùng: Nam, muốn có con, bị Gout. Gợi ý 1 bài tập cụ thể cho ngày hôm nay (chọn 1 trong: Gym, Bơi, Pilates, Kegel). Ngắn gọn dưới 50 từ. Vui vẻ.`;
    const res = await callGemini(prompt);
    if(res && tipEl) tipEl.innerText = res;
}