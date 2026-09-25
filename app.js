// =============================================================================
// HỆ THỐNG THEO DÕI NGHỊ QUYẾT 57-NQ/TW — ĐẢNG BỘ XÃ CÔNG HẢI
// Lấy Quy định 11-QĐ/TU làm chuẩn tối thượng • Theo dõi độc lập Kế hoạch 100 ngày
// =============================================================================

// ===== CƠ CẤU 8 CƠ QUAN / ĐƠN VỊ CẤP XÃ (TÊN ĐẦY ĐỦ KHÔNG VIẾT TẮT) =====
const UNITS_DATA = {
    "phong_vh_xh": {
        id: "phong_vh_xh",
        name: "Phòng Văn hoá - Xã hội",
        shortName: "Phòng Văn hoá - Xã hội",
        fullName: "Phòng Văn hoá - Xã hội",
        isStanding: true,
        roleLabel: "Phòng Văn hoá - Xã hội",
        badgeClass: "badge-standing"
    },
    "vp_dang_uy": {
        id: "vp_dang_uy",
        name: "Văn phòng Đảng uỷ",
        shortName: "Văn phòng Đảng uỷ",
        fullName: "Văn phòng Đảng uỷ",
        isGeneralSummary: true,
        roleLabel: "Văn phòng Đảng uỷ",
        badgeClass: "badge-standing"
    },
    "ban_xd_dang": {
        id: "ban_xd_dang",
        name: "Ban Xây dựng Đảng",
        shortName: "Ban Xây dựng Đảng",
        fullName: "Ban Xây dựng Đảng",
        roleLabel: "Ban Xây dựng Đảng",
        badgeClass: "badge-standing"
    },
    "ubkt_dang_uy": {
        id: "ubkt_dang_uy",
        name: "Uỷ ban Kiểm tra Đảng uỷ",
        shortName: "Uỷ ban Kiểm tra Đảng uỷ",
        fullName: "Uỷ ban Kiểm tra Đảng uỷ",
        roleLabel: "Uỷ ban Kiểm tra Đảng uỷ",
        badgeClass: "badge-standing"
    },
    "phong_kinh_te": {
        id: "phong_kinh_te",
        name: "Phòng Kinh tế",
        shortName: "Phòng Kinh tế",
        fullName: "Phòng Kinh tế",
        roleLabel: "Phòng Kinh tế",
        badgeClass: "badge-standing"
    },
    "tt_dv_snc": {
        id: "tt_dv_snc",
        name: "Trung tâm Dịch vụ, Sự nghiệp công",
        shortName: "Trung tâm Dịch vụ, Sự nghiệp công",
        fullName: "Trung tâm Dịch vụ, Sự nghiệp công",
        roleLabel: "Trung tâm Dịch vụ, Sự nghiệp công",
        badgeClass: "badge-standing"
    },
    "tt_hc_cong": {
        id: "tt_hc_cong",
        name: "Trung tâm Hành chính công",
        shortName: "Trung tâm Hành chính công",
        fullName: "Trung tâm Hành chính công",
        roleLabel: "Trung tâm Hành chính công",
        badgeClass: "badge-standing"
    },
    "vp_hdnd_ubnd": {
        id: "vp_hdnd_ubnd",
        name: "Văn phòng HĐND-UBND xã",
        shortName: "Văn phòng HĐND-UBND xã",
        fullName: "Văn phòng HĐND-UBND xã",
        roleLabel: "Văn phòng HĐND-UBND xã",
        badgeClass: "badge-standing"
    }
};

// Helper tạo danh sách <option> chọn cơ quan chủ trì (tên đầy đủ)
function getUnitOptionsHtml(selectedUnitId) {
    return Object.values(UNITS_DATA).map(u => {
        const isSel = u.id === selectedUnitId ? 'selected' : '';
        return `<option value="${u.id}" ${isSel}>${u.name}</option>`;
    }).join('');
}


// ===== DỮ LIỆU BẢNG 1: QUY ĐỊNH 11-QĐ/TU (PHỤ LỤC 3 — ĐÁNH GIÁ CẢ NĂM ĐỐI VỚI CẤP XÃ) =====
const QD11_ANNUAL_DATA = [
    // =========================================================================
    // I. VỀ CHỈ ĐẠO, ĐIỀU HÀNH (10 ĐIỂM CHUẨN)
    // =========================================================================
    {
        id: "QD11_I_1",
        code: "I.1",
        group: "I",
        groupName: "I. Về chỉ đạo, điều hành (10 điểm chuẩn)",
        name: "Ban hành kế hoạch thực hiện Nghị quyết số 57-NQ/TW",
        maxScore: 3,
        ownerUnit: "phong_vh_xh",
        partner: "Văn phòng Đảng uỷ",
        criteriaDetail: "- Ban hành kế hoạch đạt yêu cầu về thời gian (không quá 30 ngày kể từ ngày kế hoạch của Tỉnh ủy, UBND tỉnh hoặc Ban Chỉ đạo cấp tỉnh về thực hiện Nghị quyết số 57-NQ/TW được ban hành, tùy theo nhiệm vụ được giao) và bảo đảm chất lượng: 03 điểm\n- Trễ hạn yêu cầu về thời gian (không quá 60 ngày kể từ ngày kế hoạch được ban hành) và bảo đảm chất lượng: 1,5 điểm\n- Không đạt yêu cầu hoặc địa phương không ban hành kế hoạch: 0 điểm",
        guide: "Kế hoạch phải bám sát kế hoạch của Tỉnh ủy, UBND tỉnh hoặc Ban Chỉ đạo cấp tỉnh về thực hiện Nghị quyết số 57-NQ/TW; nội dung rõ nhiệm vụ, sản phẩm, thời hạn, bộ phận/cá nhân chủ trì, phối hợp.",
        evidenceRequired: "Quyết định/ Kế hoạch của đơn vị"
    },
    {
        id: "QD11_I_2_1",
        code: "I.2.1",
        group: "I",
        groupName: "I. Về chỉ đạo, điều hành (10 điểm chuẩn)",
        name: "Tỷ lệ bộ phận chuyên môn, tổ chức/cá nhân được giao nhiệm vụ được kiểm tra, giám sát trong năm",
        maxScore: 1,
        ownerUnit: "ubkt_dang_uy",
        partner: "Phòng Văn hoá - Xã hội, Văn phòng Đảng uỷ",
        criteriaDetail: "- Từ 30% trở lên: 1 điểm\n- Từ 25% đến dưới 30%: 0,5 điểm\n- Dưới 25%: 0,25 điểm\n- Không thực hiện: 0 điểm",
        guide: "Nếu không phát sinh đối tượng kiểm tra, giám sát hoặc nhiệm vụ không thuộc phạm vi quản lý của UBND cấp xã thì giảm trừ điểm tối đa tương ứng.",
        evidenceRequired: "Kế hoạch kiểm tra, báo cáo kiểm tra, giám sát của địa phương; giải trình rõ số bộ phận/tổ chức/cá nhân hoặc nhiệm vụ được kiểm tra, giám sát trên tổng số bộ phận/tổ chức/cá nhân hoặc nhiệm vụ thuộc phạm vi quản lý."
    },
    {
        id: "QD11_I_2_2",
        code: "I.2.2",
        group: "I",
        groupName: "I. Về chỉ đạo, điều hành (10 điểm chuẩn)",
        name: "Xử lý các vấn đề phát hiện qua kiểm tra, giám sát",
        maxScore: 1,
        ownerUnit: "ubkt_dang_uy",
        partner: "Văn phòng HĐND-UBND xã, Phòng Văn hoá - Xã hội",
        criteriaDetail: "- Tất cả vấn đề phát hiện qua kiểm tra đã được chỉ đạo xử lý: 1 điểm\n- Vẫn còn vấn đề chưa được chỉ đạo xử lý: 0 điểm",
        guide: "- Văn bản xử lý theo thẩm quyền, báo cáo kết quả khắc phục hoặc không có vấn đề cần giải quyết, khắc phục: 1 điểm\n- Vẫn còn vấn đề chưa được xử lý: 0 điểm",
        evidenceRequired: "Văn bản minh chứng, báo cáo sản phẩm sau khắc phục"
    },
    {
        id: "QD11_I_3",
        code: "I.3",
        group: "I",
        groupName: "I. Về chỉ đạo, điều hành (10 điểm chuẩn)",
        name: "Thực hiện chế độ báo cáo định kỳ (hàng Quý, 6 tháng, năm)",
        maxScore: 3,
        ownerUnit: "phong_vh_xh",
        partner: "Văn phòng Đảng uỷ",
        criteriaDetail: "- Đáp ứng đầy đủ về số lượng, nội dung và đúng thời gian theo quy định: 3 điểm\n- Thực hiện không đầy đủ một trong các yêu cầu về số lượng, nội dung, thời hạn gửi báo cáo: 0 điểm",
        guide: "- Thực hiện đầy đủ về số lượng, nội dung và đúng thời gian theo quy định: 3 điểm\n- Thực hiện không đầy đủ một trong các yêu cầu về số lượng, nội dung, thời hạn gửi báo cáo: 0 điểm",
        evidenceRequired: "Báo cáo định kỳ của đơn vị"
    },
    {
        id: "QD11_I_4",
        code: "I.4",
        group: "I",
        groupName: "I. Về chỉ đạo, điều hành (10 điểm chuẩn)",
        name: "Đổi mới, sáng tạo trong triển khai nhiệm vụ",
        maxScore: 2,
        ownerUnit: "phong_vh_xh",
        partner: "Các cơ quan, ban ngành, đoàn thể xã",
        criteriaDetail: "- Có từ 2 sáng kiến hoặc giải pháp mới trở lên: 2 điểm\n- Có 1 sáng kiến hoặc giải pháp mới: 1 điểm\n- Không có sáng kiến hoặc giải pháp mới: 0 điểm",
        guide: "Sáng kiến cấp cơ sở/ cấp tỉnh được công nhận",
        evidenceRequired: "Quyết định công nhận sáng kiến"
    },

    // =========================================================================
    // II. KẾT QUẢ THỰC HIỆN NHIỆM VỤ (75 ĐIỂM CHUẨN)
    // =========================================================================
    {
        id: "QD11_II_1_1",
        code: "II.1.1",
        group: "II",
        groupName: "II. Kết quả thực hiện nhiệm vụ (75 điểm chuẩn)",
        name: "Thực hiện các nhiệm vụ, chỉ tiêu được Ban Chỉ đạo tỉnh giao trong năm",
        maxScore: 10,
        ownerUnit: "phong_vh_xh",
        partner: "Văn phòng Đảng uỷ",
        criteriaDetail: "- Hoàn thành đúng tiến độ 100% nhiệm vụ, chỉ tiêu được giao: 10 điểm\n- Đạt từ 90% đến dưới 100%: 8 điểm\n- Đạt từ 80% đến dưới 90%: 6 điểm\n- Đạt từ 70% đến dưới 80%: 4 điểm\n- Dưới 70%: 0 điểm",
        guide: "Thống kê nhiệm vụ, chỉ tiêu đã hoàn thành/ nhiệm vụ được giao theo Kế hoạch hàng năm của Ban Chỉ đạo về phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số của tỉnh",
        evidenceRequired: "Báo cáo kết quả của đơn vị, hồ sơ minh chứng việc hoàn thành"
    },
    {
        id: "QD11_II_1_2",
        code: "II.1.2",
        group: "II",
        groupName: "II. Kết quả thực hiện nhiệm vụ (75 điểm chuẩn)",
        name: "Thực hiện các nhiệm vụ, chỉ tiêu được UBND tỉnh giao trong năm",
        maxScore: 10,
        ownerUnit: "vp_hdnd_ubnd",
        partner: "Phòng Văn hoá - Xã hội, Phòng Kinh tế",
        criteriaDetail: "- Hoàn thành đúng tiến độ 100% nhiệm vụ, chỉ tiêu được giao: 10 điểm\n- Đạt từ 90% đến dưới 100%: 8 điểm\n- Đạt từ 80% đến dưới 90%: 6 điểm\n- Đạt từ 70% đến dưới 80%: 4 điểm\n- Dưới 70%: 0 điểm",
        guide: "Thống kê nhiệm vụ, chỉ tiêu đã hoàn thành/ nhiệm vụ được giao theo Kế hoạch hàng năm của UBND tỉnh về khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số",
        evidenceRequired: "Báo cáo kết quả của đơn vị, hồ sơ minh chứng việc hoàn thành"
    },
    {
        id: "QD11_II_1_3",
        code: "II.1.3",
        group: "II",
        groupName: "II. Kết quả thực hiện nhiệm vụ (75 điểm chuẩn)",
        name: "Triển khai sử dụng Nền tảng số dùng chung cấp xã",
        maxScore: 10,
        ownerUnit: "tt_hc_cong",
        partner: "Phòng Văn hoá - Xã hội, Văn phòng HĐND-UBND xã",
        criteriaDetail: "- Triển khai sử dụng hiệu quả và cập nhật thông tin, dữ liệu thường xuyên: 10 điểm\n- Có triển khai sử dụng nhưng cập nhật thông tin, dữ liệu không thường xuyên: 03 điểm\n- Không thực hiện: 0 điểm",
        guide: "Sở Khoa học và Công nghệ theo dõi, đối chiếu, xác nhận nội dung này theo phân công; không yêu cầu thủ tục thẩm định riêng.",
        evidenceRequired: "Báo cáo vận hành, cập nhật dữ liệu trên Nền tảng số dùng chung cấp xã; nhật ký cập nhật dữ liệu và các hồ sơ minh chứng liên quan."
    },
    {
        id: "QD11_II_2",
        code: "II.2",
        group: "II",
        groupName: "II. Kết quả thực hiện nhiệm vụ (75 điểm chuẩn)",
        name: "Cải cách thể chế: Phối hợp xây dựng, góp ý các văn bản QPPL hoặc văn bản triển khai nhiệm vụ khi được cơ quan chủ quản yêu cầu",
        maxScore: 8,
        ownerUnit: "phong_vh_xh",
        partner: "Văn phòng HĐND-UBND xã, Văn phòng Đảng uỷ",
        criteriaDetail: "- Có văn bản góp ý, phối hợp đúng hạn theo yêu cầu: 8 điểm\n- Không có văn bản góp ý hoặc có văn bản nhưng quá hạn theo yêu cầu: 0 điểm\n- Trường hợp trong năm không phát sinh yêu cầu góp ý, phối hợp thì giảm trừ điểm tối đa tương ứng.",
        guide: "Chỉ chấm khi có yêu cầu góp ý/phối hợp của cơ quan có thẩm quyền; không phát sinh yêu cầu thì giảm trừ điểm tối đa tương ứng.",
        evidenceRequired: "Văn bản góp ý của đơn vị theo yêu cầu của cơ quan chủ quản"
    },
    {
        id: "QD11_II_3_1",
        code: "II.3.1",
        group: "II",
        groupName: "II. Kết quả thực hiện nhiệm vụ (75 điểm chuẩn)",
        name: "Sắp xếp, bố trí đảm bảo nhân lực chuyển đổi số theo quy định",
        maxScore: 4,
        ownerUnit: "vp_hdnd_ubnd",
        partner: "Phòng Văn hoá - Xã hội",
        criteriaDetail: "- Đúng số lượng theo quy định: 4 điểm\n- Không đúng số lượng: 0 điểm",
        guide: "Đơn vị tự kê khai tình hình bố trí nhân lực chuyển đổi số; Sở Nội vụ, Sở Khoa học và Công nghệ đối chiếu theo dữ liệu quản lý, không phát sinh thêm thủ tục xin ý kiến riêng lẻ khi chấm điểm.",
        evidenceRequired: "Báo cáo biên chế/ hoặc văn bản minh chứng liên quan"
    },
    {
        id: "QD11_II_3_2",
        code: "II.3.2",
        group: "II",
        groupName: "II. Kết quả thực hiện nhiệm vụ (75 điểm chuẩn)",
        name: "Sắp xếp, bố trí đảm bảo nhân lực theo dõi về khoa học, công nghệ và đổi mới sáng tạo",
        maxScore: 4,
        ownerUnit: "vp_hdnd_ubnd",
        partner: "Phòng Kinh tế",
        criteriaDetail: "- Đúng số lượng theo quy định: 4 điểm\n- Không đúng số lượng: 0 điểm",
        guide: "Đơn vị tự kê khai tình hình bố trí nhân lực theo dõi khoa học, công nghệ và đổi mới sáng tạo; Sở Nội vụ, Sở Khoa học và Công nghệ đối chiếu theo dữ liệu quản lý, không phát sinh thêm thủ tục xin ý kiến riêng lẻ khi chấm điểm.",
        evidenceRequired: "Báo cáo biên chế/ hoặc văn bản minh chứng liên quan"
    },
    {
        id: "QD11_II_4_1",
        code: "II.4.1",
        group: "II",
        groupName: "II. Kết quả thực hiện nhiệm vụ (75 điểm chuẩn)",
        name: "Xây dựng kế hoạch đào tạo, bồi dưỡng hàng năm về KHCN, ĐMST và CĐS",
        maxScore: 3,
        ownerUnit: "phong_vh_xh",
        partner: "Văn phòng HĐND-UBND xã",
        criteriaDetail: "- Có xây dựng Kế hoạch: 3 điểm\n- Không xây dựng Kế hoạch: 0 điểm",
        guide: "Đơn vị có xây dựng kế hoạch cụ thể về đào tạo bồi dưỡng về khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số: 3 điểm. Không xây dựng kế hoạch, hoặc kế hoạch không cụ thể về khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số: 0 điểm",
        evidenceRequired: "Kế hoạch đào tạo, bồi dưỡng về khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số"
    },
    {
        id: "QD11_II_4_2",
        code: "II.4.2",
        group: "II",
        groupName: "II. Kết quả thực hiện nhiệm vụ (75 điểm chuẩn)",
        name: "Tổ chức các lớp đào tạo, bồi dưỡng, tập huấn về KHCN, ĐMST và CĐS",
        maxScore: 5,
        ownerUnit: "phong_vh_xh",
        partner: "Văn phòng HĐND-UBND xã",
        criteriaDetail: "a) Nhóm đơn vị không xây dựng Kế hoạch:\n- Có tổ chức: 2 điểm\n- Không Tổ chức: 0 điểm\nb) Nhóm đơn vị có xây dựng Kế hoạch:\n- Đạt từ 100% kế hoạch: 5 điểm\n- Đạt từ 85 - dưới 100%: 4 điểm\n- Từ 60% đến dưới 85%: 3 điểm\n- Dưới 60%: 2 điểm\n- Không tổ chức: 0 điểm",
        guide: "1. Trường hợp không xây dựng Kế hoạch nhưng vẫn tổ chức bồi dưỡng, đào tạo, tập huấn về khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số: 2 điểm. Không tổ chức 0 điểm.\n2. Có xây dựng Kế hoạch: Tính điểm theo tỉ lệ % các lớp tổ chức/ tổng lớp đã xây dựng kế hoạch",
        evidenceRequired: "Báo cáo kết quả tập huấn, hồ sơ minh chứng khác (hình ảnh tập huấn, bài báo,...); giấy chứng nhận tham gia,..."
    },
    {
        id: "QD11_II_5_1",
        code: "II.5.1",
        group: "II",
        groupName: "II. Kết quả thực hiện nhiệm vụ (75 điểm chuẩn)",
        name: "Tổ chức tuyên truyền, phổ biến trực tiếp về khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số",
        maxScore: 4,
        ownerUnit: "phong_vh_xh",
        partner: "Đoàn thể, Tổ CNSCĐ các thôn",
        criteriaDetail: "- Đạt từ 100 lượt người tham gia: 4 điểm\n- Đạt từ 50 - dưới 100 lượt người: 3 điểm\n- Dưới 50 lượt người: 2 điểm\n- Không tổ chức: 0 điểm",
        guide: "Tổ chức các lớp tuyên truyền trực tiếp, trực quan về các nhiệm vụ khoa học và công nghệ, ứng dụng các tiến bộ khoa học và công nghệ, ứng dụng công nghệ thông tin, .... Tính tổng lượt người tham gia các lớp/ năm",
        evidenceRequired: "Báo cáo kết quả thực hiện, bài báo, hình ảnh buổi tuyên truyền,....."
    },
    {
        id: "QD11_II_5_2",
        code: "II.5.2",
        group: "II",
        groupName: "II. Kết quả thực hiện nhiệm vụ (75 điểm chuẩn)",
        name: "Tổ chức tuyên truyền thông qua trang thông tin điện tử, Hệ thống loa, đài,…",
        maxScore: 4,
        ownerUnit: "phong_vh_xh",
        partner: "Đài truyền thanh xã",
        criteriaDetail: "- Đạt từ 100 lượt tin bài: 4 điểm\n- Đạt từ 50 - dưới 100: 3 điểm\n- Dưới 50: 2 điểm\n- Không tổ chức: 0 điểm",
        guide: "Đăng thông tin trên trang thông tin điện tử, tuyên truyền thông qua loa, đài,… về khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số",
        evidenceRequired: "Báo cáo kết quả thực hiện, link đăng bài, ..."
    },
    {
        id: "QD11_II_6",
        code: "II.6",
        group: "II",
        groupName: "II. Kết quả thực hiện nhiệm vụ (75 điểm chuẩn)",
        name: "Thực hiện giải ngân kế hoạch đầu tư vốn ngân sách nhà nước (NSNN) hằng năm (đến hết ngày 15/12) cho KHCN, ĐMST và CĐS",
        maxScore: 10,
        ownerUnit: "phong_kinh_te",
        partner: "Văn phòng HĐND-UBND xã",
        criteriaDetail: "- Đạt từ 85% trở lên: 10 điểm\n- Từ 60% đến dưới 85%: Điểm = (Tỷ lệ giải ngân/85%) x 10, tối đa 10 điểm, làm tròn 02 chữ số\n- Dưới 60%: 0 điểm",
        guide: "Tỷ lệ giải ngân = Tổng kinh phí đã giải ngân/Tổng kinh phí được giao. Số liệu chốt đến ngày 15/12 và do cơ quan tài chính hoặc cơ quan được giao quản lý kinh phí xác nhận. Địa phương không được giao kinh phí riêng cho nhiệm vụ này thì giảm trừ điểm tối đa tương ứng.",
        evidenceRequired: "Báo cáo giải ngân, Quyết định cấp kinh phí,..."
    },
    {
        id: "QD11_II_7",
        code: "II.7",
        group: "II",
        groupName: "II. Kết quả thực hiện nhiệm vụ (75 điểm chuẩn)",
        name: "Chế độ báo cáo: Báo cáo kết quả đánh giá thực hiện Nghị quyết số 57-NQ/TW (nộp trước 15/12)",
        maxScore: 3,
        ownerUnit: "phong_vh_xh",
        partner: "Văn phòng Đảng uỷ",
        criteriaDetail: "- Báo cáo kết quả cụ thể theo từng nhiệm vụ, cập nhật đầy đủ minh chứng trên Hệ thống và gửi Cơ quan thường trực Ban Chỉ đạo trước ngày 15/12: 3 điểm\n- Không nộp báo cáo tự đánh giá hoặc không cập nhật đầy đủ minh chứng trên Hệ thống: 0 điểm",
        guide: "Có báo cáo kết quả đánh giá thực hiện Nghị quyết số 57-NQ/TW đúng thời gian, đủ nội dung và hồ sơ minh chứng theo yêu cầu trên Hệ thống.",
        evidenceRequired: "Báo cáo đánh giá, hồ sơ minh chứng trên Hệ thống."
    },

    // =========================================================================
    // IV. ĐIỂM THƯỞNG (TỐI ĐA 15 ĐIỂM)
    // =========================================================================
    {
        id: "QD11_IV_1",
        code: "IV.1",
        group: "IV",
        groupName: "IV. Điểm thưởng (Tối đa +15 điểm)",
        name: "Chủ động rà soát, kiến nghị UBND tỉnh chỉ đạo các giải pháp nâng cao hiệu quả quản lý, điều hành, giải quyết kịp thời các vấn đề, vướng mắc",
        maxScore: 2,
        ownerUnit: "phong_vh_xh",
        partner: "Văn phòng Đảng uỷ",
        criteriaDetail: "- Từ 2 giải pháp trở lên: 2 điểm\n- Có 1 giải pháp: 1 điểm",
        guide: "Chủ động tham mưu UBND tỉnh hoặc cơ quan có thẩm quyền ban hành văn bản, giải pháp có kết quả triển khai nhằm nâng cao hiệu quả quản lý, điều hành, giải quyết kịp thời vấn đề, vướng mắc tại địa phương.",
        evidenceRequired: "Văn bản của UBND tỉnh; Giải trình báo cáo kết quả nâng cao hiệu quả quản lý, điều hành, giải quyết kịp thời các vấn đề, vướng mắc."
    },
    {
        id: "QD11_IV_2",
        code: "IV.2",
        group: "IV",
        groupName: "IV. Điểm thưởng (Tối đa +15 điểm)",
        name: "Tỷ lệ giải ngân của năm đánh giá tăng so với năm trước liền kề",
        maxScore: 1,
        ownerUnit: "phong_kinh_te",
        partner: "Văn phòng HĐND và UBND xã",
        criteriaDetail: "Tỷ lệ giải ngân của năm đánh giá tăng so với năm trước liền kề: 1 điểm",
        guide: "Kết quả giải ngân về khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số năm đánh giá tăng so với năm trước liền kề",
        evidenceRequired: "Minh chứng kết quả giải ngân"
    },
    {
        id: "QD11_IV_3_1",
        code: "IV.3.1",
        group: "IV",
        groupName: "IV. Điểm thưởng (Tối đa +15 điểm)",
        name: "Hành động đột phá: Giải pháp chưa từng được áp dụng; có tư duy tiếp cận mới, đi thẳng vào giải quyết nút thắt cốt lõi",
        maxScore: 6,
        ownerUnit: "phong_vh_xh",
        partner: "Ban Chỉ đạo 57 xã",
        criteriaDetail: "- Giải pháp mang tính tiên phong, giải quyết dứt điểm điểm nghẽn hành chính hoặc kỹ thuật khó chưa đơn vị nào xử lý được: Đạt 6 điểm.\n- Giải pháp cải tiến từ mô hình cũ: Đạt tối đa 3 điểm.",
        guide: "Giải pháp được cơ quan chuyên môn cấp tỉnh, Cơ quan thường trực Ban Chỉ đạo, UBND tỉnh hoặc Ban Chỉ đạo tỉnh xác nhận/ghi nhận; không chỉ căn cứ vào việc UBND cấp xã tự công nhận.",
        evidenceRequired: "Hồ sơ minh chứng cụ thể về giải pháp; báo cáo thuyết minh, văn bản ghi nhận/xác nhận của cơ quan có thẩm quyền, kết quả triển khai thực hiện."
    },
    {
        id: "QD11_IV_3_2",
        code: "IV.3.2",
        group: "IV",
        groupName: "IV. Điểm thưởng (Tối đa +15 điểm)",
        name: "Tạo hiệu ứng truyền thông tích cực sâu rộng, truyền cảm hứng hành động và định hình xu hướng phát triển mới",
        maxScore: 3,
        ownerUnit: "phong_vh_xh",
        partner: "Đài truyền thanh xã",
        criteriaDetail: "- Có ít nhất 05 bài viết/phóng sự chuyên sâu tuyên truyền trên các cơ quan báo chí: Đạt 3 điểm.\n- Có từ 2 - 4 bài: Đạt 1,5 điểm",
        guide: "- Có ít nhất 05 bài viết/phóng sự chuyên sâu tuyên truyền trên các cơ quan báo chí: Đạt 3 điểm.\n- Có từ 2 - 4 bài: Đạt 1,5 điểm",
        evidenceRequired: "Link bài viết hoặc file bài báo được đăng, hồ sơ minh chứng nguồn gốc khác"
    },
    {
        id: "QD11_IV_3_3",
        code: "IV.3.3",
        group: "IV",
        groupName: "IV. Điểm thưởng (Tối đa +15 điểm)",
        name: "Hỗ trợ phát triển sản phẩm OCOP",
        maxScore: 1,
        ownerUnit: "phong_kinh_te",
        partner: "Hội Nông dân, HTX, các chủ thể",
        criteriaDetail: "- Hỗ trợ phát triển được ít nhất 01 sản phẩm OCOP 4 sao trở lên: 1 điểm\n- Hỗ trợ phát triển được ít nhất 01 sản phẩm OCOP 3 sao: 0,5 điểm",
        guide: "- Hỗ trợ phát triển được ít nhất 01 sản phẩm OCOP 4 sao trở lên: 1 điểm\n- Hỗ trợ phát triển được ít nhất 01 sản phẩm OCOP 3 sao: 0,5 điểm",
        evidenceRequired: "Văn bản minh chứng sản phẩm được chứng nhận"
    },
    {
        id: "QD11_IV_3_4",
        code: "IV.3.4",
        group: "IV",
        groupName: "IV. Điểm thưởng (Tối đa +15 điểm)",
        name: "Đăng ký bảo hộ quyền sở hữu trí tuệ cho tối thiểu 01 chỉ dẫn địa lý, nhãn hiệu chứng nhận hoặc nhãn hiệu tập thể",
        maxScore: 1,
        ownerUnit: "phong_kinh_te",
        partner: "Các cơ sở, hộ kinh doanh trên địa bàn",
        criteriaDetail: "Đăng ký bảo hộ quyền sở hữu trí tuệ cho tối thiểu 01 chỉ dẫn địa lý, nhãn hiệu chứng nhận hoặc nhãn hiệu tập thể có tiềm năng khai thác và phát triển tại địa phương: 1 điểm",
        guide: "Tối thiểu 01 chỉ dẫn địa lý hoặc nhãn hiệu chứng nhận hoặc nhãn hiệu tập thể có tiềm năng khai thác và phát triển tại địa phương được đăng ký bảo hộ",
        evidenceRequired: "Văn bản minh chứng"
    },
    {
        id: "QD11_IV_3_5",
        code: "IV.3.5",
        group: "IV",
        groupName: "IV. Điểm thưởng (Tối đa +15 điểm)",
        name: "Địa phương/UBND cấp xã đề xuất nhiệm vụ khoa học, công nghệ và đổi mới sáng tạo được UBND tỉnh phê duyệt",
        maxScore: 1,
        ownerUnit: "phong_kinh_te",
        partner: "Phòng Văn hoá - Xã hội",
        criteriaDetail: "Địa phương/UBND cấp xã đề xuất nhiệm vụ khoa học, công nghệ và đổi mới sáng tạo được UBND tỉnh phê duyệt triển khai thực hiện trong năm: 1 điểm",
        guide: "Đơn vị có đề xuất gửi Sở Khoa học và Công nghệ và được Hội đồng tư vấn thông qua, ban hành danh mục nhiệm vụ khoa học, công nghệ và đổi mới sáng tạo bắt đầu thực hiện trong kỳ đánh giá",
        evidenceRequired: "Quyết định phê duyệt danh mục, văn bản đề xuất nhiệm vụ"
    },

    // =========================================================================
    // V. ĐIỂM TRỪ
    // =========================================================================
    {
        id: "QD11_V_1",
        code: "V.1",
        group: "V",
        groupName: "V. Điểm trừ",
        name: "Nộp trễ hạn hồ sơ đề nghị kiểm tra, đối chiếu kết quả tự đánh giá",
        maxScore: -1,
        ownerUnit: "phong_vh_xh",
        partner: "Văn phòng Đảng uỷ",
        criteriaDetail: "Nộp trễ hạn hồ sơ đề nghị kiểm tra, đối chiếu kết quả tự đánh giá nhưng chưa quá 02 ngày so với thời hạn quy định tại Điều 6 Quy định: trừ 01 điểm; từ ngày thứ 3 trở đi trừ 01 điểm/ngày hoặc không tiếp nhận theo ngưỡng quy định, trừ trường hợp có lý do khách quan được Cơ quan thường trực chấp thuận bằng văn bản.",
        guide: "Thời điểm nộp kết quả là thời gian ghi nhận trên Hệ thống. Hồ sơ gửi sau ngày 20/12 không được tiếp nhận đánh giá, trừ trường hợp có lý do khách quan được Cơ quan thường trực chấp thuận bằng văn bản.",
        evidenceRequired: "Thời gian ghi nhận nộp hồ sơ trên Hệ thống"
    },
    {
        id: "QD11_V_2",
        code: "V.2",
        group: "V",
        groupName: "V. Điểm trừ",
        name: "Không hoàn thành công việc, nhiệm vụ được giao tại Kế hoạch năm của tỉnh",
        maxScore: -1,
        ownerUnit: "phong_vh_xh",
        partner: "Các cơ quan đơn vị",
        criteriaDetail: "Không hoàn thành công việc, nhiệm vụ được giao tại Kế hoạch năm của tỉnh: trừ 01 điểm",
        guide: "Được tính trên các nhiệm vụ được giao chủ trì. Trường hợp nhiệm vụ còn phụ thuộc yếu tố khách quan khác, địa phương phải giải trình bằng văn bản và được Cơ quan thường trực xác nhận trước khi xem xét không trừ điểm.",
        evidenceRequired: "Báo cáo đánh giá, đối chiếu của Cơ quan thường trực Ban Chỉ đạo tỉnh"
    },
    {
        id: "QD11_V_3",
        code: "V.3",
        group: "V",
        groupName: "V. Điểm trừ",
        name: "Không thực hiện chế độ báo cáo đột xuất theo yêu cầu",
        maxScore: -0.5,
        ownerUnit: "phong_vh_xh",
        partner: "Văn phòng Đảng uỷ",
        criteriaDetail: "Không thực hiện chế độ báo cáo đột xuất theo yêu cầu: trừ 0,5 điểm",
        guide: "(Cơ quan thường trực Ban Chỉ đạo cung cấp cơ sở để xác định điểm trừ này)",
        evidenceRequired: "Văn bản đôn đốc/thông báo của Cơ quan thường trực Ban Chỉ đạo tỉnh"
    },
    {
        id: "QD11_V_4",
        code: "V.4",
        group: "V",
        groupName: "V. Điểm trừ",
        name: "Điểm trừ khác do Ban Chỉ đạo quyết định",
        maxScore: -1,
        ownerUnit: "phong_vh_xh",
        partner: "Văn phòng Đảng uỷ",
        criteriaDetail: "Điểm trừ khác do Ban Chỉ đạo quyết định: trừ 01 điểm",
        guide: "Chỉ áp dụng khi có căn cứ bằng văn bản, thông báo, kết luận hoặc quyết định của Ban Chỉ đạo hoặc Cơ quan thường trực Ban Chỉ đạo.",
        evidenceRequired: "Văn bản, thông báo, kết luận hoặc quyết định của Ban Chỉ đạo hoặc Cơ quan thường trực Ban Chỉ đạo"
    }
];

// ===== DỮ LIỆU BẢNG 2: 37 NHIỆM VỤ TRỌNG TÂM KẾ HOẠCH 100 NGÀY =====
const TASKS_DATA = [
    // I. NHÓM THỂ CHẾ, CHỈ ĐẠO, ĐIỀU HÀNH
    {
        id: 1, group: "I", groupName: "Thể chế, chỉ đạo",
        name: "Rà soát các văn bản chỉ đạo, điều hành của cấp trên chưa được cụ thể hoá tại địa phương",
        ownerUnit: "vp_dang_uy", owner: "Văn phòng Đảng uỷ", partner: "Ban Chỉ đạo Nghị quyết 57 xã",
        output: "Danh mục các văn bản chưa được cụ thể hoá",
        deadline: "2026-08-15"
    },
    {
        id: 2, group: "I", groupName: "Thể chế, chỉ đạo",
        name: "Cụ thể hoá các chủ trương, chính sách, ban hành các văn bản triển khai thực hiện các nhiệm vụ của cấp trên",
        ownerUnit: "vp_dang_uy", owner: "Văn phòng Đảng uỷ", partner: "Các cơ quan, đơn vị",
        output: "Quyết định, Kế hoạch triển khai của Đảng ủy / UBND xã",
        deadline: "2026-08-30"
    },
    // II. NHÓM HẠ TẦNG SỐ
    {
        id: 3, group: "II", groupName: "Hạ tầng số",
        name: "Triển khai thực hiện Quy chế về tổ chức, quản lý, sử dụng và bảo vệ hệ thống mạng máy tính của Đảng",
        ownerUnit: "vp_dang_uy", owner: "Văn phòng Đảng uỷ", partner: "Các cơ quan khối Đảng",
        output: "Văn bản triển khai và biên bản hướng dẫn sử dụng",
        deadline: null, deadlineText: "20 ngày sau khi Tỉnh uỷ ban hành"
    },
    {
        id: 4, group: "II", groupName: "Hạ tầng số",
        name: "Rà soát, xử lý các vùng chưa phủ cáp quang băng rộng cố định, các vùng lõm sóng, thiếu điện phục vụ chuyển đổi số",
        ownerUnit: "tt_dv_snc", owner: "Trung tâm Dịch vụ, Sự nghiệp công", partner: "VNPT, Viettel, Điện lực",
        output: "100% thôn có cáp quang băng rộng; không có khu vực dân cư bị lõm sóng, thiếu điện",
        deadline: "2026-11-30"
    },
    {
        id: 5, group: "II", groupName: "Hạ tầng số",
        name: "Rà soát, thống kê nhu cầu đầu tư, mua sắm, nâng cấp trang thiết bị, phần mềm phục vụ công tác chuyển đổi số",
        ownerUnit: "tt_dv_snc", owner: "Trung tâm Dịch vụ, Sự nghiệp công", partner: "Các cơ quan, đơn vị",
        output: "Danh mục nhu cầu đầu tư, mua sắm, nâng cấp trang thiết bị, phần mềm",
        deadline: "2026-08-30"
    },
    {
        id: 6, group: "II", groupName: "Hạ tầng số",
        name: "Phân bổ kinh phí mua sắm, nâng cấp trang thiết bị; hoàn thành việc mua sắm, nâng cấp trang thiết bị, phần mềm",
        ownerUnit: "phong_kinh_te", owner: "Phòng Kinh tế", partner: "Trung tâm Dịch vụ, Sự nghiệp công, Văn phòng Đảng uỷ",
        output: "Các cơ quan, đơn vị được trang bị đầy đủ trang thiết bị, phần mềm đưa vào sử dụng",
        deadline: "2026-11-30"
    },
    {
        id: 7, group: "II", groupName: "Hạ tầng số",
        name: "Rà soát, phê duyệt cấp độ an toàn 100% hệ thống thông tin của xã; cập nhật dữ liệu phục vụ Bản đồ cấp độ an ninh mạng quốc gia",
        ownerUnit: "tt_dv_snc", owner: "Trung tâm Dịch vụ, Sự nghiệp công", partner: "Văn phòng Đảng uỷ, Văn phòng HĐND-UBND xã",
        output: "100% hệ thống có hồ sơ cấp độ được phê duyệt, cập nhật lên bảng điều hành",
        deadline: "2026-09-30"
    },
    // III. DỮ LIỆU SỐ
    {
        id: 8, group: "III", groupName: "Dữ liệu số",
        name: "Chuẩn hóa, làm sạch, đối soát dữ liệu tổ chức đảng, đảng viên toàn đảng bộ; bảo đảm dữ liệu phục vụ các hệ thống dùng chung",
        ownerUnit: "ban_xd_dang", owner: "Ban Xây dựng Đảng", partner: "Các chi bộ trực thuộc",
        output: "Tối thiểu 98% dữ liệu được chuẩn hoá, đồng bộ",
        deadline: "2026-11-30"
    },
    {
        id: 9, group: "III", groupName: "Dữ liệu số",
        name: "Chuẩn hóa, đối soát, làm sạch dữ liệu thuộc phạm vi, thẩm quyền của xã phục vụ hoàn thiện 12 CSDL quốc gia",
        ownerUnit: "tt_hc_cong", owner: "Trung tâm Hành chính công", partner: "Công an xã, Tư pháp - Hộ tịch",
        output: "Tối thiểu 80% dữ liệu đủ điều kiện được làm sạch, đồng bộ",
        deadline: "2026-11-30"
    },
    {
        id: 10, group: "III", groupName: "Dữ liệu số",
        name: "Hoàn thiện CSDL cán bộ, công chức, viên chức \"đúng, đủ, sạch, sống, thống nhất, dùng chung\", kết nối CSDL quốc gia về dân cư",
        ownerUnit: "vp_hdnd_ubnd", owner: "Văn phòng HĐND-UBND xã", partner: "Các phòng ban",
        output: "100% hồ sơ CBCCVC được chuẩn hóa",
        deadline: "2026-11-30"
    },
    {
        id: 11, group: "III", groupName: "Dữ liệu số",
        name: "Chuẩn hóa, làm sạch dữ liệu đoàn viên, hội viên, tổ chức cơ sở, giám sát - phản biện, phản ánh kiến nghị của Nhân dân",
        ownerUnit: "vp_dang_uy", owner: "Văn phòng Đảng uỷ", partner: "MTTQ & các đoàn thể chính trị - xã hội",
        output: "Dữ liệu đoàn viên, hội viên được làm sạch và chuẩn hóa",
        deadline: "2026-11-30"
    },
    // IV. NỀN TẢNG SỐ
    {
        id: 12, group: "IV", groupName: "Nền tảng số",
        name: "Vận hành ổn định, thống nhất Hệ thống thông tin điều hành tác nghiệp trong các cơ quan Đảng; ký số văn bản toàn trình",
        ownerUnit: "vp_dang_uy", owner: "Văn phòng Đảng uỷ", partner: "Các cơ quan khối Đảng",
        output: "100% văn bản được ký số, ban hành toàn trình trên hệ thống ĐHTN",
        deadline: "2026-11-30"
    },
    {
        id: 13, group: "IV", groupName: "Nền tảng số",
        name: "Hệ thống thông tin giải quyết TTHC của địa phương hoạt động thống nhất, thông suốt, ổn định",
        ownerUnit: "tt_hc_cong", owner: "Trung tâm Hành chính công", partner: "Bộ phận tiếp nhận & trả kết quả",
        output: "Tỷ lệ hồ sơ trực tuyến đạt tối thiểu 98%",
        deadline: "2026-11-30"
    },
    {
        id: 14, group: "IV", groupName: "Nền tảng số",
        name: "Rà soát, chuẩn hoá, cập nhật đầy đủ thông tin Đảng viên, tổ chức Đảng trên hệ thống giải quyết TTHC của Đảng",
        ownerUnit: "ban_xd_dang", owner: "Ban Xây dựng Đảng", partner: "Văn phòng Đảng uỷ",
        output: "100% thông tin đảng viên, tổ chức đảng được chuẩn hoá trên hệ thống",
        deadline: "2026-08-30"
    },
    {
        id: 15, group: "IV", groupName: "Nền tảng số",
        name: "Các tổ chức Đảng, đảng viên sử dụng Sổ tay Đảng viên điện tử trong sinh hoạt chi bộ",
        ownerUnit: "ban_xd_dang", owner: "Ban Xây dựng Đảng", partner: "Các chi bộ trực thuộc",
        output: "100% Đảng viên, tổ chức Đảng ứng dụng sổ tay Đảng viên điện tử",
        deadline: "2026-09-30"
    },
    // VI. KINH TẾ SỐ
    {
        id: 16, group: "VI", groupName: "Kinh tế số",
        name: "Phối hợp Sở Công thương thí điểm CSDL tập trung về thương mại điện tử",
        ownerUnit: "phong_kinh_te", owner: "Phòng Kinh tế", partner: "Sở Công thương",
        output: "Cung cấp đầy đủ dữ liệu hộ kinh doanh, doanh nghiệp TMĐT theo yêu cầu",
        deadline: "2026-09-30"
    },
    {
        id: 17, group: "VI", groupName: "Kinh tế số",
        name: "Triển khai mô hình Chợ 4.0 - Thanh toán không dùng tiền mặt tại chợ và các điểm kinh doanh",
        ownerUnit: "phong_kinh_te", owner: "Phòng Kinh tế", partner: "Ngân hàng, Viettel Money, VNPT Money",
        output: "100% tiểu thương, hộ kinh doanh có mã QR thanh toán không tiền mặt",
        deadline: "2026-10-30"
    },
    {
        id: 18, group: "VI", groupName: "Kinh tế số",
        name: "Đưa 100% sản phẩm OCOP và sản phẩm nông nghiệp chủ lực của xã lên các sàn thương mại điện tử",
        ownerUnit: "phong_kinh_te", owner: "Phòng Kinh tế", partner: "Bưu điện, Viettel Post, Hợp tác xã",
        output: "100% sản phẩm OCOP có gian hàng số, tài khoản giao dịch",
        deadline: "2026-10-30"
    },
    {
        id: 19, group: "VI", groupName: "Kinh tế số",
        name: "Xây dựng Bản đồ số du lịch văn hóa xã Công Hải, tích hợp trải nghiệm thực tế ảo (VR 360)",
        ownerUnit: "phong_vh_xh", owner: "Phòng Văn hoá - Xã hội", partner: "Phòng Kinh tế",
        output: "Bản đồ số du lịch VR 360 đưa vào phục vụ nhân dân và du khách",
        deadline: "2026-11-15"
    },
    // VII. XÃ HỘI SỐ
    {
        id: 20, group: "VII", groupName: "Xã hội số",
        name: "Cấp tài khoản định danh điện tử VNeID mức độ 2 cho 100% công dân đủ điều kiện",
        ownerUnit: "tt_hc_cong", owner: "Trung tâm Hành chính công", partner: "Công an xã, Tổ CNSCĐ",
        output: "100% công dân đủ điều kiện được kích hoạt và sử dụng VNeID mức 2",
        deadline: "2026-11-30"
    },
    {
        id: 21, group: "VII", groupName: "Xã hội số",
        name: "Triển khai chiến dịch phổ cập chữ ký số cá nhân cho người dân trưởng thành",
        ownerUnit: "tt_hc_cong", owner: "Trung tâm Hành chính công", partner: "VNPT, Viettel",
        output: "Tối thiểu 50% người dân trong độ tuổi trưởng thành có chữ ký số cá nhân",
        deadline: "2026-11-30"
    },
    {
        id: 22, group: "VII", groupName: "Xã hội số",
        name: "Triển khai Học bạ số, thanh toán học phí không dùng tiền mặt tại 100% trường học trên địa bàn",
        ownerUnit: "phong_vh_xh", owner: "Phòng Văn hoá - Xã hội", partner: "Các trường học trên địa bàn",
        output: "100% học sinh có học bạ số; 100% trường học không dùng tiền mặt",
        deadline: "2026-10-30"
    },
    {
        id: 23, group: "VII", groupName: "Xã hội số",
        name: "Tạo lập Sổ sức khỏe điện tử trên ứng dụng VNeID cho người dân trên địa bàn xã",
        ownerUnit: "phong_vh_xh", owner: "Phòng Văn hoá - Xã hội", partner: "Trạm Y tế xã, Công an xã",
        output: "Tối thiểu 90% người dân có hồ sơ Sổ sức khỏe điện tử trên VNeID",
        deadline: "2026-11-30"
    },
    {
        id: 24, group: "VII", groupName: "Xã hội số",
        name: "Ứng dụng nền tảng số trong tiếp nhận, xử lý phản ánh kiến nghị của Nhân dân (\"Mặt trận số 24/7\")",
        ownerUnit: "vp_dang_uy", owner: "Văn phòng Đảng uỷ", partner: "Uỷ ban MTTQ VN xã",
        output: "100% phản ánh, kiến nghị được tiếp nhận và xử lý trên nền tảng số",
        deadline: "2026-10-30"
    },
    // VIII. NGUỒN NHÂN LỰC
    {
        id: 25, group: "VIII", groupName: "Nguồn nhân lực",
        name: "Phổ cập kỹ năng số cộng đồng thông qua nền tảng học trực tuyến mở \"Bình dân học vụ số\"",
        ownerUnit: "phong_vh_xh", owner: "Phòng Văn hoá - Xã hội", partner: "Đoàn Thanh niên, Tổ CNSCĐ",
        output: "Tối thiểu 80% người dân trong độ tuổi lao động có kỹ năng số cơ bản",
        deadline: "2026-11-15"
    },
    {
        id: 26, group: "VIII", groupName: "Nguồn nhân lực",
        name: "Tổ chức tập huấn kỹ năng số nâng cao, an toàn thông tin cho 100% cán bộ, công chức, viên chức",
        ownerUnit: "vp_hdnd_ubnd", owner: "Văn phòng HĐND-UBND xã", partner: "Phòng Văn hoá - Xã hội",
        output: "100% CBCCVC hoàn thành khóa học và được cấp chứng chỉ đầu ra",
        deadline: "2026-09-30"
    },
    {
        id: 27, group: "VIII", groupName: "Nguồn nhân lực",
        name: "Kiện toàn nhân sự phụ trách CĐS; bố trí đúng định mức nhân lực theo dõi CĐS và KHCN",
        ownerUnit: "vp_hdnd_ubnd", owner: "Văn phòng HĐND-UBND xã", partner: "Phòng Kinh tế, Phòng Văn hoá - Xã hội",
        output: "Quyết định phân công cán bộ chuyên trách/phụ trách đúng quy định",
        deadline: "2026-08-30"
    },
    // IX. TÀI CHÍNH, GIẢI NGÂN
    {
        id: 28, group: "IX", groupName: "Tài chính, giải ngân",
        name: "Bảo đảm phân bổ và giải ngân kinh phí thực hiện các nhiệm vụ chuyển đổi số năm 2026",
        ownerUnit: "phong_kinh_te", owner: "Phòng Kinh tế", partner: "Văn phòng HĐND-UBND xã",
        output: "Tỷ lệ giải ngân vốn NSNN cho CĐS đạt tối thiểu 85% trước ngày 15/12/2026",
        deadline: "2026-11-30"
    },
    // X. KỶ LUẬT THỰC THI
    {
        id: 29, group: "X", groupName: "Kỷ luật thực thi",
        name: "Vận hành Bảng điều hành theo dõi tiến độ 100 ngày; duy trì chế độ báo cáo tuần, tháng",
        ownerUnit: "vp_dang_uy", owner: "Văn phòng Đảng uỷ", partner: "Phòng Văn hoá - Xã hội",
        output: "Bảng theo dõi được cập nhật thường xuyên; báo cáo tuần, tháng đúng hạn",
        deadline: null, deadlineText: "Hàng tuần / Hàng tháng"
    },
    {
        id: 30, group: "X", groupName: "Kỷ luật thực thi",
        name: "Tổ chức sơ kết, tổng kết đánh giá kết quả triển khai Kế hoạch 100 ngày làm việc",
        ownerUnit: "vp_dang_uy", owner: "Văn phòng Đảng uỷ", partner: "Phòng Văn hoá - Xã hội",
        output: "Báo cáo tổng kết chiến dịch 100 ngày làm việc và đề xuất giải pháp tiếp theo",
        deadline: "2026-11-30"
    },
    {
        id: 31, group: "X", groupName: "Kỷ luật thực thi",
        name: "Đề xuất biểu dương, khen thưởng các tập thể, cá nhân có thành tích xuất sắc trong chiến dịch 100 ngày",
        ownerUnit: "vp_hdnd_ubnd", owner: "Văn phòng HĐND-UBND xã", partner: "Văn phòng Đảng uỷ, Phòng Văn hoá - Xã hội",
        output: "Danh sách và Quyết định khen thưởng của cấp có thẩm quyền",
        deadline: "2026-11-30"
    },
    {
        id: 32, group: "X", groupName: "Kỷ luật thực thi",
        name: "Kiểm điểm, phê bình, xử lý trách nhiệm đối với các đơn vị, cá nhân để chậm trễ tiến độ",
        ownerUnit: "vp_dang_uy", owner: "Văn phòng Đảng uỷ", partner: "Uỷ ban Kiểm tra Đảng uỷ",
        output: "Thông báo kết luận và xử lý trách nhiệm (nếu có vi phạm)",
        deadline: "2026-11-30"
    },
    // ===== CÁC NHIỆM VỤ BỔ SUNG ĐẢM BẢO CHUẨN QUY ĐỊNH 11 =====
    {
        id: 33, group: "I", groupName: "Thể chế, chỉ đạo",
        name: "Kiểm tra, giám sát chuyên đề công tác chuyển đổi số trong các tổ chức Đảng trực thuộc",
        ownerUnit: "ubkt_dang_uy", owner: "Uỷ ban Kiểm tra Đảng uỷ", partner: "Văn phòng Đảng uỷ",
        output: "Kế hoạch và Biên bản kiểm tra tối thiểu 30% tổ chức, bộ phận trực thuộc trong năm",
        deadline: "2026-10-15"
    },
    {
        id: 34, group: "VII", groupName: "Xã hội số",
        name: "Chiến dịch truyền thông toàn diện về NQ 57 qua tuyên truyền trực tiếp, loa truyền thanh và mạng xã hội",
        ownerUnit: "phong_vh_xh", owner: "Phòng Văn hoá - Xã hội", partner: "Đài truyền thanh xã, các đoàn thể",
        output: "Đạt ≥100 lượt người tham gia trực tiếp và ≥100 tin, bài đăng phát trên loa đài, cổng TTĐT",
        deadline: null, deadlineText: "Thường xuyên trong năm"
    },
    {
        id: 35, group: "VIII", groupName: "Nguồn nhân lực",
        name: "Xây dựng và ban hành Kế hoạch đào tạo, bồi dưỡng về KHCN, ĐMST và CĐS năm 2026 của xã",
        ownerUnit: "phong_vh_xh", owner: "Phòng Văn hoá - Xã hội", partner: "Văn phòng HĐND-UBND xã",
        output: "Kế hoạch đào tạo, bồi dưỡng được UBND xã ký ban hành chính thức",
        deadline: "2026-08-15"
    },
    {
        id: 36, group: "VIII", groupName: "Nguồn nhân lực",
        name: "Tham mưu chính sách hỗ trợ, đãi ngộ và khen thưởng cán bộ, công chức làm công tác chuyển đổi số",
        ownerUnit: "vp_hdnd_ubnd", owner: "Văn phòng HĐND-UBND xã", partner: "Phòng Kinh tế",
        output: "Văn bản đề xuất chế độ hỗ trợ nhân lực CĐS gửi cơ quan có thẩm quyền",
        deadline: "2026-09-30"
    },
    {
        id: 37, group: "VI", groupName: "Kinh tế số",
        name: "Hỗ trợ xây dựng hồ sơ công nhận sản phẩm OCOP 4 sao và đăng ký bảo hộ sở hữu trí tuệ nông sản xã",
        ownerUnit: "phong_kinh_te", owner: "Phòng Kinh tế", partner: "Hợp tác xã, các hộ sản xuất",
        output: "Tối thiểu 01 sản phẩm OCOP đạt 3-4 sao và 01 nhãn hiệu được Cục SHTT tiếp nhận đơn hợp lệ",
        deadline: "2026-11-15"
    }
];

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

// ===== CAMPAIGN & DEADLINE DATES =====
const CAMPAIGN_START = new Date(2026, 6, 10); // July 10, 2026
const CAMPAIGN_END = new Date(2026, 10, 30);  // November 30, 2026
const QD11_DEADLINE = new Date(2026, 11, 15); // December 15, 2026

// ===== SUPABASE CONFIG =====
const SUPABASE_URL = 'https://llxxbefotqfbpglsbnqb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxseHhiZWZvdHFmYnBnbHNibnFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1Nzk5NzAsImV4cCI6MjEwMjE1NTk3MH0.fDJoF03m1dzaIFgXuQcoQPZJwPEKDG2e5QY2KYUm6qc';

// ===== AUTH CONFIG =====
const ADMIN_PASSWORD_HASH = 'de9a3388e74f6d73087ed9e17a0328eed12d8e078e4231b6ed57691a7fb4f5ee';
const AUTH_SESSION_KEY = 'tracker_100days_auth';
let isAdmin = false;

// ===== STATE (DECOUPLED & INDEPENDENT) =====
let currentBoard = 'qd11'; // Default: QD11 as the benchmark
let qd11States = {};       // { [criteriaId]: { name, maxScore, guide, selfScore, evidenceUrl, note, ownerUnit } }
let taskStates = {};       // { [taskId]: { name, ownerUnit, partner, output, deadline, deadlineText, status, note } }

const QD11_STORAGE_KEY = "tracker_qd11_conghai_v1";
const KH100_STORAGE_KEY = "tracker_100days_conghhai";

// Helper lấy thông tin tiêu chí QĐ 11 sau khi áp dụng các chỉnh sửa của Admin
function getEffectiveQd11(c) {
    if (!c) return c;
    const custom = qd11States[c.id] || {};
    return {
        ...c,
        name: custom.name !== undefined && custom.name !== "" ? custom.name : c.name,
        maxScore: custom.maxScore !== undefined && custom.maxScore !== null && !isNaN(parseFloat(custom.maxScore)) ? parseFloat(custom.maxScore) : c.maxScore,
        guide: custom.guide !== undefined && custom.guide !== "" ? custom.guide : c.guide,
        ownerUnit: custom.ownerUnit || c.ownerUnit
    };
}

// Helper lấy thông tin nhiệm vụ KH 100 ngày sau khi áp dụng các chỉnh sửa của Admin
function getEffectiveTask(t) {
    if (!t) return t;
    const custom = taskStates[t.id] || {};
    return {
        ...t,
        name: custom.name !== undefined && custom.name !== "" ? custom.name : t.name,
        ownerUnit: custom.ownerUnit || t.ownerUnit,
        partner: custom.partner !== undefined ? custom.partner : t.partner,
        output: custom.output !== undefined && custom.output !== "" ? custom.output : t.output,
        deadline: custom.deadline !== undefined ? custom.deadline : t.deadline,
        deadlineText: custom.deadlineText !== undefined ? custom.deadlineText : (t.deadlineText || null)
    };
}

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
    } catch (e) {}
}

function setAuthSession(authenticated) {
    isAdmin = authenticated;
    try {
        if (authenticated) {
            sessionStorage.setItem(AUTH_SESSION_KEY, 'authenticated');
        } else {
            sessionStorage.removeItem(AUTH_SESSION_KEY);
        }
    } catch (e) {}
    updateAdminUI();
}

function updateAdminUI() {
    const btn = document.getElementById('btn-admin');
    const btnText = document.getElementById('btn-admin-text');
    if (!btn) return;

    if (isAdmin) {
        btn.classList.add('unlocked');
        btnText.textContent = 'Super Admin';
        btn.title = 'Đang ở quyền Quản trị — nhấn để đăng xuất';
        btn.querySelector('svg').innerHTML = '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>';
    } else {
        btn.classList.remove('unlocked');
        btnText.textContent = 'Đăng nhập';
        btn.title = 'Đăng nhập Super Admin';
        btn.querySelector('svg').innerHTML = '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>';
    }

    if (currentBoard === 'qd11') {
        renderQd11Table();
    } else {
        renderTasks();
    }
}

function showAccessDenied() {
    showToast('Chỉ Quản trị viên mới có quyền cập nhật dữ liệu. Nhấn "Đăng nhập" ở góc trên.', 'warning', 3500);
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
        console.warn("Lỗi khởi tạo Supabase:", e);
    }
    return false;
}

function setConnectionStatus(status) {
    const badge = document.getElementById("connection-badge");
    if (!badge) return;

    badge.classList.remove("online", "offline", "syncing");
    const text = badge.querySelector(".connection-text");

    switch (status) {
        case "online":
            badge.classList.add("online");
            text.textContent = "Đã kết nối";
            isOnline = true;
            break;
        case "offline":
            badge.classList.add("offline");
            text.textContent = "Offline";
            isOnline = false;
            break;
        case "syncing":
            badge.classList.add("syncing");
            text.textContent = "Đồng bộ...";
            break;
        case "local":
            badge.classList.add("offline");
            text.textContent = "Offline";
            isOnline = false;
            break;
    }
}

// ===== STORAGE HELPERS (DECOUPLED & INDEPENDENT) =====
function loadFromLocalStorage() {
    try {
        const savedQd11 = localStorage.getItem(QD11_STORAGE_KEY);
        if (savedQd11) qd11States = JSON.parse(savedQd11);

        const savedKh100 = localStorage.getItem(KH100_STORAGE_KEY);
        if (savedKh100) taskStates = JSON.parse(savedKh100);
    } catch (e) {}
}

function saveQd11ToLocalStorage() {
    try {
        localStorage.setItem(QD11_STORAGE_KEY, JSON.stringify(qd11States));
    } catch (e) {}
}

function saveKh100ToLocalStorage() {
    try {
        localStorage.setItem(KH100_STORAGE_KEY, JSON.stringify(taskStates));
    } catch (e) {}
}

// ===== SUPABASE OPERATIONS =====
async function loadFromSupabase() {
    if (!supabaseClient) return false;
    try {
        setConnectionStatus("syncing");

        const { data: taskData, error: taskError } = await supabaseClient
            .from('task_states')
            .select('*');

        if (!taskError && taskData && taskData.length > 0) {
            taskData.forEach(row => {
                taskStates[row.task_id] = {
                    status: row.status,
                    note: row.note || '',
                    ...(row.owner_unit ? { ownerUnit: row.owner_unit } : {})
                };
            });
            saveKh100ToLocalStorage();
        }

        const { data: qd11Data, error: qd11Error } = await supabaseClient
            .from('qd11_states')
            .select('*');

        if (!qd11Error && qd11Data && qd11Data.length > 0) {
            qd11Data.forEach(row => {
                qd11States[row.id] = {
                    selfScore: parseFloat(row.self_score) || 0,
                    evidenceUrl: row.evidence_url || '',
                    note: row.note || '',
                    ...(row.owner_unit ? { ownerUnit: row.owner_unit } : {})
                };
            });
            saveQd11ToLocalStorage();
        }

        setConnectionStatus("online");
        return true;
    } catch (e) {
        setConnectionStatus("offline");
        return false;
    }
}

async function saveKh100ToSupabase(taskId, status, note, ownerUnit) {
    if (!supabaseClient || !isOnline) return false;
    try {
        const payload = {
            task_id: taskId,
            status: status,
            note: note || '',
            updated_at: new Date().toISOString()
        };
        if (ownerUnit) payload.owner_unit = ownerUnit;
        const { error } = await supabaseClient
            .from('task_states')
            .upsert(payload, { onConflict: 'task_id' });
        return !error;
    } catch (e) {
        return false;
    }
}

async function saveQd11ToSupabase(criteriaId, selfScore, evidenceUrl, note, ownerUnit) {
    if (!supabaseClient || !isOnline) return false;
    try {
        const payload = {
            id: criteriaId,
            cycle_type: 'annual',
            period: '2026',
            self_score: selfScore,
            evidence_url: evidenceUrl || '',
            note: note || '',
            updated_at: new Date().toISOString()
        };
        if (ownerUnit) payload.owner_unit = ownerUnit;
        const { error } = await supabaseClient
            .from('qd11_states')
            .upsert(payload, { onConflict: 'id' });
        return !error;
    } catch (e) {
        return false;
    }
}

function subscribeRealtime() {
    if (!supabaseClient) return;
    try {
        realtimeChannel = supabaseClient
            .channel('dashboard-changes')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'task_states' }, (payload) => {
                const row = payload.new;
                if (row && row.task_id) {
                    taskStates[row.task_id] = {
                        status: row.status,
                        note: row.note || '',
                        ...(row.owner_unit ? { ownerUnit: row.owner_unit } : (taskStates[row.task_id]?.ownerUnit ? { ownerUnit: taskStates[row.task_id].ownerUnit } : {}))
                    };
                    saveKh100ToLocalStorage();
                    if (currentBoard === 'kh100') {
                        renderTasks();
                        updateStats();
                        updateProgressRing();
                        updateGroupBars();
                    }
                }
            })
            .on('postgres_changes', { event: '*', schema: 'public', table: 'qd11_states' }, (payload) => {
                const row = payload.new;
                if (row && row.id) {
                    qd11States[row.id] = {
                        selfScore: parseFloat(row.self_score) || 0,
                        evidenceUrl: row.evidence_url || '',
                        note: row.note || '',
                        ...(row.owner_unit ? { ownerUnit: row.owner_unit } : (qd11States[row.id]?.ownerUnit ? { ownerUnit: qd11States[row.id].ownerUnit } : {}))
                    };
                    saveQd11ToLocalStorage();
                    if (currentBoard === 'qd11') {
                        renderQd11Table();
                        updateQd11Stats();
                    }
                }
            })
            .subscribe();
    } catch (e) {}
}

async function loadState() {
    loadFromLocalStorage();

    TASKS_DATA.forEach(t => {
        if (!taskStates[t.id]) taskStates[t.id] = { status: "in_progress", note: "" };
    });

    QD11_ANNUAL_DATA.forEach(c => {
        if (!qd11States[c.id]) qd11States[c.id] = { selfScore: 0, evidenceUrl: "", note: "" };
    });

    if (initSupabase()) {
        const ok = await loadFromSupabase();
        if (ok) subscribeRealtime();
    } else {
        setConnectionStatus("local");
    }
}

// =============================================================================
// BOARD SWITCHER
// =============================================================================
function switchBoard(boardName) {
    currentBoard = boardName;

    const btnQd11 = document.getElementById("tab-btn-qd11");
    const btnKh100 = document.getElementById("tab-btn-kh100");
    const viewQd11 = document.getElementById("view-qd11-board");
    const viewKh100 = document.getElementById("view-kh100-board");

    if (boardName === 'qd11') {
        btnQd11.classList.add("active");
        btnKh100.classList.remove("active");
        viewQd11.classList.add("active");
        viewKh100.classList.remove("active");

        renderQd11Table();
        updateQd11Stats();
    } else {
        btnKh100.classList.add("active");
        btnQd11.classList.remove("active");
        viewKh100.classList.add("active");
        viewQd11.classList.remove("active");

        renderTimeline();
        renderTasks();
        updateStats();
        updateProgressRing();
        updateGroupBars();
    }
}

// =============================================================================
// BẢNG 1: QUY ĐỊNH 11 (CẢ NĂM)
// =============================================================================
function calculateQd11Scores() {
    let regularScore = 0; // Groups I and II (Max 85)
    let bonusScore = 0;   // Group IV (Max 15)
    let penaltyScore = 0; // Group V

    QD11_ANNUAL_DATA.forEach(c => {
        const eff = getEffectiveQd11(c);
        const state = qd11States[c.id] || { selfScore: 0 };
        const score = parseFloat(state.selfScore) || 0;

        if (eff.group === "I" || eff.group === "II") {
            regularScore += score;
        } else if (eff.group === "IV") {
            bonusScore += score;
        } else if (eff.group === "V") {
            penaltyScore += score;
        }
    });

    regularScore = Math.min(85, Math.max(0, regularScore));
    bonusScore = Math.min(15, Math.max(0, bonusScore));
    penaltyScore = Math.abs(penaltyScore);

    let totalScore = regularScore + bonusScore - penaltyScore;
    totalScore = Math.max(0, Math.min(100, Math.round(totalScore * 100) / 100));

    let rank = "Loại D";
    let rankClass = "rank-d";
    let rankDesc = "Không hoàn thành (<50đ)";

    if (totalScore >= 90) {
        rank = "Loại A";
        rankClass = "rank-a";
        rankDesc = "Hoàn thành xuất sắc (≥90đ)";
    } else if (totalScore >= 75) {
        rank = "Loại B";
        rankClass = "rank-b";
        rankDesc = "Hoàn thành tốt (75-89đ)";
    } else if (totalScore >= 50) {
        rank = "Loại C";
        rankClass = "rank-c";
        rankDesc = "Hoàn thành nhiệm vụ (50-74đ)";
    }

    return { regularScore, bonusScore, penaltyScore, totalScore, rank, rankClass, rankDesc };
}

function updateQd11Stats() {
    const scores = calculateQd11Scores();

    // 1. Total score
    const totalEl = document.getElementById("qd11-total-score");
    if (totalEl) totalEl.textContent = `${scores.totalScore} / 100`;

    // 2. Bonus & Penalty
    const bonusEl = document.getElementById("qd11-bonus-score");
    if (bonusEl) bonusEl.textContent = `+${scores.bonusScore} / -${scores.penaltyScore}`;

    // 3. Rank
    const badgeEl = document.getElementById("qd11-rank-badge");
    const descEl = document.getElementById("qd11-rank-desc");
    if (badgeEl && descEl) {
        badgeEl.textContent = scores.rank;
        badgeEl.className = `rank-badge ${scores.rankClass}`;
        descEl.textContent = scores.rankDesc;
    }

    // 4. Days left until 15/12/2026
    const now = new Date();
    const diffMs = QD11_DEADLINE - now;
    const daysLeft = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
    const daysEl = document.getElementById("qd11-days-left");
    if (daysEl) daysEl.textContent = `${daysLeft} ngày`;
}

function populateQd11Filters() {
    const ownerSelect = document.getElementById("qd11-filter-owner");
    if (!ownerSelect) return;

    ownerSelect.innerHTML = `<option value="all">Tất cả cơ quan</option>`;
    Object.values(UNITS_DATA).forEach(u => {
        const opt = document.createElement("option");
        opt.value = u.id;
        opt.textContent = u.name;
        ownerSelect.appendChild(opt);
    });
}

function renderQd11Table() {
    const tbody = document.getElementById("qd11-tbody");
    if (!tbody) return;

    const search = (document.getElementById("qd11-search-input")?.value || "").toLowerCase().trim();
    const filterGroup = document.getElementById("qd11-filter-group")?.value || "all";
    const filterOwner = document.getElementById("qd11-filter-owner")?.value || "all";

    const filtered = QD11_ANNUAL_DATA.filter(c => {
        const eff = getEffectiveQd11(c);
        if (filterGroup !== "all" && eff.group !== filterGroup) return false;
        if (filterOwner !== "all" && eff.ownerUnit !== filterOwner) return false;
        if (search) {
            const unit = UNITS_DATA[eff.ownerUnit];
            const textToSearch = `${eff.code} ${eff.name} ${eff.guide} ${unit?.name || ''}`.toLowerCase();
            if (!textToSearch.includes(search)) return false;
        }
        return true;
    });

    tbody.innerHTML = "";
    document.getElementById("qd11-count").textContent = `${filtered.length} tiêu chí`;

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="empty-state">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <p>Không tìm thấy tiêu chí phù hợp</p>
        </td></tr>`;
        return;
    }

    let currentGroup = null;
    filtered.forEach(c => {
        const eff = getEffectiveQd11(c);
        if (eff.group !== currentGroup) {
            currentGroup = eff.group;
            const headerRow = document.createElement("tr");
            headerRow.className = "group-header-row";
            headerRow.innerHTML = `<td colspan="7">${eff.groupName}</td>`;
            tbody.appendChild(headerRow);
        }

        const state = qd11States[c.id] || { selfScore: 0, evidenceUrl: "", note: "" };
        const unit = UNITS_DATA[eff.ownerUnit] || UNITS_DATA["phong_vh_xh"];

        const row = document.createElement("tr");

        let scoreClass = "empty";
        if (state.selfScore > 0) {
            scoreClass = eff.group === "IV" ? "bonus" : "self";
        } else if (state.selfScore < 0) {
            scoreClass = "penalty";
        }

        // Evidence display
        let evidenceHtml = `<span class="evidence-empty-text">Chưa có</span>`;
        if (state.evidenceUrl) {
            evidenceHtml = `
                <div class="evidence-box">
                    <a href="${state.evidenceUrl}" target="_blank" rel="noopener noreferrer" class="evidence-link-btn">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                        Minh chứng
                    </a>
                    ${state.note ? `<div class="evidence-note-text">${escapeHtml(state.note)}</div>` : ''}
                </div>`;
        } else if (state.note) {
            evidenceHtml = `<div class="evidence-note-text">${escapeHtml(state.note)}</div>`;
        }

        let ownerCellHtml = '';
        if (isAdmin) {
            ownerCellHtml = `
                <select class="owner-select qd11-owner-select" data-id="${c.id}" title="Chọn cơ quan chủ trì">
                    ${getUnitOptionsHtml(eff.ownerUnit)}
                </select>
            `;
        } else {
            ownerCellHtml = `
                <span class="unit-badge ${unit.badgeClass}">
                    ${unit.name}
                </span>
            `;
        }

        row.innerHTML = `
            <td class="col-qd11-code" data-label="Mã">${eff.code}</td>
            <td class="col-qd11-name" data-label="">
                <div class="qd11-criteria-title">${escapeHtml(eff.name)}</div>
                <div class="qd11-criteria-guide">${escapeHtml(eff.guide)}</div>
            </td>
            <td class="col-qd11-max" data-label="Chuẩn">
                <span class="qd11-score-pill max">${eff.maxScore > 0 ? (eff.group === 'IV' ? '+' + eff.maxScore : eff.maxScore) : eff.maxScore}đ</span>
            </td>
            <td class="col-qd11-self" data-label="Tự chấm">
                <span class="qd11-score-pill ${scoreClass}">${state.selfScore > 0 && eff.group === 'IV' ? '+' : ''}${state.selfScore}đ</span>
            </td>
            <td class="col-qd11-owner" data-label="Chủ trì">${ownerCellHtml}</td>
            <td class="col-qd11-evidence" data-label="Minh chứng">${evidenceHtml}</td>
            <td class="col-qd11-action" data-label="">
                <button class="btn-edit-qd11 ${state.selfScore ? 'has-score' : ''}" data-id="${c.id}" title="${isAdmin ? 'Sửa tiêu chí / Điểm chuẩn / Chấm điểm' : 'Xem chi tiết'}">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    <span>${isAdmin ? 'Sửa/Chấm' : 'Xem'}</span>
                </button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

// Modal QD11
let currentQd11Id = null;

function openQd11Modal(criteriaId) {
    currentQd11Id = criteriaId;
    const criteria = QD11_ANNUAL_DATA.find(c => c.id === criteriaId);
    if (!criteria) return;

    const eff = getEffectiveQd11(criteria);
    const state = qd11States[criteriaId] || { selfScore: 0, evidenceUrl: "", note: "" };

    const titleEl = document.getElementById("qd11-modal-title");
    if (titleEl) titleEl.textContent = `Tiêu chí ${eff.code}: ${eff.name}`;

    const codeEl = document.getElementById("modal-qd11-code");
    if (codeEl) codeEl.textContent = eff.code;

    const groupEl = document.getElementById("modal-qd11-group");
    if (groupEl) groupEl.textContent = eff.groupName || `Nhóm ${eff.group}`;

    // Tên / Nội dung tiêu chí (cho phép Admin sửa)
    const nameInput = document.getElementById("modal-qd11-name");
    if (nameInput) {
        nameInput.value = eff.name;
        nameInput.readOnly = !isAdmin;
    }

    // Điểm chuẩn tối đa (cho phép Admin sửa)
    const maxScoreInput = document.getElementById("modal-qd11-maxscore-input");
    if (maxScoreInput) {
        maxScoreInput.value = eff.maxScore;
        maxScoreInput.disabled = !isAdmin;
    }

    // Cơ quan chủ trì
    const ownerSelect = document.getElementById("modal-qd11-owner-select");
    if (ownerSelect) {
        ownerSelect.innerHTML = getUnitOptionsHtml(eff.ownerUnit);
        ownerSelect.value = eff.ownerUnit;
        ownerSelect.disabled = !isAdmin;
    }

    // Hướng dẫn chấm điểm / Căn cứ
    const guideInput = document.getElementById("modal-qd11-guide-edit");
    if (guideInput) {
        guideInput.value = eff.guide || "";
        guideInput.readOnly = !isAdmin;
    }

    // Điểm tự chấm
    const scoreInput = document.getElementById("modal-qd11-selfscore");
    if (scoreInput) {
        scoreInput.value = state.selfScore !== undefined ? state.selfScore : 0;
        if (eff.group === "V") {
            scoreInput.min = "-10";
            scoreInput.max = "0";
        } else {
            scoreInput.min = "0";
            scoreInput.max = eff.maxScore.toString();
        }
        scoreInput.disabled = !isAdmin;
    }

    // Minh chứng & Giải trình
    const evidenceInput = document.getElementById("modal-qd11-evidence");
    if (evidenceInput) {
        evidenceInput.value = state.evidenceUrl || "";
        evidenceInput.disabled = !isAdmin;
    }

    const hintEl = document.getElementById("modal-qd11-evidence-hint");
    if (hintEl) {
        hintEl.textContent = eff.evidenceRequired ? `Yêu cầu minh chứng: ${eff.evidenceRequired}` : "";
    }

    const noteInput = document.getElementById("modal-qd11-note");
    if (noteInput) {
        noteInput.value = state.note || "";
        noteInput.disabled = !isAdmin;
    }

    // Nút Lưu
    const saveBtn = document.getElementById("qd11-modal-save");
    if (saveBtn) {
        saveBtn.style.display = isAdmin ? "" : "none";
    }

    document.getElementById("qd11-modal").classList.add("active");
    if (isAdmin && scoreInput) {
        scoreInput.focus();
    }
}

function closeQd11Modal() {
    document.getElementById("qd11-modal").classList.remove("active");
    currentQd11Id = null;
}

async function saveQd11Criteria() {
    if (!currentQd11Id || !isAdmin) return;

    const criteria = QD11_ANNUAL_DATA.find(c => c.id === currentQd11Id);
    if (!criteria) return;

    const nameInput = document.getElementById("modal-qd11-name");
    const maxScoreInput = document.getElementById("modal-qd11-maxscore-input");
    const guideInput = document.getElementById("modal-qd11-guide-edit");
    const ownerSelect = document.getElementById("modal-qd11-owner-select");
    const scoreInput = document.getElementById("modal-qd11-selfscore");
    const evidenceInput = document.getElementById("modal-qd11-evidence");
    const noteInput = document.getElementById("modal-qd11-note");

    const newName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : criteria.name;
    const newMaxScore = maxScoreInput && maxScoreInput.value !== "" ? parseFloat(maxScoreInput.value) : criteria.maxScore;
    const newGuide = guideInput ? guideInput.value.trim() : (criteria.guide || "");
    const selectedOwner = ownerSelect ? ownerSelect.value : ((qd11States[currentQd11Id]?.ownerUnit) || criteria.ownerUnit);

    let score = scoreInput ? (parseFloat(scoreInput.value) || 0) : 0;
    if (criteria.group !== "V") {
        if (score < 0) score = 0;
        if (newMaxScore > 0 && score > newMaxScore) score = newMaxScore;
    } else {
        if (score > 0) score = 0;
    }

    const evidence = evidenceInput ? evidenceInput.value.trim() : "";
    const note = noteInput ? noteInput.value.trim() : "";

    const prevState = qd11States[currentQd11Id] || {};
    qd11States[currentQd11Id] = {
        ...prevState,
        name: newName,
        maxScore: newMaxScore,
        guide: newGuide,
        selfScore: score,
        evidenceUrl: evidence,
        note: note,
        ownerUnit: selectedOwner
    };

    saveQd11ToLocalStorage();
    await saveQd11ToSupabase(currentQd11Id, score, evidence, note, selectedOwner);

    renderQd11Table();
    updateQd11Stats();
    closeQd11Modal();
    showToast(`Đã lưu tiêu chí ${criteria.code} (Điểm chuẩn: ${newMaxScore}đ, Tự chấm: ${score}đ)`);
}

// =============================================================================
// BẢNG 2: KẾ HOẠCH 100 NGÀY (37 NHIỆM VỤ)
// =============================================================================
function countWorkingDays(startDate, endDate) {
    if (startDate > endDate) return 0;
    let count = 0;
    let cur = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

    while (cur <= end) {
        const dayOfWeek = cur.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) count++;
        cur.setDate(cur.getDate() + 1);
    }
    return count;
}

function renderTimeline() {
    const now = new Date();
    const totalWorkingDays = 100;
    let elapsedWorkingDays = 0;
    if (now >= CAMPAIGN_START) {
        elapsedWorkingDays = countWorkingDays(CAMPAIGN_START, now);
    }
    const remainingWorkingDays = Math.max(0, totalWorkingDays - elapsedWorkingDays);
    const pct = Math.min(100, Math.max(0, (elapsedWorkingDays / totalWorkingDays) * 100));

    const elapsedEl = document.getElementById("days-elapsed");
    const remainingEl = document.getElementById("days-remaining");
    if (elapsedEl) elapsedEl.textContent = elapsedWorkingDays;
    if (remainingEl) remainingEl.textContent = remainingWorkingDays;

    const progressBar = document.getElementById("timeline-progress");
    if (progressBar) {
        setTimeout(() => {
            progressBar.style.width = pct + "%";
        }, 200);
    }
}

function populateKh100Filters() {
    const groupSelect = document.getElementById("filter-group");
    const ownerSelect = document.getElementById("filter-owner");

    if (groupSelect) {
        groupSelect.innerHTML = `<option value="all">Tất cả nhóm</option>`;
        GROUP_ORDER.forEach(g => {
            const opt = document.createElement("option");
            opt.value = g;
            opt.textContent = `${g}. ${GROUP_NAMES[g]}`;
            groupSelect.appendChild(opt);
        });
    }

    if (ownerSelect) {
        ownerSelect.innerHTML = `<option value="all">Tất cả cơ quan</option>`;
        Object.values(UNITS_DATA).forEach(u => {
            const opt = document.createElement("option");
            opt.value = u.id;
            opt.textContent = u.name;
            ownerSelect.appendChild(opt);
        });
    }
}

function getTaskState(id) {
    return taskStates[id] || { status: "in_progress", note: "" };
}

function getEffectiveStatus(task, state) {
    if (state.status === "completed") return "completed";
    if (state.status === "overdue") return "overdue";
    if (task.deadline && state.status !== "completed") {
        const dl = new Date(task.deadline);
        const now = new Date();
        if (now > dl) return "overdue";
    }
    return "in_progress";
}

function getDeadlineDisplay(task) {
    if (!task.deadline) {
        return { text: task.deadlineText || "—", class: "deadline-ok" };
    }
    const dl = new Date(task.deadline);
    const now = new Date();
    const diffDays = Math.ceil((dl - now) / (1000 * 60 * 60 * 24));
    const formatted = dl.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });

    const state = getTaskState(task.id);
    const effStatus = getEffectiveStatus(task, state);
    if (effStatus === "completed") {
        return { text: formatted, class: "deadline-ok" };
    }

    if (diffDays < 0) {
        return { text: `${formatted} (quá hạn ${Math.abs(diffDays)} ngày)`, class: "deadline-overdue" };
    } else if (diffDays <= 14) {
        return { text: `${formatted} (còn ${diffDays} ngày)`, class: "deadline-soon" };
    }
    return { text: formatted, class: "deadline-ok" };
}

function renderTasks() {
    const tbody = document.getElementById("tasks-tbody");
    if (!tbody) return;

    const search = (document.getElementById("search-input")?.value || "").toLowerCase().trim();
    const filterGroup = document.getElementById("filter-group")?.value || "all";
    const filterStatus = document.getElementById("filter-status")?.value || "all";
    const filterOwner = document.getElementById("filter-owner")?.value || "all";

    const filtered = TASKS_DATA.filter(t => {
        const eff = getEffectiveTask(t);
        if (filterGroup !== "all" && eff.group !== filterGroup) return false;
        if (filterOwner !== "all" && eff.ownerUnit !== filterOwner) return false;
        const state = getTaskState(t.id);
        const effectiveStatus = getEffectiveStatus(eff, state);
        if (filterStatus !== "all" && effectiveStatus !== filterStatus) return false;
        if (search) {
            const unit = UNITS_DATA[eff.ownerUnit];
            const textToSearch = `${eff.id} ${eff.name} ${eff.output} ${eff.partner || ''} ${unit?.name || ''}`.toLowerCase();
            if (!textToSearch.includes(search)) return false;
        }
        return true;
    });

    tbody.innerHTML = "";
    document.getElementById("tasks-count").textContent = `${filtered.length} nhiệm vụ`;

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="empty-state">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <p>Không tìm thấy nhiệm vụ phù hợp</p>
        </td></tr>`;
        return;
    }

    let currentGroup = null;

    filtered.forEach(t => {
        const eff = getEffectiveTask(t);
        if (eff.group !== currentGroup) {
            currentGroup = eff.group;
            const headerRow = document.createElement("tr");
            headerRow.className = "group-header-row";
            headerRow.innerHTML = `<td colspan="8">${eff.group}. ${GROUP_NAMES[eff.group]}</td>`;
            tbody.appendChild(headerRow);
        }

        const state = getTaskState(t.id);
        const effectiveStatus = getEffectiveStatus(eff, state);
        const unit = UNITS_DATA[eff.ownerUnit] || UNITS_DATA["vp_hdnd_ubnd"];
        const deadlineInfo = getDeadlineDisplay(eff);

        let ownerCellHtml = '';
        if (isAdmin) {
            ownerCellHtml = `
                <select class="owner-select task-owner-select" data-id="${t.id}" title="Chọn cơ quan chủ trì">
                    ${getUnitOptionsHtml(eff.ownerUnit)}
                </select>
            `;
        } else {
            ownerCellHtml = `
                <span class="unit-badge ${unit.badgeClass}">
                    ${unit.name}
                </span>
            `;
        }

        const row = document.createElement("tr");

        row.innerHTML = `
            <td class="col-stt" data-label="STT">${eff.id}</td>
            <td class="col-group" data-label=""><span class="group-tag">${eff.group}</span></td>
            <td class="col-task" data-label="">
                <div class="task-name">${escapeHtml(eff.name)}</div>
                ${eff.partner ? `<div class="task-partner">Phối hợp: ${escapeHtml(eff.partner)}</div>` : ""}
            </td>
            <td class="col-owner" data-label="Chủ trì">${ownerCellHtml}</td>
            <td class="col-output" data-label="Sản phẩm">${escapeHtml(eff.output)}</td>
            <td class="col-deadline" data-label="Thời hạn"><span class="deadline-text ${deadlineInfo.class}">${deadlineInfo.text}</span></td>
            <td class="col-status" data-label="Trạng thái">
                <select class="status-select ${!isAdmin ? 'readonly' : ''}" data-id="${t.id}" data-status="${effectiveStatus}">
                    <option value="in_progress" ${effectiveStatus === "in_progress" ? "selected" : ""}>🔶 Đang làm</option>
                    <option value="completed" ${effectiveStatus === "completed" ? "selected" : ""}>✅ Hoàn thành</option>
                    <option value="overdue" ${effectiveStatus === "overdue" ? "selected" : ""}>🔴 Chậm</option>
                </select>
            </td>
            <td class="col-note" data-label="">
                <button class="btn-note ${state.note ? "has-note" : ""}" data-id="${t.id}" title="${isAdmin ? 'Sửa nhiệm vụ / Cập nhật tiến độ' : (state.note || 'Xem chi tiết')}">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    ${isAdmin ? 'Sửa' : (state.note ? 'Xem' : 'Chi tiết')}
                </button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

function updateStats() {
    let completed = 0, inProgress = 0, overdue = 0;
    TASKS_DATA.forEach(t => {
        const eff = getEffectiveTask(t);
        const state = getTaskState(t.id);
        const effStatus = getEffectiveStatus(eff, state);
        if (effStatus === "completed") completed++;
        else if (effStatus === "overdue") overdue++;
        else inProgress++;
    });

    animateNumber("stat-total-num", TASKS_DATA.length);
    animateNumber("stat-completed-num", completed);
    animateNumber("stat-inprogress-num", inProgress);
    animateNumber("stat-overdue-num", overdue);
}

function animateNumber(elementId, target) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const current = parseInt(el.textContent) || 0;
    if (current === target) return;
    const diff = target - current;
    const steps = 15;
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
    }, 20);
}

function addProgressGradient() {
    const svg = document.querySelector(".progress-ring");
    if (!svg || svg.querySelector("defs")) return;
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
        const eff = getEffectiveTask(t);
        const state = getTaskState(t.id);
        if (getEffectiveStatus(eff, state) === "completed") completed++;
    });

    const total = TASKS_DATA.length;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    const circumference = 2 * Math.PI * 70;
    const offset = circumference - (pct / 100) * circumference;

    const ring = document.getElementById("progress-ring-fill");
    if (ring) {
        setTimeout(() => {
            ring.style.strokeDashoffset = offset;
        }, 400);
    }
    const percentEl = document.getElementById("progress-percent");
    if (percentEl) percentEl.textContent = `(${pct}%)`;
}

function updateGroupBars() {
    const container = document.getElementById("group-progress-bars");
    if (!container) return;
    container.innerHTML = "";

    GROUP_ORDER.forEach(g => {
        const groupTasks = TASKS_DATA.filter(t => t.group === g);
        const completed = groupTasks.filter(t => {
            const eff = getEffectiveTask(t);
            const state = getTaskState(t.id);
            return getEffectiveStatus(eff, state) === "completed";
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

// KH100 Modal
let currentNoteId = null;

function openNoteModal(id) {
    currentNoteId = id;
    const task = TASKS_DATA.find(t => t.id === id);
    if (!task) return;

    const eff = getEffectiveTask(task);
    const state = getTaskState(id);
    const effectiveStatus = getEffectiveStatus(eff, state);

    document.getElementById("modal-title").textContent = `Nhiệm vụ #${id}: ${eff.name}`;

    // Tên nhiệm vụ (cho phép Admin sửa)
    const nameInput = document.getElementById("modal-task-name");
    if (nameInput) {
        nameInput.value = eff.name;
        nameInput.readOnly = !isAdmin;
    }

    // Cơ quan chủ trì
    const ownerSelect = document.getElementById("modal-task-owner-select");
    if (ownerSelect) {
        ownerSelect.innerHTML = getUnitOptionsHtml(eff.ownerUnit);
        ownerSelect.value = eff.ownerUnit;
        ownerSelect.disabled = !isAdmin;
    }

    // Cơ quan phối hợp
    const partnerInput = document.getElementById("modal-task-partner");
    if (partnerInput) {
        partnerInput.value = eff.partner || "";
        partnerInput.readOnly = !isAdmin;
    }

    // Sản phẩm đầu ra
    const outputInput = document.getElementById("modal-task-output");
    if (outputInput) {
        outputInput.value = eff.output || "";
        outputInput.readOnly = !isAdmin;
    }

    // Thời hạn hoàn thành
    const deadlineInput = document.getElementById("modal-task-deadline");
    if (deadlineInput) {
        deadlineInput.value = eff.deadline || eff.deadlineText || "";
        deadlineInput.readOnly = !isAdmin;
    }

    // Trạng thái thực hiện
    const statusSelect = document.getElementById("modal-task-status");
    if (statusSelect) {
        statusSelect.value = effectiveStatus;
        statusSelect.disabled = !isAdmin;
    }

    // Ghi chú / Minh chứng
    const textarea = document.getElementById("modal-note");
    if (textarea) {
        textarea.value = state.note || "";
        textarea.readOnly = !isAdmin;
        textarea.placeholder = isAdmin ? "Nhập ghi chú, tiến độ, minh chứng hoàn thành..." : "Chưa có ghi chú/minh chứng";
    }

    // Nút Lưu
    const saveBtn = document.getElementById("modal-save");
    if (saveBtn) {
        saveBtn.style.display = isAdmin ? "" : "none";
    }

    document.getElementById("note-modal").classList.add("active");
    if (isAdmin && nameInput) {
        nameInput.focus();
    }
}

function closeNoteModal() {
    document.getElementById("note-modal").classList.remove("active");
    currentNoteId = null;
}

async function saveNote() {
    if (currentNoteId === null || !isAdmin) return;

    const task = TASKS_DATA.find(t => t.id === currentNoteId);
    if (!task) return;

    const nameInput = document.getElementById("modal-task-name");
    const ownerSelect = document.getElementById("modal-task-owner-select");
    const partnerInput = document.getElementById("modal-task-partner");
    const outputInput = document.getElementById("modal-task-output");
    const deadlineInput = document.getElementById("modal-task-deadline");
    const statusSelect = document.getElementById("modal-task-status");
    const noteTextarea = document.getElementById("modal-note");

    const newName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : task.name;
    const selectedOwner = ownerSelect ? ownerSelect.value : task.ownerUnit;
    const newPartner = partnerInput ? partnerInput.value.trim() : (task.partner || "");
    const newOutput = outputInput && outputInput.value.trim() ? outputInput.value.trim() : task.output;
    const rawDeadline = deadlineInput ? deadlineInput.value.trim() : "";
    const newStatus = statusSelect ? statusSelect.value : "in_progress";
    const newNote = noteTextarea ? noteTextarea.value.trim() : "";

    let newDeadline = null;
    let newDeadlineText = null;
    if (rawDeadline) {
        const isDatePattern = /^\d{4}-\d{2}-\d{2}$/.test(rawDeadline);
        if (isDatePattern && !isNaN(Date.parse(rawDeadline))) {
            newDeadline = rawDeadline;
            newDeadlineText = null;
        } else {
            newDeadline = null;
            newDeadlineText = rawDeadline;
        }
    }

    const prevState = taskStates[currentNoteId] || {};
    taskStates[currentNoteId] = {
        ...prevState,
        name: newName,
        ownerUnit: selectedOwner,
        partner: newPartner,
        output: newOutput,
        deadline: newDeadline,
        deadlineText: newDeadlineText,
        status: newStatus,
        note: newNote
    };

    saveKh100ToLocalStorage();
    await saveKh100ToSupabase(currentNoteId, newStatus, newNote, selectedOwner);

    renderTasks();
    updateStats();
    updateProgressRing();
    updateGroupBars();
    closeNoteModal();
    showToast(`Đã lưu thay đổi nhiệm vụ #${currentNoteId}`);
}

// =============================================================================
// AUTH MODAL
// =============================================================================
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
        showToast('Đăng nhập Super Admin thành công');
    } else {
        document.getElementById("auth-error").textContent = 'Mật khẩu không chính xác';
        document.getElementById("auth-password").value = '';
        document.getElementById("auth-password").focus();
    }
}

// =============================================================================
// EXPORT MODAL
// =============================================================================
let currentExportTab = 'qd11';

function openExportModal() {
    currentExportTab = currentBoard;
    updateExportTabUI();
    renderExportContent();
    document.getElementById("export-modal").classList.add("active");
}

function closeExportModal() {
    document.getElementById("export-modal").classList.remove("active");
}

function updateExportTabUI() {
    const btnQd11 = document.getElementById("btn-export-tab-qd11");
    const btnKh100 = document.getElementById("btn-export-tab-kh100");
    if (currentExportTab === 'qd11') {
        btnQd11.classList.add("active");
        btnKh100.classList.remove("active");
    } else {
        btnKh100.classList.add("active");
        btnQd11.classList.remove("active");
    }
}

function renderExportContent() {
    const content = document.getElementById("export-content");
    const now = new Date();
    const dateStr = now.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });

    if (currentExportTab === 'qd11') {
        const scores = calculateQd11Scores();
        let html = `
            <div class="export-report">
                <h2>BÁO CÁO TỰ ĐÁNH GIÁ NGHỊ QUYẾT SỐ 57-NQ/TW (QUY ĐỊNH 11)<br>ĐẢNG BỘ XÃ CÔNG HẢI</h2>
                <p style="text-align:center;color:var(--text-muted);margin-bottom:1.5rem;">Ngày báo cáo: ${dateStr}</p>

                <div class="summary-stats">
                    <div class="summary-stat"><span class="num" style="color:var(--accent-primary);">100</span><span class="label">Điểm chuẩn</span></div>
                    <div class="summary-stat"><span class="num" style="color:var(--status-completed);">${scores.totalScore}</span><span class="label">Tổng điểm tự chấm</span></div>
                    <div class="summary-stat"><span class="num" style="color:var(--status-progress);">+${scores.bonusScore}</span><span class="label">Điểm thưởng</span></div>
                    <div class="summary-stat"><span class="num" style="color:#2563eb;">${scores.rank}</span><span class="label">${scores.rankDesc}</span></div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th style="width:60px;">Mã</th>
                            <th>Nội dung tiêu chí</th>
                            <th style="width:70px;">Chuẩn</th>
                            <th style="width:70px;">Tự chấm</th>
                            <th>Chủ trì</th>
                            <th>Minh chứng / Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>`;

        QD11_ANNUAL_DATA.forEach(c => {
            const eff = getEffectiveQd11(c);
            const state = qd11States[c.id] || { selfScore: 0, evidenceUrl: "", note: "" };
            const unit = UNITS_DATA[eff.ownerUnit] || UNITS_DATA["phong_vh_xh"];
            html += `<tr>
                <td style="text-align:center;font-weight:700;">${eff.code}</td>
                <td><strong>${escapeHtml(eff.name)}</strong>${eff.guide ? `<br><small style="color:#64748b;">${escapeHtml(eff.guide)}</small>` : ''}</td>
                <td style="text-align:center;">${eff.maxScore}</td>
                <td style="text-align:center;font-weight:700;color:var(--accent-primary);">${state.selfScore}</td>
                <td>${unit?.name || 'Phòng Văn hoá - Xã hội'}</td>
                <td>${state.evidenceUrl ? `<div>Link: ${escapeHtml(state.evidenceUrl)}</div>` : ''}${state.note ? `<div>${escapeHtml(state.note)}</div>` : '—'}</td>
            </tr>`;
        });

        html += `</tbody></table></div>`;
        content.innerHTML = html;
    } else {
        let completed = 0, inProgress = 0, overdue = 0;
        TASKS_DATA.forEach(t => {
            const eff = getEffectiveTask(t);
            const effStatus = getEffectiveStatus(eff, getTaskState(t.id));
            if (effStatus === "completed") completed++;
            else if (effStatus === "overdue") overdue++;
            else inProgress++;
        });

        const totalWorkingDays = 100;
        let elapsedWorkingDays = 0;
        if (now >= CAMPAIGN_START) {
            elapsedWorkingDays = countWorkingDays(CAMPAIGN_START, now);
        }
        const pctTime = Math.round((elapsedWorkingDays / totalWorkingDays) * 100);
        const pctTask = Math.round((completed / TASKS_DATA.length) * 100);

        let html = `
            <div class="export-report">
                <h2>BÁO CÁO TIẾN ĐỘ 100 NGÀY LÀM VIỆC — XÃ CÔNG HẢI</h2>
                <p style="text-align:center;color:var(--text-muted);margin-bottom:1.5rem;">Ngày báo cáo: ${dateStr} | Tiến độ thời gian: ${pctTime}% (${elapsedWorkingDays}/${totalWorkingDays} ngày)</p>

                <div class="summary-stats">
                    <div class="summary-stat"><span class="num" style="color:var(--accent-primary);">${TASKS_DATA.length}</span><span class="label">Tổng nhiệm vụ</span></div>
                    <div class="summary-stat"><span class="num" style="color:var(--status-completed);">${completed}</span><span class="label">Hoàn thành (${pctTask}%)</span></div>
                    <div class="summary-stat"><span class="num" style="color:var(--status-progress);">${inProgress}</span><span class="label">Đang thực hiện</span></div>
                    <div class="summary-stat"><span class="num" style="color:var(--status-overdue);">${overdue}</span><span class="label">Chậm tiến độ</span></div>
                </div>`;

        GROUP_ORDER.forEach(g => {
            const groupTasks = TASKS_DATA.filter(t => t.group === g);
            html += `<h3>${g}. ${GROUP_NAMES[g]}</h3>`;
            html += `<table><thead><tr><th style="width:45px;">STT</th><th>Nhiệm vụ</th><th>Chủ trì</th><th>Sản phẩm đầu ra</th><th>Thời hạn</th><th>Trạng thái</th><th>Ghi chú</th></tr></thead><tbody>`;

            groupTasks.forEach(t => {
                const eff = getEffectiveTask(t);
                const state = getTaskState(t.id);
                const effStatus = getEffectiveStatus(eff, state);
                const dl = getDeadlineDisplay(eff);
                const unit = UNITS_DATA[eff.ownerUnit] || UNITS_DATA["vp_hdnd_ubnd"];
                html += `<tr>
                    <td style="text-align:center;">${eff.id}</td>
                    <td><strong>${escapeHtml(eff.name)}</strong>${eff.partner ? `<br><small style="color:#64748b;">Phối hợp: ${escapeHtml(eff.partner)}</small>` : ''}</td>
                    <td>${unit?.name || 'Văn phòng HĐND-UBND xã'}</td>
                    <td>${escapeHtml(eff.output)}</td>
                    <td>${dl.text}</td>
                    <td>${STATUS_LABELS[effStatus]}</td>
                    <td>${escapeHtml(state.note || "")}</td>
                </tr>`;
            });
            html += `</tbody></table>`;
        });

        html += `</div>`;
        content.innerHTML = html;
    }
}

// =============================================================================
// EVENT LISTENERS
// =============================================================================
function setupEventListeners() {
    // Board Switcher
    document.getElementById("tab-btn-qd11").addEventListener("click", () => switchBoard('qd11'));
    document.getElementById("tab-btn-kh100").addEventListener("click", () => switchBoard('kh100'));

    // Admin
    document.getElementById("btn-admin").addEventListener("click", () => {
        if (isAdmin) {
            setAuthSession(false);
            showToast('Đã đăng xuất khỏi Super Admin');
        } else {
            openAuthModal();
        }
    });

    // QD11 Filters
    document.getElementById("qd11-filter-group")?.addEventListener("change", renderQd11Table);
    document.getElementById("qd11-filter-owner")?.addEventListener("change", renderQd11Table);
    let qd11Timer;
    document.getElementById("qd11-search-input")?.addEventListener("input", () => {
        clearTimeout(qd11Timer);
        qd11Timer = setTimeout(renderQd11Table, 180);
    });

    // QD11 Table Clicks & Changes
    document.getElementById("qd11-tbody")?.addEventListener("click", (e) => {
        const editBtn = e.target.closest(".btn-edit-qd11");
        if (editBtn) {
            openQd11Modal(editBtn.dataset.id);
        }
    });

    document.getElementById("qd11-tbody")?.addEventListener("change", async (e) => {
        if (e.target.classList.contains("qd11-owner-select")) {
            if (!isAdmin) {
                showAccessDenied();
                renderQd11Table();
                return;
            }
            const criteriaId = e.target.dataset.id;
            const newOwner = e.target.value;
            if (!qd11States[criteriaId]) {
                qd11States[criteriaId] = { selfScore: 0, evidenceUrl: "", note: "" };
            }
            qd11States[criteriaId].ownerUnit = newOwner;
            saveQd11ToLocalStorage();
            const cur = qd11States[criteriaId];
            await saveQd11ToSupabase(criteriaId, cur.selfScore, cur.evidenceUrl, cur.note, newOwner);
            const unitName = UNITS_DATA[newOwner]?.name || newOwner;
            showToast(`Đã chuyển cơ quan chủ trì: ${unitName}`);
            renderQd11Table();
        }
    });

    // QD11 Modal Buttons
    document.getElementById("qd11-modal-close")?.addEventListener("click", closeQd11Modal);
    document.getElementById("qd11-modal-cancel")?.addEventListener("click", closeQd11Modal);
    document.getElementById("qd11-modal-save")?.addEventListener("click", saveQd11Criteria);
    document.getElementById("qd11-modal")?.addEventListener("click", (e) => {
        if (e.target === e.currentTarget) closeQd11Modal();
    });

    // KH100 Filters
    ["filter-group", "filter-status", "filter-owner"].forEach(id => {
        document.getElementById(id)?.addEventListener("change", renderTasks);
    });
    let kh100Timer;
    document.getElementById("search-input")?.addEventListener("input", () => {
        clearTimeout(kh100Timer);
        kh100Timer = setTimeout(renderTasks, 180);
    });

    // KH100 Table Clicks & Changes
    document.getElementById("tasks-tbody")?.addEventListener("mousedown", (e) => {
        const select = e.target.closest(".status-select, .owner-select");
        if (select && !isAdmin) {
            e.preventDefault();
            e.stopPropagation();
            showAccessDenied();
            return false;
        }
    });

    document.getElementById("tasks-tbody")?.addEventListener("change", async (e) => {
        if (e.target.classList.contains("task-owner-select")) {
            if (!isAdmin) {
                showAccessDenied();
                renderTasks();
                return;
            }
            const id = parseInt(e.target.dataset.id);
            const newOwner = e.target.value;
            const curState = getTaskState(id);
            taskStates[id] = { ...curState, ownerUnit: newOwner };
            saveKh100ToLocalStorage();
            await saveKh100ToSupabase(id, curState.status, curState.note, newOwner);
            const unitName = UNITS_DATA[newOwner]?.name || newOwner;
            showToast(`Đã chuyển chủ trì nhiệm vụ #${id}: ${unitName}`);
            renderTasks();
        } else if (e.target.classList.contains("status-select")) {
            if (!isAdmin) {
                const id = parseInt(e.target.dataset.id);
                e.target.value = getEffectiveStatus(TASKS_DATA.find(t => t.id === id), getTaskState(id));
                showAccessDenied();
                return;
            }

            const id = parseInt(e.target.dataset.id);
            const newStatus = e.target.value;
            const curState = getTaskState(id);

            taskStates[id] = { ...curState, status: newStatus };
            saveKh100ToLocalStorage();
            await saveKh100ToSupabase(id, newStatus, curState.note, curState.ownerUnit);

            updateStats();
            updateProgressRing();
            updateGroupBars();
            showToast(`Nhiệm vụ #${id} → ${STATUS_LABELS[newStatus]}`);
            renderTasks();
        }
    });

    document.getElementById("tasks-tbody")?.addEventListener("click", (e) => {
        const btn = e.target.closest(".btn-note");
        if (btn) {
            openNoteModal(parseInt(btn.dataset.id));
        }
    });

    // KH100 Note Modal
    document.getElementById("modal-close")?.addEventListener("click", closeNoteModal);
    document.getElementById("modal-cancel")?.addEventListener("click", closeNoteModal);
    document.getElementById("modal-save")?.addEventListener("click", saveNote);
    document.getElementById("note-modal")?.addEventListener("click", (e) => {
        if (e.target === e.currentTarget) closeNoteModal();
    });

    // Auth Modal
    document.getElementById("auth-modal-close")?.addEventListener("click", closeAuthModal);
    document.getElementById("auth-cancel")?.addEventListener("click", closeAuthModal);
    document.getElementById("auth-submit")?.addEventListener("click", submitAuth);
    document.getElementById("auth-modal")?.addEventListener("click", (e) => {
        if (e.target === e.currentTarget) closeAuthModal();
    });
    document.getElementById("btn-toggle-pw")?.addEventListener("click", () => {
        const input = document.getElementById("auth-password");
        input.type = input.type === 'password' ? 'text' : 'password';
    });
    document.getElementById("auth-password")?.addEventListener("keydown", (e) => {
        if (e.key === "Enter") submitAuth();
    });

    // Export Modal
    document.getElementById("btn-export")?.addEventListener("click", openExportModal);
    document.getElementById("export-modal-close")?.addEventListener("click", closeExportModal);
    document.getElementById("export-cancel")?.addEventListener("click", closeExportModal);
    document.getElementById("export-modal")?.addEventListener("click", (e) => {
        if (e.target === e.currentTarget) closeExportModal();
    });
    document.getElementById("btn-export-tab-qd11")?.addEventListener("click", () => {
        currentExportTab = 'qd11';
        updateExportTabUI();
        renderExportContent();
    });
    document.getElementById("btn-export-tab-kh100")?.addEventListener("click", () => {
        currentExportTab = 'kh100';
        updateExportTabUI();
        renderExportContent();
    });

    // Keyboard Esc
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeQd11Modal();
            closeNoteModal();
            closeExportModal();
            closeAuthModal();
        }
    });
}

function renderDate() {
    const now = new Date();
    const opts = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const dateEl = document.getElementById("current-date");
    if (dateEl) dateEl.textContent = now.toLocaleDateString("vi-VN", opts);
}

function escapeHtml(str) {
    if (!str) return "";
    return str.replace(/[&<>"']/g, (m) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    })[m]);
}

function showToast(message, type = 'success', duration = 2500) {
    const container = document.getElementById("toast-container");
    if (!container) return;
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
        setTimeout(() => toast.remove(), 250);
    }, duration);
}

// ===== MAIN INIT =====
document.addEventListener("DOMContentLoaded", async () => {
    checkAuthSession();
    await loadState();

    renderDate();
    populateQd11Filters();
    populateKh100Filters();

    switchBoard('qd11');

    setupEventListeners();
    addProgressGradient();

    window.addEventListener("online", async () => {
        if (supabaseClient) {
            setConnectionStatus("syncing");
            await loadFromSupabase();
            setConnectionStatus("online");
        }
    });

    window.addEventListener("offline", () => {
        if (supabaseClient) setConnectionStatus("offline");
    });
});
