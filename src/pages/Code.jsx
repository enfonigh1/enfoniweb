import React, { useEffect } from "react";
import AuthLayout from "../components/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { auth, authuser, service, userInfo, userinfo } from "../app/features/authSlice/authSlice";
// import { userInfo } from "os";
import { useFetchSingleUserMutation, useUpdateUserMutation } from "../app/features/authSlice/authApiSlice";

const Code = () => {
  const details = useSelector(authuser)
  const servicetype = useSelector(service)
  const user_info = useSelector(userinfo)
  const dispatch = useDispatch()
  const [fetchUser] = useFetchSingleUserMutation()
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetchUser({id: details?.user_id})
        
        dispatch(userInfo({...response?.data?.data}))
      } catch (error) {
        
      }
    }
    fetchUserInfo()
  }, [details])

  const [update, {isLoading}] = useUpdateUserMutation()
  const handleBook = async() => {
    console.log("Hello")
   const results = await update({
    gown: true,
    photoshoot: true,
    id: user_info?._id
   })

   console.log(results)
  }

  // const data = JSON.parse(sessionStorage.getItem("data"));
  return (
    <AuthLayout loggins={false} footer={false} toastContainer={true}>
      <div className="flex justify-center items-center lg:h-128 md:h-128 flex-col lg:w-96 2xl:w-144 mx-auto h-72">
        <h1 className="font-bold md:text-4xl 2xl:text-5xl">CONGRATULATIONS</h1>
        <p className="text-gray-700 text-center my-10 2xl:text-3xl md:px-5 px-6">
          Your {servicetype} has been reserved. You can always come back and book for
          your Photoshoot with your unique code attached below.
        </p>
        <div className="bg-gray-400  py-1 px-6 rounded-md font-semibold shadow-2xl text-white 2xl:py-2 2xl:px-10 2xl:text-3xl">
          {details?.user_id?.slice(0, 6).toUpperCase()}
        </div>
        {
          user_info?.photoshoot && user_info?.gown ? <></> : user_info?.photoshoot || user_info?.gown ? <button type="button" onClick={handleBook} className="bg-gray-400 mt-3 py-1 px-6 rounded-md font-semibold shadow-2xl text-white 2xl:py-2 2xl:px-10 2xl:text-3xl">
          Proceed to book {isLoading ? "Loading..." : servicetype === "gown" ? "photoshoot" : "gown"}
        </button> : <></>
        }
      </div>
    </AuthLayout>
  );
};

export default Code;
