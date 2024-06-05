import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.jpg";
import toast from "react-hot-toast";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let [btnNameReact, setBtnNameReact] = useState("Login");
  const [showNavItems, setShowNavItems] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  let onlineStatus = useOnlineStatus();
  const [nearMe, setNearMe] = useState(false);

  // const handleLocationNearMe = () => {
  //   navigator.geolocation.getCurrentPosition((postion) => {
  //     const {latitude, longitude} = postion?.coords;
  //     setNearMe(true)
  //   })
  // }

  const toggleNavItems = () => {
    setShowNavItems(!showNavItems);
  };

  return (
    <div className="flex justify-between shadow-lg z-10 items-center p-3 fixed w-full">
      <div className=" flex items-center gap-5">
        <Link to="/">
          <img
            className="rounded-full w-20 border-black"
            src={logo}
            alt="Logo"
          />
        </Link>
        {nearMe ? (
            <div className="flex items-center justify-center hover:text-[#F86603] flex-col"
              onClick={() => {
                handleLocationDefault();
                toast.success("Switched to Default Location Ahmedabad");
              }}
            >
              <Link to={"/"}>
                <button className="text-lg pb-1">Default Location</button>
              </Link>
              <p className="text-lg font-bold">Ahmedabad</p>
            </div>
          ) : (
            <div className="flex items-center justify-center hover:text-[#F86603]  flex-col"
              onClick={() => {
                handleLocationNearMe();
                toast.success(`Switched to Nearby Location`);
              }}
            >
              <Link to={"/"}>
                <button className="text-lg pb-1">📍Locate Me</button>
              </Link>
              <p className="text-lg font-bold">Ahmedabad</p>
            </div>
          )}
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>

          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Help</li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              if (btnNameReact == "Login") {
                setBtnNameReact("Logout");
              } else {
                setBtnNameReact("Login");
              }

              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">Dhiraj Udhani</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
