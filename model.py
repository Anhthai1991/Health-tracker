import google.generativeai as genai

# Thay API KEY của bạn vào đây
genai.configure(api_key="YOUR_API_KEY_HERE")

print("Danh sách các mô hình hiện có:")
for m in genai.list_models():
    if 'generateContent' in m.supported_generation_methods:
        print(f"- Tên: {m.name}")
        print(f"  Mô tả: {m.description}")
        print("-" * 20)