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
