1. Done

- Fix window storage bên near-api-js.
- Trạng thái hiện tại là phải xoá .next thì mới chạy lại được

2. Done

- Background màu xanh ở giao diện load bị nặng, và chậm.

3. Done

- Sửa các nút bên giao diện near connect...

4. Done

- Lỗi provider next-dev.js:41 Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?

5.

- Refactor discord.js lên midleware của nextjs

6.

- Hiển thị discord username lên ui
- Làm sẵn một hàm post tới một link với đường dẫn là :http://example.com/connect, dạng post với body là {"near_wallet: "", "discord_id": ""}. Hàm này được trigger sau khi cả near và discord đã connect xong
