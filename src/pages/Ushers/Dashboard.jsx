import React, { useState } from 'react'
import DashboardLayout from '../dashbordLayout'
import { PaystackButton, usePaystackPayment } from 'react-paystack'
import { ToastContainer, toast } from 'react-toastify'
import Select from 'react-select'

const Dashboard = () => {

  const [full_name, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone_number, setPhoneNumber] = useState("")
  const [isClicked1, setIsClicked1] = useState(false)
  const [isClicked2, setIsClicked2] = useState(false)
  const [isClicked3, setIsClicked3] = useState(false)

  const payment = usePaystackPayment({
    email: email || "info@enfonigh.com",
    amount: 200 * 100,
    publicKey: "pk_live_80bb9f757d159dfcf8f8322bd2e09d9958cf3a31",
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

  const handleShadow = (e) => {
    switch(e){
      case "200":
        setIsClicked1(true)
        setIsClicked2(false)
        setIsClicked3(false)
        break;
      case "500":
        setIsClicked2(true)
        setIsClicked1(false)
        setIsClicked3(false)
        break;
      case "350":
        setIsClicked3(true)
        setIsClicked1(false)
        setIsClicked2(false)
        break;
      default: 
        setIsClicked3(false)
        setIsClicked1(false)
        setIsClicked2(false)
        break;
    }
  }

  const componentsProps = {
    email: "user@gmail.com",
    amount:  100,
    publicKey: "pk_test_23f924a439b032f8ec5c594e55dbda122545ad1e",
    currency: "GHS",
    text: "CHECKOUT",
    onSuccess: (data) => {
      // sessionStorage.setItem("data", JSON.stringify(data));
      // toast.success(data?.status);
      // setTimeout(() => {
      //   navigate("/code");
      // }, 4000);
      console.log(data)
    },
  };

  
  return (
    <DashboardLayout show={false}>
      <ToastContainer/>
      <div className='h-screen flex justify-center items-center mx-auto'>

      {/* <form action="" className='bg-white shadow-lg rounded-lg lg:w-128 px-5 lg:mx-0 mx-5 flex flex-col justify-center items-center py-10'>
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
          <input onChange={e => setPhoneNumber(e.target.value)} required={true} placeholder='0501311122' type="text" className='lg:w-96 w-72 px-4 text-gray-700 h-12 rounded-lg bg-transparent border border-solid border-gray-700/50 '/>
        </div>
        <button onClick={handlePayment} className='lg:w-96 w-72 px-4 h-12 shadow-lg text-white rounded-lg bg-gray-700'>submit</button>
      </form> */}
      <div  className="bg-white shadow-lg rounded-lg lg:w-[38rem] px-5 lg:mx-0 mx-5 flex flex-col justify-center items-center py-10">
        <div className="">
            <div className="modal-content">
              {/* <div className="flex justify-between items-center">
              <span></span>
                <span onClick={handleClose} id="closeModalBtn" className="right-0 text-gray-700 text-2xl cursor-pointer">&times;</span>
              </div> */}
                <div className="card">
                    <form>

                        <div className="mb-4">
                            <label for="inputField" className="block text-gray-700 text-sm font-bold mb-2">Full Name:</label>
                            <input type="text" id="inputField" required name="inputField" className="w-full p-2 border border-green/50 rounded focus:ring-green focus:border-green focus:outline-green" />
                        </div>
                        <div className="mb-4">
                            <label for="inputField" className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
                            <input type="text" id="inputField" required name="inputField" className="w-full p-2 border border-green/50 rounded focus:ring-green focus:border-green focus:outline-green" />
                        </div>
                        <div className="mb-4">
                            <label for="inputField" className="block text-gray-700 text-sm font-bold mb-2">Provider:</label>
                            <Select placeholder="Please select provider" className="my-2" options={[{value: "mtn", label: "MTN"}, {value: "tgo", label: "Airtel/Tigo"},{value: "vod", label: "Vodafone"},]}/>

                            {/* <input type="text" id="inputField" required name="inputField" className="w-full p-2 border border-green/50 rounded focus:ring-green focus:border-green focus:outline-green" /> */}
                        </div>
                        <div className="lg:grid  lg:grid-cols lg:space-x-3 lg:grid-cols-3 lg:justify-center lg:space-y-0 space-y-3 lg:items-center mx-auto">
                          <div className="hover:cursor-pointer border border-green border-solid rounded px-2 py-4" onClick={() => handleShadow("200")}>
                            <h4 className="font-bold text-green h-8 text-center">Basic</h4>
                            <div className="space-x-2 text-center">
                              <input type="radio" defaultChecked name="price"  className="accent-green" aria-label="" checked={isClicked1}/>
                              <label htmlFor="" className=" mx-auto">GHC 200</label>
                            </div>
                          </div>
                          <div className="hover:cursor-pointer border border-green border-solid rounded px-2 py-4" onClick={() => handleShadow("500")}>
                            <h4 className="font-bold text-green h-8 text-center">Basic Wooden Frame</h4>
                            <div className="space-x-2 text-center">
                              <input type="radio" name="price" className="accent-green" checked={isClicked2}/>
                              <label htmlFor="" className=" mx-auto">GHC 500</label>
                            </div>
                          </div>
                          <div className="hover:cursor-pointer border border-green border-solid rounded px-2 py-4" onClick={() => handleShadow("350")}>
                            <h4 className="font-bold text-green h-8 text-center">Basic Mount Card</h4>
                            <div className="space-x-2 text-center">
                              <input type="radio" name="price" className="accent-green" checked={isClicked3}/>
                              <label htmlFor="" className=" mx-auto">GHC 350</label>
                            </div>
                          </div>
                        </div>
                        <PaystackButton {...componentsProps} className="bg-green shadow-lg text-white px-3 py-3 justify-center items-center font-bold rounded flex my-4 w-full text-center"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard