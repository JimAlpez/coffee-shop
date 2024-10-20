import React from 'react'
import CoffeeCard from '../components/Card/Coffee'

const CoffeesPage = () => {
  return (
    <div className="max-w-[1110px] w-11/12 mx-auto my-28 text-center space-y-10">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </div>
    </div>
  )
}

export default CoffeesPage