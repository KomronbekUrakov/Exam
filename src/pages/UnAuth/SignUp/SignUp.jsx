import React from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function SignUp({ setsignUpData }) {
  const navigate = useNavigate();
  const signUpFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      login: e.target.login.value,
      password: e.target.password.value,
    };

    toast.success("Information update!");
    setTimeout(() => {
      setsignUpData(data);
      navigate("/");
    }, 1000);
    window.localStorage.setItem("newToken", JSON.stringify(data));
  };
  return (
    <div className="w-full text-center h-[100vh] bg-white pt-[98px]">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="SingUpTitle">Welcome, Sign up</h1>

      <form
        onSubmit={signUpFormSubmit}
        className=" w-[512px] px-[132px] pb-[100px] pt-[10px] rounded-lg bg-white m-auto shadow-md mt-[53px]"
      >
        <p className="text-center SugnUpText mt-[98px]">
          It is our great pleasure to have you on board!
        </p>
        <label className="flex flex-col gap-[11px] mt-[34px]">
          <input
            className="p-[13px] SignUpInput w-[248px] text-start rounded-md border-[0.5px] border-solid border-[#A7A7A7] outline-none focus:shadow-md focus:shadow-[#8A8A8A]"
            type="email"
            placeholder="Enter your email"
            required
          />
        </label>
        <label className="flex flex-col gap-[11px] mt-[14px]">
          <input
            required
            name="login"
            className="p-[13px] w-[248px] SignUpInput text-start rounded-md border-[0.5px] border-solid border-[#A7A7A7] outline-none focus:shadow-md focus:shadow-[#8A8A8A]"
            type="text"
            placeholder="Enter your login"
          />
        </label>
        <label className="flex flex-col gap-[11px] mt-[14px]">
          <input
            required
            name="password"
            className="w-[248px] p-[13px] SignUpInput text-start rounded-md border-[0.5px] border-solid border-[#A7A7A7] outline-none focus:shadow-md focus:shadow-[#8A8A8A]"
            type="password"
            placeholder="Enter your password"
          />
        </label>
        <button className="w-[248px] text-center SignUpBtn h-[44px] border-none bg-[#2D88D4] py-[11px] rounded-md mt-[35px] text-white">
          SIGN UP
        </button>
      </form>
    </div>
  );
}

export default SignUp;
