import React from "react";

const SmallBannerSection = () => {
  return (
    <div className="w-full bg-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-20">
        <div className="md:w-1/2">
          <img
            src="https://static-gcdn.basecdn.net/landing/base.vn/image/v2/platform.svg"
            alt="Base VN"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 space-y-5">
          <p className="text-red-600 font-semibold uppercase">
            Nền tảng quản trị doanh nghiệp toàn diện
          </p>
          <h3 className="text-3xl font-light text-[#6075e0]">
            Được tin dùng bởi 10,000+ doanh nghiệp
          </h3>
          <p className="text-base text-gray-800 leading-relaxed">
            Ra đời tháng 8/2016, Base.vn được biết đến là một trong những công
            ty công nghệ đi đầu trong lĩnh vực xây dựng nền tảng quản trị doanh
            nghiệp Software-as-a-Service (Saas) tại Việt Nam. Base.vn giúp doanh
            nghiệp từ quản lý công việc, quản lý thông tin, quản trị nhân sự và
            quản trị tài chính.
          </p>
          <p className="text-base text-gray-800 leading-relaxed">
            Hiện tại, với hơn 60 ứng dụng được xây dựng và cải tiến mỗi ngày,
            Base.vn chính là nền tảng hỗ trợ hoạt động vận hành và quản trị cho
            10,000+ doanh nghiệp hàng đầu Việt Nam ở đa khu vực trải dài trên
            nhiều lĩnh vực: ngân hàng, giáo dục, xây dựng, sản xuất, phân phối
            thương mại, y tế, F&B...
          </p>
          <p className="text-base text-gray-800 leading-relaxed">
            Tất cả các ứng dụng trên Base có thể sử dụng dễ dàng trên trình
            duyệt, smartphone (iOS, Android), máy tính bảng, hoặc cài đặt trên
            máy tính để bàn. Tất cả các ứng dụng chính đều hỗ trợ đa ngôn ngữ
            (Tiếng Việt, English) và nâng cấp liên tục.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmallBannerSection;
