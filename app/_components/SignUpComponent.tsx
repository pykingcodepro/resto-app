"use client";

import React, { useEffect, useState } from "react";

export default function SignUpComponent() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [restaurantName, setRestaurantName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [contact, setContact] = useState<number>(NaN);

  useEffect(() => {
    console.log(contact);
  }, [contact])
  return (
    <form action="#" method="POST" className="flex flex-col items-center">
      <h1 className="text-3xl mb-5 font-semibold">Sign Up</h1>
      <input
        type="email"
        className="border rounded mt-5 pl-4 py-2 text-xl"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border rounded mt-5 pl-4 py-2 text-xl"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        className="border rounded mt-5 pl-4 py-2 text-xl"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <input
        type="text"
        className="border rounded mt-5 pl-4 py-2 text-xl"
        placeholder="Restaurant Name"
        value={restaurantName}
        onChange={(e) => setRestaurantName(e.target.value)}
      />
      <input
        type="text"
        className="border rounded mt-5 pl-4 py-2 text-xl"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        className="border rounded mt-5 pl-4 py-2 text-xl"
        placeholder="Full address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="number"
        className="border rounded mt-5 pl-4 py-2 text-xl"
        placeholder="Contact No."
        value={Number.isNaN(contact) ? "" : contact}
        onChange={(e) => {
          let newContact = e.target.value;
          setContact(
            Number.isNaN(newContact) ? NaN : parseInt(newContact)
          )
        }}
      />

      <button
        className="mt-5 text-white bg-cyan-500 min-w-60 h-10 rounded text-xl "
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
}
