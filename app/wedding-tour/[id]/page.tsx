import { paramsProps } from "@/interface";
import PhotoSection from "../components/HallDetail/PhotoSection";
import { weddingHallList } from "@/constants";
import HeaderSection from "../components/HallDetail/HeaderSection";
import BasicInfoSection from "../components/HallDetail/BasicInfoSection";
import IncludedSection from "../components/HallDetail/IncludedSection";

export default function WeddingHallDetailPage({ params }: paramsProps) {
  const { id } = params;

  // 단일 요소 찾기
  const weddingHall = weddingHallList.find((hall) => hall.id === Number(id));

  // weddingHall이 없을 경우의 예외 처리
  if (!weddingHall) {
    return <div>존재하지 않는 Wedding Hall 입니다.</div>;
  }

  return (
    <div className="mx-auto py-10 w-[1200px]">
      <PhotoSection data={weddingHall}></PhotoSection>
      <div className="w-[750px] flex flex-col items-center justify-between">
        <HeaderSection data={weddingHall}></HeaderSection>
        <BasicInfoSection data={weddingHall}></BasicInfoSection>
        <IncludedSection data={weddingHall}></IncludedSection>
      </div>
    </div>
  );
}
