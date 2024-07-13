import { useState } from "react";
import { MdOutlineRestaurant, MdRestaurantMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

function NavBar() {
  const [ToggleMenu, setToggleMenu] = useState(false);

  function Toggle() {
    if (ToggleMenu) {
      setToggleMenu(false);
      enablePageScroll();
    } else {
      disablePageScroll();
      setToggleMenu(true);
    }
  }
  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav
        className="hidden md:flex justify-between  text-white
       items-center h-20 w-full bg-gray-700 shadow-md px-12"
      >
        <h1 className="text-2xl hover:text-red-400 cursor-pointer">
          Fruit Store
        </h1>

        <ul className="flex text-xl items-center gap-10 ">
          <li className="hover:text-green-500 cursor-pointer ">
            <NavLink
              className={({ isActive }) => `
              ${isActive ? "text-green-500" : "text-white"} 
            `}
              to="/"
            >
              All
            </NavLink>
          </li>
          <li className="hover:text-green-500 cursor-pointer ">
            <NavLink
              className={({ isActive }) => `
              ${isActive ? "text-green-500 " : "text-white"} 
            `}
              to="/favourite"
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* MOBILE NAVBAR */}
      <nav className="md:hidden text-white w-full ">
        <div
          className="flex h-20 bg-gray-700 items-center 
         justify-between px-7 text-2xl font-bold z-50 relative w-full
         shadow-md"
        >
          <h1 className=" hover:text-red-500 cursor-pointer">Fruit Store</h1>
          <div
            onClick={Toggle}
            className="cursor-pointer text-4xl hover:text-green-300"
          >
            {!ToggleMenu ? <MdOutlineRestaurant /> : <MdRestaurantMenu />}
          </div>
        </div>
        <ul
          className={` ${
            ToggleMenu ? "block" : "hidden"
          } bg-gray-700  text-2xl h-1/3 fixed right-0 w-1/2
          flex  flex-col text-center items-center justify-center gap-2
          font-bold rounded-sm shadow-xl uppercase`}
        >
          <li
            onClick={Toggle}
            className="w-full py-2 mx-auto hover:bg-green-400  cursor-pointer "
          >
            <NavLink
              to="/"
              className={({ isActive }) => `
              ${isActive ? "text-green-500 " : "text-white"} 
            `}
            >
              All
            </NavLink>
          </li>
          <li
            onClick={Toggle}
            className="w-full py-2 hover:bg-green-400  cursor-pointer "
          >
            <NavLink
              className={({ isActive }) => `
             ${isActive ? "text-green-500 " : "text-white"} 
           `}
              to="/favourite"
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
