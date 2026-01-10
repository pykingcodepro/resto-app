"use client";

import { Item } from "@/typeDefinitions/Item";
import { useState } from "react";
import AddNewItems from "../_components/AddNewItems";
import Dashboard from "../_components/Dashboard";
import RestaurantHeader from "../_components/RestaurantHeader";

export default function Home() {

  const [isDashboard, setIsDashboard] = useState<boolean>(true);
  const [editItem, setEditItem] = useState<Item|null>(null);

    return (
    <>
      <RestaurantHeader isLogin={false} />
      {
        isDashboard
        ? <Dashboard setIsDashboard={setIsDashboard} setEditItem={setEditItem} />
        : (
          <AddNewItems setIsDashboard={setIsDashboard} editItem={editItem} />
        )
      }
    </>
  );
}
