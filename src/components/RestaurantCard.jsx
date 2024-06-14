import React from 'react'
import { CDN_URL, MAX_SAFE } from '../utils/constant'

const RestaurantCard = (props) => {
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        aggregatedDiscountInfoV3,
        cuisines,
        costForTwo,
        sla,
      } = resData?.info;

  return (
    <div className='Food-item'>
        <div className='Food-item-margin'>
            <span className='Food-item-link'>
                <div className='card-img'>
                    <img src={CDN_URL + cloudinaryImageId} alt="restaurant img" />
                </div>
            </span>
        </div>
    </div>
  )
}

export default RestaurantCard