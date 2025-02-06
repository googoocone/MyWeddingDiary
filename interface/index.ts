import { SetStateAction } from "jotai";
import React from "react";

// 필터의 타입 수정 (각 필터에 "전체" 추가)
export type DetailFilterType =
  | "location"
  | "subLocation"
  | "hallType"
  | "flower"
  | "minGuarantee";

// 필터 인터페이스 수정 ("전체" 추가)
export interface FilterProps {
  location: string;
  subLocation: string;
  hallType: string;
  flower: string; // boolean → string 변경 (생화 장식, 조화 장식, 전체 포함)
  minGuarantee: string; // number → string 변경 ("전체" 포함)
}

// 지역 타입 수정 ("전체" 추가)
export type LocationType = "전체" | "서울" | "경기" | "부산";

// 세부 지역 타입 수정 ("전체" 추가)
export type SubLocationType = Record<LocationType, string[]>;

export const locationData: SubLocationType = {
  전체: [], // "전체"는 특정 지역을 갖지 않음
  서울: ["전체", "강남구", "강동구", "송파구", "서초구", "신촌구", "관악구"],
  부산: ["전체", "해운대구", "서면구", "연제구", "동래구", "남포구"],
  경기: ["전체", "수원시", "화성시", "평택시", "안성시", "안산시"],
};

// Modal의 isOpen 상태 관리
export interface IsOpenProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

// 웨딩홀 타입 수정 ("전체" 추가)
export type HallTypeFilterType =
  | "전체"
  | "convention"
  | "house"
  | "chapple"
  | "hotel"
  | "garden"
  | "outside";

// 웨딩홀 타입 데이터 수정 ("전체" 추가)
export const hallTypeData: string[] = [
  "전체",
  "컨벤션 홀",
  "하우스 웨딩",
  "채플",
  "호텔 웨딩",
  "가든 웨딩",
  "야외 웨딩",
];

// 꽃 장식 타입 수정 ("전체" 추가)
export type FlowerFilterType = "전체" | "생화장식" | "조화";

// 꽃 장식 데이터 수정 ("전체" 추가)
export const flowerTypeData: string[] = ["전체", "생화 장식", "조화 장식"];

// 최소 보증 인원 타입 수정 ("전체" 추가)
export type MinGuaranteeType = "전체" | 150 | 200 | 250 | 300;

// 최소 보증 인원 데이터 수정 ("전체" 추가)
export const minGuaranteeData: MinGuaranteeType[] = [
  "전체",
  150,
  200,
  250,
  300,
];
