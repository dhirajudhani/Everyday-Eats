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
    <div className='w-[350px] h-[400px] mr-4 mb-5 transition duration-200'>
        <div className='p-2'>
            <span className='block relative cursor-pointer'>
                <div className='rounded-[15px] cursor-pointer relative max-w-full w-[328.4px] h-[248px] overflow-hidden'>
                    <img className='w-full h-full rounded-inherit object-cover transition-opacity transition-transform duration-250 ease' src={CDN_URL + cloudinaryImageId} alt="restaurant img" />
                </div>
                <div className='off'>
                    <p>
                        {aggregatedDiscountInfoV3?.header ? `${aggregatedDiscountInfoV3.header}${
                    aggregatedDiscountInfoV3.subHeader
                      ? ` ${aggregatedDiscountInfoV3.subHeader}`
                      : ""
                  }`: "Flat 50% OFF"}
                    </p>
                </div>
            </span>
            <span className='Food-item-link'>
                <div className='pname'>
                    <h4>{name}</h4>
                    <div className='rating'>
                        <p>{avgRating}</p>
                        <i className="fa-solid fa-star" style={{ color: "#ffffff" }} />
                    </div>
                </div>
                <div className='Category'>
                    <p className='p1'>{cuisines.join(", ")}</p>
                    <p className='p2'>{costForTwo}</p>
                </div>
                <div className='time'>
                    <p>{sla.deliveryTime} min</p>
                </div>
                <div className='covid'>
                    <img src={MAX_SAFE} alt="Safety image" />
                </div>
                <p>Follows all Safety measures to ensure food safety</p>
            </span>
        </div>
    </div>
  )
}

export default RestaurantCard