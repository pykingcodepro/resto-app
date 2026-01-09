"use client";

import { useState } from "react";
import AddNewItems from "../_components/AddNewItems";
import Dashboard from "../_components/Dashboard";
import RestaurantHeader from "../_components/RestaurantHeader";


export default function Home() {

  const [isDashboard, setIsDashboard] = useState<boolean>(true);

  return (
    <>
      <RestaurantHeader isLogin={false} />
      {
        isDashboard
        ? <Dashboard setIsDashboard={setIsDashboard} />
        : (
          <AddNewItems setIsDashboard={setIsDashboard} />
        )
      }
    </>
  );
}
