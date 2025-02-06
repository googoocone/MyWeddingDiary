import { useAtom } from "jotai";
import {
  detailFilterState,
  selectedFlowerTypeAtom,
  selectedHallTypeAtom,
  selectedLocationAtom,
  selectedMinGuaranteeTypeAtom,
  selectedSubLocationAtom,
} from "@/atom";

import { IoIosArrowDown } from "react-icons/io";
import {
  locationData,
  LocationType,
  hallTypeData,
  flowerTypeData,
  minGuaranteeData,
  minGuaranteeType,
} from "@/interface";

export default function FilterPage() {
  const [detailFilter, setDetailFilter] = useAtom(detailFilterState);

  return (
    <div className="w-full h-[40px] flex justify-center items-center gap-4 mt-8">
      <LocationFilter
        detailFilter={detailFilter}
        setDetailFilter={setDetailFilter}
      />
      <SubLocationFilter
        detailFilter={detailFilter}
        setDetailFilter={setDetailFilter}
      />
      <HallTypeFilter
        detailFilter={detailFilter}
        setDetailFilter={setDetailFilter}
      />
      <FlowerFilter
        detailFilter={detailFilter}
        setDetailFilter={setDetailFilter}
      />
      <MinGuaranteeFilter
        detailFilter={detailFilter}
        setDetailFilter={setDetailFilter}
      />
    </div>
  );
}

// 📌 LocationFilter
const LocationFilter = ({ detailFilter, setDetailFilter }: any) => {
  const [locationValue, setLocationValue] = useAtom(selectedLocationAtom);

  return (
    <div className="relative">
      <button
        onClick={() => {
          setDetailFilter(detailFilter === "location" ? null : "location"); // 다른 필터를 누르면 자동으로 닫힘
        }}
        className="px-3 py-1.5 bg-transparent border border-gray-300 focus:border-red-400 focus:text-red-400 rounded-full flex items-center justify-between gap-2"
      >
        {locationValue}
        <IoIosArrowDown />
      </button>

      {detailFilter === "location" && (
        <ul className="absolute z-10 left-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
          {Object.keys(locationData).map((location) => (
            <li
              key={location}
              onClick={() => {
                setLocationValue(location as LocationType);
                setDetailFilter(null); // 선택하면 리스트 닫힘
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

// 📌 SubLocationFilter
const SubLocationFilter = ({ detailFilter, setDetailFilter }: any) => {
  const [locationValue] = useAtom(selectedLocationAtom);
  const [subLocationValue, setSubLocationValue] = useAtom(
    selectedSubLocationAtom
  );

  const subLocations =
    locationValue in locationData
      ? locationData[locationValue as LocationType]
      : [];

  return (
    <div className="relative">
      <button
        className="px-3 py-1.5 bg-transparent border border-gray-300 rounded-full flex items-center justify-between w-[120px]"
        onClick={() => {
          setDetailFilter(
            detailFilter === "subLocation" ? null : "subLocation"
          );
        }}
      >
        {subLocationValue}
        <IoIosArrowDown />
      </button>

      {detailFilter === "subLocation" && subLocations.length > 0 && (
        <ul className="absolute z-10 left-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
          {subLocations.map((subLocation) => (
            <li
              key={subLocation}
              onClick={() => {
                setSubLocationValue(subLocation);
                setDetailFilter(null);
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

// 📌 HallTypeFilter
const HallTypeFilter = ({ detailFilter, setDetailFilter }: any) => {
  const [hallTypeValue, setHallTypeValue] = useAtom(selectedHallTypeAtom);

  return (
    <div className="relative">
      <button
        onClick={() => {
          setDetailFilter(detailFilter === "hallType" ? null : "hallType");
        }}
        className="px-3 py-1.5 bg-transparent border border-gray-300 rounded-full flex items-center justify-between gap-2 w-[140px]"
      >
        {hallTypeValue}
        <IoIosArrowDown />
      </button>
      {detailFilter === "hallType" && (
        <ul className="absolute z-10 left-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
          {hallTypeData.map((hallType) => (
            <li
              key={hallType}
              onClick={() => {
                setHallTypeValue(hallType as LocationType);
                setDetailFilter(null);
              }}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              {hallType}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// 📌 FlowerFilter
const FlowerFilter = ({ detailFilter, setDetailFilter }: any) => {
  const [flowerTypeValue, setFlowerTypeValue] = useAtom(selectedFlowerTypeAtom);

  return (
    <div className="relative">
      <button
        onClick={() => {
          setDetailFilter(detailFilter === "flower" ? null : "flower");
        }}
        className="px-3 py-1.5 bg-transparent border border-gray-300 rounded-full flex items-center justify-between gap-2 w-[120px]"
      >
        {flowerTypeValue}
        <IoIosArrowDown />
      </button>
      {detailFilter === "flower" && (
        <ul className="absolute z-10 left-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
          {flowerTypeData.map((flowerType) => (
            <li
              key={flowerType}
              onClick={() => {
                setFlowerTypeValue(flowerType as LocationType);
                setDetailFilter(null);
              }}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              {flowerType}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const MinGuaranteeFilter = ({ detailFilter, setDetailFilter }: any) => {
  const [minGuaranteeTypeValue, setMinGuaranteeTypeValue] = useAtom(
    selectedMinGuaranteeTypeAtom
  );

  return (
    <div className="relative">
      <button
        onClick={() => {
          setDetailFilter(
            detailFilter === "minGuarantee" ? null : "minGuarantee"
          );
        }}
        className="px-3 py-1.5  bg-transparent border border-gray-300 rounded-full flex items-center justify-between gap-2 w-[120px]"
      >
        {minGuaranteeTypeValue}
        <IoIosArrowDown />
      </button>
      {detailFilter === "minGuarantee" && (
        <ul className="absolute z-10 left-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
          {minGuaranteeData.map((data) => (
            <li
              key={data}
              onClick={() => {
                setMinGuaranteeTypeValue(data as minGuaranteeType);
                setDetailFilter(null);
              }}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              {data}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
