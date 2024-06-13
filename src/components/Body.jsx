import React, { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflinePage from "./OfflinePage";

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

  const onlineStatus = useOnlineStatus()

  if(onlineStatus === false) return <OfflinePage/>

  return (<></>);
};

export default Body;
