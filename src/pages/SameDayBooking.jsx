import React, { useEffect, useState } from 'react'
import knustemblem from "../assets/images/knustlogo.png"
import Select from 'react-select'
import { usePostPaymentMutation, useSubmitOtpMutation } from '../app/features/payment/paymentApiSlice'
import { paymentInfo, paymentinfo } from '../app/features/payment/paymentSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import ReactCodeInput from 'react-code-input'
import axios from 'axios'

const SameDayBooking = () => {

    const [isClicked1, setIsClicked1] = useState(false)
    const [isClicked2, setIsClicked2] = useState(false)
    const [isClicked3, setIsClicked3] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [total, setTotal] = useState(200);
    const [phone, setPhone] = useState("")
    const [provider, setProvider] = useState("")
    const [otp, setOtp] = useState("");
    const [postpayment, {isLoading}] = usePostPaymentMutation()
    const [submitopt, {isLoading: isOtpLoading}] = useSubmitOtpMutation()
    const [showCode, setShowCode] = useState(false)
    const [frames, setFrames] = useState({
      type: "Basic",
      price: 200
    })
  const handleShadow = (e) => {
    switch(e){
      case "200":
        setIsClicked1(true)
        setIsClicked2(false)
        setIsClicked3(false)
        setTotal(0.01)
        setFrames({ type: "Basic", price: 200})
        break;
        case "500":
          setIsClicked2(true)
          setIsClicked1(false)
          setIsClicked3(false)
          setTotal(0.05)
          break;
          case "350":
            setIsClicked3(true)
            setIsClicked1(false)
            setIsClicked2(false)
            setTotal(0.035)
        break;
      default: 
        setIsClicked3(false)
        setIsClicked1(false)
        setIsClicked2(false)
        setTotal(200)
        break;
    }
  }

  const disptach = useDispatch()

  const handlePayment = async (e) => {
    e.preventDefault()
    try {
    
      const results = await postpayment({amount: total, provider: provider, phone: phone}).unwrap()
      if(results?.status === true){
        setIsOpen(results?.status)
        disptach(paymentInfo({...results}))
      }
      console.log(results)
      toast.error("Too many attempt please try again later")
    } catch (error) {
      
    }  
  }
  const reference = useSelector(paymentinfo)
  const handleOtp = async (e) => {
    e.preventDefault()
    try {
      const results = await submitopt({otp: otp, reference: reference}).unwrap
    } catch (error) { 
    }
  }

  
  const handleClose = () => {
    setIsOpen(false)
  }



  useEffect(() => {
    const checkPaymentStatus = async () => {
      
      try {
        const results = await axios.post("https://enfoni.cyclic.app/api/v1/user/check-payment-status", {reference: reference, frame: frames})
      if(results?.data?.data?.amount){
        setIsOpen(false)
        // setShowCode(true)
        // setValue(userdetails?.user_id.slice(0, 6).toUpperCase())
      }
      } catch (error) {
        console.log("An error occured")
      }
    }
    // checkPaymentStatus()
  }, [])



  return (
    <div className='flex justify-center items-center h-screen w-full'>
        <div className='w-96 h-[90%] rounded-3xl border-solid border-white border-2 shadow-lg flex flex-col overflow-y-scroll'>
          <span className='h-16 w-full bg-green self-start rounded-t-3xl flex justify-center items-center'>
            <img src={knustemblem} alt="" className='h-12 mx-auto'/>
          </span>
          <form action="" className='px-5 my-4'>
          <div className="mb-4">
                          <label for="inputField" className="block text-gray-700 text-sm font-bold mb-2">Graduant's Name:</label>
                          <input  type="text" id="inputField" required name="inputField" className="w-full p-2 border border-green/50 rounded focus:ring-green focus:border-green focus:outline-green" />
                      </div>
          <div className="mb-4">
                          <label for="inputField" className="block text-gray-700 text-sm font-bold mb-2">Mobile Money Number:</label>
                          <input onChange={e => setPhone(e.target.value)} type="text" id="inputField" required name="inputField" className="w-full p-2 border border-green/50 rounded focus:ring-green focus:border-green focus:outline-green" />
                      </div>

                      <div className="mb-4">
                          <label for="inputField" className="block text-gray-700 text-sm font-bold mb-2">Provider:</label>
                          <Select onChange={e => setProvider(e.value)} placeholder="Please select provider" className="my-2" options={[{value: "mtn", label: "MTN"}, {value: "tgo", label: "Airtel/Tigo"},{value: "vod", label: "Vodafone"},]}/>

                          {/* <input type="text" id="inputField" required name="inputField" className="w-full p-2 border border-green/50 rounded focus:ring-green focus:border-green focus:outline-green" /> */}
                      </div>

                      <div className="grid space-y-3">
                      <div onClick={() => handleShadow("200")} className="hover:cursor-pointer border border-green border-solid rounded px-2 py-4">
                          <h4 className="font-bold text-green h-12 text-center">Basic (7 Pictures)</h4>
                          <div className="space-x-2 text-center">
                            <input type="radio" defaultChecked name="price" checked={isClicked1}  className="accent-green" aria-label="" />
                            <label htmlFor="" className=" mx-auto">GHC 200</label>
                          </div>
                        </div>
                      <div onClick={() => handleShadow("350")} className="hover:cursor-pointer border border-green border-solid rounded px-2 py-4">
                          <h4 className="font-bold text-green h-12 text-center">Pictures with 1 Card Frame</h4>
                          <div className="space-x-2 text-center">
                            <input type="radio" checked={isClicked3} defaultChecked name="price"  className="accent-green" aria-label="" />
                            <label htmlFor="" className=" mx-auto">GHC 350</label>
                          </div>
                        </div>
                      <div onClick={() => handleShadow("500")} className="hover:cursor-pointer border border-green border-solid rounded px-2 py-4">
                          <h4 className="font-bold text-green h-12 text-center">Pictures with 1 Wooden Frame</h4>
                          <div className="space-x-2 text-center">
                            <input type="radio" checked={isClicked2} defaultChecked name="price"  className="accent-green" aria-label="" />
                            <label htmlFor="" className=" mx-auto">GHC 500</label>
                          </div>
                        </div>
                      </div>

                      <button onClick={handlePayment}  className="bg-green shadow-lg text-white px-3 py-3 justify-center items-center font-bold rounded flex my-4 w-full text-center">{isLoading ? "Loading...": "CHECKOUT"}</button>

          </form>
        </div>
        <div id="myModal" className={ isOpen ? "fixed top-0 left-0 w-full h-full flex items-center justify-center  bg-black/70 overflow-y-scroll" : "hidden"}>
        <div className="modal-dialog bg-white md:w-1/2 w-[90%] p-6 rounded shadow-lg">
            <div className="modal-content">
              <div className="flex justify-between items-center">
              <span></span>
                <span onClick={handleClose} id="closeModalBtn" className="right-0 text-gray-700 text-2xl cursor-pointer">&times;</span>
              </div>
                <div className="card">
                   
                     <form className="flex flex-col justify-center items-center text-green">
                        <p className="text-center text-xs my-2">Please complete the authorisation process by inputting your PIN on your mobile device</p>
                      <ReactCodeInput fields={6} className=""/>
                      <button onClick={handleOtp}  className="bg-green shadow-lg text-white px-3 py-3 justify-center items-center font-bold rounded flex my-4 w-full text-center">{isOtpLoading ? "Loading...": "SUBMIT"}</button>
                      </form> 
                   
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SameDayBooking
