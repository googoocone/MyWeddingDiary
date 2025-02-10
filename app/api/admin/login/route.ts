import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const SECRET_KEY = process.env.ADMIN_SECRET_KEY;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "이메일과 비밀번호를 모두 입력해주세요." },
        { status: 400 }
      );
    }

    const admin = await prisma.admin.findFirst({
      where: { email },
    });

    if (!admin) {
      return NextResponse.json({ error: "잘못되었네요" }, { status: 401 });
    }

    const isValid = await bcrypt.compare(password, admin.password);
    if (!isValid) {
      return NextResponse.json({ error: "잘못되었네요" }, { status: 401 });
    }

    const token = jwt.sign({ id: admin.id, email: admin.email }, SECRET_KEY, {
      expiresIn: "1h",
    });

    const response = NextResponse.json({ message: "로그인 성공" });
    console.log("로그인 성공");
    response.cookies.set("adminToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/admin",
      maxAge: 3600,
    });

    return response;
  } catch (error) {
    console.error("관리자 로그인 오류:", error);
    return NextResponse.json({ error: "내부 서버 오류." }, { status: 500 });
  }
}
