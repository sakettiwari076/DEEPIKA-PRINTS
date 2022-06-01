import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";


// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_39r09b3",
        "template_ax7ez27",
        form.current,
        "DrA3NhVDUntpd5YwO"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();

        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
    <h1 className='text-center text-4xl py-7 text-blue-900 font-semibold'>Drop your requirements </h1>
    <a href='../'>
    <img src='back1.png' className=' arrow h-52'/>
        </a>
<div className="grid lg:grid-cols-2     ">
<div className="flex justify-center">
<img className="w-4/5 " src="require.jpg"/>

</div>
<div className="py-8 space-y-48 px-4 flex justify-center">

      <form ref={form} className="flex flex-col sm:mx-12 lg:pt-14 "  onSubmit={sendEmail}>
      <p className="font-mono text-gray-600">Your Opinion matters!</p>
        <label className=" py-4 text-gray-600 font-mono  text-2xl " >Name</label>
        <input type="text" className=" w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " name="user_name" />
        <label className=" py-4 text-gray-600 font-mono text-2xl  "> Email</label>
        <input type="email" className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " name="user_email" />
        <label className=" py-4 text-gray-600 font-mono  text-2xl"> Message</label>
        <textarea className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" name="message" />
        <div className="py-4">
    <input type="submit" className="bg-blue-900 text-white rounded-md w-96 py-2"  value="Send" />
    </div>
      </form>
      </div>
      </div>
      
      </div>
  );
};

export default Contact;

