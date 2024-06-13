import React, { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflinePage from "./OfflinePage";
import Shimmer from "./Shimmer";
import toast from "react-hot-toast";

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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0343135&lng=72.52661049999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(filteredRestaurant);
    const existingIds = new Set(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        (rest) => rest.info.id
      )
    );
    console.log(existingIds);
    const additionalRestaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter(
        (rest) => !existingIds.has(rest.info.id)
      );
    console.log(additionalRestaurants);

    setListRes((prevList) => [
      ...(prevList || []),
      ...(additionalRestaurants || []),
    ]);
    console.log(listOfRes);
    setfilteredRestaurant((prevList) => [
      ...(prevList || []),
      ...(additionalRestaurants || []),
    ]);
    console.log(filteredRestaurant);

    title =
      json?.data?.cards[1]?.card?.card?.header?.title ||
      "Top restaurant chains";
    setTitle(title);
    console.log(title);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <OfflinePage />;

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              className="search-box"
              type="text"
              placeholder="Search for restaurants, cusines"
              value={searchText}
              onChange={(e) => {
                const searchTextValue = e.target.value.toLowerCase();
                setSearchText(searchTextValue);

                if (searchTextValue === "") {
                  setfilteredRestaurant(listOfRes);
                } else {
                  const filteredList = listOfRes.filter((res) => {
                    res.info.name.toLowerCase().includes(searchTextValue) ||
                      res.info.cuisines.some((cuisine) => {
                        cuisine.toLowerCase().includes(searchTextValue);
                      });
                  });

                  setfilteredRestaurant(filteredList);
                }
              }}
            />
            <div
              className="search-icon"
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
            className="filter-btn"
            onClick={() => {
              setfilteredRestaurant(listOfRes);
              console.log("clicked");
              toast.success("All Restaurants are Loaded Successfully");
            }}
          >
            All Restaurants
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredRes = listOfRes.filter((res) => {
                res.info.avgRating > 4.3;
              });
              setfilteredRestaurant(filteredRes);
              toast.success("Higly Rated Restaurants");
            }}
          >
            Rating 4.3+
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredRes = listOfRes.filter((res) => {
                res?.info?.veg === true
              })
              setfilteredRestaurant(filteredRes);
              toast.success("Showing Pure Veg Restaurants");
            }}
          >
            Pure Veg 
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredRes = listOfRes.filter((res) => {
                res?.info?.sla?.deliveryTime <= 25
              })
              setfilteredRestaurant(filteredRes);
              toast.success("Fast Delivery Restaurants");
            }}
          >
            Fast Delivery 
          </button>
        </div>
      </div>
    </>
  );
};

export default Body;
