import { SetStateAction } from "jotai";
import React from "react";

export type DetailFilterType =
  | "location"
  | "subLocation"
  | "hallType"
  | "flower"
  | "minGuarantee";

export interface FilterProps {
  location: string;
  subLocation: string;
  hallType: string;
  flower: boolean;
  minGuarantee: number;
}
export type LocationType = "서울" | "경기" | "부산";

export type SubLocationType = Record<LocationType, string[]>;

export const locationData: SubLocationType = {
  서울: ["강남구", "강동구", "송파구", "서초구", "신촌구", "관악구"],
  부산: ["해운대구", "서면구", "연제구", "동래구", "남포구"],
  경기: ["수원시", "화성시", "평택시", "안성시", "안산시"],
};

export interface IsOpenProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export type HallTypeFilterType = 'convention' | 'house' | 'chapple' | 'hotel' | 'garden' | 'outside'

export const hallTypeData : string[] = ['컨벤션 홀', '하우스 웨딩','채플','호텔 웨딩','가든 웨딩','야외 웨딩']

export type flowerFilterType = '생화장식' | '조화'

export const flowerTypeData : string [] = ['생화 장식', '조화 장식']

export type minGuaranteeType = '150명' | '200명' | '250명' | '300명'

export const minGuaranteeData : string[] = ['150명', '200명', '250명', '300명']