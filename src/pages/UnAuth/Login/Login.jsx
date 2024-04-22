import React from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Login({ setToken }) {
  const newData = JSON.parse(window.localStorage.getItem("newToken")) || {
    login: "Stalin",
  };
  const loginSubmit = (e) => {
    e.preventDefault();
    const data = {
      login: e.target.login.value,
      password: e.target.password.value,
    };
    if (data.login == newData.login) {
      toast.success("Successfully pass :)");
    } else {
      toast.error("Data is not compatible!");
    }
    setTimeout(() => {
      setToken(data);
    }, 1000);
    window.localStorage.setItem("token", JSON.stringify(data));
  };
  return (
    <div className="w-full h-[100vh] bg-white pt-[40px]">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="SingUpTitle mt-[184px]">Welcome, Log into you account</h2>
      <form
        onSubmit={loginSubmit}
        className="w-[475px] text-center pt-[72px] py-[132px] pb-[34px] rounded-lg bg-white m-auto shadow-md mt-[53px]"
      >
        <p className="text-center w-[248px] mx-auto">
          It is our great pleasure to have you on board!
        </p>
        <label className="flex flex-col gap-[11px] my-[25px]">
          <input
            name="login"
            className="p-[13px] SignUpInput w-[248px] mx-auto text-start rounded-md border-[0.5px] border-solid border-[#A7A7A7] outline-none focus:shadow-md focus:shadow-[#8A8A8A]"
            type="text"
            placeholder="Enter your login"
          />
        </label>
        <label className="flex flex-col gap-[11px] mt-[19px]">
          <input
            name="password"
            className="p-[13px] SignUpInput w-[248px] mx-auto text-start rounded-md border-[0.5px] border-solid border-[#A7A7A7] outline-none focus:shadow-md focus:shadow-[#8A8A8A]"
            type="password"
            placeholder="Enter your password"
          />
        </label>
        <button className="w-[248px] SignUpBtn h-[44px] border-none bg-[#2D88D4] py-[11px] rounded-md mt-[35px] text-white">
          SIGN IN
        </button>
        <Link to={"/sign-up"} className="block text-center signUpLinkBtn p-[10px]">
          Sign up
        </Link>
      </form>
    </div>
  );
}

export default Login;
