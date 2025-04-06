import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import { handleInputChanges } from '../../utils/inputHelper.js'
import { useDispatch, useSelector } from "react-redux";
import { createAccount } from "../../store/actions/userActions.js";
function RegisterRedirection() {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { errorMessage, isLoading } = useSelector((state) => state.users)
    const { email } = location.state || {}

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        contact: '',
        email: email,
        password: '',
        password_confirmation: '',
    })

    const handleRegistration = async (e) => {
        e.preventDefault()
        const response = await dispatch(createAccount(formData))
        if (response.meta.requestStatus === 'fulfilled') {
            navigate('/')
        }
    }
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="w-full md:w-[80%] lg:w-[55%] xl:w-[40%] bg-white shadow-lg px-2 py-5 border border-slate-300 rounded-md">
                <div className="text-center">
                    <h3 className="text-lg font-bold tracking-wide">Trello-Clone</h3>
                    <p className="my-2 text-md font-semibold">Create an account to continue</p>
                </div>
                <div className="px-4 mt-5">
                    <div>
                        <form onSubmit={handleRegistration}>
                            <div className="flex justify-between items-center flex-wrap">
                                <div className="w-full md:w-[49%] mt-2 flex flex-col">
                                    <label htmlFor="" className="text-sm text-gray-700">Firstname</label>
                                    <input
                                        name='firstname'
                                        onChange={(e) => handleInputChanges(e, formData, setFormData)}
                                        type="text"
                                        className="border border-slate-400 py-[3px] px-2 w-full rounded-md"
                                    />
                                    {errorMessage?.firstname && (<p className="text-sm text-red-700">{errorMessage.firstname}</p>)}
                                </div>
                                <div className="w-full md:w-[49%] mt-2 flex flex-col">
                                    <label htmlFor="" className="text-sm text-gray-700">Lastname</label>
                                    <input
                                        name='lastname'
                                        onChange={(e) => handleInputChanges(e, formData, setFormData)}
                                        type="text"
                                        className="border border-slate-400 py-[3px] px-2 w-full rounded-md"
                                    />
                                    {errorMessage?.lastname && (<p className="text-sm text-red-700">{errorMessage.lastname}</p>)}

                                </div>
                            </div>
                            <div className="flex justify-between items-center flex-wrap">
                                <div className="w-full md:w-[49%] mt-2 flex flex-col">
                                    <label htmlFor="" className="text-sm text-gray-700">Email</label>
                                    <input
                                        readOnly
                                        onChange={(e) => handleInputChanges(e, formData, setFormData)}
                                        type="email"
                                        name='email'
                                        value={formData.email}
                                        className="border border-slate-400 py-[3px] px-2 w-full rounded-md"
                                    />
                                    {errorMessage?.email && (<p className="text-sm text-red-700">{errorMessage.email}</p>)}

                                </div>
                                <div className="w-full md:w-[49%] mt-2 flex flex-col">
                                    <label htmlFor="" className="text-sm text-gray-700">Contact #</label>
                                    <input
                                        type="text" inputMode="numeric" pattern="[0-9]*"
                                        name='contact'
                                        onChange={(e) => handleInputChanges(e, formData, setFormData)}
                                        className="border border-slate-400 py-[3px] px-2 w-full rounded-md"
                                    />
                                    {errorMessage?.contact && (<p className="text-sm text-red-700">{errorMessage.contact}</p>)}

                                </div>
                            </div>
                            <div className="flex justify-between items-center flex-wrap">
                                <div className="w-full md:w-[49%] mt-2 flex flex-col">
                                    <label htmlFor="" className="text-sm text-gray-700">Password</label>
                                    <input
                                        name='password'
                                        type="password"
                                        onChange={(e) => handleInputChanges(e, formData, setFormData)}
                                        className="border border-slate-400 py-[3px] px-2 w-full rounded-md"
                                        value={formData.password}
                                    />
                                    {errorMessage?.password && (<p className="text-sm text-red-700">{errorMessage.password}</p>)}

                                </div>
                                <div className="w-full md:w-[49%] mt-2 flex flex-col">
                                    <label htmlFor="" className="text-sm text-gray-700">Re-Type Password</label>
                                    <input
                                        name='password_confirmation'
                                        type="password"
                                        onChange={(e) => handleInputChanges(e, formData, setFormData)}
                                        className="border border-slate-400 py-[3px] px-2 w-full rounded-md"
                                        value={formData.password_confirmation}
                                    />
                                    {errorMessage?.password && (<div className="text-white">-</div>)}

                            </div>
                    </div>
                    <div className="mt-2">
                        <button
                            type="submit"
                            className="flex items-center justify-center w-full bg-blue-700 py-1 text-white rounded-md font-[500] hover:bg-blue-600 cursor-pointer"
                        >
                            {isLoading &&
                                <svg className="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                            }
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
            </div >
        </div >
    );
}

export default RegisterRedirection;
