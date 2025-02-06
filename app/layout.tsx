import type { Metadata } from "next";
import { Provider } from "jotai";
import "./globals.css";

import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "My Wedding Diary",
  description: "My Wedding Diary",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="flex h-screen">
            {/* 왼쪽 네비게이션 고정 */}
            <div className="w-[250px] z-1000 h-screen fixed left-0 top-0 bg-white border-r border-gray-200">
              <Sidebar />
            </div>

            {/* 오른쪽 컨텐츠 (왼쪽 공간 확보 후 스크롤 가능) */}
            <div className="flex-1 min-w-0 ml-[280px] overflow-y-auto h-screen">
              {children}
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
