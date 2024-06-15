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
                    <img className='w-full h-full rounded-inherit object-cover transition-opacity  duration-250 ease' src={CDN_URL + cloudinaryImageId} alt="restaurant img" />
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
            <span className='block relative cursor-pointer'>
                <div className='flex justify-between text-[16px] leading-4'>
                    <h4 className='leading-[1.2] mb-0 font-medium text-left text-base my-2 max-w-[80%] text-[rgb(28, 28, 28)]'>{name}</h4>
                    <div className='flex items-center justify-center border border-customGreen bg-customGreen text-white text-xs rounded-[6px] h-[20px] w-[40px] my-[7.2px]'>
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