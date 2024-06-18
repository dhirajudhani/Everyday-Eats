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
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      import.meta.env.VITE_API_URL
    );
    const json = await data.json();
    const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    const additionalRestaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    const combinedRestaurants = [...restaurants, ...additionalRestaurants];

    setListRes(combinedRestaurants);
    setFilteredRestaurant(combinedRestaurants);
    setTitle(json?.data?.cards[1]?.card?.card?.header?.title || "Top restaurant chains");
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) return <OfflinePage />;

  const handleSearchChange = (e) => {
    const searchTextValue = e.target.value.toLowerCase();
    setSearchText(searchTextValue);

    if (searchTextValue === "") {
      setFilteredRestaurant(listOfRes);
    } else {
      const filteredList = listOfRes.filter(
        (res) =>
          res.info.name.toLowerCase().includes(searchTextValue) ||
          res.info.cuisines.some((cuisine) =>
            cuisine.toLowerCase().includes(searchTextValue)
          )
      );
      setFilteredRestaurant(filteredList);
    }
  };

  const resetSearch = () => {
    setSearchText("");
    setFilteredRestaurant(listOfRes);
  };

  const handleFilter = (filterFunction, toastMessage) => {
    const filteredRes = filterFunction(listOfRes);
    console.log("Filtered Results:", filteredRes); // Debugging statement
    setFilteredRestaurant(filteredRes);
    toast.success(toastMessage);
  };

  // Logging state updates to confirm re-renders
  useEffect(() => {
    console.log("Filtered Restaurant Updated:", filteredRestaurant);
  }, [filteredRestaurant]);

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
            onChange={handleSearchChange}
          />
          <div
            className="w-14 h-14 flex items-center justify-center text-lg cursor-pointer"
            onClick={resetSearch}
          >
            <i className="fa-solid fa-magnifying-glass" style={{ color: "#939393" }}></i>
          </div>
        </div>
        <button
          className="text-[#111111] bg-white border border-[#e2e2e7] rounded-[18px] py-2 px-3 font-normal text-[14px] hover:bg-slate-200 cursor-pointer"
          onClick={() => handleFilter(
            () => listOfRes,
            "All Restaurants are Loaded Successfully"
          )}
        >
          All Restaurants
        </button>
        <button
          className="text-[#111111] bg-white border border-[#e2e2e7] rounded-[18px] py-2 px-3 font-normal text-[14px] hover:bg-slate-200 cursor-pointer"
          onClick={() => handleFilter(
            (restaurants) => restaurants.filter((res) => {
              const rating = (res.info.avgRating);
              return !isNaN(rating) && rating > 4.3;
            }),
            "Highly Rated Restaurants"
          )}
        >
          Rating 4.3+
        </button>
        <button
          className="text-[#111111] bg-white border border-[#e2e2e7] rounded-[18px] py-2 px-3 font-normal text-[14px] hover:bg-slate-200 cursor-pointer"
          onClick={() => handleFilter(
            (restaurants) => restaurants.filter((res) => res?.info?.veg === true),
            "Showing Pure Veg Restaurants"
          )}
        >
          Pure Veg 
        </button>
        <button
          className="text-[#111111] bg-white border border-[#e2e2e7] rounded-[18px] py-2 px-3 font-normal text-[14px] hover:bg-slate-200 cursor-pointer"
          onClick={() => handleFilter(
            (restaurants) => restaurants.filter((res) => res?.info?.sla?.deliveryTime <= 25),
            "Fast Delivery Restaurants"
          )}
        >
          Fast Delivery 
        </button>
        <button
          className="text-[#111111] bg-white border border-[#e2e2e7] rounded-[18px] py-2 px-3 font-normal text-[14px] hover:bg-slate-200 cursor-pointer"
          onClick={() => handleFilter(
            (restaurants) => restaurants.filter((res) => {
              const costOfTwo = parseInt(res?.info?.costForTwo.replace("₹", "").replace(" for two", "").trim());
              return costOfTwo <= 300;
            }),
            "Budget-Friendly Restaurants Displayed"
          )}
        >
          Less than ₹300
        </button>
        <button
          className="text-[#111111] bg-white border border-[#e2e2e7] rounded-[18px] py-2 px-3 font-normal text-[14px] hover:bg-slate-200 cursor-pointer"
          onClick={() => handleFilter(
            (restaurants) => restaurants.filter((res) => {
              const costOfTwo = parseInt(res?.info?.costForTwo.replace("₹", "").replace(" for two", "").trim());
              return costOfTwo > 300 && costOfTwo <= 600;
            }),
            "Budget-Friendly Restaurants Displayed"
          )}
        >
          Range: ₹300 - ₹600 
        </button>
      </div>
      <div className="max-w-[1100px] mx-auto">
        <h2 className="mt-5 py-2 font-bold text-2xl">{title}</h2>
        {filteredRestaurant.length === 0 ? (
          <div className="flex items-center justify-center m-40">
            <img src={noresult} alt="No Result Found" className="w-80" />
          </div>
        ) : (
          <div className="flex w-full flex-wrap">
            {filteredRestaurant.map((restaurant, index) => (
              <Link key={`${restaurant.info.id}-${index}`} to={"/restaurants/" + restaurant.info.id}>
                <RestaurantCard resData={restaurant} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
