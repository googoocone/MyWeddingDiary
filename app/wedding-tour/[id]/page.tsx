import { PrismaClient } from "@prisma/client";
import { paramsProps } from "@/interface";
import PhotoSection from "../components/HallDetail/PhotoSection";
import HeaderSection from "../components/HallDetail/HeaderSection";
import BasicInfoSection from "../components/HallDetail/BasicInfoSection";
import IncludedSection from "../components/HallDetail/IncludedSection";
import OptionSection from "../components/HallDetail/OptionSection";
import HallInfoSection from "../components/HallDetail/HallInfoSection";
import Calculator from "../components/HallDetail/Calculator";

const prisma = new PrismaClient();

async function getData(id: string) {
  console.log("Fetching wedding hall with id:", id);

  const weddingHall = await prisma.weddingHall.findUnique({
    where: { id: id },
  });

  return weddingHall;
}

export default async function WeddingHallDetailPage({ params }: paramsProps) {
  const { id } = params;

  const weddingHall = await getData(id);

  if (!weddingHall) {
    return <div>존재하지 않는 Wedding Hall 입니다.</div>;
  }

  return (
    <div className="mx-auto py-10 w-[1200px]">
      <PhotoSection data={weddingHall}></PhotoSection>
      <div className="w-full flex items-start justify-between">
        <div className="w-[750px] flex flex-col items-center justify-between">
          <HeaderSection data={weddingHall}></HeaderSection>
          <BasicInfoSection data={weddingHall}></BasicInfoSection>
          <IncludedSection data={weddingHall}></IncludedSection>
          <OptionSection data={weddingHall}></OptionSection>
          <HallInfoSection data={weddingHall}></HallInfoSection>
        </div>
        <Calculator></Calculator>
      </div>
    </div>
  );
}
