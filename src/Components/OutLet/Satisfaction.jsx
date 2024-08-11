import React from "react";
import { CiFaceSmile } from "react-icons/ci";
import { GrUserManager } from "react-icons/gr";
import { FaHandHoldingUsd } from "react-icons/fa";

function Satisfaction() {
  return (
    <div className="hidden md:flex items-center px-[50px] justify-between h-[15vh]">
      <div className="flex items-center pr-[40px] border-r-[3px]">
        <div>
          <CiFaceSmile className="text-[40px]" />
        </div>
        <div>
          <h3>100% Satisfaction</h3>
          <p>if you are unstable</p>
        </div>
      </div>

      <div className="flex items-center pr-[40px] border-r-[3px]">
        <div>
          <GrUserManager className="text-[40px]" />
        </div>
        <div>
          <h3>Online Support</h3>
          <p>Any Time Support</p>
        </div>
      </div>

      <div className="flex items-center pr-[40px] border-r-[3px]">
        <div>
          <FaHandHoldingUsd className="text-[40px] group-hover:bg-blue-500" />
        </div>
        <div>
          <h3>Money Returns</h3>
          <p>Back guarantee in 7 days</p>
        </div>
      </div>

      <div className="flex items-center  ">
        <div>
          <CiFaceSmile className="text-[40px]" />
        </div>
        <div>
          <h3>Menber Discount</h3>
          <p>on Customers's First Order</p>
        </div>
      </div>
    </div>
  );
}

export default Satisfaction;
