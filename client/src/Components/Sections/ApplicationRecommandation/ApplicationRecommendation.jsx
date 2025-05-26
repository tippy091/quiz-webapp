import React from "react";
import DigitalWorkspace from "../../Common/DigitalWorkspace";
import EmployeeHappiness from "../../Common/EmployeeHappiness";
import DigitalTransformation from "../../Common/DigitalTransformation";
import FinancialManagement from "../../Common/FinancialManagement";

const ApplicationRecommendation = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto py-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl">Một số nhóm ứng dụng được khuyên dùng</h3>
          <p className="text-gray-500 text-sm">
            Các nhóm ứng dụng được lựa chọn riêng theo từng nhu cầu, quy mô và
            ngành nghề
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-3">
          <div className="bg-cyan-600">
            <div className="bg-cyan-500 p-20 px-20">
              <DigitalWorkspace />
            </div>
            <div className="text-md text-center py-2 px-2">
              <h3 className="text-white font-bold">Digital Workspace</h3>
              <p className="text-gray-200">Giải pháp xây dựng môi trường</p>
            </div>
          </div>
          <div className="bg-green-600">
            <div className="bg-green-500 p-20 px-20">
              <EmployeeHappiness />
            </div>
            <div className="text-md text-center py-2 px-2">
              <h3 className="text-white font-bold">Employee Happiness</h3>
              <p className="text-gray-200">Giải pháp nhân sự số cho doanh</p>
            </div>
          </div>
          <div className="bg-purple-700">
            <div className="bg-purple-500 p-20 px-20">
              <DigitalTransformation />
            </div>
            <div className="text-md text-center py-2 px-2">
              <h3 className="text-white font-bold">Digital Transformation</h3>
              <p className="text-gray-200">Bộ giải pháp chuyển đổi số</p>
            </div>
          </div>
          <div className="bg-yellow-600">
            <div className="bg-yellow-500 p-20 px-20">
              <FinancialManagement />
            </div>
            <div className="text-md text-center py-2 px-2">
              <h3 className="text-white font-bold">Financial Management</h3>
              <p className="text-gray-200">Bộ giải pháp quản trị tài chính</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationRecommendation;
