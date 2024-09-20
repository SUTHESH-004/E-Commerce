import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [visible, setvisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} className="w-36" alt="" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700 ">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr
            className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden
          "
          />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr
            className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden
          "
          />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr
            className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden
          "
          />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr
            className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden
          "
          />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
        <div className="group relative">
          <img
            className=" w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <img
          onClick={() => setvisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {/* Sidebar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setvisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink className="py-2 pl-6 border" to="/">
            Home
          </NavLink>
          <NavLink className="py-2 pl-6 border" to="/collection">
            Collection
          </NavLink>
          <NavLink className="py-2 pl-6 border" to="/about">
            About
          </NavLink>
          <NavLink className="py-2 pl-6 border" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
