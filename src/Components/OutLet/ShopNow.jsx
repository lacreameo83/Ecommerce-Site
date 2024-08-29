import React from "react";
import { Link } from "react-router-dom";

function ShopNow() {
  return (
    <div className="hidden grid grid-cols-1 w-[100%] md:flex px-[50px] justify-between items-center h-[50vh]">
      <div className="flex items-center h-[80%] bg-stone-100 w-[30vw] p-[20px] ">
        <div className="]">
          <p className="w-[15vh]">Special offer</p>
          <div>
            <h2>Women Bags</h2>
            <h2>35% Flat</h2>
          </div>
          <Link>
            <p className="text-blue-300">shop Now</p>
          </Link>
        </div>
        <div>
          <img
            className="text-[200px] hover:scale-125 bg-stone-100 w-[40vw] "
            src="https://capricathemes.com/opencart/OPC10/OPC100238/image/catalog/sub-banner-1.jpg"
          />
        </div>
      </div>

      {/* 2 */}

      <div className="flex items-center h-[80%] bg-stone-100 w-[30vw] p-[20px] ">
        <div>
          <p className="w-[15vh]">Special offer</p>
          <div>
            <h2>Sport Shoes</h2>
            <h2>30% Flat</h2>
          </div>
          <Link>
            <p className="text-blue-300">shop Now</p>
          </Link>
        </div>
        <div>
          <img
            className="text-[200px] hover:scale-125 bg-stone-100 w-[40vw] "
            src="https://capricathemes.com/opencart/OPC10/OPC100238/image/catalog/sub-banner-2.jpg"
          />
        </div>
      </div>

      {/* 3 */}

      <div className="flex items-center h-[80%] bg-stone-100 w-[30vw] p-[20px] ">
        <div>
          <p className="w-[18vh]">Special offer</p>
          <div>
            <h2>Trucker Cap</h2>
            <h2>25% Flat</h2>
          </div>
          <Link>
            <p className="text-blue-300">shop Now</p>
          </Link>
        </div>
        <div>
          <img
            className="text-[200px] hover:scale-125 bg-stone-100 w-[40vw] "
            src="https://capricathemes.com/opencart/OPC10/OPC100238/image/catalog/sub-banner-3.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default ShopNow;
