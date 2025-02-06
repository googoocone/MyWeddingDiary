"use client";

import Image from "next/image";
import Calendar from "@/components/Calendar/Calendar";
import Todo from "@/components/Todo/Todo";
import { useState } from "react";
import dayjs from "dayjs";
import { testData } from "@/constants";

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState(dayjs().format("MM"));

  return (
    <div className="min-w-[1240px] bg-white w-full h-full p-2 sm:p-10 flex flex-col sm:flex-row gap-10 mt-12 sm:mt-0">
      <div className="w-full  sm:w-3/5 sm:min-w-[800px] flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row rounded-xl shadow-xl w-full h-[530px] sm:h-[57%]">
          <Calendar data={testData} onMonthChange={setSelectedMonth} />
          <Todo data={testData} selectedMonth={selectedMonth} />
        </div>
        <div className="hidden sm:block rounded-xl shadow-xl sm:w-full sm:h-[43%]">
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="border-2 rounded-xl w-full w-[400px] sm:min-w-[300px] h-full">
        <div className="w-[400px]"></div>
      </div>
    </div>
  );
}
