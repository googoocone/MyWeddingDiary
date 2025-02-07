import { useAtom } from "jotai";
import {
  selectedFlowerTypeAtom,
  selectedHallTypeAtom, // 다중 선택: string[]
  selectedLocationAtom,
  selectedMinGuaranteeTypeAtom,
  selectedSubLocationAtom, // 다중 선택: string[]
} from "@/atom";
import {
  locationData,
  LocationType,
  hallTypeData,
  flowerTypeData,
  minGuaranteeData,
  MinGuaranteeType,
  HallTypeFilterType,
} from "@/interface";

export default function FilterPage() {
  return (
    <div className="w-[250px] px-4 border border-gray-200 rounded-xl flex flex-col">
      <LocationFilter />
      <SubLocationFilter />
      <HallTypeFilter />
      <FlowerFilter />
      <MinGuaranteeFilter />
    </div>
  );
}

// 📌 지역 (단일 선택 - 라디오 버튼)
const LocationFilter = () => {
  const [locationValue, setLocationValue] = useAtom(selectedLocationAtom);

  return (
    <div className="border-b border-b-gray-200 py-4">
      <h3 className="text-lg font-semibold mb-2">지역 선택</h3>
      <div className="flex flex-col gap-1">
        {Object.keys(locationData).map((location) => (
          <label
            key={location}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name="location"
              value={location}
              checked={locationValue === location}
              onChange={() => setLocationValue(location as LocationType)}
              className="appearance-none w-4 h-4 border border-gray-300 rounded-none cursor-pointer checked:bg-red-500 checked:border-transparent"
            />
            <span>{location}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

// 📌 상세지역 (다중 선택 - 체크박스)
const SubLocationFilter = () => {
  const [locationValue] = useAtom(selectedLocationAtom);
  const [selectedSubLocations, setSelectedSubLocations] = useAtom(
    selectedSubLocationAtom
  );

  // 선택된 location에 따른 서브 로케이션 데이터 (없으면 빈 배열)
  const subLocations =
    locationValue in locationData
      ? locationData[locationValue as LocationType]
      : [];

  if (subLocations.length === 0) return null;

  const toggleSubLocation = (subLocation: string) => {
    if (selectedSubLocations.includes(subLocation)) {
      // 이미 선택된 경우 제거
      setSelectedSubLocations(
        selectedSubLocations.filter((item: any) => item !== subLocation)
      );
    } else {
      // 선택되지 않았다면 추가
      setSelectedSubLocations([...selectedSubLocations, subLocation]);
    }
  };

  return (
    <div className="border-b border-b-gray-200 py-4">
      <h3 className="text-md font-semibold mb-2">상세 지역</h3>
      <div className="flex flex-col gap-1">
        {subLocations.map((subLocation) => {
          const isChecked = selectedSubLocations.includes(subLocation);
          return (
            <label
              key={subLocation}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                name="subLocation"
                value={subLocation}
                checked={isChecked}
                onChange={() => toggleSubLocation(subLocation)}
                className="appearance-none w-4 h-4 border border-gray-300 rounded-none cursor-pointer checked:bg-red-500 checked:border-transparent"
              />
              <span>{subLocation}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

// 📌 홀타입 (다중 선택 - 체크박스)
const HallTypeFilter = () => {
  const [selectedHallTypes, setSelectedHallTypes] =
    useAtom(selectedHallTypeAtom);

  // 파라미터의 타입을 string이 아닌 HallTypeFilterType로 변경
  const toggleHallType = (hallType: HallTypeFilterType) => {
    if (selectedHallTypes.includes(hallType)) {
      setSelectedHallTypes(
        selectedHallTypes.filter((item) => item !== hallType)
      );
    } else {
      setSelectedHallTypes([...selectedHallTypes, hallType]);
    }
  };

  return (
    <div className="border-b border-b-gray-200 py-4">
      <h3 className="text-md font-semibold mb-2">웨딩홀 타입</h3>
      <div className="flex flex-col gap-1">
        {hallTypeData.map((hallType: HallTypeFilterType) => {
          const isChecked = selectedHallTypes.includes(hallType);
          return (
            <label
              key={hallType}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                name="hallType"
                value={hallType}
                checked={isChecked}
                onChange={() => toggleHallType(hallType)}
                className="appearance-none w-4 h-4 border border-gray-300 rounded-none cursor-pointer checked:bg-red-500 checked:border-transparent"
              />
              <span>{hallType}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

// 📌 FlowerFilter (단일 선택 - 라디오 버튼)
const FlowerFilter = () => {
  const [flowerTypeValue, setFlowerTypeValue] = useAtom(selectedFlowerTypeAtom);

  return (
    <div className="border-b border-b-gray-200 py-4">
      <h3 className="text-md font-semibold mb-2">꽃 장식</h3>
      <div className="flex flex-col gap-1">
        {flowerTypeData.map((flowerType) => (
          <label
            key={flowerType}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name="flowerType"
              value={flowerType}
              checked={flowerTypeValue === flowerType}
              onChange={() => setFlowerTypeValue(flowerType)}
              className="appearance-none w-4 h-4 border border-gray-300 rounded-none cursor-pointer checked:bg-red-500 checked:border-transparent"
            />
            <span>{flowerType}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

// 📌 Minimum Guarantee (단일 선택 - 라디오 버튼)
const MinGuaranteeFilter = () => {
  const [minGuaranteeTypeValue, setMinGuaranteeTypeValue] = useAtom(
    selectedMinGuaranteeTypeAtom
  );

  return (
    <div className="py-4">
      <h3 className="text-md font-semibold mb-2">최소 보증인원</h3>
      <div className="flex flex-col gap-1">
        {minGuaranteeData.map((data) => (
          <label key={data} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="minGuarantee"
              value={data}
              checked={minGuaranteeTypeValue === data}
              onChange={() =>
                setMinGuaranteeTypeValue(data as MinGuaranteeType)
              }
              className="appearance-none w-4 h-4 border border-gray-300 rounded-none cursor-pointer checked:bg-red-500 checked:border-transparent"
            />
            <span>{data}명</span>
          </label>
        ))}
      </div>
    </div>
  );
};
