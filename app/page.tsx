"use client";

import { useState } from "react";
import Dashboard from "./_components/Dashboard";
import RestaurantHeader from "./_components/RestaurantHeader";
import AddNewItemsPreview from "./_components/AddnewItemsComponents/AddNewItemsPreview";
import AddNewItemsForm from "./_components/AddnewItemsComponents/AddNewItemsForm";
import AddNewItems from "./_components/AddNewItems";

export default function Home() {

  const [itemName, setItemName] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");
  const [price, setPrice] = useState<number>(NaN);
  const [desc, setDesc] = useState<string>("");

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
