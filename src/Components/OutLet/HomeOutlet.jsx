import React from "react";
import Animmation from "./Animmation";
import { IoIosArrowForward } from "react-icons/io";

function HomeOutlet() {
  return (
    <div className="hidden md:flex px-[50px]  h-[60vh] ">
      <div className=" h-[55vh]  p-[15px] border-[2px] border-blue-600 w-[16vw] text-center ">
        <div className="relative show ">
          <div className="flex items-center   ">
            <IoIosArrowForward />
            <p className="mr-[50px] ">Fashion</p>
            <IoIosArrowForward />
          </div>
          <div className="bg-stone-100 border-blue-600 border-[2px] text-start absolute right-[-198px]  top-0 h-fit hide w-[13vw] opacity-0">
            <p className="p-[5px] border-y-stone-400 border-y-[0.1px]">
              Dress & jumpsuits
            </p>
            <p className="p-[5px] border-y-[0.1px]">jackets & Blaze</p>
            <p className="p-[5px] border-y-[0.1px]">Wowan T-Shirt</p>
          </div>
        </div>

        <div className="flex items-center">
          <IoIosArrowForward />
          <p className="p-[5px]">Baby & Kids</p>
        </div>

        <div className="relative show">
          <div className="flex items-center   ">
            <IoIosArrowForward />
            <p className="mr-[50px]">Girls Child</p>
            <IoIosArrowForward />
          </div>
          <div className="bg-stone-100 border-blue-600 border-[2px] text-start absolute right-[-198px]  top-0 h-fit hide w-[13vw] opacity-0 p-[10px]">
            <p className="p-[5px] border-y-stone-400 border-y-[0.1px]">
              Shoes & Sandles
            </p>
            <p className="p-[5px] border-y-[0.1px]">Trousers</p>
            <p className="p-[5px] border-y-[0.1px]">jackets & Blaze</p>
            <p>Sports Shoes</p>
          </div>
        </div>
        <div className="flex items-center">
          <IoIosArrowForward />
          <p className="p-[5px]">Jewellery</p>
        </div>
        <div className="flex items-center">
          <IoIosArrowForward />
          <p className="p-[5px]">Men Shoes</p>
        </div>
        <div className="flex items-center">
          <IoIosArrowForward />
          <p className="p-[5px]">Hand Watch</p>
        </div>
        <div className="flex items-center">
          <IoIosArrowForward />
          <p className="p-[5px]">Trousers</p>
        </div>
        <div className="flex items-center">
          <IoIosArrowForward />
          <p className="p-[5px]">Wallets</p>
        </div>
        <div className="flex items-center">
          <IoIosArrowForward />
          <p className="p-[5px]">Formal</p>
        </div>
      </div>
      <div className="border-[3px] w-[80%] h-[90%] flex items-center m-[auto] rounded-[20px] animate">
        {/* <Animmation /> */}
      </div>
    </div>
  );
}

export default HomeOutlet;
