import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DropDown from './DropDown'
import WorkspaceDropDown from './contents/WorkspaceDropDown';

function Navbar() {
    const [openDropdownId, setOpenDropdownId] = useState(null);
    return (
        <div className='bg-white py-2 px-[20px] fixed top-0 inset-x-0 flex items-center justify-between border-b-[1px] border-b-slate-300'>
            <div className='flex items-center'>
                <Link to={'/'} className='text-lg font-bold py-1 px-2 hover:bg-slate-100 rounded-md'>
                    Trello
                </Link>
                <div className='flex'>
                    <DropDown
                        id={'workspace'}
                        name={'Workspace'}
                        openDropdownId={openDropdownId}
                        setOpenDropdownId={setOpenDropdownId}
                        renderContent={<WorkspaceDropDown/>}
                        />
                </div>
            </div>
            <div className='flex items-center'>
                {/* notification svg */}
                <div className='mx-1 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-gray-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                </div>
                {/* search */}
                <div className='block md:hidden p-1 hover:bg-slate-200 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-gray-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <div className='hidden md:flex relative items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 absolute left-2 text-gray-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="text" className='placeholder:text-sm border border-slate-400 py-1 pl-[25px] w-[200px] rounded-md' placeholder='Search' />
                </div>
                {/* profile */}
                <div className='ml-2 cursor-pointer'>
                    <img src="https://images.unsplash.com/photo-1642649149963-0ef6779df6c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='h-[30px] w-[30px] rounded-full border border-slate-300' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
