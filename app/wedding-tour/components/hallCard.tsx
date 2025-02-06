import Image from "next/image";

export default function HallCard({ data }: any) {
  return (
    <>
      <div className="w-[400px] h-[590px] flex flex-col items-center justify-center relative mx-auto mb-6">
        <div className="relative w-[400px] h-[400px]">
          <Image
            src={data.images[0]}
            alt={data.name}
            fill
            className="rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-110"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full h-[20px] my-2 ">
          {data.tags?.map((tag: any) => (
            <span className="mr-2 text-gray-600  hover:text-gray-900">
              #{tag}
            </span>
          ))}
        </div>
        <div className="my-1 w-full h-[45px] text-4xl font-bold flex items-start gap-2">
          {data.name}

          {data.benefit === true && (
            <div className="mt-2 px-2.5 py-1 text-sm text-[#FF4E4E] border border-[#FF4E4E] rounded-full">
              혜택
            </div>
          )}
        </div>
        <div className="line-clamp-2 overflow-hidden text-ellipsis text-black/60">
          {data.description}
        </div>
        <div className="w-full h-[35px] mt-4  flex items-center justify-between">
          <div className="text-2xl text-black font-semibold">
            대관료 {data.hallPrice.toLocaleString()}만원
          </div>
          <div className="text-xs">상세견적 보러가기</div>
        </div>
      </div>
    </>
  );
}
