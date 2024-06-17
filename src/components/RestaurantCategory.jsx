import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({data, resInfo}) => {
    const [showItems, setShowItems] = useState(true)
    const handleClick = () => {
      setShowItems(!showItems)
    }
  return (
    <div>
      <div className='m-5'>
        <div className='flex items-center justify-between cursor-pointer' onClick={handleClick}>
          <h3 className='text-lg font-bold'>{data.title} ({data.itemCards.length})</h3>
          {showItems ? <i className={`fa-solid fa-chevron-up`}></i> : <i className={`fa-solid fa-chevron-down`}></i>}
        </div>
        {showItems && <ItemList resInfo={resInfo} items={data.itemCards} />}
      </div>
      <div className='menu-border'></div>
    </div>
  )
}

export default RestaurantCategory