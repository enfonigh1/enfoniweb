import axios from 'axios'
import React, { useState } from 'react'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useremail } from '../app/features/authSlice/authSlice'
import { ToastContainer, toast } from 'react-toastify'


const Emailsent = () => {

  const email = useSelector(useremail)
  const [loading, setLoading] = useState(false)

  const handleResendEmail = async () => {
    setLoading(true)
    try {
      const response = await axios.post('http://localhost:3001/api/v1/resend-token', {email: email})
      setLoading(false)
      if(response?.data?.status === 200){
        toast.success("Email sent successfully")
      }
    } catch (error) {
      
    }
  } 

  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen md:px-0 px-2 text-center'>
      <ToastContainer/>
        <HiOutlineMailOpen size={100} className='text-green'/>
        <h1>Verify Email</h1>
        <p>We sent a verification link to your email. Please verify and proceed to <Link to="/login" target='_blank' className='block bg-green text-white px-4 rounded-md py-2 my-2 w-48 mx-auto'>login</Link></p>
        <button onClick={handleResendEmail} className='bg-purple text-white px-4 rounded-md py-2 my-2 w-48'>{loading ? "Loading..." : "Resend Email"}</button>
    </div>
  )
}

export default Emailsent