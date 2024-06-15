import React from "react";
import { CDN_URL, MAX_SAFE } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
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
    <div className="w-[350px] h-[430px] mr-4 mb-5 transition duration-200 hover:rounded-[15px] hover:shadow-lg">
      <div className="p-2">
        <span className="block relative cursor-pointer">
          <div className="rounded-[15px] cursor-pointer relative max-w-full w-[328.4px] h-[248px] overflow-hidden">
            <img
              className="image"
              src={CDN_URL + cloudinaryImageId}
              alt="restaurant img"
            />
          </div>
          <div className="absolute bottom-3 max-w-[calc(100%-24px)]">
            <p className="text-sm leading-[18px] px-6 py-0 bg-orange-500 text-white font-normal w-max-content rounded-r-lg max-w-full mb-0">
              {aggregatedDiscountInfoV3?.header
                ? `${aggregatedDiscountInfoV3.header}${
                    aggregatedDiscountInfoV3.subHeader
                      ? ` ${aggregatedDiscountInfoV3.subHeader}`
                      : ""
                  }`
                : "Flat 50% OFF"}
            </p>
          </div>
        </span>
        <span className="block relative cursor-pointer">
          <div className="flex justify-between text-[16px] leading-4">
            <h4 className="leading-[1.2] mb-0 font-medium text-left text-base my-2 max-w-[80%] text-[rgb(28, 28, 28)]">
              {name}
            </h4>
            <div className="flex items-center  justify-center border border-customGreen bg-customGreen text-white text-xs rounded-[6px] h-[20px] w-[45px] my-[7.2px]">
              <p className="text-white m-1 font-semibold text-xs">
                {avgRating}
              </p>
              <i className="fa-solid fa-star " style={{ color: "#ffffff" }} />
            </div>
          </div>
          <div className="flex justify-between text-sm leading-3">
            <p className="leading-[1.5] m-0 text-left overflow-hidden overflow-ellipsis whitespace-nowrap text-[rgb(105, 105, 105)] max-w-[60%] pb-4">
              {cuisines.join(", ")}
            </p>
            <p className="leading-[1.5] m-0 text-right overflow-hidden overflow-ellipsis whitespace-nowrap text-[rgb(105, 105, 105)] max-w-[60%] pb-4">
              {costForTwo}
            </p>
          </div>
          <div className="flex justify-end h-[21px] mb-2">
            <p className="m-0 bg-white bg-opacity-80 rounded-[4px] font-medium text-xs leading-[16px] text-[rgb(54, 54, 54)] py-2 px-5">
              {sla.deliveryTime} min
            </p>
          </div>
          <div className="h-[1px] bg-custom"></div>
          <div className="flex w-full items-center h-9 ">
            <div className="w-16 h-5">
              <img className="object-cover w-full h-full" src={MAX_SAFE} alt="Covid img" />
            </div>
            <p className="ml-2 text-left text-customPara overflow-hidden overflow-ellipsis font-normal text-xs leading-[17px]">Follows all Max Safety measures to ensure your food is safe</p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;
