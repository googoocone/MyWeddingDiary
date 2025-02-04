"use client";

import { useState } from "react";
import ReactCalendar from "react-calendar";
import dayjs from "dayjs";

import "react-calendar/dist/Calendar.css";

export default function Calendar({
  data,
  onMonthChange,
}: {
  data: { date: string; title: string; description: string; color: string }[];
  onMonthChange: (month: string) => void;
}) {
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);

  function onClickDay() {
    console.log("hi");
    setIsAddEventOpen(true);
  }

  return (
    <div className=" sm:w-3/5 h-full px-2">
      <ReactCalendar
        locale="ko"
        formatDay={(locale, date) => dayjs(date).format("D")}
        calendarType="gregory"
        onActiveStartDateChange={({ activeStartDate }) => {
          const month = dayjs(activeStartDate).format("MM");
          onMonthChange(month);
        }}
        onClickDay={onClickDay}
        tileContent={({ date, view }) => {
          const items = data.filter(
            (item: {
              date: string;
              title: string;
              description: string;
              color: string;
            }) => item.date === dayjs(date).format("YYYY-MM-DD")
          );

          if (items.length > 0) {
            return (
              <div className="flex justify-center items-center absolute bottom-4 space-x-1">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="w-1.5 h-1.5 bg-[#ff8a8a] rounded-full flex"
                    style={{ backgroundColor: item.color }}
                  ></div>
                ))}
              </div>
            );
          }
        }}
      ></ReactCalendar>
      {isAddEventOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center shadow-lg">
          <div
            className="bg-white p-4 rounded-xl shadow-lg sm:w-[400px] h-[500px] relative w-[90%]"
            style={{ animation: "popup 0.3s ease-out" }}
          >
            <input
              className="text-xl font-bold mt-2 mb-1 w-full h-[50px] focus:outline-none"
              placeholder="일정 제목"
              autoFocus
            ></input>
            <input
              type="date"
              className="w-full h-4 flex items-center justify-start gap-4 text-md text-gray-500 mt-3 mb-4"
            />
            <input
              type="time"
              className="w-full h-4 flex items-center justify-start gap-4 text-md text-gray-500 mt-3 mb-4"
            />

            <textarea
              placeholder="내용을 입력해 주세요"
              className="text-sm p-2 text-gray-800 mb-4 text-justify w-full h-[290px] border border-gray-200 focus:outline-none placeholder:text-top"
            />
            <div className="flex justify-end gap-3 ">
              <button
                onClick={() => setIsAddEventOpen(false)}
                className=" text-white text-sm px-2 py-1 rounded-md bg-[#ffc8bd] hover:bg-[#ff8a8a]"
              >
                저장
              </button>
              <button
                onClick={() => setIsAddEventOpen(false)}
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
