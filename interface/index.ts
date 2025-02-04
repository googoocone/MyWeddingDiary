import { SetStateAction } from "jotai";
import React from "react";

export type DetailFilterType =
  | "location"
  | "subLocation"
  | "hallType"
  | "hallColor"
  | "flower"
  | "minGuarantee";

export interface FilterProps {
  location: string;
  subLocation: string;
  hallType: string;
  hallColor: string;
  flower: boolean;
  minGuarantee: number;
}
export type LocationType = "서울" | "경기" | "부산";

export type SubLocationType = Record<LocationType, string[]>;

export const locationData: SubLocationType = {
  서울: ["강남", "강동", "송파", "서초", "신촌", "관악"],
  부산: ["해운대", "서면", "연제", "동래", "남포"],
  경기: ["수원", "화성", "평택", "안성", "안산"],
};

export interface IsOpenProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
