import React, { useState } from 'react'
import ReactCodeInput from 'react-code-input'
import AuthLayout from '../components/AuthLayout'
import { useSendCodeMutation, useVerifyCodeMutation } from '../app/features/authSlice/authApiSlice'
import { useSelector } from 'react-redux'
import { useremail } from '../app/features/authSlice/authSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const VerifyCode = () => {
    const [code, setCode] = useState("")
    const [verifycode] = useVerifyCodeMutation()
    const email = useSelector(useremail)
   const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const results = await verifycode({email: email, code: code})
        console.log(results?.data?.message)
        if(results?.data?.message === "Success"){
            setTimeout(() => {
                navigate("/reset-password")
            }, 3000)
            toast.success("code verified")
        }
        else{
            toast.error(results?.error?.data?.message)
        }
        console.log(results)
    }

  return (
    <div>
        <AuthLayout loggins={false} toastContainer={true}>
        <form action="" className='mx-auto w-72 mt-8 flex flex-col justify-center items-center h-full' onSubmit={handleSubmit}>

         <ReactCodeInput fields={6} onChange={e => setCode(e)} />
         <button className="bg-blue shadow-lg text-white rounded-md py-2.5 block w-full mt-4">
            Submit
        </button>
        </form>
        </AuthLayout>
    </div>
  )
}

export default VerifyCode