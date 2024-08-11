import React from "react";
import { IoIosMailOpen } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
function Email() {
  return (
    <div className="flex flex-col md:flex-row justify-between p-[30px] bg-blue-600  text-slate-50 items-center">
      <div className="text-[15px] flex md:text-[18px] items-center gap-3   font-bold">
        <IoIosMailOpen className="text-[20px] md:text-[40px]" />
        Sign Up And Subscribe To Our Newsletter
      </div>
      <div className="flex mb-2 md:flex ">
        <input
          className=" w-[80%]  md:border rounded-l-2xl  p-[5px] text-start outline-blue-100"
          type="text"
          placeholder="   Search products Here"
        />
        <button className="bg-stone-200 text-slate-900 border w-[100px] p-[5px]   rounded-r-2xl">
          Subscribe
        </button>
      </div>
      <div className="flex items-center gap-3">
        <FaFacebook className="text-[20px]" />
        <FaTwitterSquare className="text-[20px]" />
        <FaInstagramSquare className="text-[20px]" />
        <IoLogoYoutube className="text-[20px]" />
      </div>
    </div>
  );
}

export default Email;
