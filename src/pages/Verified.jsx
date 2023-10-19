import React from 'react'
import { useVerifyEmailQuery } from '../app/features/authSlice/authApiSlice'

const Verified = () => {
    const verify = useVerifyEmailQuery()
    console.log(verify)
  return (
    <div>Verified</div>
  )
}

export default Verified