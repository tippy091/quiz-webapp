import React from "react";
import Carousel from "react-multi-carousel";
import Banner1 from "../../../assets/Banners/banner03.png";
import Banner2 from "../../../assets/Banners/banner04.png";
import Banner3 from "../../../assets/Banners/banner05.png";
import SmallBannerSection from "../SmallBannerSection/SmallBannerSection";
import { useNavigate } from "react-router-dom";

const BannerSection = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#2051C7]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-20 text-white">
        {/* Bên trái: Nội dung */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            Nền tảng quản trị
            <br /> doanh nghiệp toàn diện
          </h1>
          <p className="text-lg text-gray-300">
            Giải pháp quản trị tiên phong được tin dùng bởi 10.000 doanh nghiệp
            tại Việt Nam
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-white text-[#0B4DFF] hover:scale-[1.15] font-semibold px-6 py-3 rounded-full shadow hover:shadow-lg transition"
          >
            Đăng ký Demo
          </button>
        </div>

        {/* Bên phải: Hình ảnh minh họa */}
        <div className="mt-10 md:mt-0">
          <img
            src="https://static-gcdn.basecdn.net/landing/base.vn/image/v2/home.svg"
            alt="Base.vn Illustration"
            className="w-full max-w-2xl"
          />
        </div>
      </div>
      <div className="w-full flex justify-center my-10">
        <div className="w-[90%] h-px bg-white/30"></div>
      </div>
      <div className="bg-[#2051C7] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Hệ điều hành doanh nghiệp 4.0
          </h2>
          <p className="text-lg text-slate-200 mb-12 max-w-3xl mx-auto">
            Tích hợp tất cả các ứng dụng doanh nghiệp của bạn đang cần trên cùng
            một nền tảng duy nhất.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Work+",
                desc: "Bộ giải pháp quản lý công việc, quy trình và nâng cao năng suất",
                img: "https://static-gcdn.basecdn.net/landing/base.vn/image/v2/pack.work.svg",
                href: "https://base.vn/platform/work",
              },
              {
                title: "Info+",
                desc: "Bộ giải pháp quản trị thông tin và giao tiếp nội bộ",
                img: "https://static-gcdn.basecdn.net/landing/base.vn/image/v2/pack.info.svg",
                href: "https://base.vn/platform/info",
              },
              {
                title: "HRM+",
                desc: "Bộ giải pháp quản trị nhân sự và phát triển con người toàn diện",
                img: "https://static-gcdn.basecdn.net/landing/base.vn/image/v2/pack.hrm.svg",
                href: "https://base.vn/platform/hrm",
              },
              {
                title: "Finance+",
                desc: "Bộ giải pháp quản trị tài chính doanh nghiệp",
                img: "https://static-gcdn.basecdn.net/landing/base.vn/image/v2/pack.sales.svg",
                href: "https://base.vn/platform/finance",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#2F5FE4] rounded-lg p-6 flex flex-col items-center text-white hover:shadow-xl transition-shadow duration-300"
              >
                <img src={item.img} alt={item.title} className="h-36 mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-200 mb-4 text-center">
                  {item.desc}
                </p>
                <a
                  href={item.href}
                  className="mt-auto bg-[#4067E5] hover:bg-[#1d4ed8] px-4 py-2 rounded-md text-sm font-semibold"
                >
                  XEM THÊM
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
