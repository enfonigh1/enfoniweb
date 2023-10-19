import React from 'react'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Emailsent = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen md:px-0 px-2 text-center'>
        <HiOutlineMailOpen size={100} className='text-green'/>
        <h1>Verify Email</h1>
        <p>We sent a verification link to your email. Please verify and proceed to <Link to="/login" className='inline-block bg-green text-white px-4 rounded-md py-2'>login</Link></p>
    </div>
  )
}

export default Emailsent