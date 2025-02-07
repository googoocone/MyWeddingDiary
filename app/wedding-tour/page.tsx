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
  // 각 필터에 해당하는 atom 값들
  const [locationValue] = useAtom(selectedLocationAtom); // 기본값 "서울"
  const [subLocationValue] = useAtom(selectedSubLocationAtom); // 기본값 "상세지역"
  const [hallTypeValue] = useAtom(selectedHallTypeAtom); // 기본값 "웨딩홀 타입"
  const [flowerTypeValue] = useAtom(selectedFlowerTypeAtom); // 기본값 "꽃 장식"
  const [minGuaranteeValue] = useAtom(selectedMinGuaranteeTypeAtom); // 기본값 "보증인원"

  // 웨딩홀 리스트 필터링 로직
  const filteredHalls = weddingHallList.filter((hall) => {
    // 1. 지역 필터: 항상 선택된 지역(기본 "서울")에 해당하는지 확인.
    if (!hall.locationType.includes(locationValue)) return false;

    // 2. 세부 지역 필터: 기본값("상세지역")이 아니면 필터 적용.
    if (
      subLocationValue !== "상세지역" &&
      !hall.locationType.includes(subLocationValue)
    )
      return false;

    // 3. 웨딩홀 타입 필터: 기본값("웨딩홀 타입")이 아니면, hall.hallType 배열에 선택한 타입이 포함되어 있는지 확인.
    if (
      hallTypeValue !== ["웨딩홀 타입"] &&
      !hall.hallType.includes(hallTypeValue)
    )
      return false;

    // 4. 꽃 장식 필터: 기본값("꽃 장식")이 아니면, hall.flower 배열에 선택한 값이 포함되어 있는지 확인.
    if (flowerTypeValue !== "꽃 장식" && !hall.flower.includes(flowerTypeValue))
      return false;

    // 5. 최소 보증인원 필터: 기본값("보증인원")이 아니면, 선택한 값과 일치하는지 확인
    //    (필요에 따라 숫자 비교나 범위 비교로 수정 가능)
    if (
      minGuaranteeValue !== "보증인원" &&
      hall.minGuarantee >= Number(minGuaranteeValue)
    )
      return false;

    return true;
  });

  return (
    <div className="min-w-[1240px] ">
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
      <div className="w-full h-[330px] mt-5">
        <Slider />
      </div>
      <div className="w-[1400px] mx-auto flex items-start justify-center gap-12">
        <div className="sticky top-8">
          <FilterPage />
        </div>
        <div className="w-[800px] ">
          <div className=" w-[800px] h-[40px] text-black border boder-gray-200 mb-4 rounded-xl flex items-center justify-center">
            💕프리미엄 회원님은 다른 회원님들의 할인 받은 견적을 확인할 수
            있어요!
          </div>
          {weddingHallList.map((hall) => (
            <HallCard data={hall}></HallCard>
          ))}
        </div>
        <div className="w-[250px] h-[500px] border border-gray-200 rounded-xl "></div>
      </div>
    </div>
  );
}
