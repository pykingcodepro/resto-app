import Link from "next/link";
import React from "react";

export default function RestaurantHeader(
  { isLogin } : { isLogin: boolean }
) {
  return (
    <div className="flex justify-between mb-5">
      <div className="logo">
        <img
          className="w-20 rounded-full"
          src="https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg"
          alt="logo"
        />
      </div>

      <ul className="flex w-100 justify-around items-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        {
          isLogin 
          ? <li>
              <Link href="/">Login/SignUp</Link>
            </li>
          : <li>
              <Link href="/">Profile</Link>
            </li>
        }
      </ul>
    </div>
  );
}
