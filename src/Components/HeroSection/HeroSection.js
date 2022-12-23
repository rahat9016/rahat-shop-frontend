import React from "react";
import { heroInformation } from "../../Data/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
const HeroSection = () => {
  const brands = useSelector((state) => state.brands.brands);
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {heroInformation.length > 0
          ? heroInformation.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    style={{ backgroundColor: `${item.bg}` }}
                    className={`flex flex-row px-9 md:h-[60vh] items-center py-2 md:py-0 `}
                  >
                    <div className="basis-[40%]">
                      <img src={item.photo} alt="" className="w-full" />
                    </div>
                    <div className="basis-[60%] flex flex-col items-end">
                      <div className="flex items-center md:pb-8 gap-2 pr-8">
                        <img
                          src={item.brandLogo}
                          alt=""
                          className="w-8 md:w-14 "
                        />
                        <h3 className="w-12  font-varelo text-xs	md:text-base">
                          {item.brand}
                        </h3>
                      </div>
                      <h1 className="font-quick text-textDark text-lg  md:text-5xl md:pb-8">
                        <span className="">Explore</span>{" "}
                        <span className="font-bold ">{item.name}</span>
                      </h1>

                      <h2 className="font-quick text-textDark text-xl  md:text-4xl md:pb-8">
                        ${item.price}
                      </h2>
                      <h2 className="font-quick text-textDark text-lg  md:text-3xl md:pb-8 flex items-center gap-2">
                        Color
                        {item.productColor &&
                          item.productColor.map((color, index) => (
                            <div
                              key={index}
                              className="w-3 h-3 md:w-5  md:h-5 rounded-[50%] "
                              style={{ backgroundColor: `${color}` }}
                            ></div>
                          ))}
                      </h2>
                      <button className="bg-sapphire rounded-full px-3 py-1 md:py-2 md:px-8 text-white font-fira ">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })
          : null}
      </Swiper>
      <div className="grid grid-cols-5 items-center mt-6 gap-2">
        {brands.length > 0
          ? brands.map((brand) => {
              return (
                <div className="" key={brand._id}>
                  <img
                    src={brand.brandLogo && brand.brandLogo}
                    alt=""
                    className="w-auto h-12 block ml-auto mr-auto"
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default HeroSection;
