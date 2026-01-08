import { Item } from "@/typeDefinitions/Item";
import React from "react";

export default function Card({ item }: { item: Item }) {
  return (
    <div className="card rounded-xl shadow-lg w-70 pb-5">
      {item.imgUrl !== "" ? (
        <img
          src={item.imgUrl}
          alt=""
          className="w-70 h-50 rounded-t-xl bg-gray-400"
        />
      ) : (
        <div className="w-70 h-50 rounded-t-xl bg-gray-400"></div>
      )}
      <h2 className="inline-block w-70 mt-5 ml-5 text-2xl">
        {item.name !== "" ? item.name : "Name"}
      </h2>
      <h2 className="font-semibold mt-3 ml-5 text-xl">
        Rs. {!isNaN(item.price) ? item.price : "-"}
      </h2>
      <p className="text-gray-500 mt-3 mx-5 mb-5">
        {item.desc !== "" ? item.desc : "Description"}
      </p>
    </div>
  );
}
