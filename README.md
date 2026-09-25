# HỆ THỐNG THEO DÕI THỰC HIỆN NGHỊ QUYẾT SỐ 57-NQ/TW
### ĐẢNG BỘ XÃ CÔNG HẢI — BAN CHỈ ĐẠO 57
> **Cơ quan Thường trực:** Phòng Văn hoá - Xã hội  
> **Cơ quan Tổng hợp Đảng vụ:** Văn phòng Đảng uỷ  
> **Repository:** [hoangvietconghai/100day_dashboard](https://github.com/hoangvietconghai/100day_dashboard)

---

## 📌 MỤC LỤC
1. [Giới thiệu tổng quan](#1-giới-thiệu-tổng-quan)
2. [Căn cứ chính trị & Pháp lý](#2-căn-cứ-chính-trị--pháp-lý)
3. [Kiến trúc nghiệp vụ & Hai phân hệ chính](#3-kiến-trúc-nghiệp-vụ--hai-phân-hệ-chính)
   - [Phân hệ 1: Bảng tiêu chí Quy định 11-QĐ/TU (Đánh giá cả năm 2026)](#31-phân-hệ-1-bảng-tiêu-chí-quy-định-11-qđtu)
   - [Phân hệ 2: Kế hoạch 04-KH/BCĐ (Chiến dịch 100 ngày làm việc)](#32-phân-hệ-2-kế-hoạch-04-khbcđ-chiến-dịch-100-ngày)
4. [Cơ cấu 8 cơ quan, đơn vị cấp xã](#4-cơ-cấu-8-cơ-quan-đơn-vị-cấp-xã)
5. [Tính năng kỹ thuật nổi bật](#5-tính-năng-kỹ-thuật-nổi-bật)
6. [Cấu trúc mã nguồn & Thư mục](#6-cấu-trúc-mã-nguồn--thư-mục)
7. [Hướng dẫn cài đặt & Triển khai](#7-hướng-dẫn-cài-đặt--triển-khai)
8. [Cấu hình Cơ sở dữ liệu Supabase](#8-cấu-hình-cơ-sở-dữ-liệu-supabase)
9. [Cơ chế Phân quyền & Đổi mật khẩu Super Admin](#9-cơ-chế-phân-quyền--đổi-mật-khẩu-super-admin)
10. [Hướng dẫn sử dụng & Quy trình vận hành](#10-hướng-dẫn-sử-dụng--quy-trình-vận-hành)

---

## 1. Giới thiệu tổng quan

Hệ thống theo dõi thực hiện Nghị quyết số 57-NQ/TW là ứng dụng Dashboard điều hành số chuyên trách của **Ban Chỉ đạo 57 Đảng bộ Xã Công Hải**. Hệ thống được xây dựng nhằm mục tiêu:
- Số hóa toàn diện công tác chỉ đạo, giám sát tiến độ thực hiện chuyển đổi số và phát triển khoa học - công nghệ tại cơ sở.
- Chuẩn hóa việc tự chấm điểm, đánh giá và lưu trữ minh chứng phục vụ kiểm tra, xếp loại định kỳ theo Bộ tiêu chí của Tỉnh ủy.
- Giám sát từng ngày chiến dịch đột phá 100 ngày xử lý dứt điểm các "điểm nghẽn" chuyển đổi số theo phương châm: *"Rõ người, rõ việc, rõ trách nhiệm, rõ thẩm quyền, rõ thời gian, rõ kết quả"*.

---

## 2. Căn cứ chính trị & Pháp lý

Hệ thống được thiết kế bám sát tuyệt đối hệ thống văn bản chỉ đạo của Trung ương, Tỉnh ủy Khánh Hòa và Đảng ủy xã Công Hải:
- **Nghị quyết số 57-NQ/TW** ngày 22/12/2024 của Bộ Chính trị về đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia.
- **Quy định số 11-QĐ/TU** của Ban Thường vụ Tỉnh ủy Khánh Hòa về Bộ tiêu chí đánh giá, xếp loại kết quả thực hiện Nghị quyết số 57-NQ/TW hằng năm đối với cấp huyện, cấp xã.
- **Kế hoạch số 05-KH/BCĐTW** ngày 11/7/2026 của Ban Chỉ đạo Trung ương về hành động 100 ngày xử lý các điểm nghẽn về chuyển đổi số trong hệ thống chính trị.
- **Kế hoạch số 11-KH/BCĐ** ngày 28/7/2026 của Ban Chỉ đạo tỉnh Khánh Hòa triển khai Kế hoạch hành động 100 ngày của tỉnh.
- **Kế hoạch số 04-KH/BCĐ** của Ban Chỉ đạo 57 Đảng bộ Xã Công Hải về 100 ngày làm việc xử lý điểm nghẽn chuyển đổi số tại địa bàn xã.

---

## 3. Kiến trúc nghiệp vụ & Hai phân hệ chính

Giao diện ứng dụng được tách biệt rõ ràng thành hai phân hệ điều hành độc lập thông qua thanh chuyển đổi trạng thái (*Board Switcher*):

### 3.1. Phân hệ 1: Bảng tiêu chí Quy định 11-QĐ/TU
Lấy **Quy định 11-QĐ/TU** làm chuẩn tối thượng để đánh giá, xếp hạng Đảng bộ và chính quyền xã năm 2026:
- **Số lượng tiêu chí:** 28 tiêu chí chuẩn mực cấp xã (Phụ lục 3).
- **Phân nhóm tiêu chí:**
  - **Nhóm I: Về chỉ đạo, điều hành** (10 điểm chuẩn - 5 tiêu chí: ban hành kế hoạch, kiểm tra giám sát, xử lý vấn đề sau thanh tra, chế độ báo cáo định kỳ, sáng kiến đổi mới).
  - **Nhóm II: Kết quả thực hiện nhiệm vụ** (75 điểm chuẩn - 18 tiêu chí: hoàn thành nhiệm vụ Ban Chỉ đạo/UBND tỉnh giao, nền tảng số dùng chung, hạ tầng mạng, chữ ký số, an toàn thông tin cấp độ 2, số hóa hồ sơ thủ tục hành chính, dịch vụ công trực tuyến toàn trình...).
  - **Nhóm IV: Điểm thưởng** (Tối đa +15 điểm - 3 tiêu chí: mô hình đột phá sáng tạo, về đích sớm kế hoạch 100 ngày, giải thưởng số).
  - **Nhóm V: Điểm trừ** (Trừ điểm khi có nhiệm vụ quá hạn nghiêm trọng, mất an toàn thông tin, vi phạm kỷ luật công vụ).
- **Công thức tính điểm & xếp loại tự động:**
  $$\text{Tổng điểm} = \min(85, \text{Điểm Nhóm I + II}) + \min(15, \text{Điểm Thưởng}) - |\text{Điểm Trừ}|$$
  - **Loại A (Hoàn thành xuất sắc):** $\ge 90$ điểm.
  - **Loại B (Hoàn thành tốt):** $75 \le \text{Điểm} < 90$.
  - **Loại C (Hoàn thành nhiệm vụ):** $50 \le \text{Điểm} < 75$.
  - **Loại D (Không hoàn thành nhiệm vụ):** $< 50$ điểm.
- **Hạn chót tự đánh giá:** Ngày **15/12/2026** (có đồng hồ đếm ngược số ngày còn lại theo thời gian thực).
- **Quản trị minh chứng:** Mỗi tiêu chí cho phép gắn trực tiếp đường dẫn tài liệu minh chứng (Google Drive, văn bản điều hành, quyết định) kèm theo nội dung giải trình chi tiết.

### 3.2. Phân hệ 2: Kế hoạch 04-KH/BCĐ (Chiến dịch 100 ngày)
Theo dõi chiến dịch cao điểm hành động 100 ngày làm việc:
- **Khung thời gian:** Từ **10/07/2026** đến **30/11/2026** (tính chính xác 100 ngày làm việc, loại trừ ngày nghỉ cuối tuần).
- **Số lượng:** 37 nhiệm vụ trọng tâm chia làm 10 nhóm lĩnh vực:
  1. *Nhóm I:* Thể chế và chính sách.
  2. *Nhóm II:* Hạ tầng số và trang thiết bị.
  3. *Nhóm III:* Dữ liệu số và chuẩn hóa CSDL.
  4. *Nhóm IV:* Nền tảng số dùng chung.
  5. *Nhóm V:* Dịch vụ công trực tuyến và một cửa.
  6. *Nhóm VI:* Kinh tế số và thanh toán không tiền mặt.
  7. *Nhóm VII:* Xã hội số, tổ công nghệ số cộng đồng.
  8. *Nhóm VIII:* Nguồn nhân lực và đào tạo kỹ năng số.
  9. *Nhóm IX:* Tài chính và giải ngân vốn công nghệ.
  10. *Nhóm X:* Kỷ luật thực thi và tuân thủ.
- **Theo dõi tiến độ thời gian thực:**
  - Tự động đếm số ngày đã qua và số ngày còn lại của chiến dịch.
  - Thanh tiến độ hiển thị trực quan tỷ lệ phần trăm thời gian chiến dịch.
  - 3 trạng thái nhiệm vụ: **🔶 Đang thực hiện**, **✅ Hoàn thành**, **🔴 Chậm tiến độ** (tự động phát hiện chậm tiến độ dựa trên hạn chót `deadline` nếu chưa đánh dấu hoàn thành).

---

## 4. Cơ cấu 8 cơ quan, đơn vị cấp xã

Hệ thống quy định chuẩn hóa danh xưng đầy đủ của 8 đơn vị trực thuộc hệ thống chính trị cấp xã tham gia vận hành và chịu trách nhiệm:

| Mã định danh | Tên cơ quan / Đơn vị | Vai trò chủ đạo trong hệ thống |
| :--- | :--- | :--- |
| `phong_vh_xh` | **Phòng Văn hoá - Xã hội** | Cơ quan Thường trực Ban Chỉ đạo 57; chủ trì thể chế, báo cáo, hạ tầng, xã hội số |
| `vp_dang_uy` | **Văn phòng Đảng uỷ** | Đơn vị tổng hợp khối Đảng; theo dõi các chỉ tiêu công tác Đảng, đảng viên số |
| `ban_xd_dang` | **Ban Xây dựng Đảng** | Tuyên truyền, định hướng chuyển đổi số, bồi dưỡng cán bộ, xây dựng mô hình điểm |
| `ubkt_dang_uy` | **Uỷ ban Kiểm tra Đảng uỷ** | Kiểm tra, giám sát thực thi công vụ, giải quyết điểm nghẽn, xử lý vi phạm kỷ luật |
| `phong_kinh_te` | **Phòng Kinh tế** | Phát triển kinh tế số, thương mại điện tử, nông nghiệp số, chuyển đổi số doanh nghiệp |
| `tt_dv_snc` | **Trung tâm Dịch vụ, Sự nghiệp công** | Vận hành dịch vụ số công ích, môi trường, y tế, giáo dục trên địa bàn |
| `tt_hc_cong` | **Trung tâm Hành chính công** | Vận hành bộ phận Một cửa, dịch vụ công trực tuyến toàn trình, nền tảng số công dân |
| `vp_hdnd_ubnd` | **Văn phòng HĐND-UBND xã** | Điều hành khối chính quyền; bảo đảm an toàn thông tin, trang thiết bị máy móc |

---

## 5. Tính năng kỹ thuật nổi bật

- **Kiến trúc Vanilla Web tinh gọn:** Không sử dụng các framework nặng nề (React/Vue/Angular), ứng dụng được viết bằng HTML5, CSS3 hiện đại và JavaScript thuần (ES6+), tải trang tức thì, hiệu năng tối ưu trên mọi trình duyệt.
- **Đồng bộ đám mây Realtime qua Supabase:** Tích hợp trực tiếp với Supabase Client (PostgreSQL), kết nối qua WebSocket lắng nghe sự kiện thay đổi dữ liệu từ bảng `task_states` và `qd11_states`, tự động cập nhật giao diện mà không cần reload trang.
- **Khả năng hoạt động Offline-First:** Tự động lưu cache trạng thái vào `localStorage`. Khi mất mạng, người dùng vẫn xem và làm việc bình thường; khi có kết nối trở lại, hệ thống sẽ tự động đồng bộ lên máy chủ.
- **Hệ thống lọc & tìm kiếm thông minh:** Tìm kiếm đa trường (mã tiêu chí, tên nhiệm vụ, sản phẩm đầu ra, đơn vị phối hợp) kết hợp debounce mượt mà; hỗ trợ lọc theo nhóm, trạng thái và cơ quan phụ trách.
- **Bảo mật phân quyền Super Admin:** Sử dụng thuật toán băm SHA-256 để bảo vệ quyền chỉnh sửa. Khách và cán bộ bình thường chỉ có quyền tra cứu (read-only); chỉ quản trị viên mới được sửa điểm, phân công đơn vị, cập nhật minh chứng.
- **Báo cáo in ấn chuyên nghiệp (Print Stylesheet):** Hỗ trợ xuất và in báo cáo theo chuẩn A4 hành chính của nhà nước, có chữ ký của Trưởng ban chỉ đạo và phân tách bảng biểu sắc nét.

---

## 6. Cấu trúc mã nguồn & Thư mục

```text
100day_dashboard/
├── index.html                   # Giao diện chính (Header, Bộ chuyển Tab, 2 Bảng dữ liệu, Modal)
├── app.js                       # Logic ứng dụng, dữ liệu khởi tạo, Supabase Realtime, tính điểm
├── style.css                    # Toàn bộ mã định kiểu CSS, Dark/Light tokens, Print styles
├── README.md                    # Tài liệu hướng dẫn kỹ thuật và vận hành
└── Văn bản chỉ đạo/             # Hồ sơ, văn bản pháp lý căn cứ
    ├── Kế hoạch 100 ngày làm việc của cấp tỉnh.md
    ├── Kế hoạch 100 ngày làm việc của cấp tỉnh.pdf
    ├── Kế hoạch 100 ngày làm việc của xã.pdf
    ├── Phụ lục Quy định 11 - Bảng tiêu chí cấp tỉnh, xã hàng tháng.pdf
    ├── Phụ lục Quy định 11 - Bảng tiêu chí cấp xã.pdf
    └── Quy định 11 Tỉnh uỷ.pdf
```

---

## 7. Hướng dẫn cài đặt & Triển khai

### 7.1. Chạy cục bộ (Local Development)
Ứng dụng là trang web tĩnh nên không cần cài đặt `node_modules`. Bạn có thể chạy bằng bất kỳ HTTP Server nào:

- **Cách 1: Sử dụng tiện ích Live Server trong VS Code:**
  Nhấp chuột phải vào file `index.html` và chọn **"Open with Live Server"**.
- **Cách 2: Sử dụng Python:**
  ```bash
  # Python 3
  python -m http.server 8080
  ```
  Sau đó mở trình duyệt tại: `http://localhost:8080`
- **Cách 3: Sử dụng Node.js `npx serve`:**
  ```bash
  npx serve .
  ```

### 7.2. Triển khai lên Production (GitHub Pages / Vercel / Netlify)
- **GitHub Pages:** Vào mục **Settings** của repository trên GitHub -> **Pages** -> Chọn nhánh `main` và thư mục `/ (root)` -> Bấm **Save**.
- **Vercel / Cloudflare Pages / Netlify:** Import repository và để cấu hình Build command trống, Publish directory là `./`.

---

## 8. Cấu hình Cơ sở dữ liệu Supabase

Hệ thống sử dụng **Supabase** để lưu trữ và đồng bộ trạng thái. Để tạo môi trường database tương thích, hãy truy cập vào mục **SQL Editor** trong bảng điều khiển Supabase và chạy đoạn mã sau:

```sql
-- 1. Bảng lưu trạng thái 37 nhiệm vụ Kế hoạch 100 ngày
CREATE TABLE IF NOT EXISTS public.task_states (
    task_id INTEGER PRIMARY KEY,
    status TEXT NOT NULL DEFAULT 'in_progress',
    note TEXT DEFAULT '',
    owner_unit TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 2. Bảng lưu trạng thái 28 tiêu chí Quy định 11
CREATE TABLE IF NOT EXISTS public.qd11_states (
    id TEXT PRIMARY KEY,
    cycle_type TEXT DEFAULT 'annual',
    period TEXT DEFAULT '2026',
    self_score NUMERIC(5,2) DEFAULT 0,
    evidence_url TEXT DEFAULT '',
    note TEXT DEFAULT '',
    owner_unit TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 3. Kích hoạt Row Level Security (RLS) và cấp quyền truy cập
ALTER TABLE public.task_states ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.qd11_states ENABLE ROW LEVEL SECURITY;

-- Cho phép đọc công khai
CREATE POLICY "Public Read Task States" ON public.task_states FOR SELECT USING (true);
CREATE POLICY "Public Read QD11 States" ON public.qd11_states FOR SELECT USING (true);

-- Cho phép chèn và sửa (có thể siết qua Service Role hoặc Anon Key)
CREATE POLICY "Public Upsert Task States" ON public.task_states FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Upsert QD11 States" ON public.qd11_states FOR ALL USING (true) WITH CHECK (true);

-- 4. Kích hoạt tính năng Realtime cho cả 2 bảng
ALTER PUBLICATION supabase_realtime ADD TABLE public.task_states;
ALTER PUBLICATION supabase_realtime ADD TABLE public.qd11_states;
```

---

## 9. Cơ chế Phân quyền & Đổi mật khẩu Super Admin

### 9.1. Cơ chế xác thực
- Mật khẩu đăng nhập được mã hóa bằng thuật toán `SHA-256` ngay tại phía máy khách (Client-side) qua hàm `crypto.subtle.digest`.
- Khi người dùng nhập mật khẩu, mã băm sẽ được so sánh với chuỗi hằng số `ADMIN_PASSWORD_HASH` trong `app.js`.

### 9.2. Hướng dẫn đổi mật khẩu Super Admin
Nếu muốn thay đổi mật khẩu quản trị:
1. Mở Console của trình duyệt (F12) và chạy hàm sau để lấy chuỗi băm của mật khẩu mới:
   ```javascript
   async function getHash(pw) {
       const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pw));
       return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
   }
   await getHash("MatKhauMoiCuaBan");
   ```
2. Mở file [app.js](file:///d:/Chuyên%20đề/Bảng%20theo%20dõi%20tiến%20độ/app.js) và thay thế giá trị tại dòng 771:
   ```javascript
   const ADMIN_PASSWORD_HASH = '<chuỗi_hash_vừa_tạo>';
   ```
3. Lưu file và commit lên Git.

---

## 10. Hướng dẫn sử dụng & Quy trình vận hành

### 10.1. Dành cho Cán bộ & Nhân dân (Chế độ xem)
- Xem bảng tổng hợp điểm tự chấm và xếp loại dự kiến của xã trên Bảng Quy định 11.
- Theo dõi tiến độ từng nhiệm vụ theo từng tuần, từng tháng trên Bảng Kế hoạch 100 ngày.
- Bấm vào nút **"Minh chứng"** để mở xem hồ sơ chứng minh kết quả trên Google Drive hoặc cổng văn bản.
- Bấm **"Xuất báo cáo"** -> Chọn loại báo cáo cần in -> Bấm **"In báo cáo"** để tạo bản in PDF.

### 10.2. Dành cho Cơ quan Thường trực & Lãnh đạo Ban Chỉ đạo (Chế độ Quản trị)
1. Bấm nút **"Đăng nhập"** ở góc phải thanh tiêu đề.
2. Nhập mật khẩu Super Admin và xác nhận. Nút đăng nhập sẽ chuyển sang trạng thái xanh **"Super Admin"**.
3. **Trên Bảng Quy định 11:**
   - Nhấp vào biểu tượng chỉnh sửa (cây bút) tại từng dòng tiêu chí để cập nhật: nội dung tiêu chí, điểm chuẩn, điểm tự chấm, đường dẫn minh chứng và giải trình.
   - Thay đổi nhanh đơn vị phụ trách trực tiếp trên dropdown cơ quan chủ trì.
4. **Trên Bảng Kế hoạch 100 ngày:**
   - Thay đổi nhanh trạng thái thực hiện (`🔶 Đang thực hiện`, `✅ Hoàn thành`, `🔴 Chậm tiến độ`).
   - Nhấp vào nút **"Ghi chú"** để cập nhật sản phẩm đầu ra, thời hạn, ghi chú giải trình chi tiết.
   - Phân công lại cơ quan chủ trì nếu có sự điều chỉnh từ Ban Chỉ đạo.
5. Khi hoàn tất công việc, bấm vào nút **"Super Admin"** để đăng xuất an toàn.

---

*Hệ thống được xây dựng và duy trì bởi Ban Chỉ đạo 57 Đảng bộ Xã Công Hải — Phục vụ công cuộc chuyển đổi số toàn diện và bền vững.*
