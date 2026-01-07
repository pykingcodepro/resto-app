"use client";

import { useState } from 'react';
import AddNewItemsForm from './AddnewItemsComponents/AddNewItemsForm';
import AddNewItemsPreview from './AddnewItemsComponents/AddNewItemsPreview';
import { Item } from '@/typeDefinitions/Item';

export default function AddNewItems(
  { setIsDashboard }: { setIsDashboard: (val: boolean) => void }
) {

  const [item, setItem] = useState<Item>({
    name: '',
    imgUrl: '',
    price: NaN,
    desc: ''
  });

  return (
    <div className="flex flex-row justify-around items-center">
      <AddNewItemsForm item={item} setItem={setItem} setIsDashboard={setIsDashboard} />
      <AddNewItemsPreview item={item} />
    </div>
  )
}
