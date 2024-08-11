import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";

function Contact() {
  return (
    <div className="flex flex-col gap-9 md:flex-row justify-around py-[80px] ">
      <div className=" border-b-[2px] pb-[10px] flex gap-1 flex-col md:border-b-[0] pb-[0] ">
        <h2 className="font-semibold">Contact Us</h2>
        <p className="flex items-center gap-1">
          <CiLocationOn className="text-blue-600" />
          CartFash-Mega Fashion Store
        </p>
        <p className="ml-[20px]">507-Union Trade ipsum Doler Center</p>
        <p className="ml-[20px]">France</p>

        <p className=" flex items-center gap-1">
          <IoCallOutline className="text-blue-600" />
          000-000-0000
        </p>
        <p className="flex items-center">
          <MdOutlineMail className="text-blue-600 gap-1" />
          Sales@yourcompany.com
        </p>
      </div>

      <div className=" border-b-[2px] pb-[10px]flex gap-1 flex-col border-l-[2px] px-[10px] md:border-b-[0] pb-[0] ">
        <h2 className="font-semibold">Information</h2>
        <p className="flex items-center gap-1">
          <FaAngleRight />
          About Us
        </p>
        <p className="flex items-center gap-1">
          <FaAngleRight /> Delivery Information
        </p>
        <p className="flex items-center gap-1">
          <FaAngleRight /> Privacy Policy
        </p>
        <p className="flex items-center gap-1">
          <FaAngleRight /> Terms & Conditions
        </p>
        <p className="flex items-center gap-1">
          <FaAngleRight /> Site map
        </p>
      </div>

      <div className=" border-b-[2px] pb-[10px] flex gap-1 flex-col border-l-[2px] px-[10px] md:border-b-[0] pb-[0] ">
        <h2 className="font-semibold">Extra</h2>
        <p className="flex items-center gap-1">
          <FaAngleRight /> Brands
        </p>
        <p className="flex items-center gap-1">
          <FaAngleRight />
          Gift Certificates
        </p>
        <p className="flex items-center gap-1">
          <FaAngleRight />
          Affililate
        </p>
        <p className="flex items-center gap-1">
          <FaAngleRight />
          Specials
        </p>
        <p className="flex items-center gap-1">
          <FaAngleRight />
          Contact Us
        </p>
      </div>

      <div className="border-b-[2px] pb-[10px] flex gap-1 flex-col border-l-[2px] px-[10px] md:border-b-[0] pb-[0] ">
        <h2 className="font-semibold">My Account</h2>
        <p className="flex items-center gap-1">
          <FaAngleRight />
          My Account
        </p>
        <p className="flex items-center gap-1">
          <FaAngleRight />
          Order History
        </p>
        <p className="flex items-center gap-1">
          <FaAngleRight />
          Wish List{" "}
        </p>
        <p className="flex items-center gap-1">
          <FaAngleRight />
          Newsletter
        </p>
        <p className="flex items-center gap-1">
          <FaAngleRight />
          Returns
        </p>
      </div>

      <div className="flex gap-1 h-fit  sm:flex-col   border-l-[2px] px-[10px]">
        <h2 className="font-semibold hidden md:block">Download App</h2>
        <img srcSet="https://capricathemes.com/opencart/OPC10/OPC100238/image/catalog/cms-footer-1.png" />
        <img src="https://capricathemes.com/opencart/OPC10/OPC100238/image/catalog/cms-footer-2.png" />
        <img src="https://capricathemes.com/opencart/OPC10/OPC100238/image/catalog/cms-footer-3.png" />
      </div>
    </div>
  );
}

export default Contact;
