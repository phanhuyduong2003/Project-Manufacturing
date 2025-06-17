# FOLDER_STRUCTURE.md

## Mục đích
File này mô tả cấu trúc thư mục của dự án và chức năng của từng phần, giúp thành viên mới dễ dàng nắm bắt và phát triển dự án.

---

## Cấu trúc thư mục chính

```
project-manufacturing/
│
├── public/                # Chứa các file tĩnh (ảnh, font, favicon, ...)
│   └── vite.svg           # Ví dụ về file ảnh tĩnh
│
├── src/                   # Mã nguồn chính của ứng dụng
│   ├── api/               # Cấu hình và các hàm gọi API (axios, ...)
│   ├── assets/            # Tài nguyên tĩnh: fonts, icons, images, styles
│   │   ├── fonts/         # Font chữ sử dụng trong dự án
│   │   ├── icons/         # Icon SVG hoặc PNG
│   │   ├── images/        # Hình ảnh sử dụng trong dự án
│   │   └── styles/        # Các file SCSS tổng hợp, biến, mixin, ...
│   ├── components/        # Các component dùng chung trong toàn dự án
│   ├── config/            # Các file cấu hình (theme, đường dẫn, ...)
│   ├── layouts/           # Các layout tổng thể (ví dụ: DefaultLayout)
│   ├── pages/             # Các trang chính của ứng dụng
│   │   ├── home/          # Trang Home, có thể có style riêng
│   │   └── index.ts       # Điểm vào của các trang
│   ├── redux/             # Cấu hình Redux, store, hook, slice
│   ├── routes/            # Định nghĩa các route của ứng dụng
│   └── types/             # Định nghĩa các kiểu dữ liệu TypeScript
│
├── index.html             # File HTML chính
├── package.json           # Thông tin dự án & dependencies
├── tsconfig*.json         # Cấu hình TypeScript
├── vite.config.ts         # Cấu hình Vite
├── README.md              # Hướng dẫn tổng quan dự án
└── FOLDER_STRUCTURE.md    # (File này) Mô tả cấu trúc thư mục
```

---

## Ghi chú
- Mỗi thư mục nên có file `README.md` riêng nếu có nhiều chức năng/phân nhánh phức tạp.
- Đặt tên file, thư mục rõ ràng, nhất quán.
- Có thể mở rộng cấu trúc khi dự án phát triển.

---

Nếu có thắc mắc về bất kỳ thư mục hoặc file nào, hãy tham khảo file này hoặc liên hệ người quản lý dự án.
