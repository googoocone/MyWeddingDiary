import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function MySwiper() {
  const slideStyle = {
    width: "100%",
    height: "100%",
    background: "#eee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
  };
  return (
    <Swiper
      loop={true}
      spaceBetween={50}
      slidesPerView="auto" // 슬라이드 개별 크기를 그대로 사용
      centeredSlides={true} // 가운데 슬라이드를 중앙에 위치
      style={{ width: "100%" }} // Swiper 컨테이너는 전체 너비 사용
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide style={{ width: "800px", height: "300px" }}>
        <div style={slideStyle} className="relative">
          <Image
            className="rounded-xl"
            src={"/slide11.png"}
            alt="슬라이드1"
            fill
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{ width: "800px", height: "300px" }}
        className="relative"
      >
        <div style={slideStyle}>
          {" "}
          <Image
            className="rounded-xl"
            src={"/slide2.png"}
            alt="슬라이드1"
            fill
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{ width: "800px", height: "300px" }}
        className="relative"
      >
        <div style={slideStyle}>
          {" "}
          <Image
            className="rounded-xl"
            src={"/slide22.png"}
            alt="슬라이드1"
            fill
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{ width: "800px", height: "300px" }}
        className="relative"
      >
        <div style={slideStyle}>
          {" "}
          <Image
            className="rounded-xl"
            src={"/slide33.png"}
            alt="슬라이드1"
            fill
          ></Image>
        </div>
      </SwiperSlide>
      {/* 필요한 만큼의 슬라이드 추가 */}
    </Swiper>
  );
}
