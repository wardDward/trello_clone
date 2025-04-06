import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authenticated } from '../store/actions/userActions'

function Index() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authenticated())
  }, [])
  return (
    <div>
      test
    </div>
  )
}

export default Index
