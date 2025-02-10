"use client";

import { useState } from "react";

export default function AdminLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "로그인 실패");
    } else {
      window.location.reload();
    }
  };
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-4 border rounded shadow"
      >
        <h1 className="text-2xl font-bold text-center">관리자 로그인</h1>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <label htmlFor="email" className="block mb-1">
            이메일
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-black px-4 py-2 w-full"
        >
          로그인
        </button>
      </form>
    </div>
  );
}
