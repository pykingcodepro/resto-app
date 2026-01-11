"use client";

import { useState } from "react";

export default function Home() {

  const [isDashboard, setIsDashboard] = useState<boolean>(true);

  return (
    <>
      <h1>Welcome Page</h1>
    </>
  );
}
