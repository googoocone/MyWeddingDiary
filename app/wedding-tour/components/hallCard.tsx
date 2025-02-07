import Image from "next/image";

export default function HallCard({ data }: any) {
  return (
    <div className="mb-[15px] p-[15px] w-[800px] h-[270px] border border-gray-200 rounded-xl flex items-center justify-center">
      {/* group과 overflow-hidden을 적용하여 hover 시 이미지가 컨테이너 밖으로 넘치지 않게 함 */}
      <div className="w-[240px] h-[240px] relative group rounded-xl overflow-hidden">
        <Image
          fill
          src={data.images[0]}
          alt="호텔 이미지"
          style={{ objectFit: "cover" }}
          className="rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="w-[525px] h-[240px] pl-[15px]">
        <div className="w-full flex flex-col items-start justify-between">
          <div className="w-[370px] h-full text-3xl font-bold">{data.name}</div>
          <div className="flex mt-2 gap-2 text-gray-500">
            {data.tags.map((tag: string) => (
              <div>#{tag}</div>
            ))}
          </div>
          <div className="line-clamp-2 text-sm text-gray-400 mt-2">
            {data.description}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
