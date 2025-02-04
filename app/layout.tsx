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
            <div className="w-[250px]">
              <Sidebar />
            </div>
            <div className="flex-1 min-w-0">{children}</div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
