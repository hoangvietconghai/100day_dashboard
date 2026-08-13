// ===== DATA: 32 Nhiệm vụ trọng tâm =====
const TASKS_DATA = [
    // I. NHÓM THỂ CHẾ, CHỈ ĐẠO, ĐIỀU HÀNH
    {
        id: 1, group: "I", groupName: "Thể chế, chỉ đạo",
        name: "Rà soát các văn bản chỉ đạo, điều hành của cấp trên chưa được cụ thể hoá tại địa phương",
        owner: "Văn phòng Đảng uỷ", partner: "Ban Chỉ đạo 57 xã",
        output: "Danh mục các văn bản chưa được cụ thể hoá",
        deadline: "2026-08-15"
    },
    {
        id: 2, group: "I", groupName: "Thể chế, chỉ đạo",
        name: "Cụ thể hoá các chủ trương, chính sách, ban hành các văn bản triển khai thực hiện các nhiệm vụ của cấp trên (nếu thiếu sau rà soát)",
        owner: "Ban Chỉ đạo 57 xã", partner: "Các cơ quan, đơn vị",
        output: "Văn bản",
        deadline: "2026-08-30"
    },
    // II. NHÓM HẠ TẦNG SỐ
    {
        id: 3, group: "II", groupName: "Hạ tầng số",
        name: "Triển khai thực hiện Quy chế về tổ chức, quản lý, sử dụng và bảo vệ hệ thống mạng máy tính của Đảng",
        owner: "Văn phòng Đảng uỷ", partner: "Các cơ quan, đơn vị",
        output: "Văn bản",
        deadline: null, deadlineText: "20 ngày sau khi Tỉnh uỷ ban hành văn bản"
    },
    {
        id: 4, group: "II", groupName: "Hạ tầng số",
        name: "Rà soát, xử lý các vùng chưa phủ cáp quang băng rộng cố định, các vùng lõm sóng, thiếu điện phục vụ chuyển đổi số",
        owner: "UBND xã", partner: "Các doanh nghiệp viễn thông, điện lực",
        output: "100% thôn có cáp quang băng rộng; không có khu vực dân cư bị lõm sóng, thiếu điện",
        deadline: "2026-11-30"
    },
    {
        id: 5, group: "II", groupName: "Hạ tầng số",
        name: "Rà soát, thống kê nhu cầu đầu tư, mua sắm, nâng cấp trang thiết bị, phần mềm phục vụ công tác chuyển đổi số",
        owner: "UBND xã", partner: "Các cơ quan, đơn vị",
        output: "Danh mục nhu cầu đầu tư, mua sắm, nâng cấp trang thiết bị, phần mềm",
        deadline: "2026-08-30"
    },
    {
        id: 6, group: "II", groupName: "Hạ tầng số",
        name: "Phân bổ kinh phí mua sắm, nâng cấp trang thiết bị; hoàn thành việc mua sắm, nâng cấp trang thiết bị, phần mềm",
        owner: "UBND xã; VPĐU xã", partner: "Phòng Kinh tế",
        output: "Các cơ quan, đơn vị được trang bị đầy đủ trang thiết bị, phần mềm",
        deadline: "2026-11-30"
    },
    {
        id: 7, group: "II", groupName: "Hạ tầng số",
        name: "Rà soát, phê duyệt cấp độ an toàn 100% hệ thống thông tin của xã; cập nhật dữ liệu phục vụ Bản đồ cấp độ an ninh mạng quốc gia",
        owner: "UBND xã; VPĐU xã", partner: "Các cơ quan, đơn vị",
        output: "100% hệ thống có hồ sơ cấp độ được phê duyệt, cập nhật lên bảng điều hành",
        deadline: "2026-09-30"
    },
    // III. DỮ LIỆU SỐ
    {
        id: 8, group: "III", groupName: "Dữ liệu số",
        name: "Chuẩn hóa, làm sạch, đối soát dữ liệu tổ chức đảng, đảng viên toàn đảng bộ; bảo đảm dữ liệu phục vụ các hệ thống dùng chung",
        owner: "Ban Xây dựng đảng", partner: "Các tổ chức Đảng",
        output: "Tối thiểu 98% dữ liệu được chuẩn hoá, đồng bộ",
        deadline: "2026-11-30"
    },
    {
        id: 9, group: "III", groupName: "Dữ liệu số",
        name: "Chuẩn hóa, đối soát, làm sạch dữ liệu thuộc phạm vi, thẩm quyền của xã phục vụ hoàn thiện 12 CSDL quốc gia",
        owner: "UBND xã", partner: "",
        output: "Tối thiểu 80% dữ liệu đủ điều kiện được làm sạch, đồng bộ",
        deadline: "2026-11-30"
    },
    {
        id: 10, group: "III", groupName: "Dữ liệu số",
        name: "Hoàn thiện CSDL cán bộ, công chức, viên chức \"đúng, đủ, sạch, sống, thống nhất, dùng chung\", kết nối CSDL quốc gia về dân cư",
        owner: "UBND xã", partner: "Các cơ quan, đơn vị",
        output: "100% hồ sơ CBCCVC được chuẩn hóa",
        deadline: "2026-11-30"
    },
    {
        id: 11, group: "III", groupName: "Dữ liệu số",
        name: "Chuẩn hóa, làm sạch dữ liệu đoàn viên, hội viên, tổ chức cơ sở, giám sát - phản biện, phản ánh kiến nghị của Nhân dân",
        owner: "Uỷ ban MTTQ VN xã", partner: "Các cơ quan, đơn vị liên quan",
        output: "Dữ liệu được làm sạch",
        deadline: "2026-11-30"
    },
    // IV. NỀN TẢNG SỐ
    {
        id: 12, group: "IV", groupName: "Nền tảng số",
        name: "Vận hành ổn định, thống nhất Hệ thống thông tin điều hành tác nghiệp trong các cơ quan Đảng; ký số văn bản toàn trình",
        owner: "Văn phòng Đảng uỷ", partner: "Các cơ quan, khối Đảng",
        output: "100% văn bản được ký số, ban hành toàn trình trên hệ thống ĐHTN",
        deadline: "2026-11-30"
    },
    {
        id: 13, group: "IV", groupName: "Nền tảng số",
        name: "Hệ thống thông tin giải quyết TTHC của địa phương hoạt động thống nhất, thông suốt, ổn định",
        owner: "UBND xã", partner: "",
        output: "Tỷ lệ hồ sơ trực tuyến đạt 98%",
        deadline: "2026-11-30"
    },
    {
        id: 14, group: "IV", groupName: "Nền tảng số",
        name: "Rà soát, chuẩn hoá, cập nhật đầy đủ thông tin Đảng viên, tổ chức Đảng trên hệ thống giải quyết TTHC của Đảng",
        owner: "Văn phòng Đảng uỷ", partner: "Ban Xây dựng Đảng, các tổ chức Đảng",
        output: "100% thông tin đảng viên, tổ chức đảng được chuẩn hoá trên hệ thống",
        deadline: "2026-08-30"
    },
    {
        id: 15, group: "IV", groupName: "Nền tảng số",
        name: "Các tổ chức Đảng, đảng viên sử dụng Sổ tay Đảng viên điện tử trong sinh hoạt chi bộ",
        owner: "Ban Xây dựng Đảng", partner: "Các tổ chức Đảng",
        output: "100% Đảng viên, tổ chức Đảng ứng dụng sổ tay Đảng viên điện tử",
        deadline: "2026-09-30"
    },
    // VI. KINH TẾ SỐ
    {
        id: 16, group: "VI", groupName: "Kinh tế số",
        name: "Phối hợp Sở Công thương thí điểm CSDL tập trung về thương mại điện tử",
        owner: "UBND xã", partner: "Các cơ quan, đơn vị",
        output: "Cung cấp dữ liệu theo yêu cầu",
        deadline: "2026-09-30"
    },
    {
        id: 17, group: "VI", groupName: "Kinh tế số",
        name: "Xác định danh mục các sản phẩm đặc thù, thế mạnh của địa phương",
        owner: "UBND xã", partner: "Các doanh nghiệp, các thôn trên địa bàn",
        output: "Danh mục các sản phẩm đặc thù, thế mạnh của địa phương",
        deadline: "2026-09-15"
    },
    {
        id: 18, group: "VI", groupName: "Kinh tế số",
        name: "Các sản phẩm đặc thù của địa phương được đưa lên các nền tảng thương mại điện tử",
        owner: "UBND xã", partner: "Các doanh nghiệp trên địa bàn",
        output: "100% sản phẩm đặc thù được bán trên các nền tảng TMĐT",
        deadline: "2026-09-30"
    },
    {
        id: 19, group: "VI", groupName: "Kinh tế số",
        name: "Xây dựng Website \"Du lịch số trên nền tảng công nghệ thực tế ảo trên địa bàn xã Công Hải\". Số hóa các địa điểm du lịch, cảnh quan thiên nhiên và không gian văn hóa đồng bào Raglai",
        owner: "Văn phòng Đảng uỷ", partner: "UBND xã",
        output: "Số hoá ít nhất 30% địa điểm du lịch trên nền tảng thực tế 360, thực tế ảo",
        deadline: "2026-11-30"
    },
    {
        id: 20, group: "VI", groupName: "Kinh tế số",
        name: "Phổ cập thanh toán không dùng tiền mặt trong các hoạt động giao thương",
        owner: "UBND xã", partner: "Các doanh nghiệp, hộ kinh doanh, tiểu thương",
        output: "80% các cửa hàng, hộ kinh doanh cố định có mã thanh toán điện tử",
        deadline: "2026-11-30"
    },
    {
        id: 21, group: "VI", groupName: "Kinh tế số",
        name: "Thực hiện chi trả trợ cấp không dùng tiền mặt trên địa bàn xã",
        owner: "UBND xã", partner: "Các cơ quan, đơn vị liên quan",
        output: "97% khoản trợ cấp không dùng tiền mặt",
        deadline: "2026-11-30"
    },
    // VII. XÃ HỘI SỐ
    {
        id: 22, group: "VII", groupName: "Xã hội số",
        name: "Triển khai thực hiện Học bạ điện tử",
        owner: "UBND xã", partner: "Các trường học trên địa bàn",
        output: "100% các trường học sử dụng Học bạ điện tử",
        deadline: "2026-11-30"
    },
    {
        id: 23, group: "VII", groupName: "Xã hội số",
        name: "Triển khai sổ sức khỏe điện tử tích hợp trên VNeID tại 100% cơ sở khám, chữa bệnh; chuẩn hóa, liên thông dữ liệu",
        owner: "UBND xã", partner: "Trạm y tế xã",
        output: "100% cơ sở KCB sử dụng Sổ sức khỏe điện tử ổn định",
        deadline: "2026-11-30"
    },
    {
        id: 24, group: "VII", groupName: "Xã hội số",
        name: "Triển khai sử dụng Cổng Mặt trận số 24/7",
        owner: "Uỷ ban MTTQ VN xã", partner: "Các tổ chức chính trị - xã hội",
        output: "100% phản ánh của người dân được theo dõi trạng thái xử lý",
        deadline: null, deadlineText: "Thực hiện thường xuyên"
    },
    {
        id: 25, group: "VII", groupName: "Xã hội số",
        name: "Tổ chức học tập, bồi dưỡng trên nền tảng Bình dân học vụ số (binhdanhocvuso.gov.vn)",
        owner: "UBND xã", partner: "Các cơ quan, đơn vị, các tổ chức Đảng",
        output: "100% cán bộ, công chức tham gia học tập trên nền tảng",
        deadline: null, deadlineText: "Thực hiện thường xuyên"
    },
    // VIII. NGUỒN NHÂN LỰC
    {
        id: 26, group: "VIII", groupName: "Nguồn nhân lực",
        name: "Tổ chức đào tạo, tập huấn, bồi dưỡng các nội dung về chuyển đổi số cho đội ngũ cán bộ, công chức, viên chức",
        owner: "UBND xã", partner: "Các cơ quan, đơn vị",
        output: "100% cán bộ, công chức được đào tạo, bồi dưỡng kỹ năng chuyển đổi số",
        deadline: "2026-11-30"
    },
    {
        id: 27, group: "VIII", groupName: "Nguồn nhân lực",
        name: "Đăng ký nhu cầu tuyển dụng ít nhất công chức chuyên trách CNTT tại các khối cơ quan",
        owner: "UBND xã", partner: "",
        output: "Bố trí ít nhất 01 công chức chuyên trách CNTT tại các khối cơ quan",
        deadline: "2026-11-30"
    },
    // IX. TÀI CHÍNH, GIẢI NGÂN
    {
        id: 28, group: "IX", groupName: "Tài chính, giải ngân",
        name: "Phân bổ và giải ngân nguồn vốn được cấp trên giao để phục vụ công tác chuyển đổi số, ứng dụng KHCN",
        owner: "UBND xã", partner: "Các cơ quan, đơn vị có liên quan",
        output: "100% nguồn vốn đầu tư chuyển đổi số, ứng dụng CNTT được giải ngân",
        deadline: "2026-11-30"
    },
    // X. KỶ LUẬT THỰC THI
    {
        id: 29, group: "X", groupName: "Kỷ luật thực thi",
        name: "Phối hợp vận hành bảng theo dõi tiến độ 100 ngày làm việc; công khai các nhiệm vụ chậm, cơ quan chậm",
        owner: "Văn phòng Đảng uỷ", partner: "Cơ quan TT Ban Chỉ đạo 57 xã",
        output: "Báo cáo tháng, bảng phân loại nhiệm vụ theo trạng thái; minh chứng",
        deadline: "2026-07-25", deadlineText: "Bắt đầu từ 25/7/2026"
    },
    {
        id: 30, group: "X", groupName: "Kỷ luật thực thi",
        name: "Tổng hợp, tham mưu báo cáo kết quả thực hiện Kế hoạch 100 ngày xử lý các điểm nghẽn về chuyển đổi số",
        owner: "Cơ quan TT BCĐ 57 xã", partner: "Các cơ quan, đơn vị có liên quan",
        output: "Báo cáo",
        deadline: null, deadlineText: "Theo đề nghị cấp trên"
    },
    {
        id: 31, group: "X", groupName: "Kỷ luật thực thi",
        name: "Tham mưu Trưởng ban BCĐ xã nhắc nhở, phê bình các cơ quan, đơn vị triển khai thực hiện nhiệm vụ chậm, muộn",
        owner: "Cơ quan TT BCĐ 57 xã", partner: "",
        output: "Văn bản phê bình",
        deadline: null, deadlineText: "Khi có nhiệm vụ chậm"
    },
    {
        id: 32, group: "X", groupName: "Kỷ luật thực thi",
        name: "Tham mưu Trưởng ban BCĐ xã khen thưởng các cá nhân, cơ quan, đơn vị triển khai thực hiện xuất sắc nhiệm vụ",
        owner: "Cơ quan TT BCĐ 57 xã", partner: "",
        output: "Quyết định khen thưởng",
        deadline: "2026-11-30"
    }
];

// Group order map
const GROUP_ORDER = ["I", "II", "III", "IV", "VI", "VII", "VIII", "IX", "X"];
const GROUP_NAMES = {
    "I": "Thể chế, chỉ đạo, điều hành",
    "II": "Hạ tầng số",
    "III": "Dữ liệu số",
    "IV": "Nền tảng số",
    "VI": "Kinh tế số",
    "VII": "Xã hội số",
    "VIII": "Nguồn nhân lực",
    "IX": "Tài chính, giải ngân",
    "X": "Kỷ luật thực thi"
};

const STATUS_LABELS = {
    in_progress: "Đang thực hiện",
    completed: "Hoàn thành",
    overdue: "Chậm tiến độ"
};

// ===== CAMPAIGN DATES =====
const CAMPAIGN_START = new Date(2026, 6, 10); // July 10, 2026
const CAMPAIGN_END = new Date(2026, 10, 30);  // November 30, 2026

// ===== SUPABASE CONFIG =====
const SUPABASE_URL = 'https://llxxbefotqfbpglsbnqb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxseHhiZWZvdHFmYnBnbHNibnFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1Nzk5NzAsImV4cCI6MjEwMjE1NTk3MH0.fDJoF03m1dzaIFgXuQcoQPZJwPEKDG2e5QY2KYUm6qc';

// ===== AUTH CONFIG =====
// SHA-256 hash of the admin password
const ADMIN_PASSWORD_HASH = 'de9a3388e74f6d73087ed9e17a0328eed12d8e078e4231b6ed57691a7fb4f5ee';
const AUTH_SESSION_KEY = 'tracker_100days_auth';
let isAdmin = false;

// ===== STATE =====
let taskStates = {}; // { id: { status, note } }
const STORAGE_KEY = "tracker_100days_conghhai";
let supabaseClient = null;
let isOnline = false;
let realtimeChannel = null;

// ===== AUTH FUNCTIONS =====
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function checkAuthSession() {
    try {
        const session = sessionStorage.getItem(AUTH_SESSION_KEY);
        if (session === 'authenticated') {
            isAdmin = true;
            updateAdminUI();
        }
    } catch (e) {
        // sessionStorage not available
    }
}

function setAuthSession(authenticated) {
    isAdmin = authenticated;
    try {
        if (authenticated) {
            sessionStorage.setItem(AUTH_SESSION_KEY, 'authenticated');
        } else {
            sessionStorage.removeItem(AUTH_SESSION_KEY);
        }
    } catch (e) {
        // sessionStorage not available
    }
    updateAdminUI();
}

function updateAdminUI() {
    const btn = document.getElementById('btn-admin');
    const btnText = document.getElementById('btn-admin-text');
    if (!btn) return;

    if (isAdmin) {
        btn.classList.add('unlocked');
        btnText.textContent = 'Đã đăng nhập';
        btn.title = 'Đang ở chế độ quản trị — nhấn để đăng xuất';
        // Update lock icon to unlock
        btn.querySelector('svg').innerHTML = '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>';
    } else {
        btn.classList.remove('unlocked');
        btnText.textContent = 'Đăng nhập';
        btn.title = 'Đăng nhập quản trị để cập nhật trạng thái';
        btn.querySelector('svg').innerHTML = '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>';
    }

    // Re-render tasks to update readonly state
    if (document.getElementById('tasks-tbody').children.length > 0) {
        renderTasks();
    }
}

function showAccessDenied() {
    showToast('Để cập nhật trạng thái, vui lòng liên hệ Đ/C Ngô Hoàng Việt - Văn phòng Đảng uỷ xã', 'warning', 4000);
}

// ===== SUPABASE INITIALIZATION =====
function initSupabase() {
    try {
        if (typeof window.supabase !== 'undefined' &&
            SUPABASE_URL !== 'https://YOUR_PROJECT_ID.supabase.co' &&
            SUPABASE_ANON_KEY !== 'YOUR_ANON_KEY') {
            supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            return true;
        }
    } catch (e) {
        console.warn("Không thể khởi tạo Supabase:", e);
    }
    return false;
}

// ===== CONNECTION BADGE =====
function setConnectionStatus(status) {
    const badge = document.getElementById("connection-badge");
    if (!badge) return;

    badge.classList.remove("online", "offline", "syncing");

    const dot = badge.querySelector(".connection-dot");
    const text = badge.querySelector(".connection-text");

    switch (status) {
        case "online":
            badge.classList.add("online");
            text.textContent = "Đã kết nối";
            badge.title = "Đang đồng bộ dữ liệu qua Supabase";
            isOnline = true;
            break;
        case "offline":
            badge.classList.add("offline");
            text.textContent = "Offline";
            badge.title = "Dữ liệu chỉ lưu trên trình duyệt này";
            isOnline = false;
            break;
        case "syncing":
            badge.classList.add("syncing");
            text.textContent = "Đang đồng bộ...";
            badge.title = "Đang đồng bộ dữ liệu...";
            break;
        case "local":
            badge.classList.add("offline");
            text.textContent = "localStorage";
            badge.title = "Chưa cấu hình Supabase — dữ liệu chỉ lưu trên trình duyệt này";
            isOnline = false;
            break;
    }
}

// ===== LOCAL STORAGE HELPERS =====
function loadFromLocalStorage() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            taskStates = JSON.parse(saved);
        }
    } catch (e) {
        console.warn("Không thể đọc localStorage:", e);
    }
}

function saveToLocalStorage() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(taskStates));
    } catch (e) {
        console.warn("Không thể ghi localStorage:", e);
    }
}

// ===== SUPABASE DATA OPERATIONS =====
async function loadFromSupabase() {
    if (!supabaseClient) return false;

    try {
        setConnectionStatus("syncing");
        const { data, error } = await supabaseClient
            .from('task_states')
            .select('*');

        if (error) {
            console.warn("Supabase read error:", error.message);
            setConnectionStatus("offline");
            return false;
        }

        if (data && data.length > 0) {
            data.forEach(row => {
                taskStates[row.task_id] = {
                    status: row.status,
                    note: row.note || ''
                };
            });
        }

        // Sync to localStorage as backup
        saveToLocalStorage();
        setConnectionStatus("online");
        return true;
    } catch (e) {
        console.warn("Supabase connection failed:", e);
        setConnectionStatus("offline");
        return false;
    }
}

async function saveToSupabase(taskId, status, note) {
    if (!supabaseClient || !isOnline) return false;

    try {
        const { error } = await supabaseClient
            .from('task_states')
            .upsert({
                task_id: taskId,
                status: status,
                note: note || '',
                updated_at: new Date().toISOString()
            }, { onConflict: 'task_id' });

        if (error) {
            console.warn("Supabase write error:", error.message);
            return false;
        }
        return true;
    } catch (e) {
        console.warn("Supabase save failed:", e);
        return false;
    }
}

// ===== REALTIME SUBSCRIPTION =====
function subscribeRealtime() {
    if (!supabaseClient) return;

    try {
        realtimeChannel = supabaseClient
            .channel('task-changes')
            .on('postgres_changes',
                { event: '*', schema: 'public', table: 'task_states' },
                (payload) => {
                    const row = payload.new;
                    if (row && row.task_id) {
                        const oldState = taskStates[row.task_id];
                        const newState = { status: row.status, note: row.note || '' };

                        // Only update if actually changed
                        if (!oldState || oldState.status !== newState.status || oldState.note !== newState.note) {
                            taskStates[row.task_id] = newState;
                            saveToLocalStorage();

                            // Refresh UI
                            renderTasks();
                            updateStats();
                            updateProgressRing();
                            updateGroupBars();

                            showToast(`Nhiệm vụ #${row.task_id} đã được cập nhật (đồng bộ)`);
                        }
                    }
                }
            )
            .subscribe((status) => {
                if (status === 'SUBSCRIBED') {
                    console.log("Realtime: đã kết nối");
                } else if (status === 'CHANNEL_ERROR') {
                    console.warn("Realtime: lỗi kênh");
                }
            });
    } catch (e) {
        console.warn("Realtime subscription failed:", e);
    }
}

// ===== UNIFIED STATE MANAGEMENT =====
async function loadState() {
    // Always load localStorage first (instant, offline-safe)
    loadFromLocalStorage();

    // Init missing tasks with default 'in_progress'
    TASKS_DATA.forEach(t => {
        if (!taskStates[t.id]) {
            taskStates[t.id] = { status: "in_progress", note: "" };
        } else if (taskStates[t.id].status === "not_started") {
            taskStates[t.id].status = "in_progress";
        }
    });

    // Try to load from Supabase (will override localStorage if successful)
    if (initSupabase()) {
        const supabaseOk = await loadFromSupabase();

        if (supabaseOk) {
            // Re-init missing tasks after Supabase load
            TASKS_DATA.forEach(t => {
                if (!taskStates[t.id]) {
                    taskStates[t.id] = { status: "in_progress", note: "" };
                }
            });

            // Subscribe to realtime changes
            subscribeRealtime();
        }
    } else {
        setConnectionStatus("local");
    }
}

async function saveTaskState(taskId, status, note) {
    // Always save to local state + localStorage
    taskStates[taskId] = { status, note };
    saveToLocalStorage();

    // Try to save to Supabase
    if (isOnline) {
        const saved = await saveToSupabase(taskId, status, note);
        if (!saved) {
            showToast("Lưu offline — sẽ đồng bộ khi có mạng");
        }
    }
}

function getTaskState(id) {
    return taskStates[id] || { status: "in_progress", note: "" };
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", async () => {
    checkAuthSession();
    await loadState();
    renderDate();
    renderTimeline();
    populateFilters();
    renderTasks();
    updateStats();
    updateProgressRing();
    updateGroupBars();
    setupEventListeners();
    addProgressGradient();

    // Listen for online/offline events
    window.addEventListener("online", async () => {
        if (supabaseClient) {
            setConnectionStatus("syncing");
            await syncLocalToSupabase();
            setConnectionStatus("online");
        }
    });

    window.addEventListener("offline", () => {
        if (supabaseClient) {
            setConnectionStatus("offline");
        }
    });
});

// Sync all local changes to Supabase when coming back online
async function syncLocalToSupabase() {
    if (!supabaseClient) return;

    const upsertData = [];
    TASKS_DATA.forEach(t => {
        const state = getTaskState(t.id);
        upsertData.push({
            task_id: t.id,
            status: state.status,
            note: state.note || '',
            updated_at: new Date().toISOString()
        });
    });

    try {
        const { error } = await supabaseClient
            .from('task_states')
            .upsert(upsertData, { onConflict: 'task_id' });

        if (error) {
            console.warn("Bulk sync error:", error.message);
        } else {
            showToast("Đã đồng bộ dữ liệu lên Supabase");
        }
    } catch (e) {
        console.warn("Sync failed:", e);
    }
}

// ===== DATE RENDERING =====
function renderDate() {
    const now = new Date();
    const opts = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    document.getElementById("current-date").textContent = now.toLocaleDateString("vi-VN", opts);
}

// Helper function to count working days (Mon-Fri) between two dates
function countWorkingDays(startDate, endDate) {
    if (startDate > endDate) return 0;
    let count = 0;
    let cur = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

    while (cur <= end) {
        const dayOfWeek = cur.getDay(); // 0 = Sun, 6 = Sat
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            count++;
        }
        cur.setDate(cur.getDate() + 1);
    }
    return count;
}

// ===== TIMELINE =====
function renderTimeline() {
    const now = new Date();
    const totalWorkingDays = 100; // Campaign target is 100 working days
    let elapsedWorkingDays = 0;
    if (now >= CAMPAIGN_START) {
        elapsedWorkingDays = countWorkingDays(CAMPAIGN_START, now);
    }
    const remainingWorkingDays = Math.max(0, totalWorkingDays - elapsedWorkingDays);
    const pct = Math.min(100, Math.max(0, (elapsedWorkingDays / totalWorkingDays) * 100));

    document.getElementById("days-elapsed").textContent = elapsedWorkingDays;
    document.getElementById("days-remaining").textContent = remainingWorkingDays;

    const progressBar = document.getElementById("timeline-progress");
    const marker = document.getElementById("timeline-marker");

    setTimeout(() => {
        progressBar.style.width = pct + "%";
        marker.style.left = pct + "%";
    }, 300);
}

// ===== FILTERS =====
function populateFilters() {
    const groupSelect = document.getElementById("filter-group");
    const ownerSelect = document.getElementById("filter-owner");

    GROUP_ORDER.forEach(g => {
        const opt = document.createElement("option");
        opt.value = g;
        opt.textContent = `${g}. ${GROUP_NAMES[g]}`;
        groupSelect.appendChild(opt);
    });

    const owners = [...new Set(TASKS_DATA.map(t => t.owner))].sort();
    owners.forEach(o => {
        const opt = document.createElement("option");
        opt.value = o;
        opt.textContent = o;
        ownerSelect.appendChild(opt);
    });
}

// ===== RENDER TASKS =====
function renderTasks() {
    const tbody = document.getElementById("tasks-tbody");
    const search = document.getElementById("search-input").value.toLowerCase().trim();
    const filterGroup = document.getElementById("filter-group").value;
    const filterStatus = document.getElementById("filter-status").value;
    const filterOwner = document.getElementById("filter-owner").value;

    let filtered = TASKS_DATA.filter(t => {
        if (filterGroup !== "all" && t.group !== filterGroup) return false;
        if (filterOwner !== "all" && t.owner !== filterOwner) return false;
        const state = getTaskState(t.id);
        const effectiveStatus = getEffectiveStatus(t, state);
        if (filterStatus !== "all" && effectiveStatus !== filterStatus) return false;
        if (search && !t.name.toLowerCase().includes(search) && !t.owner.toLowerCase().includes(search) && !t.output.toLowerCase().includes(search)) return false;
        return true;
    });

    tbody.innerHTML = "";

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="empty-state">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <p>Không tìm thấy nhiệm vụ phù hợp</p>
        </td></tr>`;
        document.getElementById("tasks-count").textContent = "0 nhiệm vụ";
        return;
    }

    document.getElementById("tasks-count").textContent = `${filtered.length} nhiệm vụ`;

    // Group tasks
    let currentGroup = null;
    let delay = 0;

    filtered.forEach(t => {
        // Group header
        if (t.group !== currentGroup) {
            currentGroup = t.group;
            const headerRow = document.createElement("tr");
            headerRow.className = "group-header-row";
            headerRow.innerHTML = `<td colspan="8">${t.group}. ${GROUP_NAMES[t.group]}</td>`;
            tbody.appendChild(headerRow);
        }

        const state = getTaskState(t.id);
        const effectiveStatus = getEffectiveStatus(t, state);
        const row = document.createElement("tr");
        row.style.animationDelay = `${delay}ms`;
        delay += 40;

        const deadlineInfo = getDeadlineDisplay(t);

        row.innerHTML = `
            <td class="col-stt" style="text-align:center; font-weight:600; color:var(--text-muted);">${t.id}</td>
            <td class="col-group"><span class="group-tag">${t.group}</span></td>
            <td class="col-task">
                <div class="task-name">${t.name}</div>
                ${t.partner ? `<div class="task-partner">Phối hợp: ${t.partner}</div>` : ""}
            </td>
            <td class="col-owner"><div class="owner-text">${t.owner}</div></td>
            <td class="col-output"><div class="output-text">${t.output}</div></td>
            <td class="col-deadline"><span class="deadline-text ${deadlineInfo.class}">${deadlineInfo.text}</span></td>
            <td class="col-status">
                <select class="status-select ${!isAdmin ? 'readonly' : ''}" data-id="${t.id}" data-status="${effectiveStatus}">
                    <option value="in_progress" ${effectiveStatus === "in_progress" ? "selected" : ""}>🔶 Đang thực hiện</option>
                    <option value="completed" ${effectiveStatus === "completed" ? "selected" : ""}>✅ Hoàn thành</option>
                    <option value="overdue" ${effectiveStatus === "overdue" ? "selected" : ""}>🔴 Chậm tiến độ</option>
                </select>
            </td>
            <td class="col-note">
                <button class="btn-note ${state.note ? "has-note" : ""}" data-id="${t.id}" title="${state.note || 'Thêm ghi chú'}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    ${state.note ? "Xem" : "Thêm"}
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function getEffectiveStatus(task, state) {
    if (state.status === "completed") return "completed";
    if (state.status === "overdue") return "overdue";
    // Auto-detect overdue
    if (task.deadline && state.status !== "completed") {
        const dl = new Date(task.deadline);
        const now = new Date();
        if (now > dl) return "overdue";
    }
    return "in_progress";
}

function getDeadlineDisplay(task) {
    if (!task.deadline) {
        return {
            text: task.deadlineText || "—",
            class: "deadline-ok"
        };
    }
    const dl = new Date(task.deadline);
    const now = new Date();
    const diffDays = Math.ceil((dl - now) / (1000 * 60 * 60 * 24));
    const formatted = dl.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });

    const state = getTaskState(task.id);
    if (state.status === "completed") {
        return { text: formatted, class: "deadline-ok" };
    }

    if (diffDays < 0) {
        return { text: `${formatted} (quá hạn ${Math.abs(diffDays)} ngày)`, class: "deadline-overdue" };
    } else if (diffDays <= 14) {
        return { text: `${formatted} (còn ${diffDays} ngày)`, class: "deadline-soon" };
    }
    return { text: formatted, class: "deadline-ok" };
}

// ===== STATS =====
function updateStats() {
    let completed = 0, inProgress = 0, overdue = 0;
    TASKS_DATA.forEach(t => {
        const state = getTaskState(t.id);
        const eff = getEffectiveStatus(t, state);
        if (eff === "completed") completed++;
        else if (eff === "overdue") overdue++;
        else inProgress++;
    });

    animateNumber("stat-total-num", TASKS_DATA.length);
    animateNumber("stat-completed-num", completed);
    animateNumber("stat-inprogress-num", inProgress);
    animateNumber("stat-overdue-num", overdue);
}

function animateNumber(elementId, target) {
    const el = document.getElementById(elementId);
    const current = parseInt(el.textContent) || 0;
    if (current === target) return;
    const diff = target - current;
    const steps = 20;
    const increment = diff / steps;
    let step = 0;
    const interval = setInterval(() => {
        step++;
        if (step >= steps) {
            el.textContent = target;
            clearInterval(interval);
        } else {
            el.textContent = Math.round(current + increment * step);
        }
    }, 30);
}

// ===== PROGRESS RING =====
function addProgressGradient() {
    // Add SVG gradient definition
    const svg = document.querySelector(".progress-ring");
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    gradient.setAttribute("id", "progress-gradient");
    gradient.setAttribute("x1", "0%");
    gradient.setAttribute("y1", "0%");
    gradient.setAttribute("x2", "100%");
    gradient.setAttribute("y2", "100%");
    const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("stop-color", "#991b1b");
    const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "100%");
    stop2.setAttribute("stop-color", "#dc2626");
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svg.insertBefore(defs, svg.firstChild);
}

function updateProgressRing() {
    let completed = 0;
    TASKS_DATA.forEach(t => {
        const state = getTaskState(t.id);
        if (getEffectiveStatus(t, state) === "completed") completed++;
    });

    const total = TASKS_DATA.length;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    const circumference = 2 * Math.PI * 70; // r=70
    const offset = circumference - (pct / 100) * circumference;

    const ring = document.getElementById("progress-ring-fill");
    setTimeout(() => {
        ring.style.strokeDashoffset = offset;
    }, 500);

    document.getElementById("progress-percent").textContent = pct + "%";
}

// ===== GROUP PROGRESS BARS =====
function updateGroupBars() {
    const container = document.getElementById("group-progress-bars");
    container.innerHTML = "";

    GROUP_ORDER.forEach(g => {
        const groupTasks = TASKS_DATA.filter(t => t.group === g);
        const completed = groupTasks.filter(t => {
            const state = getTaskState(t.id);
            return getEffectiveStatus(t, state) === "completed";
        }).length;
        const total = groupTasks.length;
        const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

        const item = document.createElement("div");
        item.className = "group-bar-item";
        item.innerHTML = `
            <span class="group-bar-label" title="${g}. ${GROUP_NAMES[g]}">${g}. ${GROUP_NAMES[g]}</span>
            <div class="group-bar-track">
                <div class="group-bar-fill" style="width: ${pct}%;"></div>
            </div>
            <span class="group-bar-value">${completed}/${total}</span>
        `;
        container.appendChild(item);
    });
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Intercept click on readonly status selects
    document.getElementById("tasks-tbody").addEventListener("mousedown", (e) => {
        const select = e.target.closest(".status-select");
        if (select && !isAdmin) {
            e.preventDefault();
            e.stopPropagation();
            showAccessDenied();
            return false;
        }
    });

    // Status change — now async with Supabase (only for admin)
    document.getElementById("tasks-tbody").addEventListener("change", async (e) => {
        if (e.target.classList.contains("status-select")) {
            if (!isAdmin) {
                // Revert the change
                const id = parseInt(e.target.dataset.id);
                const state = getTaskState(id);
                const task = TASKS_DATA.find(t => t.id === id);
                e.target.value = getEffectiveStatus(task, state);
                showAccessDenied();
                return;
            }

            const id = parseInt(e.target.dataset.id);
            const newStatus = e.target.value;
            const currentNote = getTaskState(id).note;

            await saveTaskState(id, newStatus, currentNote);

            e.target.dataset.status = getEffectiveStatus(TASKS_DATA.find(t => t.id === id), taskStates[id]);
            updateStats();
            updateProgressRing();
            updateGroupBars();
            showToast(`Nhiệm vụ #${id} → ${STATUS_LABELS[newStatus]}`);
            // Re-render to update deadline colors
            renderTasks();
        }
    });

    // Note buttons — view for all, edit only for admin
    document.getElementById("tasks-tbody").addEventListener("click", (e) => {
        const btn = e.target.closest(".btn-note");
        if (btn) {
            const id = parseInt(btn.dataset.id);
            const state = getTaskState(id);
            if (!isAdmin && !state.note) {
                // No note to view, and not admin
                showAccessDenied();
                return;
            }
            openNoteModal(id);
        }
    });

    // Admin button
    document.getElementById("btn-admin").addEventListener("click", () => {
        if (isAdmin) {
            // Logout
            setAuthSession(false);
            showToast('Đã đăng xuất khỏi chế độ quản trị');
        } else {
            // Open auth modal
            openAuthModal();
        }
    });

    // Filter changes
    ["filter-group", "filter-status", "filter-owner"].forEach(id => {
        document.getElementById(id).addEventListener("change", () => renderTasks());
    });

    // Search
    let searchTimer;
    document.getElementById("search-input").addEventListener("input", () => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => renderTasks(), 250);
    });

    // Export
    document.getElementById("btn-export").addEventListener("click", openExportModal);

    // Note modal
    document.getElementById("modal-close").addEventListener("click", closeNoteModal);
    document.getElementById("modal-cancel").addEventListener("click", closeNoteModal);
    document.getElementById("modal-save").addEventListener("click", saveNote);

    // Export modal
    document.getElementById("export-modal-close").addEventListener("click", closeExportModal);
    document.getElementById("export-cancel").addEventListener("click", closeExportModal);

    // Close modals on overlay click
    document.getElementById("note-modal").addEventListener("click", (e) => {
        if (e.target === e.currentTarget) closeNoteModal();
    });
    document.getElementById("export-modal").addEventListener("click", (e) => {
        if (e.target === e.currentTarget) closeExportModal();
    });

    // Auth modal
    document.getElementById("auth-modal-close").addEventListener("click", closeAuthModal);
    document.getElementById("auth-cancel").addEventListener("click", closeAuthModal);
    document.getElementById("auth-submit").addEventListener("click", submitAuth);
    document.getElementById("auth-modal").addEventListener("click", (e) => {
        if (e.target === e.currentTarget) closeAuthModal();
    });

    // Password toggle visibility
    document.getElementById("btn-toggle-pw").addEventListener("click", () => {
        const input = document.getElementById("auth-password");
        input.type = input.type === 'password' ? 'text' : 'password';
    });

    // Enter key in password field
    document.getElementById("auth-password").addEventListener("keydown", (e) => {
        if (e.key === "Enter") submitAuth();
    });

    // Keyboard
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeNoteModal();
            closeExportModal();
            closeAuthModal();
        }
    });
}

// ===== AUTH MODAL =====
function openAuthModal() {
    document.getElementById("auth-password").value = '';
    document.getElementById("auth-error").textContent = '';
    document.getElementById("auth-modal").classList.add("active");
    setTimeout(() => document.getElementById("auth-password").focus(), 100);
}

function closeAuthModal() {
    document.getElementById("auth-modal").classList.remove("active");
    document.getElementById("auth-password").value = '';
    document.getElementById("auth-error").textContent = '';
}

async function submitAuth() {
    const password = document.getElementById("auth-password").value;
    if (!password) {
        document.getElementById("auth-error").textContent = 'Vui lòng nhập mật khẩu';
        return;
    }

    const hash = await hashPassword(password);
    if (hash === ADMIN_PASSWORD_HASH) {
        setAuthSession(true);
        closeAuthModal();
        showToast('Đăng nhập thành công — bạn có thể cập nhật trạng thái');
    } else {
        document.getElementById("auth-error").textContent = 'Mật khẩu không đúng';
        document.getElementById("auth-password").value = '';
        document.getElementById("auth-password").focus();
    }
}

// ===== NOTE MODAL =====
let currentNoteId = null;

function openNoteModal(id) {
    currentNoteId = id;
    const task = TASKS_DATA.find(t => t.id === id);
    const state = getTaskState(id);
    document.getElementById("modal-title").textContent = `Ghi chú: Nhiệm vụ #${id}`;
    document.getElementById("modal-note").value = state.note || "";

    // Read-only mode for non-admin
    const textarea = document.getElementById("modal-note");
    const saveBtn = document.getElementById("modal-save");
    if (!isAdmin) {
        textarea.readOnly = true;
        textarea.placeholder = 'Chỉ quản trị viên mới có thể sửa ghi chú';
        saveBtn.style.display = 'none';
    } else {
        textarea.readOnly = false;
        textarea.placeholder = 'Nhập ghi chú, minh chứng hoàn thành...';
        saveBtn.style.display = '';
    }

    document.getElementById("note-modal").classList.add("active");
    if (isAdmin) textarea.focus();
}

function closeNoteModal() {
    document.getElementById("note-modal").classList.remove("active");
    currentNoteId = null;
}

async function saveNote() {
    if (currentNoteId === null) return;
    const note = document.getElementById("modal-note").value.trim();
    const currentStatus = getTaskState(currentNoteId).status;

    await saveTaskState(currentNoteId, currentStatus, note);

    renderTasks();
    closeNoteModal();
    showToast("Đã lưu ghi chú");
}

// ===== EXPORT =====
function openExportModal() {
    const content = document.getElementById("export-content");
    const now = new Date();
    const dateStr = now.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });

    let completed = 0, inProgress = 0, overdue = 0;
    TASKS_DATA.forEach(t => {
        const eff = getEffectiveStatus(t, getTaskState(t.id));
        if (eff === "completed") completed++;
        else if (eff === "overdue") overdue++;
        else inProgress++;
    });

    const totalWorkingDays = 100;
    let elapsedWorkingDays = 0;
    if (now >= CAMPAIGN_START) {
        elapsedWorkingDays = countWorkingDays(CAMPAIGN_START, now);
    }
    const pctTime = Math.round((elapsedWorkingDays / totalWorkingDays) * 100);
    const pctTask = Math.round((completed / TASKS_DATA.length) * 100);

    let html = `<div class="export-report">
        <h2>BÁO CÁO TIẾN ĐỘ CHIẾN DỊCH 100 NGÀY LÀM VIỆC<br>XỬ LÝ ĐIỂM NGHẼN CHUYỂN ĐỔI SỐ — XÃ CÔNG HẢI</h2>
        <p style="text-align:center;color:var(--text-muted);margin-bottom:1.5rem;">Ngày báo cáo: ${dateStr} | Tiến độ thời gian: ${pctTime}% (${elapsedWorkingDays}/${totalWorkingDays} ngày làm việc)</p>

        <div class="summary-stats">
            <div class="summary-stat"><span class="num" style="color:var(--accent-primary);">${TASKS_DATA.length}</span><span class="label">Tổng nhiệm vụ</span></div>
            <div class="summary-stat"><span class="num" style="color:var(--status-completed);">${completed}</span><span class="label">Hoàn thành (${pctTask}%)</span></div>
            <div class="summary-stat"><span class="num" style="color:var(--status-progress);">${inProgress}</span><span class="label">Đang thực hiện</span></div>
            <div class="summary-stat"><span class="num" style="color:var(--status-overdue);">${overdue}</span><span class="label">Chậm tiến độ</span></div>
        </div>`;

    // Per group
    GROUP_ORDER.forEach(g => {
        const groupTasks = TASKS_DATA.filter(t => t.group === g);
        html += `<h3>${g}. ${GROUP_NAMES[g]}</h3>`;
        html += `<table><thead><tr><th>STT</th><th>Nhiệm vụ</th><th>Chủ trì</th><th>Sản phẩm</th><th>Thời hạn</th><th>Trạng thái</th><th>Ghi chú</th></tr></thead><tbody>`;

        groupTasks.forEach(t => {
            const state = getTaskState(t.id);
            const eff = getEffectiveStatus(t, state);
            const dl = getDeadlineDisplay(t);
            html += `<tr>
                <td>${t.id}</td>
                <td>${t.name}</td>
                <td>${t.owner}</td>
                <td>${t.output}</td>
                <td>${dl.text}</td>
                <td>${STATUS_LABELS[eff]}</td>
                <td>${state.note || ""}</td>
            </tr>`;
        });
        html += `</tbody></table>`;
    });

    // Overdue highlight
    const overdueTasks = TASKS_DATA.filter(t => {
        const eff = getEffectiveStatus(t, getTaskState(t.id));
        return eff === "overdue";
    });
    if (overdueTasks.length > 0) {
        html += `<h3 style="color:var(--status-overdue);">⚠ Nhiệm vụ chậm tiến độ (${overdueTasks.length})</h3>`;
        html += `<table><thead><tr><th>STT</th><th>Nhiệm vụ</th><th>Chủ trì</th><th>Thời hạn</th></tr></thead><tbody>`;
        overdueTasks.forEach(t => {
            const dl = getDeadlineDisplay(t);
            html += `<tr><td>${t.id}</td><td>${t.name}</td><td>${t.owner}</td><td style="color:var(--status-overdue);">${dl.text}</td></tr>`;
        });
        html += `</tbody></table>`;
    }

    html += `</div>`;
    content.innerHTML = html;
    document.getElementById("export-modal").classList.add("active");
}

function closeExportModal() {
    document.getElementById("export-modal").classList.remove("active");
}

// ===== TOAST =====
function showToast(message, type = 'success', duration = 2500) {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    const iconMap = {
        success: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
        warning: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'
    };

    toast.innerHTML = `
        <span class="toast-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${iconMap[type] || iconMap.success}</svg>
        </span>
        <span>${message}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add("toast-out");
        setTimeout(() => toast.remove(), 300);
    }, duration);
}
