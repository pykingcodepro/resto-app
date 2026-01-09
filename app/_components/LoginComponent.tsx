"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginComponent() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [msg, setMsg] = useState<string>("");

  const [mainPasswordEye, setMainPasswordEye] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (email === "" || password === "") {
      alert("Fill all fields");
      setIsLoading(false);
      return;
    }

    if (!email.includes('@')) {
      alert('Enetr a valid email');
      setIsLoading(false)
    }

    const res = await fetch('/api/restaurants/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password })
    });

    const data = await res.json();

    if (!res.ok) {
      setMsg(data.msg);
      setIsLoading(false);
      return;
    }
    
    router.push("/restaurant");
    setIsLoading(false);
    setMsg("");

  };

  return (
    <>
      <form action="#" method="POST" className="flex flex-col items-center">
        <h1 className="text-3xl mb-5 font-semibold">Login</h1>
        <input
          type="email"
          className="border rounded mt-5 pl-4 py-2 text-xl w-70"
          placeholder="Email"
          name="restEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
          autoComplete="on"
        />

        <div className="password-group flex mt-5 w-70">
          <input
            type={mainPasswordEye ? "text" : "password"}
            className="border border-r-0 rounded rounded-r-none pl-4 h-11 text-xl focus:outline-none "
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
            autoComplete="on"
          />
          <div
            className="eye-logo cursor-pointer h-11 w-10 flex justify-center items-center border border-l-0 rounded rounded-l-none"
            onClick={(e: FormEvent) => {
              e.preventDefault();
              setMainPasswordEye(!mainPasswordEye);
            }}
          >
            {!mainPasswordEye ? <FaEye /> : <FaEyeSlash />}
          </div>
        </div>

        <input
          className="mt-5 w-70 disabled:cursor-not-allowed disabled:bg-cyan-700 disabled:text-gray-200 text-white bg-cyan-500 hover:bg-cyan-600 hover:cursor-pointer min-w-60 h-10 rounded text-xl "
          type="submit"
          value="Login"
          disabled={isLoading}
          onClick={handleSubmit}
        />
        <span className="mt-5 text-red-600">{msg}</span>
      </form>
    </>
  );
}
