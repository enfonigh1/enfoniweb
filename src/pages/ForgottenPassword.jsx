import React, { useState } from 'react'
import AuthLayout from '../components/AuthLayout'
import Input from '../components/Input'
import mail from "../assets/images/mail.svg";
import { useSendCodeMutation } from '../app/features/authSlice/authApiSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userEmail } from '../app/features/authSlice/authSlice';

const ForgottenPassword = () => {
    const [codeInput, setCodeInput] = useState("")

    const [sendCode, {isLoading}] = useSendCodeMutation()

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSumbit = async(e) => {
        e.preventDefault()
        try {
            dispatch(userEmail(codeInput))
            const results = await sendCode({email: codeInput})
            if(results?.data?.data === "ok"){
                setTimeout(() => {
                    navigate("/verify-code")
                }, 3000)
                toast.success(results?.data?.message)
            }
        } catch (error) {
            
        }
    }

  return (
    <AuthLayout loggins={false} toastContainer={true}>
        <form action="" className='mx-auto w-72 mt-8 flex flex-col justify-center items-center h-full' onSubmit={handleSumbit}>
            <Input 
              label="Email Address"
              logo={mail}
              type="email"
              required={true}
              onChange={e => setCodeInput(e.target.value)}
              name="email"
            
            //   value={details.email}
            //   onChange={handleChange}
            />

        <button className="bg-blue shadow-lg text-white rounded-md py-2.5 block w-full mt-4">
        {isLoading ? "Loading..." : "Submit"}
        </button>
        </form>
    </AuthLayout>
  )
}

export default ForgottenPassword