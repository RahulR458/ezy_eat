import React, { useState } from 'react'
import { data } from '../data/data.js'

function Foods() {
  // console.log(data);
  const [foods, setFoods] = useState(data)

  // Filter by foods
  const filterFoods = (category) => {
    setFoods(
      data.filter((item)=>{
        return item.category === category
      })
    )
  }

  // Filter By Price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item)=>{
        return item.price === price
      })
    )
  }

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
      
      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Filter Type */}
        <div>
          <p className='text-gray-700 font-bold '>Filter Type</p>
          <div className='flex justify-between flex-wrap'>
              <button onClick={()=>setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
              <button onClick={()=>filterFoods("burger")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
              <button onClick={()=>filterFoods("pizza")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
              <button onClick={()=>filterFoods("salad")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
              <button onClick={()=>filterFoods("chicken")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <div>
            <p className='text-gray-700 font-bold '> Filter Price</p>
            <div className='flex justify-between max-w-[390px] w-full flex-wrap'>
                <button onClick={()=>filterPrice("$")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                <button onClick={()=>filterPrice("$$")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                <button onClick={()=>filterPrice("$$$")}className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                <button onClick={()=>filterPrice("$$$$")}className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                <button onClick={()=>filterPrice("$$$$$")}className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$$</button>
            </div>
          </div>
        </div>
      </div>

      {/* Display Foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
          {foods.map((items, index)=>(
            <div key={index} className='border shadow-lg hover:scale-105 duration-300'>
              <img src={items.image} alt={items.name} className='w-full h-[200px] object-cover rounded-t-lg' />
              <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{items.name}</p>
                <p>
                  <span className='bg-orange-600 text-white p-1 rounded-full'>{items.price}</span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Foods