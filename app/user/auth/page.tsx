import RestaurantHeader from '@/app/_components/RestaurantHeader'
import UserLogin from '@/app/_components/userAuthComponents/UserLogin'
import React from 'react'

export default function Home() {
  return (
    <>
      <RestaurantHeader isLogin={true} />  { /* Temparary using restaurant header */ }
      <UserLogin />
    </>
  )
}
