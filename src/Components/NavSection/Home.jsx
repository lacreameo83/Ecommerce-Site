import React, { useContext, useState } from "react";
import { GrUserManager } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { GlobalContext } from "../../Context/GlobalContext";
import { Link } from "react-router-dom";
import { MdFormatListBulleted } from "react-icons/md";

function Home() {
  const { handleisClose, cart } = useContext(GlobalContext);
  const [isSideDisplay, setIsSideDisplay] = useState(false);
  const handleIsSideDisplay = () => {
    setIsSideDisplay(!isSideDisplay);
  };

  return (
    <div className=" flex items-center     md:justify-between px-[50px] h-[10vh]  border-b-[1px]">
      <div onClick={handleIsSideDisplay} className="relative md:hidden">
        <MdFormatListBulleted className="text-blue-800 mx-1" />
        {isSideDisplay && (
          <div className="absolute w-[40vw] h-[12vh]  border p-[10px] text-[20px] bg-stone-100 items-center">
            <Link to="/login">
              <p>Register</p>
            </Link>
            <p>Log In </p>
          </div>
        )}
      </div>

      <Link to="/">
        <img
          className="w-[20px] md:w-[80px]"
          src="https://capricathemes.com/opencart/OPC10/OPC100238/image/catalog/logo.png"
        />
      </Link>
      <div>
        <div className="flex ">
          <input
            className="w-[150px] p-[7px] border md:w-[400px] rounded-l-2xl   text-start outline-blue-100"
            type="text"
            placeholder="   Search products Here"
          />
          <button className="bg-blue-600 border w-[100px] p-[5px] text-star text-stone-100 rounded-r-2xl">
            Search
          </button>

          <div className="relative md:hidden">
            <IoCartOutline className="text-[30px]" />
            <div
              onClick={handleisClose}
              className="bg-blue-600 w-[15px] rounded-md h-[15px] absolute right-0 top-0 text-stone-100 flex items-center justify-center"
            >
              <p>{cart.length}</p>
            </div>
          </div>
        </div>
      </div>
      {/* --------------side bar--------------------------------------- */}
      <div className=" hidden md:flex h-full py-[15px]  items-center gap-[20px]">
        <div className=" flex h-full gap-[5px] items-center border-r-[1px] border-stone-400 border-w-[3px] px-[10px]">
          <GrUserManager className="text-[30px]" />
          <Link to="/form">
            <div>
              <p>Sing in</p>
              <p>& join Free</p>
            </div>
          </Link>
        </div>
        <div>
          <FaRegHeart className="text-[30px]" />
        </div>
        <div className="relative">
          <IoCartOutline className="text-[30px]" />
          <div
            onClick={handleisClose}
            className="bg-blue-600 w-[15px] rounded-md h-[15px] absolute right-0 top-0 text-stone-100 flex items-center justify-center"
          >
            <p>{cart.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
