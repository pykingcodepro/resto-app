"use client";

import { Item } from '@/typeDefinitions/Item';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

export default function AddNewItemsForm(
  { item, setItem, setIsDashboard } : {
    item: Item,
    setItem: (val: Item) => void,
    setIsDashboard: (val: boolean) => void
  }
) {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async(e:FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (item.name === "" || item.imgUrl === "" || isNaN(item.price) || item.desc === "") {
      setMsg("Fill all Fields.");
      setIsLoading(false);
      return;
    }

    if (item.price < 0) {
      setMsg("Price should be greater than zero.");
      setIsLoading(false);
      return;
    }

    const res = await fetch(`/api/restaurants/items/`, {
      method: 'POST',
      headers: { "Content-Type" : "application/json" },
      credentials: "include",
      body: JSON.stringify(item)
    });

    const data = await res.json();

    if(!res.ok) {
      setMsg(data.msg);
      setIsLoading(false);
      return;
    }

    setMsg("");
    setIsDashboard(true);
    setIsLoading(false);
  }

  return (
    <>
      <form
        action="#"
        method='POST'
        className='flex flex-col items-center'
      >
        <h1 className='text-4xl font-semibold my-5'>Add New Item</h1>
        <input
          type="text"
          placeholder='Name'
          className='w-70 p-2 border-2 rounded mt-5 pl-5'
          value={item.name}
          onChange={e => setItem({...item, name: e.target.value})}
        />
        <input
          type="text"
          placeholder='Image URL'
          className='w-70 p-2 border-2 rounded mt-5 pl-5'
          value={item.imgUrl}
          onChange={e => setItem({...item, imgUrl: e.target.value})}
        />
        <div
          className='w-70 border-2 rounded mt-5 flex items-center bg-gray-300'
        >
          <FaIndianRupeeSign className='mx-4' />
          <input
            type="number"
            placeholder='Price'
            className='w-70 p-2 pl-5 bg-white border-l-2'
            value={isNaN(item.price) ? "" : item.price}
            onChange={e => setItem({...item, price: parseFloat(e.target.value)})}
          />
        </div>

        <textarea
          className='w-70 p-2 border-2 rounded mt-5 pl-5'
          placeholder='Description'
          value={item.desc}
          onChange={e => setItem({...item, desc: e.target.value})}
        ></textarea>

        <div className="w-70 flex justify-between">
          <input
            className="mt-5 w-30 disabled:cursor-not-allowed disabled:bg-red-700 disabled:text-gray-200 text-white bg-red-500 hover:bg-red-600 hover:cursor-pointer h-10 rounded text-xl "
            type="submit"
            value="Add"
            disabled={isLoading}
            onClick={handleSubmit}
          />
          <button
            className="mt-5 w-30 disabled:cursor-not-allowed disabled:bg-cyan-700 disabled:text-gray-200 text-white bg-cyan-500 hover:bg-cyan-600 hover:cursor-pointer h-10 rounded text-xl flex justify-center items-center"
            onClick={e => {
              setIsDashboard(true);
            }}
          >
            <MdOutlineKeyboardArrowLeft size={30} />
            Back
          </button>
        </div>
        <span className="mt-5 text-red-600">{msg}</span>

      </form>
    </>
  )
}
