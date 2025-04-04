import React from "react";
import Google from "../../assets/google.png";
import Github from "../../assets/github.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full md:w-[50%] lg:w-[35%] xl:w-[25%] bg-white shadow-lg px-2 py-5 border border-slate-300 rounded-md">
        <div className="text-center">
          <h3 className="text-lg font-bold tracking-wide">Trello-Clone</h3>
          <p className="my-2 text-md font-semibold">Create an account to continue</p>
        </div>
        <div className="px-4 mt-5">
          <div>
            <form action="">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-slate-400 py-[3px] px-2 w-full rounded-md placeholder:text-sm"
              />
              <div className="mt-2">
                <button
                  type="submit"
                  className="w-full bg-blue-700 py-1 text-white rounded-md font-[500] hover:bg-blue-600 cursor-pointer"
                >
                  Register
                </button>
              </div>
              {/* socials */}
              <div className="my-3 text-gray-700 text-center font-semibold">
                Sign up with:
              </div>
              <div className="flex items-center justify-center border-[1px] border-slate-400 py-1 rounded-md hover:bg-slate-100 cursor-pointer">
                <img src={Google} className="h-[20px] w-[20px] mr-2" alt="" />
                <span className="font-semibold">Google</span>
              </div>
              <div className="my-2 flex items-center justify-center border-[1px] border-slate-400 py-1 rounded-md hover:bg-slate-100 cursor-pointer">
                <img src={Github} className="h-[20px] w-[20px] mr-2" alt="" />
                <span className="font-semibold">Github</span>
              </div>
            </form>
            <div className="flex items-center justify-center mt-3 text-sm text-blue-700">
              <span> Already have an account ? </span>
              <span className="mx-3 text-lg">•</span>
              <Link to={"/login"} className="hover:underline">Log In.</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
