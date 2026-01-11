"use client";

import { useEffect, useState } from 'react';
import AddNewItemsForm from './AddnewItemsComponents/AddNewItemsForm';
import AddNewItemsPreview from './AddnewItemsComponents/AddNewItemsPreview';
import { Item } from '@/typeDefinitions/Item';

export default function AddNewItems(
  {
    setIsDashboard,
    editItem
  }: { 
    setIsDashboard: (val: boolean) => void,
    editItem: Item|null
  }
) {

  const [item, setItem] = useState<Item>({
    _id: '',
    name: '',
    imgUrl: '',
    price: NaN,
    desc: ''
  });

  useEffect(() => {
    if(editItem) {
      setItem(editItem);
    }
  }, [])

  return (
    <div className="flex flex-row justify-around items-center">
      <AddNewItemsForm item={item} setItem={setItem} setIsDashboard={setIsDashboard} isEdit={editItem!==null}/>
      <AddNewItemsPreview item={item} />
    </div>
  )
}
