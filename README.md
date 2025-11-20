# Hướng dẫn sử dụng
### 1. Cài đặt PWA (Trên điện thoại):

Mở trang web bằng Chrome (Android) hoặc Safari (iPhone).

Nhấn nút Menu (3 chấm) hoặc nút Share.

Chọn "Thêm vào màn hình chính" (Add to Home Screen).

### 2. Công cụ Admin (Tạo Code JSON):

Bấm nút "🛠️ Tạo JSON".

Nhập liệu vào form (Ví dụ: Cân nặng hôm nay).

Bấm nút "Tạo Code" -> Copy nội dung.

Mở file data.json, paste nội dung đó vào cuối danh sách tương ứng (nhớ thêm dấu phẩy nếu cần).

### 3. Doctor View (In báo cáo):

Khi đi khám bệnh, bấm nút "🖨️ Doctor View".

Trang web sẽ tự động ẩn các nút bấm thừa, chỉ giữ lại Biểu đồ và Thông tin để bác sĩ xem.

# Hướng Dẫn Cập Nhật Health Tracker

Đây là file hướng dẫn cách sử dụng AI để cập nhật dữ liệu cho trang web theo dõi sức khỏe.

## Quy tắc chung
1.  File dữ liệu gốc nằm ở `data.json`.
2.  Copy nội dung `data.json` hiện tại gửi cho AI trước khi yêu cầu cập nhật mới (để AI biết lịch sử cũ).
3.  Sau khi AI trả về code JSON mới, hãy copy và **ghi đè** toàn bộ vào file `data.json`.

---

## CÁC CÂU LỆNH MẪU (PROMPTS)

### Tình huống 1: Cập nhật sau khi đi khám bệnh (3 tháng/lần)
*Bước 1:* Chụp ảnh phiếu xét nghiệm.
*Bước 2:* Gửi ảnh cho AI kèm câu lệnh sau:

> "Đây là kết quả xét nghiệm mới nhất của tôi. Hãy so sánh các chỉ số Acid Uric, Men gan (ALT/AST), và Creatinine với lần khám trước đó xem có cải thiện không.
> Sau đó, hãy tạo đoạn mã JSON mới nhất để tôi cập nhật vào file data.json. Lưu ý giữ nguyên các dữ liệu cũ, chỉ nối thêm dữ liệu mới."

---

### Tình huống 2: Cập nhật cân nặng (Hàng tuần)
*Câu lệnh:*

> "Hôm nay ngày [DD/MM/YYYY], cân nặng của tôi là [Số kg]. Hãy tạo đoạn JSON cập nhật cho phần weight_log."

---

### Tình huống 3: Log đồ ăn & Nhờ đánh giá (Hàng ngày)
*Câu lệnh:*

> "Hôm nay tôi đã ăn:
> - Sáng: [Món ăn]
> - Trưa: [Món ăn]
> - Tối: [Món ăn]
> Dựa trên bệnh Gout, Trào ngược và Men gan cao của tôi, hãy đánh giá ngắn gọn bữa ăn này (Tốt/Xấu/Cần tránh gì). Sau đó xuất đoạn JSON để tôi lưu vào meal_logs."

---

### Tình huống 4: Thay đổi mục tiêu sức khỏe
*Câu lệnh:*

> "Tôi muốn đổi mục tiêu cân nặng xuống còn [Số kg] và muốn AI tư vấn lại lượng Calo cần thiết. Hãy cập nhật phần profile trong file JSON."

# 🏥 Health Tracker: All-in-One Upgrade Package
##### Bộ mã nguồn nâng cấp toàn diện cho trang theo dõi sức khỏe cá nhân.Tính năng mới:

1. PWA (Progressive Web App): Cài đặt lên điện thoại như App.

2. Admin Tool: Công cụ tạo code JSON tự động (không cần gõ tay).

3. Doctor View: Chế độ in ấn báo cáo chuyên nghiệp cho bác sĩ.

4. Smart Menu: Gợi ý thực đơn ngẫu nhiên dựa trên database.

### Danh sách các mô hình hiện có:
- Tên: models/gemini-2.5-pro-preview-03-25
  Mô tả: Gemini 2.5 Pro Preview 03-25
--------------------
- Tên: models/gemini-2.5-flash
  Mô tả: Stable version of Gemini 2.5 Flash, our mid-size multimodal model that supports up to 1 million tokens, released in June of 2025.
--------------------
- Tên: models/gemini-2.5-pro-preview-05-06
  Mô tả: Preview release (May 6th, 2025) of Gemini 2.5 Pro
--------------------
- Tên: models/gemini-2.5-pro-preview-06-05
  Mô tả: Preview release (June 5th, 2025) of Gemini 2.5 Pro
--------------------
- Tên: models/gemini-2.5-pro
  Mô tả: Stable release (June 17th, 2025) of Gemini 2.5 Pro
--------------------
- Tên: models/gemini-2.0-flash-exp
  Mô tả: Gemini 2.0 Flash Experimental
--------------------
- Tên: models/gemini-2.0-flash
  Mô tả: Gemini 2.0 Flash
--------------------
- Tên: models/gemini-2.0-flash-001
  Mô tả: Stable version of Gemini 2.0 Flash, our fast and versatile multimodal model for scaling across diverse tasks, released in January of 2025.
--------------------
- Tên: models/gemini-2.0-flash-exp-image-generation
  Mô tả: Gemini 2.0 Flash (Image Generation) Experimental
--------------------
- Tên: models/gemini-2.0-flash-lite-001
  Mô tả: Stable version of Gemini 2.0 Flash-Lite
--------------------
- Tên: models/gemini-2.0-flash-lite
  Mô tả: Gemini 2.0 Flash-Lite
--------------------
- Tên: models/gemini-2.0-flash-lite-preview-02-05
  Mô tả: Preview release (February 5th, 2025) of Gemini 2.0 Flash-Lite
--------------------
- Tên: models/gemini-2.0-flash-lite-preview
  Mô tả: Preview release (February 5th, 2025) of Gemini 2.0 Flash-Lite
--------------------
- Tên: models/gemini-2.0-pro-exp
  Mô tả: Experimental release (March 25th, 2025) of Gemini 2.5 Pro
--------------------
- Tên: models/gemini-2.0-pro-exp-02-05
  Mô tả: Experimental release (March 25th, 2025) of Gemini 2.5 Pro
--------------------
- Tên: models/gemini-exp-1206
  Mô tả: Experimental release (March 25th, 2025) of Gemini 2.5 Pro
--------------------
- Tên: models/gemini-2.0-flash-thinking-exp-01-21
  Mô tả: Preview release (April 17th, 2025) of Gemini 2.5 Flash
--------------------
- Tên: models/gemini-2.0-flash-thinking-exp
  Mô tả: Preview release (April 17th, 2025) of Gemini 2.5 Flash
--------------------
- Tên: models/gemini-2.0-flash-thinking-exp-1219
  Mô tả: Preview release (April 17th, 2025) of Gemini 2.5 Flash
--------------------
- Tên: models/gemini-2.5-flash-preview-tts
  Mô tả: Gemini 2.5 Flash Preview TTS
--------------------
- Tên: models/gemini-2.5-pro-preview-tts
  Mô tả: Gemini 2.5 Pro Preview TTS
--------------------
- Tên: models/learnlm-2.0-flash-experimental
  Mô tả: LearnLM 2.0 Flash Experimental
--------------------
- Tên: models/gemma-3-1b-it
  Mô tả: 
--------------------
- Tên: models/gemma-3-4b-it
  Mô tả: 
--------------------
- Tên: models/gemma-3-12b-it
  Mô tả: 
--------------------
- Tên: models/gemma-3-27b-it
  Mô tả: 
--------------------
- Tên: models/gemma-3n-e4b-it
  Mô tả: 
--------------------
- Tên: models/gemma-3n-e2b-it
  Mô tả: 
--------------------
- Tên: models/gemini-flash-latest
  Mô tả: Latest release of Gemini Flash
--------------------
- Tên: models/gemini-flash-lite-latest
  Mô tả: Latest release of Gemini Flash-Lite
--------------------
- Tên: models/gemini-pro-latest
  Mô tả: Latest release of Gemini Pro
--------------------
- Tên: models/gemini-2.5-flash-lite
  Mô tả: Stable version of Gemini 2.5 Flash-Lite, released in July of 2025
--------------------
- Tên: models/gemini-2.5-flash-image-preview
  Mô tả: Gemini 2.5 Flash Preview Image
--------------------
- Tên: models/gemini-2.5-flash-image
  Mô tả: Gemini 2.5 Flash Preview Image
--------------------
- Tên: models/gemini-2.5-flash-preview-09-2025
  Mô tả: Gemini 2.5 Flash Preview Sep 2025
--------------------
- Tên: models/gemini-2.5-flash-lite-preview-09-2025
  Mô tả: Preview release (Septempber 25th, 2025) of Gemini 2.5 Flash-Lite
--------------------
- Tên: models/gemini-3-pro-preview
  Mô tả: Gemini 3 Pro Preview
--------------------
- Tên: models/gemini-robotics-er-1.5-preview
  Mô tả: Gemini Robotics-ER 1.5 Preview
--------------------
- Tên: models/gemini-2.5-computer-use-preview-10-2025
  Mô tả: Gemini 2.5 Computer Use Preview 10-2025


#### Index.html latest

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thai Health Ultimate Final</title>
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#1e3c72">
    <meta name="apple-mobile-web-app-capable" content="yes">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css">
    
    <style>
        body { background-color: #f0f2f5; font-family: 'Segoe UI', sans-serif; min-height: 100vh; display: flex; flex-direction: column; }
        .main-content { flex: 1; }
        .card { border: none; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); margin-bottom: 20px; background: white; transition: transform 0.2s; }
        .header-gradient { background: linear-gradient(135deg, #1e3c72, #2a5298); color: white; padding: 40px 0 30px; border-radius: 0 0 30px 30px; margin-bottom: 30px; }
        .tool-btn { border-radius: 12px; padding: 15px; font-weight: 600; border: none; width: 100%; margin-bottom: 10px; text-align: left; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        .ai-loading { display: none; }
        .water-section { background: white; border-radius: 16px; padding: 20px; text-align: center; }
        .chart-legend { display: flex; justify-content: center; gap: 15px; margin-top: 10px; font-size: 0.85rem; }
        .legend-item { display: flex; align-items: center; gap: 5px; }

        @media print {
            .no-print, .header-gradient, footer, .tool-btn, .search-section, .water-section { display: none !important; }
            .card { box-shadow: none; border: 1px solid #ddd; page-break-inside: avoid; }
            .print-header { display: block !important; text-align: center; margin-bottom: 20px; }
            body { background: white; }
        }
        .print-header { display: none; }
    </style>
</head>
<body>

    <div class="header-gradient text-center no-print">
        <div class="container">
            <h1 class="fw-bold">Nguyễn Anh Thái</h1>
            <p class="opacity-75">Gout • Men Gan • Thận (eGFR) • Trào ngược</p>
            <button class="btn btn-sm btn-outline-light mt-2 rounded-pill" data-bs-toggle="modal" data-bs-target="#keyModal">
                <i class="bi bi-key-fill"></i> Cài đặt Gemini API
            </button>
            <div id="modelStatus" class="small mt-2 text-warning" style="font-size: 0.8em;"></div>
        </div>
    </div>

    <div class="print-header">
        <h2>BÁO CÁO SỨC KHỎE: NGUYỄN ANH THÁI</h2>
        <p>Ngày xuất báo cáo: <script>document.write(new Date().toLocaleDateString('vi-VN'))</script></p>
        <hr>
    </div>

    <div class="container main-content">
        
        <div class="row mb-4 no-print">
            <div class="col-6 col-md-3"><button class="tool-btn bg-white text-primary" onclick="window.print()"><span><i class="bi bi-printer-fill"></i> Doctor View</span></button></div>
            <div class="col-6 col-md-3"><button class="tool-btn bg-white text-success" data-bs-toggle="modal" data-bs-target="#adminModal"><span><i class="bi bi-code-slash"></i> Admin Tool</span></button></div>
            <div class="col-6 col-md-3"><button class="tool-btn bg-white text-danger" onclick="generateAIMenu()"><span><i class="bi bi-stars"></i> Thực đơn AI</span></button></div>
            <div class="col-6 col-md-3"><button class="tool-btn bg-white text-warning" onclick="checkHealthAI()"><span><i class="bi bi-activity"></i> Phân tích Sâu</span></button></div>
        </div>

        <div class="row mb-4 search-section">
            <div class="col-md-12">
                <div class="card p-3 border-primary border-2">
                    <h5 class="text-primary"><i class="bi bi-calculator"></i> AI Tính Calo & Khẩu phần</h5>
                    <div class="input-group">
                        <input type="text" id="aiInput" class="form-control" placeholder="VD: 1 bát phở bò tái, 1 ly cà phê sữa..." onkeypress="handleEnter(event)">
                        <button class="btn btn-primary" onclick="askAI()">Tính ngay</button>
                    </div>
                    <div id="aiLoading" class="text-center mt-2 ai-loading"><div class="spinner-border text-primary spinner-border-sm"></div><small class="ms-2">Gemini đang tính...</small></div>
                    <div id="aiResult" class="mt-3"></div>
                </div>
            </div>
        </div>

        <div id="menuResult" class="card p-3 mb-4 bg-white border-warning" style="display:none;">
            <h5 class="text-warning"><i class="bi bi-lightbulb"></i> Gemini Tư Vấn:</h5>
            <div id="menuContent" class="small"></div>
        </div>

        <div class="row mb-4">
            <div class="col-md-6">
                 <div class="card p-3 h-100">
                    <h5 class="card-title">🔥 Calo tiêu thụ hôm nay</h5>
                    <div class="d-flex justify-content-between align-items-end">
                        <h2 class="display-4 fw-bold text-danger mb-0" id="dailyCal">0</h2>
                        <div class="text-end"><small class="text-muted">Mục tiêu</small><br><h4 class="fw-bold text-secondary" id="targetCal">1800</h4></div>
                    </div>
                    <div class="progress mt-3" style="height: 15px;"><div id="calProgress" class="progress-bar bg-danger" style="width: 0%"></div></div>
                    <button class="btn btn-sm btn-outline-secondary mt-3 w-100" onclick="resetDailyCal()">Reset Calo</button>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card p-3 h-100">
                    <h5 class="card-title">⚖️ Cân nặng</h5>
                    <canvas id="weightChart" height="150"></canvas>
                    <div class="text-center mt-2"><small class="text-muted">Mục tiêu: <span id="targetWeightDisplay">--</span> kg</small></div>
                </div>
            </div>
        </div>

        <div class="row mb-4">
            <div class="col-12">
                <div class="card p-3">
                    <h5 class="card-title">📊 Diễn biến Gout & Gan (Kèm sự kiện)</h5>
                    <div style="height: 350px;"><canvas id="labChart"></canvas></div>
                    <div class="chart-legend">
                        <div class="legend-item"><span style="color:#c0392b">♦</span> Gout Cấp/Cao</div>
                        <div class="legend-item"><span style="color:#27ae60">★</span> Tốt/Hồi phục</div>
                        <div class="legend-item"><span style="color:#f1c40f">●</span> Bình thường</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-4 no-print">
            <div class="col-12">
                <div class="card p-3">
                    <h5 class="card-title text-primary" data-bs-toggle="collapse" data-bs-target="#tableCollapse" style="cursor:pointer">
                        <i class="bi bi-table"></i> Bảng Chỉ Số Chi Tiết (Bấm để mở/đóng)
                    </h5>
                    <div class="collapse show" id="tableCollapse">
                        <div class="table-responsive mt-3">
                            <table class="table table-bordered table-hover text-center small" id="compareTable">
                                <thead class="table-light"></thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-4">
            <div class="col-md-4 water-section h-100 mb-3">
                <h5 class="text-info"><i class="bi bi-droplet-fill"></i> Nước uống</h5>
                <div class="my-3">
                    <h1 class="display-2 fw-bold text-primary mb-0" id="waterCount">0</h1>
                    <p class="text-muted mb-2">ly / Mục tiêu: <span id="waterTargetDisplay">--</span> L</p>
                    <div class="progress" style="height: 10px; border-radius: 10px; background-color: #e9ecef;">
                        <div id="waterProgress" class="progress-bar bg-primary" role="progressbar" style="width: 0%; border-radius: 10px; transition: width 0.6s ease;"></div>
                    </div>
                    <small class="text-muted mt-1 d-block text-end" id="waterPercentText">0%</small>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-outline-primary rounded-pill" onclick="addWater()">+ Uống 1 Ly</button>
                    <button class="btn btn-sm btn-link text-muted" onclick="resetWater()">Reset</button>
                </div>
            </div>

            <div class="col-md-8">
                <div class="card p-3 h-100">
                    <h5>📒 Nhật ký ăn uống (Full)</h5>
                    <div class="table-responsive">
                        <table class="table table-hover table-sm small">
                            <thead><tr><th>Ngày</th><th>Nội dung</th><th>Calo</th><th>Đánh giá</th></tr></thead>
                            <tbody id="mealTable"></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-4 no-print">
            <div class="col-12">
                <div class="card p-3">
                    <h5>⏰ Lịch trình sinh hoạt</h5>
                    <div class="row small text-muted" id="lifestyleTips"></div>
                </div>
            </div>
        </div>
    </div>

    <footer class="no-print bg-white py-3 text-center mt-auto border-top">
        <div class="container"><small class="text-muted">© 2025 Thai Health Ultimate | Powered by Gemini</small></div>
    </footer>

    <div class="modal fade" id="keyModal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">Cài đặt Gemini API</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div><div class="modal-body"><p class="small text-muted">Hệ thống ưu tiên model <b>2.5 Flash</b> và tự động dự phòng.</p><input type="password" id="apiKeyInput" class="form-control mb-2" placeholder="Paste API Key..."><div class="form-check mb-3"><input class="form-check-input" type="checkbox" id="showKey"><label class="form-check-label small" for="showKey">Hiện Key</label></div><button class="btn btn-primary w-100" onclick="saveKey()">Lưu Key</button></div></div></div></div>

    <div class="modal fade" id="adminModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header"><h5 class="modal-title">Admin Tool (Full)</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
                <div class="modal-body">
                    <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
                        <li class="nav-item"><button class="nav-link active" data-bs-target="#tabCheckup" data-bs-toggle="tab">Khám</button></li>
                        <li class="nav-item"><button class="nav-link" data-bs-target="#tabWeight" data-bs-toggle="tab">Cân</button></li>
                        <li class="nav-item"><button class="nav-link" data-bs-target="#tabMeal" data-bs-toggle="tab">Ăn</button></li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="tabCheckup">
                            <input type="date" id="inpDate" class="form-control mb-2">
                            <h6 class="text-primary border-bottom mt-2">Gout & Thận</h6>
                            <div class="row g-2"><div class="col-4"><input type="number" id="inpUric" class="form-control form-control-sm" placeholder="Uric"></div><div class="col-4"><input type="number" id="inpCre" class="form-control form-control-sm" placeholder="Creatinine"></div><div class="col-4"><input type="number" id="inpEgfr" class="form-control form-control-sm" placeholder="eGFR"></div></div>
                            <h6 class="text-warning border-bottom mt-2">Gan</h6>
                            <div class="row g-2"><div class="col-4"><input type="number" id="inpAlt" class="form-control form-control-sm" placeholder="ALT"></div><div class="col-4"><input type="number" id="inpAst" class="form-control form-control-sm" placeholder="AST"></div><div class="col-4"><input type="number" id="inpGgt" class="form-control form-control-sm" placeholder="GGT"></div></div>
                            <h6 class="text-success border-bottom mt-2">Mỡ máu & Đường</h6>
                            <div class="row g-2"><div class="col-3"><input type="number" id="inpChol" class="form-control form-control-sm" placeholder="Cholest."></div><div class="col-3"><input type="number" id="inpTri" class="form-control form-control-sm" placeholder="Trigly."></div><div class="col-3"><input type="number" id="inpHdl" class="form-control form-control-sm" placeholder="HDL"></div><div class="col-3"><input type="number" id="inpGlu" class="form-control form-control-sm" placeholder="Glucose"></div></div>
                            <h6 class="text-secondary border-bottom mt-2">Công thức máu</h6>
                            <div class="row g-2"><div class="col-3"><input type="number" id="inpHgb" class="form-control form-control-sm" placeholder="HGB"></div><div class="col-3"><input type="number" id="inpRbc" class="form-control form-control-sm" placeholder="RBC"></div><div class="col-3"><input type="number" id="inpWbc" class="form-control form-control-sm" placeholder="WBC"></div><div class="col-3"><input type="number" id="inpPlt" class="form-control form-control-sm" placeholder="PLT"></div></div>
                            <input type="text" id="inpNote" class="form-control mt-3" placeholder="Ghi chú sự kiện (VD: Gout cấp tính, Hồi phục...)">
                            <button class="btn btn-primary w-100 mt-2" onclick="genCheckupJSON()">Tạo JSON</button>
                        </div>
                        <div class="tab-pane fade" id="tabWeight">
                            <input type="date" id="inpWDate" class="form-control mb-2">
                            <input type="number" id="inpWeight" class="form-control mb-2" placeholder="kg">
                            <button class="btn btn-success w-100 mt-2" onclick="genWeightJSON()">Tạo JSON</button>
                        </div>
                        <div class="tab-pane fade" id="tabMeal">
                             <input type="date" id="inpMDate" class="form-control mb-2">
                             <textarea id="inpMContent" class="form-control mb-2" rows="2" placeholder="Món ăn..."></textarea>
                             <input type="number" id="inpMCal" class="form-control mb-2" placeholder="Calo (Từ AI)">
                             <textarea id="inpMEval" class="form-control mb-2" rows="2" placeholder="Đánh giá (Từ AI)..."></textarea>
                             <button class="btn btn-warning w-100 mt-2" onclick="genMealJSON()">Tạo JSON</button>
                        </div>
                    </div>
                    <textarea id="jsonOutput" class="form-control mt-3 bg-light text-monospace" rows="3" readonly></textarea>
                </div>
            </div>
        </div>
    </div>

    <script>
        let foodDB = [], healthProfile = {};
        const CUP_SIZE = 0.25; let dailyTarget = 2.5; 
        // Danh sách Model ưu tiên
        const MODEL_LIST = ["gemini-2.5-flash", "gemini-2.0-flash-001", "gemini-1.5-flash"];

        fetch('data.json').then(r => r.json()).then(data => {
            foodDB = data.food_database;
            healthProfile = {
                conditions: data.profile.conditions.join(", "),
                lastCheckup: data.medical_checkups[data.medical_checkups.length - 1],
                targetCal: data.profile.daily_calories_target || 1800
            };
            
            document.getElementById('targetCal').innerText = healthProfile.targetCal;
            document.getElementById('targetWeightDisplay').innerText = data.profile.target_weight;
            
            renderLabChart(data.medical_checkups);
            renderWeightChart(data.weight_log, data.profile.target_weight);
            renderCompareTable(data.medical_checkups);
            renderMeals(data.meal_logs);
            renderLifestyle(data.lifestyle_tips);
            
            calculateTarget(data.medical_checkups[data.medical_checkups.length - 1]);
            loadWater(); loadDailyCalories();

            const key = localStorage.getItem('geminiKey');
            if(key) document.getElementById('apiKeyInput').value = key;
            else new bootstrap.Modal(document.getElementById('keyModal')).show();
        });

        // --- AI ENGINE ---
        async function callGemini(prompt) {
            const key = localStorage.getItem('geminiKey');
            if(!key) { alert('Vui lòng nhập API Key!'); return null; }

            document.getElementById('aiLoading').style.display = 'block';
            let finalResult = null;

            for (let modelName of MODEL_LIST) {
                try {
                    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${key}`;
                    const response = await fetch(url, {
                        method: 'POST', headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
                    });
                    const data = await response.json();
                    if (data.candidates && data.candidates.length > 0) {
                        finalResult = data.candidates[0].content.parts[0].text;
                        document.getElementById('modelStatus').innerText = `✅ ${modelName}`;
                        break; 
                    }
                } catch (e) { console.error(e); }
            }

            document.getElementById('aiLoading').style.display = 'none';
            if (!finalResult) { alert(`AI Error: Kiểm tra Key hoặc Quota.`); return null; }
            return finalResult;
        }

        async function askAI() {
            const q = document.getElementById('aiInput').value;
            if(!q) return;
            const prompt = `Đóng vai chuyên gia dinh dưỡng. Người dùng hỏi: "${q}". Bệnh lý: ${healthProfile.conditions}. Trả về JSON (không markdown): {"name": "Tên món", "calories": số_nguyên, "portion": "khẩu phần", "status": "green/yellow/red", "reason": "lý do ngắn"}`;
            const aiRes = await callGemini(prompt);
            if(aiRes) {
                try {
                    const d = JSON.parse(aiRes.replace(/```json|```/g, '').trim());
                    const color = d.status === 'green' ? 'success' : (d.status === 'yellow' ? 'warning' : 'danger');
                    document.getElementById('aiResult').innerHTML = `<div class="alert alert-${color}"><strong>${d.name}</strong> <span class="badge bg-dark">${d.calories} kcal</span><br><small>${d.portion} - ${d.reason}</small><button class="btn btn-sm btn-outline-dark w-100 mt-2" onclick="addTempCal(${d.calories})">+ Cộng Calo</button></div>`;
                } catch (e) { document.getElementById('aiResult').innerHTML = `<div class="alert alert-secondary small">${aiRes}</div>`; }
            }
        }

        // --- BIỂU ĐỒ SỰ KIỆN (2 TRỤC) ---
        function renderLabChart(logs) {
            const ctx = document.getElementById('labChart').getContext('2d');
            const pColors = logs.map(l => { const n=(l.note||'').toLowerCase(); return (n.includes('cấp')||n.includes('cao'))?'#c0392b':(n.includes('tốt')||n.includes('hồi phục')?'#27ae60':'#f1c40f'); });
            const pStyles = logs.map(l => { const n=(l.note||'').toLowerCase(); return (n.includes('tốt')||n.includes('hồi phục'))?'star':((n.includes('cấp')||n.includes('cao'))?'rectRot':'circle'); });
            const pSizes = logs.map(l => (l.note && l.note.length > 5) ? 10 : 4);

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: logs.map(l => l.date),
                    datasets: [
                        { label: 'Gout', data: logs.map(l => l.uric_acid), borderColor: '#e74c3c', backgroundColor:'rgba(231,76,60,0.1)', fill:true, pointBackgroundColor: pColors, pointStyle: pStyles, pointRadius: pSizes, yAxisID: 'y', tension: 0.4 },
                        { label: 'Men gan', data: logs.map(l => l.alt_liver), borderColor: '#f1c40f', pointRadius: 0, yAxisID: 'y1', tension: 0.4 },
                        { label: 'Ngưỡng Gout', data: Array(logs.length).fill(420), borderColor: 'rgba(231,76,60,0.3)', borderDash:[5,5], pointRadius:0, yAxisID:'y' }
                    ]
                },
                options: { 
                    responsive: true, maintainAspectRatio: false,
                    plugins: { tooltip: { callbacks: { footer: (items) => { const n = logs[items[0].dataIndex].note; return n ? '📌 ' + n : ''; } } }, legend: { display: false } },
                    scales: { y: {position:'left', title:{display:true,text:'Gout'}, suggestedMin:200, suggestedMax:700}, y1: {position:'right', grid:{drawOnChartArea:false}, suggestedMin:0, suggestedMax:150} } 
                }
            });
        }

        // --- BIỂU ĐỒ CÂN NẶNG (SCALE 55KG) ---
        function renderWeightChart(logs, target) {
            const ctx = document.getElementById('weightChart').getContext('2d');
            const gradientFill = ctx.createLinearGradient(0, 0, 0, 400);
            gradientFill.addColorStop(0, 'rgba(52, 152, 219, 0.4)');
            gradientFill.addColorStop(1, 'rgba(52, 152, 219, 0.0)');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: logs.map(l => l.date),
                    datasets: [
                        { label: 'Cân nặng', data: logs.map(l => l.value), borderColor: '#3498db', backgroundColor: gradientFill, tension: 0.4, fill: true, pointRadius: 5, pointBorderWidth: 2 },
                        { label: 'Mục tiêu', data: Array(logs.length).fill(target), borderColor: '#2ecc71', borderDash: [10, 5], pointRadius: 0, borderWidth: 2 }
                    ]
                },
                options: { responsive: true, maintainAspectRatio: false, scales: { y: { suggestedMin: 55, suggestedMax: 85, grid: { color: '#f0f0f0' } }, x: { grid: { display: false } } }, plugins: { legend: { display: true, position: 'bottom' } } }
            });
        }

        // --- BẢNG CHI TIẾT (CÓ GIẢI THÍCH) ---
        function renderCompareTable(logs) {
            const thead = document.querySelector('#compareTable thead');
            const tbody = document.querySelector('#compareTable tbody');
            let hHTML = `<tr><th class="text-start bg-light" style="width: 35%;">Chỉ số & Ý nghĩa</th><th class="bg-light">Ngưỡng</th>`;
            logs.forEach(l => hHTML += `<th class="bg-white">${l.date}</th>`);
            thead.innerHTML = hHTML + '</tr>';
            
            const metrics = [
                {group:true, name:'GOUT & THẬN'},
                {n:'Acid Uric', k:'uric_acid', u:'µmol/L', max:420, d:'Tác nhân gây bệnh Gout. Cao gây lắng đọng tinh thể.'}, 
                {n:'Creatinine', k:'creatinine', u:'µmol/L', min:62, max:120, d:'Lọc thận. Cao là thận yếu.'}, 
                {n:'eGFR', k:'egfr', u:'ml/min', min:90, d:'Độ lọc cầu thận. < 60 là suy thận.'},
                {group:true, name:'GAN'},
                {n:'ALT', k:'alt_liver', u:'U/L', max:40, d:'Men gan đặc hiệu. Tăng khi tế bào gan hủy.'}, 
                {n:'AST', k:'ast_liver', u:'U/L', max:37, d:'Tổn thương gan/tim/cơ.'}, 
                {n:'GGT', k:'ggt_liver', u:'U/L', max:50, d:'Nhạy cảm với rượu bia/mật.'},
                {group:true, name:'MỠ MÁU'},
                {n:'Cholest.', k:'cholesterol', u:'mmol/L', max:5.2, d:'Mỡ tổng. Cao gây xơ vữa.'}, 
                {n:'Trigly.', k:'triglyceride', u:'mmol/L', max:1.88, d:'Mỡ do ăn ngọt/béo.'}, 
                {n:'HDL-C', k:'hdl', u:'mmol/L', min:0.9, d:'Mỡ tốt (Càng cao càng tốt).'},
                {n:'Glucose', k:'glucose', u:'mmol/L', max:6.4, d:'Đường huyết lúc đói.'},
                {group:true, name:'CÔNG THỨC MÁU'},
                {n:'WBC', k:'wbc', u:'K/µL', min:4.5, max:9.0, d:'Bạch cầu (Viêm nhiễm).'}, 
                {n:'RBC', k:'rbc', u:'M/µL', min:3.7, max:5.2, d:'Hồng cầu (Thiếu máu).'}, 
                {n:'HGB', k:'hgb', u:'g/dL', min:9.0, max:16.5, d:'Huyết sắc tố.'},
                {n:'PLT', k:'plt', u:'K/µL', min:150, max:350, d:'Tiểu cầu (Đông máu).'}
            ];
            
            tbody.innerHTML = '';
            metrics.forEach(m => {
                if(m.group) {
                    tbody.innerHTML += `<tr class="table-light"><td colspan="${logs.length+2}" class="fw-bold text-primary text-uppercase small ps-3 pt-3">${m.name}</td></tr>`;
                } else {
                    let range = m.min && m.max ? `${m.min}-${m.max}` : (m.max ? `< ${m.max}` : `> ${m.min}`);
                    let row = `<tr><td class="text-start ps-3"><div class="fw-bold text-dark">${m.n} <span class="text-muted fw-normal" style="font-size:0.85em">(${m.u})</span></div><div class="text-muted fst-italic mt-1" style="font-size: 0.75rem; line-height: 1.2;">${m.d}</div></td><td class="text-muted small align-middle"><em>${range}</em></td>`;
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

        // --- HELPERS ---
        function renderMeals(logs) { document.getElementById('mealTable').innerHTML = logs.slice().reverse().slice(0,5).map(l=>`<tr><td>${l.date}</td><td>${l.content}</td><td><span class="badge bg-secondary">${l.calories||'-'}</span></td><td>${l.evaluation}</td></tr>`).join(''); }
        function renderLifestyle(t) { document.getElementById('lifestyleTips').innerHTML = `<div class="col-3">🌅 ${t.morning}</div><div class="col-3">🍱 ${t.eating}</div><div class="col-3">🌙 ${t.evening}</div><div class="col-3">🏃 ${t.exercise}</div>`; }
        function loadDailyCalories() { const t=new Date().toLocaleDateString(); if(localStorage.getItem('cDate')!=t){localStorage.setItem('cDate',t);localStorage.setItem('dCal',0);} updateCalUI(parseInt(localStorage.getItem('dCal'))); }
        function addTempCal(n) { let c=parseInt(localStorage.getItem('dCal'))+n; localStorage.setItem('dCal',c); updateCalUI(c); }
        function resetDailyCal() { localStorage.setItem('dCal',0); updateCalUI(0); }
        function updateCalUI(v) { document.getElementById('dailyCal').innerText=v; document.getElementById('calProgress').style.width=Math.min((v/healthProfile.targetCal)*100,100)+'%'; }
        function calculateTarget(l) { dailyTarget = (l.uric_acid>400||l.alt_liver>40)?3.0:2.5; document.getElementById('waterTargetDisplay').innerText=dailyTarget; }
        function loadWater() { const t=new Date().toLocaleDateString('vi-VN'); if(localStorage.getItem('wDate')!=t){localStorage.setItem('wDate',t);localStorage.setItem('wCount',0);} updateWaterUI(parseInt(localStorage.getItem('wCount'))||0); }
        function addWater() { let c=(parseInt(localStorage.getItem('wCount'))||0)+1; localStorage.setItem('wCount',c); updateWaterUI(c); }
        function resetWater() { if(confirm('Reset?')){localStorage.setItem('wCount',0); updateWaterUI(0);} }
        function updateWaterUI(c) {
            document.getElementById('waterCount').innerText = c;
            const pct = Math.min((c * CUP_SIZE / dailyTarget) * 100, 100);
            const bar = document.getElementById('waterProgress');
            if(bar) { bar.style.width = pct + '%'; if(pct>=100){bar.classList.remove('bg-primary','bg-info');bar.classList.add('bg-success');}else{bar.classList.add('bg-primary');bar.classList.remove('bg-success','bg-info');} }
            document.getElementById('waterPercentText').innerText = Math.round(pct) + '%';
        }

        function genCheckupJSON() { const o={date:document.getElementById('inpDate').value, uric_acid:parseFloat(document.getElementById('inpUric').value), alt_liver:parseFloat(document.getElementById('inpAlt').value), ast_liver:parseFloat(document.getElementById('inpAst').value), ggt_liver:parseFloat(document.getElementById('inpGgt').value), creatinine:parseFloat(document.getElementById('inpCre').value), egfr:parseFloat(document.getElementById('inpEgfr').value), cholesterol:parseFloat(document.getElementById('inpChol').value), triglyceride:parseFloat(document.getElementById('inpTri').value), hdl:parseFloat(document.getElementById('inpHdl').value), glucose:parseFloat(document.getElementById('inpGlu').value), hgb:parseFloat(document.getElementById('inpHgb').value), rbc:parseFloat(document.getElementById('inpRbc').value), wbc:parseFloat(document.getElementById('inpWbc').value), plt:parseFloat(document.getElementById('inpPlt').value), note:document.getElementById('inpNote').value}; showJSON(o); }
        function genWeightJSON() { showJSON({date:document.getElementById('inpWDate').value, value:parseFloat(document.getElementById('inpWeight').value)}); }
        function genMealJSON() { showJSON({date:document.getElementById('inpMDate').value, content:document.getElementById('inpMContent').value, calories:parseFloat(document.getElementById('inpMCal').value), evaluation:document.getElementById('inpMEval').value}); }
        function showJSON(o) { const t=document.getElementById('jsonOutput'); t.value=JSON.stringify(o,null,2)+","; t.select(); document.execCommand('copy'); alert('Đã copy!'); }
        function saveKey() { localStorage.setItem('geminiKey', document.getElementById('apiKeyInput').value); location.reload(); }
        function handleEnter(e) { if(e.key==='Enter') askAI(); }
        async function generateAIMenu() { const r=await callGemini(`Gợi ý thực đơn 1 ngày cho: ${healthProfile.conditions}. Calo: ${healthProfile.targetCal}. Markdown.`); if(r){document.getElementById('menuResult').style.display='block';document.getElementById('menuContent').innerHTML=marked.parse(r);} }
        async function checkHealthAI() { const r=await callGemini(`Phân tích chỉ số: ${JSON.stringify(healthProfile.lastCheckup)}. Markdown.`); if(r){document.getElementById('menuResult').style.display='block';document.getElementById('menuContent').innerHTML=marked.parse(r);} }

        document.getElementById('showKey').addEventListener('change', function() { document.getElementById('apiKeyInput').type = this.checked ? 'text' : 'password'; });
    </script>
</body>
</html>

#### data.json

{
  "profile": {
    "name": "Nguyễn Anh Thái",
    "dob": "1991",
    "conditions": ["Gout", "Trào ngược dạ dày (GERD)", "Men gan cao", "Theo dõi thận"],
    "target_weight": 68,
    "daily_calories_target": 1800
  },
  "weight_log": [
    {"date": "2025-10-01", "value": 75},
    {"date": "2025-10-15", "value": 74.5},
    {"date": "2025-11-01", "value": 74.3},
    {"date": "2025-10-15", "value": 73.8}
  ],
  "medical_checkups": [
    {
      "date": "2025-10-01",
      "uric_acid": 605.0,
      "alt_liver": 97.4,
      "ast_liver": 46.7,
      "ggt_liver": 36.6,
      "creatinine": 88.91,
      "egfr": null,
      "glucose": 5.59,
      "cholesterol": 4.54,
      "triglyceride": 1.41,
      "hdl": 1.0,
      "wbc": 5.02,
      "rbc": 5.53,
      "hgb": 16.7,
      "plt": 223,
      "note": "Gout cấp (605). Men gan cao. Hồng cầu cao."
    },
    {
      "date": "2025-10-08",
      "uric_acid": 326.0,
      "alt_liver": 57.5,
      "ast_liver": 32.7,
      "ggt_liver": 29.4,
      "creatinine": null,
      "egfr": null,
      "glucose": 4.98,
      "cholesterol": 3.48,
      "triglyceride": 1.48,
      "hdl": 1.0,
      "wbc": 6.35,
      "rbc": 5.31,
      "hgb": 16.0,
      "plt": 225,
      "note": "Hồi phục tốt. Gout & Men gan giảm mạnh."
    }
  ],
  "food_database": [
    {
      "name": "Thịt bò / Thịt bê / Thịt trâu",
      "status": "red",
      "reason": "Rất nhiều Purin (Gout). Khó tiêu hóa, gây đầy bụng (GERD)."
    },
    {
      "name": "Thịt chó / Thịt dê",
      "status": "red",
      "reason": "Cực giàu đạm và purin. Đại kỵ với Gout và Men gan cao."
    },
    {
      "name": "Nội tạng (Gan, lòng, tim, cật)",
      "status": "red",
      "reason": "Chứa nhiều cholesterol và purin nhất. Kẻ thù số 1 của Gout & Gan."
    },
    {
      "name": "Thịt heo quay / Ba chỉ nhiều mỡ",
      "status": "red",
      "reason": "Nhiều mỡ gây gan nhiễm mỡ và làm chậm tiêu hóa (Trào ngược)."
    },
    {
      "name": "Hải sản vỏ cứng (Tôm, Cua, Ghẹ, Sò)",
      "status": "red",
      "reason": "Lượng purin rất cao (Gout). Dễ gây dị ứng."
    },
    {
      "name": "Cá biển (Cá trích, Cá cơm, Cá mòi)",
      "status": "red",
      "reason": "Nhóm cá này chứa lượng purin cao hơn cá sông."
    },
    {
      "name": "Mực / Bạch tuộc",
      "status": "yellow",
      "reason": "Purin trung bình. Ăn ít và hấp thì được, tránh nướng sa tế (hại dạ dày)."
    },
    {
      "name": "Cá sông (Cá lóc, Cá chép, Diêu hồng)",
      "status": "green",
      "reason": "Đạm lành tính, ít purin hơn thịt đỏ. Nên kho nhạt hoặc hấp."
    },
    {
      "name": "Ức gà / Thịt gà (bỏ da)",
      "status": "green",
      "reason": "Nguồn đạm an toàn nhất cho Gout và Gan. Bỏ da để giảm mỡ."
    },
    {
      "name": "Trứng vịt lộn",
      "status": "red",
      "reason": "Quá nhiều chất, cholesterol cao (Gan), purin cao (Gout)."
    },
    {
      "name": "Trứng gà (Lòng trắng)",
      "status": "green",
      "reason": "Đạm Albumin tốt cho thận và gan. Không chứa cholesterol."
    },
    {
      "name": "Trứng gà (Lòng đỏ)",
      "status": "yellow",
      "reason": "Nhiều dinh dưỡng nhưng khó tiêu và nhiều cholesterol. Tối đa 3 quả/tuần."
    },
    {
      "name": "Đậu phụ / Đậu hũ",
      "status": "green",
      "reason": "Đạm thực vật an toàn. Purin trong đậu nành ít gây gút hơn thịt."
    },
    {
      "name": "Măng (Măng tươi, măng khô)",
      "status": "red",
      "reason": "Làm tăng acid uric máu rất nhanh. Người bị Gout nên tuyệt đối tránh."
    },
    {
      "name": "Giá đỗ / Nấm",
      "status": "yellow",
      "reason": "Tốc độ tăng trưởng nhanh nên lượng purin cao hơn rau thường. Ăn vừa phải."
    },
    {
      "name": "Dưa muối / Cà pháo / Kim chi",
      "status": "red",
      "reason": "Nhiều muối (hại Thận), men chua và cay (hại Dạ dày/Trào ngược)."
    },
    {
      "name": "Rau muống",
      "status": "yellow",
      "reason": "Có thể gây đau nhức khớp với một số người Gout. Nên theo dõi phản ứng."
    },
    {
      "name": "Rau cải xanh / Cải ngọt / Súp lơ",
      "status": "green",
      "reason": "Giàu kiềm, giúp đào thải acid uric qua nước tiểu. Rất tốt."
    },
    {
      "name": "Bí xanh / Bí đỏ / Mướp",
      "status": "green",
      "reason": "Tính mát, lợi tiểu (tốt cho Thận/Gout), dễ tiêu hóa (tốt cho Dạ dày)."
    },
    {
      "name": "Cơm trắng",
      "status": "yellow",
      "reason": "Chỉ số đường huyết cao, gan chuyển hóa mệt. Ăn vừa đủ no."
    },
    {
      "name": "Gạo lứt / Yến mạch",
      "status": "green",
      "reason": "Tinh bột chậm, tốt cho gan và kiểm soát cân nặng."
    },
    {
      "name": "Xôi / Bánh chưng / Đồ nếp",
      "status": "red",
      "reason": "Gây nóng cổ, ợ chua (Trào ngược). Khó tiêu."
    },
    {
      "name": "Mì tôm / Thực phẩm đóng hộp",
      "status": "red",
      "reason": "Nhiều muối (hại Thận), dầu chiên đi chiên lại (hại Gan), nóng (hại Dạ dày)."
    },
    {
      "name": "Cam / Chanh / Bưởi chua",
      "status": "yellow",
      "reason": "Tốt cho Gout (Vitamin C) nhưng axit cao gây Trào ngược. Chỉ ăn lúc no, chọn quả ngọt."
    },
    {
      "name": "Chuối / Đu đủ chín",
      "status": "green",
      "reason": "Chuối trung hòa axit dạ dày. Đu đủ có enzyme hỗ trợ tiêu hóa."
    },
    {
      "name": "Dứa (Thơm)",
      "status": "yellow",
      "reason": "Nhiều axit hữu cơ gây rát dạ dày. Dù có enzyme Bromelain tốt cho khớp nhưng cần thận trọng."
    },
    {
      "name": "Ổi",
      "status": "green",
      "reason": "Vua Vitamin C, ít chua, tốt cho Gout. Nên bỏ hạt để tránh hại dạ dày."
    },
    {
      "name": "Rượu / Bia / Cồn",
      "status": "red",
      "reason": "CẤM KỴ TUYỆT ĐỐI. Ngăn thận thải Acid Uric, phá hủy tế bào gan, kích ứng dạ dày."
    },
    {
      "name": "Nước ngọt có gas",
      "status": "red",
      "reason": "Đường Fructose làm tăng Acid Uric nhanh hơn cả thịt. Gas gây chướng bụng."
    },
    {
      "name": "Cà phê",
      "status": "yellow",
      "reason": "Tốt cho gan nhưng caffeine gây kích ứng dạ dày, trào ngược. Uống pha loãng sau ăn sáng."
    },
    {
      "name": "Trà xanh / Trà atiso",
      "status": "green",
      "reason": "Atiso mát gan, lợi tiểu, thải độc tốt cho thận và gout."
    },
    {
      "name": "Sữa tươi không đường (ít béo)",
      "status": "green",
      "reason": "Ít purin, giảm nồng độ acid uric. Chọn loại tách béo để tốt cho gan."
    },
    {
      "name": "Canh cua rau đay",
      "status": "yellow",
      "reason": "Cua đồng nhiều purin hơn thịt lợn. Ăn ít nước cái thì được."
    },
    {
      "name": "Phở bò / Bún bò",
      "status": "yellow",
      "reason": "Nước dùng hầm xương rất nhiều purin hòa tan. Nên ăn ít nước, nhiều rau, thịt nạc."
    }
  ],
  "lifestyle_tips": {
    "morning": "Uống 1 cốc nước ấm sau khi ngủ dậy (tốt cho Thận/Ruột). Tập nhẹ nhàng.",
    "eating": "Ăn chậm, nhai kỹ (giảm tải cho Dạ dày). Chia 5 bữa nhỏ thay vì 3 bữa lớn.",
    "evening": "Kết thúc bữa ăn trước 19h30. Kê cao đầu giường 15-20cm khi ngủ (chống Trào ngược).",
    "exercise": "Đi bộ 30p/ngày. Tránh vận động mạnh ngay sau ăn."
  },
  "meal_logs": [
    {
      "date": "2025-11-19",
      "content": "Cơm + Ức gà luộc + Rau cải.",
      "calories": 450,
      "evaluation": "Tốt. Đạm sạch, nhiều xơ."
    }
  ]
}
