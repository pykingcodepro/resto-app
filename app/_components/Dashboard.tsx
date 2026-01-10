"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Card from './Card';
import { Item } from '@/typeDefinitions/Item';

export default function Dashboard(
  { 
    setIsDashboard,
    setEditItem
  } : { 
    setIsDashboard: Dispatch<SetStateAction<boolean>>,
    setEditItem: (val: Item|null) => void
  }
) {

  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch('/api/restaurants/items', {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      setItems(data.data.map((item: Item) => {
        return {
          _id: item._id,
          name: item.name,
          imgUrl: item.imgUrl,
          price: item.price,
          desc: item.desc
        }
      }))
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div className='flex flex-col h-[80vh] items-center justify-between'>
      <h1 className='text-3xl font-semibold'>Dashboard</h1>
      <div className='grid grid-cols-3 gap-20 my-10'>
        {items.map((item:Item, key) => {
          return <Card key={key} item={item} setIsDashboard={setIsDashboard} setEditItem={setEditItem} />
        })}
      </div>
      <button
        className='bg-red-500 p-2 text-white rounded cursor-pointer absolute fixed bottom-10 right-10'
        onClick={e=> {
          setIsDashboard(false);
        }}
      >
        Add new Item
      </button>
    </div>
  );
}
