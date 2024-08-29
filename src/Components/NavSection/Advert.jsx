import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import SideBar from "../OutLet/SideBar";

function Advert() {
  return (
    <div className="flex p-[5px]     h-fit  xl:px-[50px] bg-blue-600 text-stone-100  items-center font-semibold text-[14px] justify-between">
      <p>First Shipping order And 50% Off Evert cartfash Order!</p>
      <div className="hidden  xl:flex gap-[10px] py-[20px]">
        <p className="border-r-[1px]  border-stone-400 border-w-[3px] px-[10px]">
          Downloads
        </p>
        <p className="border-r-[1px] border-stone-400 border-w-[3px] px-[10px]">
          Track Order
        </p>
        <select className="border-r-[1px]  border-stone-400 border-w-[3px]  bg-blue-600 px-[10px]">
          <option>$Currency</option>
          <option>Naira</option>
          <option>Dollar</option>
        </select>
        <div className="flex items-center">
          <img
            className="w-[20px] h-[15px]"
            src="https://seeklogo.com/images/U/usa-flag-logo-F080109EF3-seeklogo.com.png"
          />
          <select className=" bg-blue-600">
            <option>Language</option>
            <option>English</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>
      <SideBar />
    </div>
  );
}

export default Advert;
