import React from "react";

const FeaturedAppSection = () => {
  return (
    <div className="w-full bg-white py-6">
      <div className="max-w-7xl mx-auto">
        {/* Tiêu Đề */}
        <div className="text-center mb-12">
          <h3 className="text-3xl">Các ứng dụng Tiêu Biểu</h3>
          <p className="text-gray-500 mt-2">
            Tất cả các ứng dụng đều được tích hợp toàn diện với nhau, dễ dàng sử
            dụng trên trình duyệt và thiết bị Mobile
          </p>
        </div>
        {/* Danh Sách Ứng Dụng */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
          <FeatureCategory
            title="Base Work+"
            desc="Quản trị công việc & hiệu suất"
            bgColor="bg-purple-100"
            textColor="text-purple-800"
            buttonColor="bg-purple-800 text-white"
            apps={[
              {
                url: "https://share-gcdn.basecdn.net/apps/request.png",
                name: "Base Request",
                desc: "Quản Lý Phê Duyệt",
              },
              {
                url: "https://share-gcdn.basecdn.net/apps/wework.png",
                name: "Base Workflow",
                desc: "Quản Lý Quy Trình",
              },
              {
                url: "https://share-gcdn.basecdn.net/apps/workflow.png",
                name: "Base Wework",
                desc: "Quản Lý Công Việc & Dự Án",
              },
            ]}
          />
          <FeatureCategory
            title="Base Info+"
            desc="Quản trị thông tin & giao tiếp"
            bgColor="bg-green-200"
            textColor="text-green-600"
            buttonColor="bg-green-600 text-white"
            apps={[
              {
                url: "https://share-gcdn.basecdn.net/apps/office.png",
                name: "Base Office",
                desc: "Quản Lý Thông Báo & Công Văn",
              },
              {
                url: "https://share-gcdn.basecdn.net/apps/inside.png",
                name: "Base Inside",
                desc: "Quản Lý Họp Nội Bộ",
              },
              {
                url: "https://share-gcdn.basecdn.net/apps/meeting.png",
                name: "Base Meeting",
                desc: "Mạng Truyền Thông Nội Bộ",
              },
            ]}
          />
          <FeatureCategory
            title="Base HRM+"
            desc="Quản trị & phát triển con người"
            bgColor="bg-blue-100"
            textColor="text-blue-800"
            buttonColor="bg-blue-800 text-white"
            apps={[
              {
                url: "https://share-gcdn.basecdn.net/apps/hrm.png",
                name: "Base HRM",
                desc: "Quản Lý Phê Duyệt",
              },
              {
                url: "https://share-gcdn.basecdn.net/apps/hiring.png",
                name: "Base E-Hiring",
                desc: "Quản Lý Quy Trình",
              },
              {
                url: "https://share-gcdn.basecdn.net/apps/checkin.png",
                name: "Base Checkin",
                desc: "Quản Lý Công Việc & Dự Án",
              },
              {
                url: "https://share-gcdn.basecdn.net/apps/review.png",
                name: "Base Review",
                desc: "Quản Lý Quy Trình",
              },
              {
                url: "https://share-gcdn.basecdn.net/apps/square.png",
                name: "Base Square",
                desc: "Quản Lý Công Việc & Dự Án",
              },
            ]}
          />
          <FeatureCategory
            title="Base Finance+"
            desc="Quản trị tài chính"
            bgColor="bg-yellow-100"
            textColor="text-yellow-700"
            buttonColor="bg-yellow-600 text-white"
            apps={[
              {
                url: "https://share-gcdn.basecdn.net/apps/finance.png",
                name: "Base Finance",
                desc: "Quản Lý Phê Duyệt",
              },
              {
                url: "https://share-gcdn.basecdn.net/apps/expense.png",
                name: "Base Expense",
                desc: "Quản Lý Quy Trình",
              },
              {
                url: "https://share-gcdn.basecdn.net/apps/income.png",
                name: "Base Income",
                desc: "Quản Lý Công Việc & Dự Án",
              },
              {
                url: "https://share-gcdn.basecdn.net/apps/reconciliation.png",
                name: "Base BankFeeds",
                desc: "Quản Lý Quy Trình",
              },
              {
                url: "https://share-gcdn.basecdn.net/apps/asset.png",
                name: "Base Asset",
                desc: "Quản Lý Công Việc & Dự Án",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCategory = ({
  title,
  desc,
  bgColor,
  textColor,
  buttonColor,
  apps,
}) => (
  <>
    <div
      className={`p-6 space-y-4 ${bgColor} transition-all hover:scale-[1.02]`}
    >
      <div>
        <h3 className={`text-lg font-semibold ${textColor}`}>{title}</h3>
        <p
          className={`text-sm ${
            textColor.includes("white") ? "text-white" : "text-gray-600"
          }`}
        >
          {desc}
        </p>
      </div>
      <button
        className={`px-4 py-2 mt-5 text-sm font-medium ${buttonColor} transition-all hover:scale-[1.02]`}
      >
        XEM CHI TIẾT
      </button>
    </div>

    <div className="bg-gray-50 p-6 grid grid-cols-2 gap-4">
      {apps.map((app, index) => (
        <AppItem key={index} url={app.url} name={app.name} desc={app.desc} />
      ))}
      <MoreLink />
    </div>
  </>
);

const AppItem = ({ url, name, desc }) => (
  <div className="flex items-start gap-3">
    <span className="logo">
      <img src={url} alt={name} className="w-8 h-8" />
    </span>
    <div>
      <h4 className="text-sm font-semibold">{name}</h4>
      <p className="text-xs text-gray-500">{desc}</p>
    </div>
  </div>
);

const MoreLink = () => (
  <div className="col-span-2 flex items-center text-sm text-blue-600 mt-2 cursor-pointer hover:underline">
    <span className="mr-2">XEM THÊM</span>
    <span>→</span>
  </div>
);
export default FeaturedAppSection;
