import React from "react";

function Register() {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="w-full md:w-[80%] lg:w-[55%] xl:w-[40%] bg-white shadow-lg px-2 py-5 border border-slate-300 rounded-md">
                <div className="text-center">
                    <h3 className="text-lg font-bold tracking-wide">Trello-Clone</h3>
                    <p className="my-2 text-md font-semibold">Create an account to continue</p>
                </div>
                <div className="px-4 mt-5">
                    <div>
                        <form action="">
                            <div className="flex justify-between items-center flex-wrap">
                                <div className="w-full md:w-[49%] mt-2 flex flex-col">
                                    <label htmlFor="" className="text-sm text-gray-700">Firstname</label>
                                    <input
                                        type="text"
                                        className="border border-slate-400 py-[3px] px-2 w-full rounded-md"
                                    />
                                </div>
                                <div className="w-full md:w-[49%] mt-2 flex flex-col">
                                    <label htmlFor="" className="text-sm text-gray-700">Lastname</label>
                                    <input
                                        type="text"
                                        className="border border-slate-400 py-[3px] px-2 w-full rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center flex-wrap">
                                <div className="w-full md:w-[49%] mt-2 flex flex-col">
                                    <label htmlFor="" className="text-sm text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        className="border border-slate-400 py-[3px] px-2 w-full rounded-md"
                                    />
                                </div>
                                <div className="w-full md:w-[49%] mt-2 flex flex-col">
                                    <label htmlFor="" className="text-sm text-gray-700">Contact #</label>
                                    <input
                                        type="text" inputmode="numeric" pattern="[0-9]*"
                                        className="border border-slate-400 py-[3px] px-2 w-full rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center flex-wrap">
                                <div className="w-full md:w-[49%] mt-2 flex flex-col">
                                    <label htmlFor="" className="text-sm text-gray-700">Password</label>
                                    <input
                                        type="password"
                                        className="border border-slate-400 py-[3px] px-2 w-full rounded-md"
                                    />
                                </div>
                                <div className="w-full md:w-[49%] mt-2 flex flex-col">
                                    <label htmlFor="" className="text-sm text-gray-700">Re-Type Password</label>
                                    <input
                                        type="password"
                                        className="border border-slate-400 py-[3px] px-2 w-full rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="mt-2">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-700 py-1 text-white rounded-md font-[500] hover:bg-blue-600 cursor-pointer"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
