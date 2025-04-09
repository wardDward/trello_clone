import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { authenticated } from '../store/actions/userActions'
import Sidebar from '../components/navs/Sidebar'
import Navbar from '../components/navs/Navbar'


function DefaultLayout() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(authenticated())
    }, [])
    return (
        <>
            <Navbar />
            <div className='h-screen max-w-full bg-slate-100 flex justify-center mt-[50px]'>
                <div className='flex w-full md:w-[80%] lg:w-[85%] xl:w-[70%] bg-red-50'>
                    <Sidebar />
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DefaultLayout
