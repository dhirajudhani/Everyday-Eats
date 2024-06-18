import { useContext, useEffect } from "react";
import { useState } from "react";
import { MENU_API } from "./constant";
import LocationContext from "./LocationContext";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    const {location} = useContext(LocationContext)
    // fetch the app data 
    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);

        const json = await data.json();

        setResInfo(json.data);

    }

    return resInfo
}

export default useRestaurantMenu;