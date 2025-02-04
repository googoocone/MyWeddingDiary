"use client";
import {
  useState,
  useCallback,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

import homeIcon from "../public/home.png";
import weddingHallIcon from "../public/weddinghall-tour.png";
import roadmapIcon from "../public/roadmap.png";
import schedulerIcon from "../public/scheduler.png";
import weddinghallIcon from "../public/weddinghall.png";
import studio from "../public/studio.png";
import dress from "../public/dress.png";
import makeup from "../public/makeup.png";
import ring from "../public/ring.png";
import furniture from "../public/furniture.png";

import premiumIcon from "../public/premium.png";
import inviteIcon from "../public/invite.png";
import mobileCardIcon from "../public/mobilecard.png";

const menuReadyItems = [
  { name: "플래너 홈", path: "/", icon: homeIcon },
  { name: "웨딩홀 투어", path: "/wedding-tour", icon: weddingHallIcon },
  { name: "로드맵", path: "/roadmap", icon: roadmapIcon },
];

const menuDiaryItems = [
  { name: "스케줄러", path: "/scheduler", icon: schedulerIcon },
  { name: "웨딩홀", path: "/wedding-hall", icon: weddinghallIcon },
  { name: "스튜디오/스냅", path: "/studio-snap", icon: studio },
  { name: "드레스/예복", path: "/dress", icon: dress },
  { name: "메이크업(신랑, 신부, 혼주)", path: "/makeup", icon: makeup },
  { name: "반지/예물", path: "/ring-art", icon: ring },
  { name: "가전/가구", path: "/furniture", icon: furniture },
];

const menuPremiumItems = [
  { name: "프리미엄 가입하기", path: "/premium/signUp", icon: premiumIcon },
  { name: "배우자 초대하기", path: "/premium/invite", icon: inviteIcon },
  { name: "모바일 청첩장", path: "/premium/mobile-card", icon: mobileCardIcon },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // 토글 핸들러
  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Escape 키로 닫기
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* 상단 네비게이션 (모바일에서만 보임) */}
      <div className="sm:hidden w-full h-12 bg-white fixed top-0 left-0 z-50 flex items-center justify-center px-4 shadow-md">
        <button
          onClick={toggleSidebar}
          className="text-black absolute left-4"
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          {isOpen ? "X" : "☰"}
        </button>
        <span className="font-bold text-lg">Logo</span>
      </div>

      {/* 오버레이 (사이드바가 열렸을 때 클릭하면 닫힘) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* 사이드바 */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-screen w-[280px] bg-[#F8F8F7] px-4 shadow-lg transition-transform z-50",
          {
            "-translate-x-full": !isOpen, // 닫혔을 때 숨김
            "translate-x-0": isOpen, // 열렸을 때 보이기
            "md:relative md:translate-x-0": true, // 데스크톱에서는 항상 보임
          }
        )}
      >
        {/* 닫기 버튼 (사이드바 내부에서 보이는 X 버튼) */}
        <div className="p-4 flex justify-between items-center">
          <span className="font-bold text-lg">Logo</span>
          <button onClick={toggleSidebar} className="md:hidden text-xl">
            X
          </button>
        </div>

        {/* 메뉴 섹션 */}
        <nav>
          <SidebarSection
            title="웨딩 준비"
            items={menuReadyItems}
            isOpenFunc={setIsOpen}
          />
          <SidebarSection
            title="웨딩 다이어리"
            items={menuDiaryItems}
            isOpenFunc={setIsOpen}
          />
          <SidebarSection
            title="프리미엄"
            items={menuPremiumItems}
            isOpenFunc={setIsOpen}
          />
        </nav>
      </aside>
    </>
  );
}

/** Sidebar 섹션 컴포넌트 */
function SidebarSection({
  title,
  items,
  isOpenFunc,
}: {
  title: string;
  items: { name: string; path: string; icon: any }[];
  isOpenFunc: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="py-2">
      <div className="text-sm text-gray-500 py-2 pl-4">{title}</div>
      {items.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          onClick={() => isOpenFunc(false)}
          className="flex items-center py-1 my-1 pl-4 rounded-2xl hover:bg-[#D9D9D9] transition"
        >
          <Image
            src={item.icon}
            alt={`${item.name} icon`}
            width={16}
            height={16}
            className="mr-2"
          />
          {item.name}
        </Link>
      ))}
    </div>
  );
}
