import { DetailFilterType, LocationType, SubLocationType } from "@/interface";
import { atom } from "jotai";

// 필터 상태값 관리
export const detailFilterState = atom<DetailFilterType | null>(null);

// 전역적으로 선택된 지역을 관리하는 상태
export const selectedLocationAtom = atom<LocationType | string>("지역");

// 전역적으로 선택된 서브 지역을 관리하는 상태
export const selectedSubLocationAtom = atom<string>("상세지역");
