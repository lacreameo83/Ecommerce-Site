import React, { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import { Link } from "react-router-dom";

function CheckOut() {
  const { cart } = useContext(GlobalContext);
  const total = cart
    .map((el) => el.totalPrice)
    .reduce((prev, curr) => prev + curr, 0);
  const handlingFee = 500;
  const overallTotal = total + handlingFee;
  return (
    <div className="grid  p-[5vw] bg-stone-200 md:grid-cols-2">
      <div className="bg-stone-300 p-5 flex flex-col gap-[10px]">
        <h2 className="text-[20px] font-[500] text-center">Order Summary</h2>

        {cart.map((el) => {
          return (
            <div className=" flex justify-between  items-center p-1 border">
              <p>{el.title}</p>
              <p>${el.price}</p>
            </div>
          );
        })}
        <p className="text-blue-400">Have a promocode?</p>
        <div className="flex justify-between">
          <p>Handling Fee</p>
          <p>{handlingFee}</p>
        </div>

        <h2 className="text-end font-semibold">Total : ${overallTotal}</h2>
      </div>
      <div className="bg-stone-100 p-5 ">
        <h2 className="font-bold text-[2rem]">Secure CheckOut</h2>
        <p className="p-[10px] bg-black text-stone-100  text-center rounded-sm">
          Buy with <span className="text-red-400">G</span> pay
        </p>
        <p className="mb-[1%]">or provide your billing Details</p>
        <div>
          <div className="mb-[2%]">
            <h2>1.Contact Details</h2>
            <p>
              To use saved payment methods or bonuses,please
              <span className="text-blue-200">sign in</span>
            </p>

            <div className="grid grid-cols-2">
              <div>
                <label className="block mb-[3px] " htmlFor="email">
                  Your Email
                </label>
                <input
                  className="border p-[5px] w-[85%]"
                  type="email"
                  id="email"
                />
              </div>
              <div>
                <label className="block mb-[3px]" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="border p-[5px] w-[85%]"
                  type="number"
                  id="phone"
                />
              </div>
            </div>
          </div>
          {/* ---------------------2------------------------ */}
          <h2 className="mb-[1%]">2.Selecct your payment method</h2>
          <div className="grid grid-cols-2 mb-[2%]">
            <Link to="/card">
              <div className="border text-center p-[15px] w-[85%]">Card</div>
            </Link>

            <div className="border text-center border-y-green-300 p-[15px] w-[85%]">
              PayPal
            </div>
          </div>
        </div>
        <p className="mb-[2%]">
          PayPal is the most popular,the fastest and most secure paymentmetod
        </p>

        <p className="mb-[2%]">
          <input type="checkbox" /> i agree that my data will be stored and
          handled according to the
          <span className="text-blue-200 p-[5px]">private policy</span> and
          <span className="text-blue-200 p-[5px]">Terms of use.</span>
        </p>
        <Link to="/card">
          <button className="p-[10px] border w-[100%]  text-center">
            Pay Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CheckOut;
