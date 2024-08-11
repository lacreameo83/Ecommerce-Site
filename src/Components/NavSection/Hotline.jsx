import React from "react";
import { RxDropdownMenu } from "react-icons/rx";
import { IoIosArrowDropdown } from "react-icons/io";
import MainNav from "./MainNav";
import SideBar from "../OutLet/SideBar";

function Hotline() {
  return (
    <div className="px-[0px]  md:px-[50px] gap-5px flex items-center h-[7vh]">
      <div className=" hidden md:flex h-full bg-blue-600 p-[15px] items-center rounded-t-[10px] w-[16vw]">
        <RxDropdownMenu className="text-stone-100   " />
        <p className=" bg-blue-600 text-stone-100 border-none mx-[10px]">
          Shop By Categories
        </p>
        <IoIosArrowDropdown className="text-stone-100" />
      </div>
      <div>
        <MainNav />
      </div>

      <SideBar />
    </div>
  );
}

export default Hotline;
