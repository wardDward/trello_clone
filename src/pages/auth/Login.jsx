import React from "react";
import Google from "../../assets/google.png";
import Github from "../../assets/github.png";

function Login() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full md:w-[50%] lg:w-[35%] xl:w-[25%] bg-white shadow-lg px-2 py-5 border border-slate-300 rounded-md">
        <div className="text-center">
          <h3 className="text-lg font-bold tracking-wide">Trello-Clone</h3>
          <p className="my-2 text-md font-semibold">Log in to continue</p>
        </div>
        <div className="p-4 mt-5">
          <div>
            <form action="">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-slate-400 py-[5px] px-2 w-full rounded-md placeholder:text-sm"
              />
              {/* hide if email do not exist show if email exists */}
              {/* <input
                type="password"
                placeholder="Enter your password"
                className="border border-slate-400 py-[5px] px-2 w-full rounded-md mt-3 placeholder:text-sm"
              /> */}
              <div className="mt-2">
                <button
                  type="submit"
                  className="w-full bg-blue-700 py-1 text-white rounded-md font-[500] hover:bg-blue-600 cursor-pointer"
                >
                  Continue
                </button>
                {/* hide if email do not exist show if email exists */}
                {/* <button
                  type="submit"
                  className="w-full bg-blue-700 py-1 text-white rounded-md font-[500] hover:bg-blue-600 cursor-pointer"
                >
                  Log In
                </button> */}
              </div>
              {/* socials */}
              <div className="my-3 text-gray-700 text-center font-semibold">
                Or continue with:
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
