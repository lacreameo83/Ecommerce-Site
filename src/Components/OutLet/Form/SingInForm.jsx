import React from "react";
import { Link } from "react-router-dom";

function SingInForm() {
  return (
    <div className="grid grid-cols-3 bg-stone-100 gap-[30px] h-[60vh] pt-[5vh] px-[10vw]">
      <div className=" border-[2px] rounded-r-sm flex flex-col gap-3 h-fit p-[13px] w-[15vw] ">
        <h2 className="bg-stone-300 p-2 gap-2 rounded-t-xl font-bold">
          Account
        </h2>
        <Link to="/login">
          <p>Sign Up</p>
        </Link>

        <p>Register</p>
        <p>Forgotten Password</p>
        <p>My Account</p>
      </div>
      {/* -----------------------RegisterAccount------------------------------------ */}
      <div className="  border-[2px] rounded-r-sm gap-3 h-fit p-[13px] ">
        <h2 className="font-bold">Register Account</h2>
        <p className="my-3 text-[15px]">
          By creating an account you will be able to shop faster, be up to date
          on an order's status, and keep track of the orders you have previously
          made.
        </p>
        <Link to="/login">
          {" "}
          <button className="bg-blue-600 rounded-xl text-stone-50 p-[5px] w-[100px]">
            Contiue
          </button>
        </Link>
      </div>

      {/* ---------------------Register Here----------------------------- */}
      <div className="  border-[2px] rounded-r-sm gap-3 h-fit p-[13px] ">
        <h2 className="font-bold ">Returning Customer</h2>
        <p className="text-[13px] mb-[15px]">i am a returning Customer</p>
        <label className="block font-[20px]" for="Email">
          E-Mail Address:
        </label>
        <input
          className=" border rounded-r-sm w-[100%] p-[3px] outline-none border-none mb-[15px]"
          type="text"
          id="Email"
          placeholder="E-Mail Address"
        />
        <label className="block font-[20px]" for="password">
          Password:
        </label>
        <input
          className=" border rounded-r-sm w-[100%] p-[3px] outline-none border-none  mb-[15px]"
          type="password"
          id="password"
          placeholder="Password"
        />
        <p className=" mb-[15px]">Forgotten Password</p>
        <button className="bg-blue-600 rounded-xl text-stone-50 p-[5px] w-[80px]">
          Login
        </button>
      </div>
    </div>
  );
}

export default SingInForm;
