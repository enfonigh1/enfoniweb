import React, { useState } from 'react'
import DashboardLayout from '../dashbordLayout'
import { usePaystackPayment } from 'react-paystack'
import { ToastContainer, toast } from 'react-toastify'

const Dashboard = () => {

  const [full_name, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone_number, setPhoneNumber] = useState("")

  const payment = usePaystackPayment({
    email: email || "info@enfonigh.com",
    amount: 200 * 100,
    publicKey: "pk_test_141b3eb35c4d93a67e8973362212a778be57b17e",
    currency: "GHS",
    firstname: full_name,
    phone: phone_number,
    

  })
  const handlePayment = async (e) => {
    e.preventDefault()
    if(!full_name && !phone_number){
      return toast.error("Please enter required fields")
    }
    const results = await payment()
    console.log(results)
  }
  
  return (
    <DashboardLayout show={false}>
      <ToastContainer/>
      <div className='h-screen flex justify-center items-center mx-auto'>

      <form action="" className='bg-white shadow-lg rounded-lg lg:w-128 px-5 lg:mx-0 mx-5 flex flex-col justify-center items-center py-10'>
        <div className='flex flex-col mb-7'>
          <label htmlFor="" className='font-bold text-gray-700 font-[poppins] mb-3'>Client Name</label>
          <input required={true} onChange={e => setFullName(e.target.value)} placeholder='Andrews Opoku' type="text" className='lg:w-96 w-72 px-4 text-gray-700 h-12 rounded-lg bg-transparent border border-solid border-gray-700/50'/>
        </div>
        <div className='flex flex-col mb-7'>
          <label htmlFor="" className='font-bold text-gray-700 font-[poppins] mb-3'>Client Email</label>
          <input onChange={e => setEmail(e.target.value)} placeholder='aopoku255@gmail.com' type="text" className='lg:w-96 w-72 px-4 text-gray-700 h-12 rounded-lg bg-transparent border border-solid border-gray-700/50'/>
        </div>
        <div className='flex flex-col mb-7'>
          <label htmlFor="" className='font-bold text-gray-700 font-[poppins] mb-3'>Client Number</label>
          <input onChange={e => setPhoneNumber(e.target.value)} required={true} placeholder='0501311122' type="text" className='lg:w-96 w-72 px-4 text-gray-700 h-12 rounded-lg bg-transparent border border-solid border-gray-700/50'/>
        </div>
        <button onClick={handlePayment} className='lg:w-96 w-72 px-4 h-12 shadow-lg rounded-lg bg-gray-700 hover:bg-gray-800 transition-all duration-300 text-white bg-transparent border border-solid border-gray-700/50'>submit</button>
      </form>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard