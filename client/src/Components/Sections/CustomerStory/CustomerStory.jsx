import React from "react";

const CustomerStory = () => {
  return (
    <div className="w-full bg-slate-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Tiêu Đề */}
        <div className="text-center mb-12">
          <h3 className="text-3xl">Câu chuyện khách hàng</h3>
          <p className="text-gray-500 mt-2">
            Những doanh nghiệp dẫn đầu và những doanh nghiệp tăng trưởng đã lựa
            chọn Base để làm việc hiệu quả hơn
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-5">
          <NewsCard
            url="https://static-gcdn.basecdn.net/landing/base.vn/image/v2/press/thai-vj.jpg"
            title="Thai VJ hợp tác cùng base.vn: quyết tâm 'cất cánh' chuyển đổi số"
            desc="Sau 8 tháng chuẩn hóa quy trình và hệ thống toàn bộ..."
          />
          <NewsCard
            url="https://static-gcdn.basecdn.net/landing/base.vn/image/v2/press/cdcn.jpg"
            title="Trường Cao đẳng Công nghiệp Bắc Ninh - Đơn vị giáo dục công tiên phong chuyển đổi số"
            desc="Là đơn vị giáo dục nghề nghiệp đầu tàu của tỉnh..."
          />
          <NewsCard
            url="https://static-gcdn.basecdn.net/landing/base.vn/image/v2/press/arteco.jpg"
            title="Arteco và câu chuyện làm nghề bằng tri thức, khoa học và công nghệ"
            desc="Base giúp chúng tôi đảm bảo thông tin thông suốt..."
          />
          <NewsCard
            url="https://static-gcdn.basecdn.net/landing/base.vn/image/v2/press/boston-pharma.jpg"
            title="Boston Pharma 'bắt tay' hợp tác chiến lược chuyển đổi số cùng Base.vn"
            desc="Sau 8 tháng chuẩn hóa quy trình và hệ thống toàn bộ..."
          />
          <NewsCard
            url="https://static-gcdn.basecdn.net/landing/base.vn/image/v2/press/247-express.jpg"
            title="247Express số hóa toàn diện hơn 200 bưu cục cùng Base.vn"
            desc="247Express nhanh chóng tiếp cận công nghệ, chuyển.."
          />
          <NewsCard
            url="https://static-gcdn.basecdn.net/landing/base.vn/image/v2/press/lienhung.jpg"
            title="Liên Hưng Construction số hoá cùng Base, tăng sức mạnh nội tại khai phá thị trường Phú Quốc"
            desc="Là một trong những nhà thầu xây dựng tại Phú Quốc..."
          />
        </div>
      </div>
    </div>
  );
};

const NewsCard = ({ url, title, desc }) => (
  <>
    <div className="bg-white p-6 space-y-4 transition-all hover:scale-[1.02]">
      <img src={url} alt={title}></img>
      <h3 className="text-sm text-blue-400 font-medium px-4 py-2">{title}</h3>
      <p className="px-4 text-gray-500 text-sm">{desc}</p>
      <button
        className={`px-4 text-gray-500 text-sm font-medium transition-all hover:scale-[1.02]`}
      >
        XEM CHI TIẾT
      </button>
    </div>
  </>
);
export default CustomerStory;
