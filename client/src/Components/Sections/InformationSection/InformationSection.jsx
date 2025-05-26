import React from "react";

const InformationSection = () => {
  return (
    <>
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-5">
          <div className="md:w-1/2">
            <img
              src="https://static-gcdn.basecdn.net/landing/base.vn/image/v2/reward%20graphic.svg"
              alt="Base VN"
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 space-y-5">
            <p className="text-gray-500 text-sm font-semibold uppercase">
              Mở rộng không giới hạn
            </p>
            <h2 className="text-2xl text-purple-400">
              Các ứng dụng độc đáo, dễ sử dụng và hiệu năng cao được phát triển
              và ra mắt liên tục
            </h2>
            <p className="text-gray-500 text-md">
              Nhiều hơn một ứng dụng công nghệ, Base.vn được xây dựng với khả
              năng mở rộng vô hạn: Không chỉ với các ứng dụng hiện có, các ứng
              dụng mới để giải quyết các bài toán khác nhau trong doanh nghiệp
              được liên tục phát triển và ra mắt.
            </p>
            <p className="text-gray-500 text-md">
              Mỗi ứng dụng trên Base.vn đều mang lại hiệu quả, tính chuyên biệt
              và trải nghiệm sử dụng tuyệt vời, giúp nhân viên của bạn làm việc
              tốt hơn mỗi ngày.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-5">
          <div className="md:w-1/2 space-y-5">
            <p className="text-gray-500 text-sm font-semibold uppercase">
              Tích hợp toàn diện
            </p>
            <h2 className="text-2xl text-blue-400">
              Dễ dàng tích hợp tất cả các ứng dụng với nhau, tạo ra một trải
              nghiệm xuyên suốt
            </h2>
            <p className="text-gray-500 text-md">
              Trong kỷ nguyên cách mạng số, Base cùng bạn nâng cao năng lực cạnh
              tranh của doanh nghiệp trên tất cả mặt trận với các vũ khí công
              nghệ tối tân nhất. Nền tảng mở này cho phép công ty của bạn tiếp
              cận và áp dụng nhanh chóng các sản phẩm công nghệ tiên tiến trên
              thế giới từ rất nhiều công ty công nghệ hàng đầu.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://static-gcdn.basecdn.net/landing/base.vn/image/v2/idea.svg"
              alt="Base VN"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationSection;
