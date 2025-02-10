// app/admin/page.tsx
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import AdminLoginForm from "../api/admin/AdminLoginForm";

const SECRET_KEY = process.env.ADMIN_SECRET_KEY || "your_secret_key";

export default function AdminPage() {
  // 쿠키에서 토큰 읽기
  const cookieStore = cookies();
  const token = cookieStore.get("adminToken")?.value;

  let adminData: any = null;
  console.log("toke", token);
  if (token) {
    try {
      // 토큰 검증 (유효한 경우 관리자 정보가 반환됨)
      adminData = jwt.verify(token, SECRET_KEY);
      console.log("daminData", adminData);
    } catch (error) {
      // 토큰이 유효하지 않으면 adminData는 null로 둡니다.
      console.log("왜 니가 실행되냐?");
      adminData = null;
    }
  }

  // 로그인되지 않은 경우 로그인 폼 렌더링
  if (!adminData) {
    console.log("hi");
    return <AdminLoginForm />;
  }

  // 로그인된 경우 관리자 패널 렌더링
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">관리자 페이지</h1>
      <p>환영합니다, {adminData.email}님!</p>
      {/* 여기에 추가적인 관리자 기능을 구현하세요. */}
    </div>
  );
}
