import React, { useEffect, useState } from "react";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import NewInput from "../components/NewInput";
import Button from "../components/Button";
import { usePostRegisterMutation, useUpdateUserMutation } from "../app/features/authSlice/authApiSlice";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { auth, authuser, registerDetails, service, userinfo } from "../app/features/authSlice/authSlice";
import { useNavigate } from "react-router-dom";
import MoreDetailsLayout from "../components/MoreDetailsLayout";
import ReactCodeInput from "react-code-input";
import Select from "react-select";


const MoreDetails = () => {

  const graduation_info = [
    {
      faculty: "FACULTY OF AGRICULTURE AND FACULTY OF RENEWABLE NATURAL RESOURCES",
      college: "College of Agriculture and Natural Resources CANR",
      session: "Morning",
      time: "0900 Hours",
      date: "Thursday, 9th November, 2023"
    },
    {
      faculty: "FACULTY OF ART",
      college: "ART AND BUILT ENVIRONMENT (CABE)",
      session: "Morning",
      time: "0900 Hours",
      date: "Thursday, 10th November, 2023"
    },
    {
      faculty: "FACULTY OF BUILT ENVIRONMENT AND FACULTY OF EDUCATIONAL STUDIES",
      college: "ART AND BUILT ENVIRONMENT (CABE)",
      session: "Afternoon",
      time: "1400 Hours",
      date: "Thursday, 10th November, 2023"
    },
    {
      faculty: "FACULTY OF MECHANICAL AND CHEMICAL ENGINEERING",
      college: "ENGINEERING (COE)",
      session: "Morning",
      time: "0900 Hours",
      date: "Saturday, 11th November, 2023"
    },
    {
      faculty: "FACULTY OF CIVIL AND GEO-ENGINEERING AND FACULTY OF ELECTRICAL AND COMPUTER ENGINEERING",
      college: "ENGINEERING (COE)",
      session: "Afternoon",
      time: "1400 Hours",
      date: "Saturday, 11th November, 2023"
    },
    {
      faculty: "FACULTY OF BIOSCIENCES",
      college: "SCIENCE (CoS)",
      session: "Morning",
      time: "0900 Hours",
      date: "Wednesday, 15th November, 2023"
    },
    {
      faculty: "FACULTY OF PHYSICAL AND COMPUTATIONAL SCIENCES",
      college: "SCIENCE (CoS)",
      session: "Afternoon",
      time: "1400 Hours",
      date: "Wednesday, 15th November, 2023"
    },
    {
      faculty: "FACULTY OF PHARMACY AND PHARMACEUTICAL SCIENCES AND FACULTY OF ALLIED HEALTH SCIENCES",
      college: "HEALTH SCIENCES (CHS)",
      session: "Morning",
      time: "0900 Hours",
      date: "Thursday, 16th November, 2023"
    },
    {
      faculty: "SCHOOL OF MEDICINE AND DENTISTRY, SCHOOL OF VETERINARY MEDICINE AND SCHOOL OF PUBLIC HEALTH",
      college: "HEALTH SCIENCES (CHS)",
      session: "Afternoon",
      time: "1400 Hours",
      date: "Thursday, 16th November, 2023"
    },
    {
      faculty: "FACULTY OF SOCIAL SCIENCES",
      college: "HUMANITIES AND SOCIAL SCIENCES (CoHSS)",
      session: "Morning",
      time: "0900 Hours",
      date: "Friday, 17th November, 2023"
    },
    {
      faculty: "FACULTY OF LAW AND KNUST SCHOOL OF BUSINESS",
      college: "HUMANITIES AND SOCIAL SCIENCES (CoHSS)",
      session: "Afternoon",
      time: "1400 Hours",
      date: "Friday, 17th November, 2023"
    },
    {
      faculty: "BACHELOR OF BUSINESS ADMINISTRATION (ALL OPTIONS)",
      college: "INSTITUTE OF DISTANCE LEARNING (IDL)",
      session: "Morning",
      time: "0900 Hours",
      date: "Saturday, 18th November, 2023"
    },
    {
      faculty: "BACHELOR OF SCIENCE (ALL OTHER PROGRAMMES) AND ALL DIPLOMA PROGRAMMES",
      college: "INSTITUTE OF DISTANCE LEARNING (IDL)",
      session: "Afternoon",
      time: "1400 Hours",
      date: "Saturday, 18th November, 2023"
    },
    {
      faculty: "MASTER OF SCIENCE / MASTER OF ARCHITECTURE / MCOMM DESIGN / MASTER OF ARTS / MASTER OF BUSINESS ADMINISTRATION / MASTER OF EDUCATION / MASTER OF PUBLIC ADMINISTRATION",
      college: "CABE (Regular & IDL) & CoHSS (Regular & IDL)",
      session: "Morning",
      time: "0900 Hours",
      date: "Wednesday, 22nd November, 2023"
    },
    {
      faculty: "MASTER OF SCIENCE / MASTER OF PUBLIC HEALTH / MASTER OF ENGINEERING / MASTER OF TECHNOLOGY IDL PROGRAMMES: CEMBA / CMBA / CEMPA, MBA. INTERNATIONAL BUSINESS, MSC. BUSINESS CONSULTING AND ENTERPRISE RISK MANAGEMENT, MSC. DEVELOPMENT MANAGEMENT, MSC. ENERGY AND SUSTAINABLE MANAGEMENT, MSC. HOSPITALITY AND TOURISM MANAGEMENT, MSC. INDUSTRIAL FINANCE AND INVESTMENT",
      college: "CANR (Regular & IDL), CoS (Regular & IDL), CoE (Regular & IDL), CHS & IDL",
      session: "Afternoon",
      time: "1400 Hours",
      date: "Wednesday, 22nd November, 2023"
    },
    {
      faculty: "MASTER OF PHILOSOPHY / MASTER OF FINE ART / DOCTOR OF PHILOSOPHY",
      college: "SCHOOL OF GRADUATE STUDIES (SGS) ALL COLLEGES (Regular & IDL)",
      session: "Morning",
      time: "0900 Hours",
      date: "Friday, 24th November, 2023"
    },
  ]

  const servicetype = useSelector(service)



  const [info, setInfo] = useState(JSON.parse(sessionStorage.getItem("auth")));
  const [details, setDetails] = useState({
    college_name: "",
    phone_number: "",
    session: "",
    date_of_graduation: "",

  });


  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const userdetails = useSelector(authuser);
  const moredetails = useSelector(userinfo);
  console.log(userdetails)
  const navigate = useNavigate();

  const [faculty, setFaculty] = useState("")
  
  useEffect(() => {
    const results = graduation_info.filter(info => info.faculty === faculty)
    setDetails({...details, college_name: results[0]?.college, date_of_graduation: results[0]?.date, session: results[0]?.time })
  }, [faculty])


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
  };

  const handlePushCode = async (e) => {
    // e.preventDefault()
    try {
      
      const response = await updateUser({
        id: userdetails?.user_id,
        gown: true,
        photoshoot: true
      }).unwrap()
      console.log(response)
    } catch (error) {
      console.log(error)
    }

  }

  const handleClick = async (e) => {
    e.preventDefault();

    if(!details?.college_name || !details?.phone_number || !details?.session || !details?.date_of_graduation || !faculty){ 
      toast.error("Please fill all fields");
      return;
    }else{
    
    try {
      const response = await updateUser({
        id: userdetails?.user_id,
        college_name: details?.college_name,
        faculty: faculty,
        phone_number: details?.phone_number,
        date_of_graduation: details?.date_of_graduation,
        session: details?.session,
        gown: servicetype === "gown" && true,
        photoshoot: servicetype === "photo" && true 
      }).unwrap();

      if (response?.status === 400) {
        toast.error(response?.data || response?.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      if (response?.status === 200 && servicetype === "photo") {
        setTimeout(() => {
          navigate("/select-frame");
        }, 4000);
        toast.success(`Photoshoot booked successfully`);
        // toast.success(response?.message);
      }
      else{
        setTimeout(() => {
          navigate("/code");
        }, 4000);
        toast.success(`Gown booked successfully`);
      }
    } catch (error) {}
  }
  };

  return (
    <MoreDetailsLayout loggins={false} footer={false} toastContainer={true}>
      {
        moredetails?.gown || moredetails?.photoshoot ? <>
        <form action="" className="w-72 mx-auto mt-8 sm:pb-0 pb-10">
        {/* <NewInput
          label="Enter Code"
          type="text"
          value={details.phone_number}
          name="phone_number"
          required={true}
          onChange={handleChange}
        /> */}
        <p  className="text-center font-bold text-purple mb-3">Please enter code</p>
        <ReactCodeInput fields={6} />
        <Button
          onClick={handlePushCode}
          name={isLoading ? "Loading" : servicetype === "gown" ? "Proceed to book gown" : "Proceed to book Photoshoot"}
          className="bg-purple shadow-lg text-white rounded-md py-2.5 block w-full mt-4"
        />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus accusantium, aliquid recusandae magnam itaque temporibus voluptates numquam commodi placeat quidem illo quasi quibusdam iure voluptatibus laudantium reiciendis eos dignissimos ducimus nisi vel. Velit ad vitae nulla dolorem minus eligendi autem necessitatibus cum nihil ullam quod sequi mollitia, asperiores similique facilis labore in esse omnis! Magnam consequuntur incidunt iure similique animi. Sequi, cum? Alias fuga dolorum doloremque. Ut accusantium, amet in quaerat odit optio aperiam quod ducimus quia facilis tenetur tempora necessitatibus nam quasi eligendi! Cum, ipsam laudantium. Itaque quidem hic iusto eaque eos aliquid, a, accusamus architecto optio repudiandae cupiditate.
        </form>
        </> : <form action="" className="w-72 mx-auto mt-8 sm:pb-0 pb-10">
       
        {/* <select name="" id="" onChange={e => setFaculty(e.target.value)} className="block appearance-none w-72 rounded-md border-0 p-3 mb-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400">
          <option value="">Select Faculty</option>
          {graduation_info?.map((info, index) => (
            <option value={info.faculty} className="w-48 inline-block py-3">{info.faculty}</option>
            
          ))}
        </select> */}

        <Select placeholder="Please select Faculty" onChange={e => setFaculty(e.value)} className="text-purple mb-3 pt-4" options={graduation_info.map(item => {
          return {value: item.faculty, label: item.faculty}
        })}/>

        <NewInput
          label="College"
          type="text"
          value={details.college_name}
          name="college_name"
          // onChange={handleChange}
          required={true}
          
        />
        <NewInput
          label="Session"
          type="text"
          name="session"
          value={details.session}
          required={true}
          // onChange={handleChange}
        />
        <NewInput
          label="Date of Graduation"
          type="text"
          value={details.date_of_graduation}
          name="date_of_graduation"
          required={true}
          // onChange={handleChange}
        />
        <NewInput
          label="Phone Number"
          type="text"
          value={details.phone_number}
          name="phone_number"
          required={true}
          onChange={handleChange}
        />
        <Button
          onClick={handleClick}
          name={isLoading ? "Loading" : servicetype === "gown" ? "Proceed to book gown" : "Proceed to book Photoshoot"}
          className="bg-purple shadow-lg text-white rounded-md py-2.5 block w-full mt-4"
        />
      </form>
      }
    
    </MoreDetailsLayout>
  );
};

export default MoreDetails;
