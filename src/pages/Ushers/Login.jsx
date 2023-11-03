import React, { useState } from "react";
import AuthLayout from "../../components/AuthLayout";
import michael from "../../assets/images/register.svg";
import Input from "../../components/Input";
import mail from "../../assets/images/mail.svg";
import password from "../../assets/images/icon _lock key_.svg";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { usePostLoginMutation } from "../../app/features/authSlice/authApiSlice";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { auth} from "../../app/features/authSlice/authSlice";
import { useDispatch } from "react-redux";
import Html5QrcodePlugin from "../../components/Html5QrcodePlugin";
// import { useH } from "react-router-dom";

const UsherLogin = () => {
  // const { register, handleSubmit } = useForm();
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [login, { isLoading }] = usePostLoginMutation();
  const [visible, setVisible] = useState(false)
  const [isVerified, setIsVerified] = useState(true)
  const navigate = useNavigate();
  const disptach = useDispatch();
  const location = useLocation();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
  };

  // const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ ...details }).unwrap();
      console.log(response)
      console.log(response)
      if(response?.verified === false){

        toast.error("Please verify your email to continue");
        return;
      }
      if (response?.status === 200) {
        setTimeout(() => {
          const from = location?.state?.from?.pathname || "/ushers/home";
          navigate(from, { replace: true });
        }, 4000);
        toast.success(response?.message);
      }
      if (response?.status === 400) {
        toast.error(response?.data || response?.message);
      }
      if (response?.verified === false) {
        setIsVerified(false)
      }
      disptach(auth({ ...response }));
      
    } catch (error) {
      
      console.log(error)
    }
  };

  const handleClick = () => {
    setVisible(!visible)
  }

  const onNewScanResult = (decodedText, decodedResult) => {
    // handle decoded results here
    console.log(decodedResult, decodedText)
};

  return (
    <AuthLayout image={michael} footer={false} toastContainer={false} loggins={false} logins="/ushers/login" registers="/ushers/signup">
      <div className="lg:w-96 w-80 rounded-md mx-auto mt-4">
      <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
            />
      </div>
    </AuthLayout>
  );
};

export default UsherLogin;
