import {
  DetailFilterType,
  FlowerFilterType,
  HallTypeFilterType,
  LocationType,
  MinGuaranteeType,
  SubLocationType,
} from "@/interface";
import { atom } from "jotai";

// 필터 상태값 관리
export const detailFilterState = atom<DetailFilterType | null>(null);

// 전역적으로 선택된 지역을 관리하는 상태
export const selectedLocationAtom = atom<LocationType | string>("서울");

// 전역적으로 선택된 서브 지역을 관리하는 상태
export const selectedSubLocationAtom = atom<string>("상세지역");

// 전역적으로 선택된 웨딩홀 타입을 관리하는 상태
export const selectedHallTypeAtom = atom<HallTypeFilterType | string>(
  "웨딩홀 타입"
);

// 전역적으로 선택된 꽃장식 타입을 관리하는 상태
export const selectedFlowerTypeAtom = atom<FlowerFilterType | string>(
  "꽃 장식"
);

// 전역적으로 선택된 최소 보증인원 타입을 관리하는 상태
export const selectedMinGuaranteeTypeAtom = atom<MinGuaranteeType | string>(
  "보증인원"
);
