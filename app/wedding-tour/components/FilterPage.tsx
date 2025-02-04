import { useState } from "react";
import { useAtom } from "jotai";
import {
  detailFilterState,
  selectedLocationAtom,
  selectedSubLocationAtom,
} from "@/atom";

import { IoIosArrowDown } from "react-icons/io";
import { IsOpenProps, locationData, LocationType } from "@/interface";

export default function FilterPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="w-full h-[40px]  flex justify-center items-center gap-8  my-4">
      <LocationFilter isOpen={isOpen} setIsOpen={setIsOpen}></LocationFilter>
      <SubLocationFilter
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      ></SubLocationFilter>
    </div>
  );
}

const LocationFilter = ({ isOpen, setIsOpen }: IsOpenProps) => {
  const [locationValue, setLocationValue] = useAtom(selectedLocationAtom);
  const [detailFilter, setDetailFilter] = useAtom(detailFilterState);

  return (
    <div className="relative">
      <button
        onClick={() => {
          setDetailFilter("location");
          setIsOpen(!isOpen);
        }}
        className="px-3 py-2 bg-transparent border border-gray-300 rounded-full flex items-center justify-between gap-4"
      >
        {locationValue}
        <IoIosArrowDown />
      </button>
      {detailFilter === "location" && isOpen === true && (
        <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
          {Object.keys(locationData).map((location) => (
            <li
              key={location}
              onClick={() => {
                setLocationValue(location as LocationType);
                setDetailFilter(null);
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              {location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const SubLocationFilter = ({ isOpen, setIsOpen }: IsOpenProps) => {
  const [locationValue] = useAtom(selectedLocationAtom); // 선택된 지역 (서울, 부산, 경기)
  const [subLocationValue, setSubLocationValue] = useAtom(
    selectedSubLocationAtom
  );
  const [detailFilter, setDetailFilter] = useAtom(detailFilterState);

  // 선택된 지역에 따른 서브 지역 리스트 가져오기
  const subLocations =
    locationValue in locationData
      ? locationData[locationValue as LocationType]
      : [];

  return (
    <div className="relative">
      {/* 버튼 */}
      <button
        className="px-3 py-2 bg-transparent border border-gray-300 rounded-full flex items-center justify-between w-[120px] "
        onClick={() => {
          setDetailFilter("subLocation");
          setIsOpen(!isOpen);
        }}
      >
        {subLocationValue}
        <IoIosArrowDown />
      </button>

      {/* 서브 지역 리스트 (선택된 지역이 있을 때만 표시) */}
      {detailFilter === "subLocation" &&
        subLocations.length > 0 &&
        isOpen === true && (
          <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
            {subLocations.map((subLocation) => (
              <li
                key={subLocation}
                onClick={() => {
                  setSubLocationValue(subLocation);
                  setDetailFilter(null); // 리스트 닫기
                  setIsOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                {subLocation}
              </li>
            ))}
          </ul>
        )}
    </div>
  );
};
