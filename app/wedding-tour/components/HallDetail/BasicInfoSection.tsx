export default function BasicInfoSection({ data }: any) {
  return (
    <div className="w-full flex flex-col items-start justify-center">
      <div className="text-xl font-[600] mb-4">홀 상세정보</div>
      <div className="w-full flex items-center justify-center">
        {/* 이 부분이 기본정보의 요소들이 들어가는 부분 */}
        <div className="w-[375px] h-[230px] flex flex-col items-start gap-4">
          <div className="w-full flex items-center justify-between">
            <div className="w-[100px] flex-shrink-0 text-gray-500 self-start">
              예식시간
            </div>
            <div className="w-[275px] pl-[20px] pr-[50px] flex flex-wrap items-center justify-start gap-2">
              {data.weddingTime.map((time: string, index: number) => (
                <div key={index}>{time}</div>
              ))}
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="w-[100px] flex-shrink-0 text-gray-500 self-start">
              홀종류
            </div>
            <div className="w-[275px] pl-[20px] flex flex-wrap items-center justify-start gap-2">
              {data.weddingHalls.map((hall: string, index: number) => (
                <div key={index}>{hall}</div>
              ))}
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="w-[100px] text-[justify] flex-shrink-0 text-gray-500 self-start">
              식사종류
            </div>
            <div className="w-[275px] pl-[20px] flex flex-wrap items-center justify-start gap-2">
              {data.mealType.map((meal: string, index: number) => (
                <div key={index}>{meal}</div>
              ))}
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="w-[100px] dflex-shrink-0 text-gray-500 self-start">
              보증인원
            </div>
            <div className="w-[275px] pl-[20px] flex flex-wrap items-center justify-start gap-2">
              {data.minGuarantee.map((minGuarantee: number, index: number) => (
                <div key={index}>{minGuarantee}명 </div>
              ))}
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="w-[100px] flex-shrink-0 text-gray-500 self-start">
              주차대수
            </div>
            <div className="w-[275px] pl-[20px] flex flex-wrap items-center justify-start gap-2">
              {data.parking.map((parking: number, index: number) => (
                <div key={index}>{parking}대</div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[375px] h-[230px]  flex flex-col items-start gap-4">
          <div className="w-full flex items-center justify-between">
            <div className="w-[100px] flex-shrink-0 text-gray-500 self-start">
              예식간격
            </div>
            <div className="w-[275px] pl-[20px] flex flex-wrap items-center justify-start gap-2">
              {data.weddingInterval}분
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="w-[100px] flex-shrink-0 text-gray-500 self-start">
              대관료
            </div>
            <div className="w-[275px] pl-[20px] flex flex-wrap items-center justify-start gap-2">
              {data.hallPrice.map((price: number, index: number) => (
                <div key={index}>{price.toLocaleString()}만원, </div>
              ))}
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="w-[100px] flex-shrink-0 text-gray-500 self-start">
              식대
            </div>
            <div className="w-[275px] pl-[20px] flex flex-wrap items-center justify-start gap-2">
              {data.mealPrice.map((mealPrice: number, index: number) => (
                <div key={index}>{mealPrice.toLocaleString()}원, </div>
              ))}
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="w-[100px] flex-shrink-0 text-gray-500 self-start">
              최대수용인원
            </div>
            <div className="w-[275px] pl-[20px] flex flex-wrap items-center justify-start gap-2">
              {data.maxCapacity.map((maxCapacity: number, index: number) => (
                <div key={index}>{maxCapacity}명</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border border-gray-300 mb-4"></div>
    </div>
  );
}
