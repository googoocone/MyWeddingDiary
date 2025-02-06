import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Slider() {
  return (
    <Swiper
      loop={true}
      centeredSlides={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 30 }, // 모바일
        768: { slidesPerView: 1.5, spaceBetween: 30 }, // 태블릿
        1024: { slidesPerView: 1.8, spaceBetween: 30 }, // 데스크탑
        1280: { slidesPerView: 2.2, spaceBetween: 30 }, // 대형 화면
      }}
      className="h-full"
    >
      <SwiperSlide>
        <div className="w-full h-full">
          <img
            src="/slide22.png"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full">
          <img
            src="/slide2.png"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full">
          <img
            src="/slide11.png"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full">
          <img
            src="/slide33.png"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
