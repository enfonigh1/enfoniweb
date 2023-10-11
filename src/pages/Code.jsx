import React from "react";
import AuthLayout from "../components/AuthLayout";

const Code = () => {
  const data = JSON.parse(sessionStorage.getItem("data"));
  return (
    <AuthLayout loggins={false} footer={false}>
      <div className="flex justify-center items-center lg:h-128 md:h-128 flex-col lg:w-96 2xl:w-144 mx-auto h-72">
        <h1 className="font-bold md:text-4xl 2xl:text-5xl">CONGRATULATIONS</h1>
        <p className="text-gray-700 text-center my-10 2xl:text-3xl md:px-5 px-6">
          Your Gown has been reserved. You can always come back and book for
          your Photoshoot with your unique code attached below.
        </p>
        <button className="bg-gray-400 mt-5 py-1 px-6 rounded-md font-semibold shadow-2xl text-white 2xl:py-2 2xl:px-10 2xl:text-3xl">
          {data?.reference}
        </button>
      </div>
    </AuthLayout>
  );
};

export default Code;
