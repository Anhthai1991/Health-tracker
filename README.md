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