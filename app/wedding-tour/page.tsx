"use client";

import Slider from "@/components/Slider/Slider";
import { AiOutlineSearch } from "react-icons/ai";
import FilterPage from "./components/FilterPage";

export default function WeddingHallTour() {
  return (
    <div className="min-w-[1240px]  h-full border ">
      <div className="w-full h-[80px] flex justify-center items-center">
        <div className="text-2xl font-semibold mr-8">Hall Tour</div>
        <div className="w-[550px] h-[40px] relative">
          <input
            placeholder="웨딩홀 이름으로 검색"
            className="w-full h-full border rounded-full pl-4 border-black border-solid"
          ></input>
          <AiOutlineSearch className="absolute right-4 top-2 text-2xl" />
        </div>
      </div>
      <div className="min-w-[1240px] h-[330px] mt-5">
        <Slider></Slider>
      </div>
      <FilterPage></FilterPage>
      <div></div>
    </div>
  );
}
