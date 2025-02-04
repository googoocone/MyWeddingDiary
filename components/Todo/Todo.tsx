import dayjs from "dayjs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";

export default function Todo({
  data,
  selectedMonth,
}: {
  data: {
    date: string;
    title: string;
    time: string;
    description: string;
    color: string;
  }[];
  selectedMonth: string;
}) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item: any) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div
      className="w-full sm:w-2/5 h-[405px]  border-l-[1px] p-4 flex flex-col gap-4 overflow-y-auto"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
        @keyframes popup {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
      {data.map((item) => {
        if (dayjs(item.date).format("MM") === selectedMonth) {
          return (
            <>
              <div
                className="flex cursor-pointer hover:bg-gray-50"
                onClick={() => handleClick(item)}
              >
                <div
                  className="w-1 h-full  mr-3"
                  style={{ backgroundColor: item.color }}
                ></div>
                <div className="w-full flex flex-col">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500 mb-1">
                      {item.date}
                    </div>
                    <div className="flex text-sm w-16 items-center gap-1">
                      <AiOutlineClockCircle className="w-3 h-3" />
                      <div className="text-md text-gray-500">{item.time}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-md font-bold text-gray-800 truncate max-w-[28ch]">
                      {item.title}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pl-2 w-full border-dotted border-b border-gray-300"></div>
            </>
          );
        }
      })}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center shadow-lg">
          <div
            className="bg-white p-4 rounded-xl shadow-lg sm:w-[400px] relative w-[90%]"
            style={{ animation: "popup 0.3s ease-out" }}
          >
            <h2 className="text-xl font-bold mt-2 mb-1">
              {selectedItem.title}
            </h2>
            <div className="w-full h-4 flex items-center justify-start gap-4 text-md text-gray-500 mt-3 mb-4">
              {selectedItem.date}
              {"  "}
              {
                ["일", "월", "화", "수", "목", "금", "토"][
                  new Date(selectedItem.date).getDay()
                ]
              }
              요일
              <div className="flex items-center gap-1">
                <AiOutlineClockCircle></AiOutlineClockCircle>
                {selectedItem.time}
              </div>
            </div>

            <p className="text-sm text-gray-800 mb-4 text-justify">
              {selectedItem.description}
            </p>
            <div className="flex justify-end ">
              <button
                onClick={handleClose}
                className=" text-white text-sm px-2 py-1 rounded-md bg-[#ffc8bd] hover:bg-[#ff8a8a]"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
