"use client";

import React, { useState } from "react";

export default function LoginComponent() {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <form action="#" method="POST" className="flex flex-col items-center">
        <h1 className="text-3xl mb-5 font-semibold">Login</h1>
        <input
          type="email"
          className="border rounded mt-5 pl-4 py-2 text-xl"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="border rounded mt-5 pl-4 py-2 text-xl"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button
          className="mt-5 text-white bg-cyan-500 min-w-60 h-10 rounded text-xl "
          type="submit"
        >
          Login
        </button>

      </form>
    </>
  );
}
