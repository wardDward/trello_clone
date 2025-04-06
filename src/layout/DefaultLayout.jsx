import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { authenticated } from '../store/actions/userActions'


function DefaultLayout() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(authenticated())
    }, [])
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default DefaultLayout
