import React, { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflinePage from "./OfflinePage";
import Shimmer from "./Shimmer";
import toast from "react-hot-toast";
import noresult from "../Images/no-results.png";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRes, setListRes] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  let [title, setTitle] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0343135&lng=72.52661049999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []; 
    const additionalRestaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []; 

    setListRes([...restaurants, ...additionalRestaurants]); // Updated state with combined restaurants list
    setfilteredRestaurant([...restaurants, ...additionalRestaurants]); // Updated state with combined restaurants list
    setTitle(json?.data?.cards[1]?.card?.card?.header?.title || "Top restaurant chains"); // Set the title
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <OfflinePage />;

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="scroll-smooth">
      <div className="flex justify-center gap-5 ml-10">
        <div className="border border-gray-200 rounded-[18px] justify-between items-center w-[250px] h-[45px] flex shadow-md overflow-hidden">
          <input
            className="w-full h-full p-3 rounded-lg focus:outline-none"
            type="text"
            placeholder="Search for restaurants, cuisines"
            value={searchText}
            onChange={(e) => {
              const searchTextValue = e.target.value.toLowerCase();
              setSearchText(searchTextValue);

              if (searchTextValue === "") {
                setfilteredRestaurant(listOfRes);
              } else {
                const filteredList = listOfRes.filter((res) => {
                  return (
                    res.info.name.toLowerCase().includes(searchTextValue) || // Added return statement
                    res.info.cuisines.some((cuisine) => {
                      return cuisine.toLowerCase().includes(searchTextValue); // Added return statement
                    })
                  );
                });
                setfilteredRestaurant(filteredList);
              }
            }}
          />
          <div
            className="w-14 h-14 flex items-center justify-center text-lg cursor-pointer"
            onClick={() => {
              console.log(searchText);
              setSearchText("");
            }}
          >
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ color: "#939393" }}
            ></i>
          </div>
        </div>
        <button
          className="text-[#111111] bg-white border border-[#e2e2e7] rounded-[18px] py-2 px-3 font-normal text-[14px] hover:bg-slate-200 cursor-pointer"
          onClick={() => {
            setfilteredRestaurant(listOfRes);
            console.log("clicked");
            toast.success("All Restaurants are Loaded Successfully");
          }}
        >
          All Restaurants
        </button>
        <button
          className="text-[#111111] bg-white border border-[#e2e2e7] rounded-[18px] py-2 px-3 font-normal text-[14px] hover:bg-slate-200 cursor-pointer"
          onClick={() => {
            const filteredRes = listOfRes.filter((res) => res.info.avgRating > 4.3); // Added return statement
            setfilteredRestaurant(filteredRes);
            toast.success("Highly Rated Restaurants");
          }}
        >
          Rating 4.3+
        </button>
        <button
          className="text-[#111111] bg-white border border-[#e2e2e7] rounded-[18px] py-2 px-3 font-normal text-[14px] hover:bg-slate-200 cursor-pointer"
          onClick={() => {
            const filteredRes = listOfRes.filter((res) => res?.info?.veg === true); // Added return statement
            setfilteredRestaurant(filteredRes);
            toast.success("Showing Pure Veg Restaurants");
          }}
        >
          Pure Veg 
        </button>
        <button
          className="text-[#111111] bg-white border border-[#e2e2e7] rounded-[18px] py-2 px-3 font-normal text-[14px] hover:bg-slate-200 cursor-pointer"
          onClick={() => {
            const filteredRes = listOfRes.filter((res) => res?.info?.sla?.deliveryTime <= 25); // Added return statement
            setfilteredRestaurant(filteredRes);
            toast.success("Fast Delivery Restaurants");
          }}
        >
          Fast Delivery 
        </button>
        <button
          className="text-[#111111] bg-white border border-[#e2e2e7] rounded-[18px] py-2 px-3 font-normal text-[14px] hover:bg-slate-200 cursor-pointer"
          onClick={() => {  
            const filteredRes = listOfRes.filter((res) => {
              const costOfTwo = parseInt(
                res?.info?.costForTwo
                  .replace("₹", "")
                  .replace(" for two", "")
                  .trim()
              );
              return costOfTwo <= 300; // Added return statement
            });
            setfilteredRestaurant(filteredRes);
            toast.success("Budget-Friendly Restaurants Displayed");
          }}
        >
          Less than ₹300
        </button>
        <button
          className="text-[#111111] bg-white border border-[#e2e2e7] rounded-[18px] py-2 px-3 font-normal text-[14px] hover:bg-slate-200 cursor-pointer"
          onClick={() => {  
            const filteredRes = listOfRes.filter((res) => {
              const costOfTwo = parseInt(
                res?.info?.costForTwo
                  .replace("₹", "")
                  .replace(" for two", "")
                  .trim()
              );
              return costOfTwo > 300 && costOfTwo <= 600; // Added return statement
            });
            setfilteredRestaurant(filteredRes);
            toast.success("Budget-Friendly Restaurants Displayed");
          }}
        >
          Range: ₹300 - ₹600 
        </button>
      </div>
      <div className="max-w-[1100px] mx-auto">
        <h2 className="mt-5 py-2 font-bold text-2xl">{title}</h2>
        {filteredRestaurant.length === 0 ? (
          <div className="flex items-center justify-center m-40">
            <img src={noresult} alt="Search results are finished, No Result Found" className="w-80" />
          </div>
        ) : (
          <div className="flex w-full flex-wrap">
            {filteredRestaurant.map((restaurant) => (
              <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                <RestaurantCard resData={restaurant} />
              </Link>
            ))} {/* Ensured map function returns JSX */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
