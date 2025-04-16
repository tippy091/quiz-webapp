import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

const categories = [
  { name: "Các Khóa tập huấn và Hướng dẫn" },
  { name: "Chương trình Đào tạo Đặc biệt" },
  { name: "Chương trình Liên kết quốc tế" },
  { name: "Giáo dục Quốc phòng An ninh" },
  { name: "Khoa Âm Nhạc, Sân khấu & Điện ảnh" },
  { name: "Khoa Công nghệ Sáng tạo" },
  { name: "Khoa Công nghệ Thông tin" },
  { name: "Khoa Công nghệ Ứng dụng" },
  { name: "Khoa Điều dưỡng" },
  { name: "Khoa Du lịch" },
  { name: "Khoa Dược" },
  { name: "Khoa Kế toán - Kiểm toán" },
  { name: "Khoa Khoa học cơ bản" },
  { name: "Khoa Kiến trúc" },
  { name: "Khoa Kỹ thuật An toàn" },
  { name: "Khoa Kỹ thuật Cơ - Điện và Máy tính" },
  { name: "Khoa Kỹ thuật Ô tô" },
  { name: "Khoa Kỹ thuật Y học" },
  { name: "Khoa Luật" },
  { name: "Khoa Môi trường" },
];

export default function CategorySection() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="bg-gray-100 p-6 w-screen px-20">
      <h2 className="text-2xl font-bold mb-4 mt-10">Course categories</h2>
      <ul className="space-y-1 text-[16px]">
        {categories.map((cat, index) => (
          <li
            key={index}
            className="flex items-start text-red-600 cursor-pointer hover:underline"
          >
            <span onClick={() => toggleExpand(index)} className="mr-2 mt-1">
              {expanded[index] ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </span>
            <span>{cat.name}</span>
          </li>
        ))}
      </ul>
      <div className="mt-3">
        <button className="text-red-600 hover:underline">View more</button>
      </div>
    </div>
  );
}
