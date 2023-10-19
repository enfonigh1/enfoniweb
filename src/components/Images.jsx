import React, { useState } from "react";
import howtoorder from "../assets/images/howtoorder.svg";
import faq from "../assets/images/faq.svg";
import faqframe from "../assets/images/faqframe.png";
import enfonigif from "../assets/gif/mobile.gif";

const Images = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (index) => {
    if (activeItem === index) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
  };

  const faqItems = [
    {
      question: "How do I place an order for merchandise?",
      answer: `
      To place an order for merchandice, follow the steps below:
      
      Visit our website (provide the website URL).
      Browse the merchandise catalog to select the items you want.
      Add the selected items to your shopping cart.
      Review your cart to ensure your order is correct.
      Proceed to the checkout page.
      Provide your shipping and payment information.
      Confirm your order and complete the payment process.
      You will receive an order confirmation email with details about your purchase.
      `,
    },
    {
      question: "Can I book a graduation gown on EEP and How?",
      answer: `To book a graduation gown on EEP, follow the steps below:
      
    Yes, you can book a graduation gown on Enfoni Portal 
To book a graduation gown, follow these steps:
Log in to your Enfoni Portal account (or create one if you don't have an account).
Navigate to the graduation gown booking section.
Fill the form under  gown and Proceed to checkout.
Provide the required information and complete the booking process.
You will receive a confirmation email with gown pickup/delivery details.

      `,
    },
    {
      question: "How do I schedule a graduation photoshoot?",
      answer: `To schedule a graduation photoshoot, follow the steps below: 
      
How do I schedule a graduation photoshoot?
To schedule a graduation photoshoot, please follow these steps:
Log in to your EEP account (or create one if needed).
Go to the graduation photoshoot scheduling section.
Select your College, date of graduation , Degree
Confirm your booking and make any necessary payments
You will receive a confirmation email with photoshoot details.

      `,
    },
    {
      question: "What payment methods are accepted on EEP?",
      answer: `The payment methods accepted on EEP are:
      EEP typically accepts a variety of payment methods, including credit/debit cards (Visa, MasterCard, American Express) and MOMO Payment .Also, double check your payment details. 
Is my personal information secure when using EEP?
Yes, EEP takes the security of your personal information seriously. We use industry-standard encryption and security measures to protect your data. Additionally, EEP's privacy policy outlines how your information is collected, used, and protected. You can find a link to the privacy policy on our website for more details.

      `,
    },
    {
      question: "Is my personal information secure when using EEP?",
      answer:
        "Yes, your personal information is secure when using EEP. We use the latest security technology to protect your personal information.",
    },
    {
      question: "Do I need to create an account to use EEP?",
      answer:
        `Yes you are required to create an account if you will like to use the services of the enfoni portal like booking for gown and photography
        `,
    },
    {
      question: "Can I track the status of my gown booking?",
      answer: `
      Can I track the status of my gown booking?
      Yes, you can usually track the status of your gown booking by logging into your EEP account.`,
    },
  ];

  return (
    <>
      <div className="relative  bg-gray-100 lg:py-5 py-3">
        <div className="lg:h-full">
          {/* <img src={howtoorder} alt="" /> */}
          <h1 className="text-green text-4xl font-bold lg:ml-10 lg:pt-10 font-Poppins lg:w-52 text-center lg:text-left my-10">
            HOW TO ORDER
          </h1>
          <h1 className="text-gray-700 text-4xl font-bold lg:inline-block hidden  font-Poppins  absolute right-0   rotate-90 translate-x-24 translate-y-48">
            INSTRUCTIONS
          </h1>
          <div className=" mx-auto flex flex-col justify-center items-center">
            <div className="">
              <img src={enfonigif} alt="" className="lg:h-96 px-3" />
            </div>
            <div className="grid grid-cols-2 mt-4 lg:w-150 space-x-3">
              <button className=" shadow-lg py-2 px-5 rounded-md font-bold shadow-light-green">
                Order For Photo
              </button>
              <button className="shadow-lg py-2 px-5 rounded-md font-bold shadow-light-green">
                Order For Photo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mt-10 lg:mb-24 mt-24 bg-[url('./assets/images/faqb.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="lg:px-10 lg:grid lg:grid-cols-2 px-6">
          <div className="lg:w-[25rem]">
            {/* <p>hLLO</p> */}
            <h1 className="text-4xl font-Poppins font-bold lg:text-black text-green">
              Frequently
            </h1>
            <h1 className="text-4xl font-Poppins font-bold lg:text-black text-green">
              Asked Questions
            </h1>
            <h3 className="text-gray-500 font-Poppins lg:font-[700] mt-4">
              Answers for common questions about services and clients usually
              ask
            </h3>
            <img src={faqframe} alt="" className="mx-auto"/>
          
          </div>
          <div>
            <ul className="flex flex-col space-y-4 my-10">
              {faqItems.map((item, index) => (
                <li
                  className=""
                  key={index}
                  // data-aos="zoom-in-up"
                  // data-aos-duration="2000"
                  // data-aos-delay="100"
                >
                  <div className="flex flex-col divide-y-4 divide-y-reverse divide-black">
                    
                    <span
                      className="flex justify-between items-center font-semibold  text-lg cursor-pointer"
                      onClick={() => toggleItem(index)}
                    >
                      <span className="">{item?.question}</span>
                      <span>{activeItem === index ? "-" : "+"}</span>
                    </span>

                    <span
                      className={`${
                        activeItem === index
                          ? "opacity-100 max-h-[400px]"
                          : "opacity-0 max-h-0 overflow-hidden"
                      } transition-opacity duration-500 text-gray-700`}
                    >
                      {item?.answer}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Images;
