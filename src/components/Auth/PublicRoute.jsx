import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'

const PublicRoute = (props) => {
  const {children} = props
  const {state} = useAuthContext()
  const navigate = useNavigate()
  const location = useLocation()
  const [isVerified, setIsVerified] = useState(false)

  useEffect(() => {
    if(state.isAuthenticated){
      navigate('/Homepage',{replace: true, state: {from: location}})
    } else {
      setIsVerified(true)
    }
  }, [state.isAuthenticated,location])
  
  if(!isVerified){
    return null
  }

  return <>{children}</>
}

export default PublicRoute