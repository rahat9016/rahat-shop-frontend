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
      <div className="w-full">
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
                      className={`flex flex-row px-9 h-[60vh] items-center `}
                    >
                      <div className="basis-[40%]">
                        <img src={item.photo} alt="" className="w-full" />
                      </div>
                      <div className="basis-[60%] flex flex-col items-end">
                        <div className="flex items-center pb-8 gap-2 pr-8">
                          <img src={item.brandLogo} alt="" className="w-14" />
                          <h3 className="w-12 font-varelo">{item.brand}</h3>
                        </div>
                        <h1 className="font-quick text-textDark text-5xl pb-8">
                          <span className="">Explore</span>{" "}
                          <span className="font-bold ">{item.name}</span>
                        </h1>

                        <h2 className="font-quick text-textDark text-4xl pb-8">
                          ${item.price}
                        </h2>
                        <h2 className="font-quick text-textDark text-3xl pb-8 flex items-center gap-2">
                          Color
                          {item.productColor &&
                            item.productColor.map((color, index) => (
                              <div
                                key={index}
                                className="w-5 h-5 rounded-[50%] "
                                style={{ backgroundColor: `${color}` }}
                              ></div>
                            ))}
                        </h2>
                        <button className="bg-sapphire rounded-full py-2 px-8 text-white font-fira ">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })
            : null}
        </Swiper>
        <div className="flex  ">
          {brands.length > 0
            ? brands.map((brand) => {
                return (
                  <div
                    key={brand._id}
                    className="h-16 flex items-center text-center"
                  >
                    <img
                      src={brand.brandLogo}
                      alt=""
                      className="w-[36px] h-[30px]"
                    />
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
