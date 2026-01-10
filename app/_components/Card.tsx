import { Item } from "@/typeDefinitions/Item";
import { FormEvent } from "react";

export default function Card({
  item,
  setIsDashboard,
  setEditItem
}: {
  item: Item;
  setIsDashboard: (val: boolean) => void;
  setEditItem: (item: Item|null) => void
}) {

  return (
    <div className="card flex flex-col justify-between rounded-xl shadow-lg w-70 pb-5 hover:scale-[1.05] hover:bg-gray- duration-300 transition-all">
      <div className="flex flex-col">
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
      <div className="mx-5 flex justify-between">
        <button
          className="bg-yellow-300 w-20 py-1 rounded cursor-pointer hover:bg-yellow-200"
          onClick={(e: FormEvent) => {
            e.preventDefault();
            setIsDashboard(false);
            setEditItem(item);
          }}
        >
          Edit
        </button>
        <button className="bg-red-500 w-20 py-1 rounded text-white cursor-pointer hover:bg-red-400">
          Delete
        </button>
      </div>
    </div>
  );
}
