"use client";

import React, { FormEvent, useState } from "react";
import LoginComponent from "../_components/LoginComponent";
import SignUpComponent from "../_components/SignUpComponent";
import RestaurantHeader from "../_components/RestaurantHeader";
import RestaurantFooter from "../_components/RestaurantFooter";

export default function page() {
  const [login, setLogin] = useState<boolean>(true);
  return (
    <>
      <RestaurantHeader />
      {login ? <LoginComponent /> : <SignUpComponent />}
      <br />
      <span className="mb-20 text-center inline-block w-screen">
        {" "}
        {login ? "Don't have an account?" : "Already have an account?"}
        <button
          className="cursor-pointer ml-4"
          onClick={(e: FormEvent) => {
            e.preventDefault();
            setLogin(!login);
          }}
        >
          {login ? "Sign up" : "Login"}
        </button>
      </span>
      <RestaurantFooter />
    </>
  );
}
