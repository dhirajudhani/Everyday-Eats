import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.jpg";
import toast from "react-hot-toast";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [showNavItems, setShowNavItems] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const onlineStatus = useOnlineStatus();
  const [nearMe, setNearMe] = useState(false);

  const handleLocationNearMe = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position?.coords;
      setNearMe(true);
    });
  };

  const handleLocationDefault = () => {
    setNearMe(false);
  };

  const toggleNavItems = () => {
    setShowNavItems(!showNavItems);
  };

  return (
    <div className="flex justify-between shadow-lg z-10 items-center p-3 fixed w-full bg-white top-0">
      <div className="flex items-center gap-5">
        <Link to="/">
          <img
            className="rounded-full w-20 border-black"
            src={logo}
            alt="Logo"
          />
        </Link>
        {nearMe ? (
          <div
            className="flex items-center justify-center hover:text-[#F86603] flex-col"
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
          <div
            className="flex items-center justify-center hover:text-[#F86603] flex-col"
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
      <div className="p-3">
        <div className="block md:hidden" onClick={toggleNavItems}>
          <span>
            <i className="fa-solid fa-bars"></i>
          </span>
        </div>
        <ul className="hidden md:flex text-lg list-none items-center">
          <li className="p-3 m-2 flex items-center gap-1.5 text-[#555] text-lg hover:text-[#F86603] cursor-pointer">
            <Link className="text-lg" to={"/"}>
              <span>
                <i className="fa-solid fa-house"></i>
              </span>
              Home
            </Link>
          </li>
          <li className="p-3 m-2 flex items-center gap-1.5 text-[#555] text-lg hover:text-[#F86603] cursor-pointer">
            <Link className="text-lg" to="/about">
              <span>
                <i className="fa-solid fa-circle-info"></i>
              </span>
              About
            </Link>
          </li>
          <li className="p-3 m-2 flex items-center gap-1.5 text-[#555] text-lg hover:text-[#F86603] cursor-pointer">
            <Link className="text-lg relative" to={"/cart"}>
              <span>
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
              Cart
            </Link>
          </li>
          <div
            onClick={() => {
              btnNameReact === "Login"
                ? (setBtnNameReact("Logout"), toast.success("User Logged In"))
                : (setBtnNameReact("Login"), toast.success("User Logged Out"));
            }}
            className="w-24 cursor-pointer mx-3 hover:text-[#F86603] flex p-1 gap-1"
          >
            <span>
              <i className="fa-solid fa-user"></i>
            </span>
            {btnNameReact}
          </div>
          <li className="cursor-default">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
        </ul>
      </div>

      {showNavItems && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center md:hidden">
          <div className="bg-white p-5 rounded-lg w-3/4 max-w-xs">
            <button className="mb-4" onClick={toggleNavItems}>
              <i className="fa-solid fa-times"></i>
            </button>
            <ul className="text-lg list-none">
              <li className="p-3 m-2 flex items-center gap-1.5 text-[#555] text-lg hover:text-[#F86603] cursor-pointer">
                <Link className="text-lg" to={"/"} onClick={toggleNavItems}>
                  <span>
                    <i className="fa-solid fa-house"></i>
                  </span>
                  Home
                </Link>
              </li>
              <li className="p-3 m-2 flex items-center gap-1.5 text-[#555] text-lg hover:text-[#F86603] cursor-pointer">
                <Link className="text-lg" to="/about" onClick={toggleNavItems}>
                  <span>
                    <i className="fa-brands fa-react"></i>
                  </span>
                  About
                </Link>
              </li>
              <li className="p-3 m-2 flex items-center gap-1.5 text-[#555] text-lg hover:text-[#F86603] cursor-pointer">
                <Link className="text-lg relative" to={"/cart"} onClick={toggleNavItems}>
                  <span>
                    <i className="fa-solid fa-cart-shopping"></i>
                  </span>
                  Cart
                </Link>
              </li>
              <div
                onClick={() => {
                  btnNameReact === "Login"
                    ? (setBtnNameReact("Logout"), toast.success("User Logged In"))
                    : (setBtnNameReact("Login"), toast.success("User Logged Out"));
                  toggleNavItems();
                }}
                className="w-24 cursor-pointer mx-3 hover:text-[#F86603] flex p-1 gap-1"
              >
                <span>
                  <i className="fa-solid fa-user"></i>
                </span>
                {btnNameReact}
              </div>
              <li className="cursor-default">
                Online Status: {onlineStatus ? "🟢" : "🔴"}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
