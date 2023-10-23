import React, { useEffect, useState } from 'react'
import AuthLayout from '../components/AuthLayout'
import passwordlogo from "../assets/images/icon _lock key_.svg";
import Input from '../components/Input';
import { useResetPasswordMutation } from '../app/features/authSlice/authApiSlice';
import { useSelector } from 'react-redux';
import { useremail } from '../app/features/authSlice/authSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const ResetPassword = () => {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const passreg =  /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const [validPass, setValidPass] = useState(false)
    const [visible, setVisible] = useState(false)
    useEffect(() => {
      const result = passreg.test(password);
      console.log(result)
      setValidPass(result);
    }, [password]);
  
    const [resetpassword, {isLoading}] = useResetPasswordMutation()
    const email = useSelector(useremail)
    const handleClick = () => {
        setVisible(!visible)
      }

      const navigate = useNavigate()

      const handleSubmit = async (e) => {
        e.preventDefault()
        const results = await resetpassword({email, password})
        if(results?.data?.status === 200){
            setTimeout(() => {
                navigate("/login")
            }, 3000)
            toast.success(results?.data?.message)
        }
        console.log(results)
      }

  return (
    <AuthLayout loggins={false} toastContainer={true}>
          <form action="" className='mx-auto w-72 mt-8 flex flex-col justify-center items-center h-full' onSubmit={handleSubmit}>
            <Input 
              label="Password"
              logo={passwordlogo}
              type={visible ? "text" : "password"}
              required={true}
              name="password"
              onChange={e => setPassword(e.target.value)}
              show={true}
              handleClick={handleClick}
            //   value={details.email}
            //   onChange={handleChange}
            />
            <Input 
              label="confirm"
              logo={passwordlogo}
              type={visible ? "text" : "password"}
              required={true}
              name="password"
              show={true}
              onChange={e => setConfirmPassword(e.target.value)}
              handleClick={handleClick}
              
            //   value={details.email}
            //   onChange={handleChange}
            />

{   password !== confirmPassword ? <p className="text-red-500 mb-2 text-[10px] ">Passwords do not match</p> : <></>}
{   password && !validPass ? <p className="text-red-500 mb-2 text-[10px] ">password must be atleast 8 characters and must contain 1 uppercase letter, 1 number and 1 special character</p> : <></>}

        <button className="bg-blue shadow-lg text-white rounded-md py-2.5 block w-full mt-4">
        Submit
        </button>
        </form>
    </AuthLayout>
  )
}

export default ResetPassword