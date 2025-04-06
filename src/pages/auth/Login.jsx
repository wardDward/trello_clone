import React, { useState } from "react";
import Google from "../../assets/google.png";
import Github from "../../assets/github.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkEmail, logIn } from "../../store/actions/userActions";
import { handleInputChanges } from '../../utils/inputHelper.js'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { errorMessage, isLoading } = useSelector((state) => state.users)

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showInput, setShowInput] = useState(false)

  const validateEmail = async (e) => {
    e.preventDefault()
    const response = await dispatch(checkEmail(formData.email))

    if (response.meta.requestStatus === 'fulfilled') {
      setShowInput(true)
    } else {
      setShowInput(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(logIn(formData))
    if (response.meta.requestStatus === 'fulfilled') {
      navigate('/')
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full md:w-[50%] lg:w-[35%] xl:w-[25%] bg-white shadow-lg px-2 py-5 border border-slate-300 rounded-md">
        <div className="text-center">
          <h3 className="text-lg font-bold tracking-wide">Trello-Clone</h3>
          <p className="my-2 text-md font-semibold">Log in to continue</p>
        </div>
        <div className="px-4 mt-5">
          <div>
            <form onSubmit={showInput ? handleSubmit : validateEmail}>
              <div>
                <input
                  onChange={(e) => handleInputChanges(e, formData, setFormData)}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="border border-slate-400 py-[3px] px-2 w-full rounded-md placeholder:text-sm"
                />
                {errorMessage?.email && (<p className="text-red-700 text-sm">{errorMessage.email}</p>)}
              </div>
              {/* hide if email do not exist show if email exists */}
              {showInput && (
                <div>
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => handleInputChanges(e, formData, setFormData)}
                    placeholder="Enter your password"
                    className="border border-slate-400 py-[5px] px-2 w-full rounded-md mt-3 placeholder:text-sm"
                  />
                  {errorMessage?.password && (<p className="text-red-700 text-sm">{errorMessage.password}</p>)}

                </div>
              )}

              <div className="mt-2">
                {/* hide if email do not exist show if email exists */}
                {showInput ?
                  (<button
                    type="submit"
                    disabled={isLoading}
                    className="flex items-center justify-center w-full bg-blue-700 py-1 text-white rounded-md font-[500] hover:bg-blue-600 cursor-pointer">
                    {isLoading &&
                      <svg className="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    }
                    <span>Log In</span>
                  </button>) : (<button
                    type="submit"
                    className="flex items-center justify-center w-full bg-blue-700 py-1 text-white rounded-md font-[500] hover:bg-blue-600 cursor-pointer"
                  >
                    {isLoading &&
                      <svg className="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    }
                    <span>Continue</span>
                  </button>)
                }
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
            <div className="flex items-center justify-center mt-3 text-sm text-blue-700">
              <span> Can't log in? </span>
              <span className="mx-3 text-lg">•</span>
              <Link to={"/register"} className="hover:underline">Create an account.</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
