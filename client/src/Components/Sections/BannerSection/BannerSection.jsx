import React from "react";
import Carousel from "react-multi-carousel";
import Banner1 from "../../../assets/Banners/banner03.png";
import Banner2 from "../../../assets/Banners/banner04.png";
import Banner3 from "../../../assets/Banners/banner05.png";
import { responsive } from "../../../../utils/Section.constants";

const banner = [Banner1, Banner2, Banner3];

const BannerSection = () => {
  return (
    <div className="w-screen overflow-hidden mt-5">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisbile={false}
        centerMode={false}
      >
        {banner.map((banner, index) => (
          <div
            key={index}
            className="h-screen max-h-[500px] w-screen flex justify-center items-center overflow-hidden"
          >
            <img
              src={banner}
              alt={`Banner ${index}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerSection;
