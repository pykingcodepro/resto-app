import React, { Dispatch, SetStateAction } from 'react'

export default function Dashboard(
  { setIsDashboard } : { setIsDashboard: Dispatch<SetStateAction<boolean>> }
) {
  return (
    <>
      <h1>Dashboard</h1>
      <button
        className='bg-red-500 p-2 text-white rounded cursor-pointer'
        onClick={e=> {
          setIsDashboard(false);
        }}  
      >
        Add new Item
      </button>
    </>
  );
}
