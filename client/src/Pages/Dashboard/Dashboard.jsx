import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { FaAppStore } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { ArrowLeft, ArrowUp } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Navbar trái */}
      <div className="w-25 bg-gray-900 text-white flex flex-col items-center py-4">
        <div className="mb-4 w-10 h-10 rounded-full bg-gray-700"></div>
        <nav className="flex flex-col space-y-6 mt-2">
          <ul>
            <li className="hover:bg-black p-5">
              <span className="flex p-4">
                <FaCircleUser className="w-[25px] h-[20px] mx-auto" />
              </span>
              <p className="text-[12px] text-center">Cá Nhân</p>
            </li>
            <li className="hover:bg-black p-4">
              <span className="flex p-4 text-center justify-between">
                <FaBell className="w-[25px] h-[20px]  mx-auto" />
              </span>
              <p className="text-[12px] text-center">Thông Báo</p>
            </li>
            <li className="hover:bg-black p-4">
              <span className="flex p-4 text-center justify-between">
                <FaUsers className="w-[25px] h-[20px]  mx-auto" />
              </span>
              <p className="text-[12px] text-center">Thành Viên</p>
            </li>
            <li className="hover:bg-black p-4">
              <span className="flex p-4 text-center justify-between">
                <FaCodeFork className="w-[25px] h-[20px]  mx-auto" />
              </span>
              <p className="text-[12px] text-center">Nhóm</p>
            </li>
            <li className="hover:bg-black p-4">
              <span className="flex p-4 text-center justify-between">
                <FaLocationArrow className="w-[25px] h-[20px]" />
              </span>
              <p className="text-[12px] text-center">TK Khách</p>
            </li>
            <li className="hover:bg-black p-4">
              <span className="flex p-4 text-center justify-between">
                <FaAppStore className="w-[25px] h-[20px]  mx-auto" />
              </span>
              <p className="text-[12px] text-center">Ứng Dụng</p>
            </li>
          </ul>
        </nav>
      </div>
      {/* Nội dung chính */}
      <div className="flex-1 bg-white overflow-y-auto">
        <div className="flex justify-between items-center bg-white px-6 py-4 shadow-sm mb-5">
          <div className="flex items-center space-x-2">
            <ArrowLeft className="text-gray-400" />
            <div>
              <div className="text-xs text-gray-400">TÀI KHOẢN</div>
              <div className="text-lg font-medium text-gray-800">
                Runam Dor · Store
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-indigo-700 transition">
            <ArrowUp size={16} />
            Chỉnh sửa tài khoản
          </button>
        </div>
        <div className="flex justify-between px-10 bg-white items-center mb-4 shadow-sm">
          <div className="mx-auto text-start grid grid-cols-2 mb-4">
            <div>
              <img
                className="rounded-full"
                src="https://data-gcdn.basecdn.net/avatar/sys6910/93/6a/0b/30/d5/88eb22f535415a8f221fe19b4414d6bd/1.RunamDor_6910.jpg?ts=1736331006"
              />
            </div>
            <div>
              <div className="text-2xl font-semibold mb-2">Runam Dor</div>
              <div className="text-sm text-gray-600 mb-4">Store</div>
              <div className="grid grid-cols-2">
                <div className="text-sm">
                  <p className="text-gray-500">Địa chỉ Email:</p>
                  <p className="text-gray-500">Số điện thoại:</p>
                  <p className="text-gray-500">Công ty:</p>
                  <p className="text-gray-500">Quản lý trực tiếp:</p>
                </div>
                <div className="text-sm">
                  <p>hcm.rudr.sh.cxpr@niso.com.vn</p>
                  <p>028 38 293229</p>
                  <p>CÔNG TY CỔ PHẦN NISO</p>
                  <p className="text-indigo-400 font-bold">PHẠM QUỐC BẢO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 mx-52 py-5">
          <Divider title="THÔNG TIN LIÊN HỆ" />
          <div className="h-px bg-gray-300 my-4 w-full" />
          <InfoRow
            label="Địa chỉ"
            value="3 Công Xã Paris, phường Bến Nghé, Quận 1"
          />
          <div className="h-px bg-gray-300 my-4 w-full" />
        </div>

        <div className="space-y-4 mx-52 mb-7">
          <Divider title="NHÓM" />
          <div className="h-px bg-gray-300 my-4 w-full" />
          <InfoRow
            label="Operation"
            value="21 Thành Viên - Tham gia ngày 17/08/2022"
          />
          <div className="h-px bg-gray-300 my-4 w-full" />
        </div>
      </div>

      {/* Cột thông tin bên phải */}
      <div className="w-64 bg-gray-50 p-4 border-l border-gray-300">
        <div className="font-bold mb-2">THÔNG TIN TÀI KHOẢN</div>
        <ul className="text-sm space-y-2">
          <li className="text-indigo-600 font-medium">Tài khoản</li>
          <li>Chỉnh sửa</li>
          <li>Ngôn ngữ</li>
          <li className="text-yellow-600">Đổi mật khẩu</li>
          <li>Đổi màu hiển thị</li>
          <li>Lịch làm việc</li>
          <li>Bảo mật hai lớp</li>
        </ul>

        <div className="font-bold mt-6 mb-2">TÙY CHỈNH NÂNG CAO</div>
        <ul className="text-sm space-y-2">
          <li>Lịch sử đăng nhập cá nhân</li>
          <li>Quản lý thiết bị</li>
          <li>Tùy chỉnh email thông báo</li>
          <li>Chỉnh sửa múi giờ</li>
          <li>Ủy quyền tạm thời</li>
        </ul>
      </div>
    </div>
  );
};

function InfoRow({ label, value }) {
  return (
    <div className="text-md grid grid-cols-2">
      {label && <div className="text-gray-500 font-bold">{label}</div>}
      <div className="font-medium text-gray-800">{value}</div>
    </div>
  );
}

function Divider({ title }) {
  return (
    <div className="mt-6 mb-2 text-md font-semibold text-gray-500 uppercase">
      {title}
    </div>
  );
}
export default Dashboard;
