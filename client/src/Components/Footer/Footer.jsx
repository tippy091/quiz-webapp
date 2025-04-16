import React from "react";

const Footer = ({ content }) => {
  return (
    <div className="bg-red-500 text-white w-screen">
      <div className="flex p-8 justify-around">
        {content?.items &&
          content?.items?.map((item, index) => {
            return (
              <div key={index} className="flex flex-col">
                <p className="text-[16px] pb-[10px]">{item?.title}</p>
                {item?.list &&
                  item?.list?.map((listItem, index) => (
                    <a
                      key={index}
                      className="flex flex-col text-[12px] py-2"
                      href={listItem?.path}
                    >
                      {listItem?.label}
                    </a>
                  ))}
                {item?.description && <p>{item?.description}</p>}
              </div>
            );
          })}
      </div>
      <p className="text-[15px] text-white text-center content-center">
        {content?.copyright}
      </p>
    </div>
  );
};

export default Footer;
