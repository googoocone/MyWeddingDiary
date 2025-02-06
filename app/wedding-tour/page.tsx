"use client";

import Slider from "@/components/Slider/Slider";
import { AiOutlineSearch } from "react-icons/ai";
import FilterPage from "./components/FilterPage";

import { weddingHallList } from "@/constants";
import HallCard from "./components/hallCard";
import { useAtom } from "jotai";
import {
  selectedFlowerTypeAtom,
  selectedHallTypeAtom,
  selectedLocationAtom,
  selectedMinGuaranteeTypeAtom,
  selectedSubLocationAtom,
} from "@/atom";

export default function WeddingHallTour() {
  const [locationValue] = useAtom(selectedLocationAtom);
  const [subLocationValue] = useAtom(selectedSubLocationAtom);
  const [hallTypeValue] = useAtom(selectedHallTypeAtom);
  const [flowerTypeValue] = useAtom(selectedFlowerTypeAtom);
  const [minGuaranteeValue] = useAtom(selectedMinGuaranteeTypeAtom);

  return (
    <div className="min-w-[1240px] h-full border">
      <div className="w-full h-[80px] flex justify-center items-center">
        <div className="text-2xl font-semibold mr-8">Hall Tour</div>
        <div className="w-[550px] h-[40px] relative">
          <input
            placeholder="웨딩홀 이름으로 검색"
            className="w-full h-full border rounded-full pl-4 border-black border-solid"
          />
          <AiOutlineSearch className="absolute right-4 top-2 text-2xl" />
        </div>
      </div>
      <div className="min-w-[1240px] h-[330px] mt-5">
        <Slider />
      </div>
      <FilterPage />
      <div className="w-[825px] mx-auto mt-8 gap-2 flex flex-wrap items-center justify-center">
        {weddingHallList.map((hall) => (
          <HallCard data={hall}></HallCard>
        ))}
      </div>
    </div>
  );
}
