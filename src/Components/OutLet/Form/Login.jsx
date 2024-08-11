import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";
import { formSchema } from "./Validation/LoginValidation";

function Login() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const [login, setLogin] = useState("Log In");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = form;
  const sendToBackEnd = (data) => {
    setLogin("Loading");
    setTimeout(() => {
      setLogin("Done");
      setLogin(true);
      setLogin(() => {
        navigate("/");
      }, 2000);
    }, 3000);
    console.log(data);
  };
  return (
    <div className=" p-[20px] flex justify-center">
      <div className="w-[90%]  border-[2px] rounded-r-sm gap-3 h-fit p-[13px]  bg-white sm:w-[40%]">
        <h2 className="font-bold ">Register Now</h2>
        <p className="text-[13px] mb-[15px]">i am a New Customer</p>
        <form onClick={handleSubmit(sendToBackEnd)}>
          {/* --------------------------------name00--------------------- */}
          <label className="block font-[200] text-sm" for="FName">
            First Name:
          </label>
          <input
            {...register("firstname")}
            className=" border-[2px] rounded-r-sm w-[100%] p-[3px] outline-none  mb-[15px]"
            type="text"
            id="FName"
            // placeholder="First Name"
          />
          {errors.firstname && (
            <div className=" text-start text-red-600">
              {errors.firstname.message}
            </div>
          )}
          {/* last name ------------------------------- */}
          <label className="block font-[200] text-sm" for="LName">
            Last Name:
          </label>
          <input
            className=" border-[2px] rounded-r-sm w-[100%] p-[3px] outline-none  mb-[15px]"
            type="text"
            id="LName"
            // placeholder="e-mail address"
            {...register("lastname")}
          />
          {errors.lastname && (
            <div className=" text-start text-red-600">
              {errors.lastname.message}
            </div>
          )}

          {/* phone number------------------------------------  */}
          <label className="block font-[200] text-sm" for="phoneNmuber">
            Mobile number:
          </label>
          <input
            className=" border-[2px] rounded-r-sm w-[100%] p-[3px] outline-none  mb-[15px]"
            type="text"
            id="phoneNmuber"
            // placeholder="Mobile Number"
            {...register("phoneNmuber")}
          />
          {errors.phoneNmuber && (
            <div className=" text-start text-red-600">
              {errors.phoneNmuber.message}
            </div>
          )}
          {/* email---------------------------------------------------- */}
          <label className="block font-[200] text-sm" for="Email">
            Email Address:
          </label>
          <input
            className=" border-[2px] rounded-r-sm w-[100%] p-[3px] outline-none  mb-[15px]"
            type="text"
            id="Email"
            // placeholder="E-Mail Address"
            {...register("email")}
          />
          {errors.email && (
            <div className=" text-start text-red-600">
              {errors.email.message}
            </div>
          )}
          <label className="block font-[200] text-sm " for="password">
            Password:
          </label>
          <input
            className=" border-[2px] rounded-r-sm w-[100%] p-[3px] outline-none   mb-[15px]"
            type="password"
            id="password"
            // placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <div className=" text-start text-red-600">
              {errors.password.message}
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-600 rounded-xl text-stone-50 p-[5px] w-[80px]"
          >
            {login}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
