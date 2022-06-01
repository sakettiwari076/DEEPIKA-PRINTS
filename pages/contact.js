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
    <h1 className="text-center py-4 font-semibold  lg:text-4xl ">Drop your requirements !</h1>
<div className="grid lg:grid-cols-2    ">
<div className="">
<img className="" src="require.jpg"/>

</div>
<div className="py-8 space-y-48 flex justify-center">

      <form ref={form} className="flex flex-col  "  onSubmit={sendEmail}>
      
        <label className="font-semibold py-2 text-gray-700 " >Name</label>
        <input type="text" className="w-96 py-2 bg-gray-200 border-red-500 rounded-md  px-4 mb-3 leading-tight focus:outline-none " name="user_name" />
        <label className="font-semibold py-2 text-gray-700"> Email</label>
        <input type="email" className="w-96 py-2 bg-gray-200 " name="user_email" />
        <label className="font-semibold py-2 text-gray-700"> Message</label>
        <textarea className="w-96 py-2 bg-gray-200" name="message" />
        <div className="py-4">
    <input type="submit" className="bg-blue-900 text-white w-96 py-2"  value="Send" />
    </div>
      </form>
      </div>
      </div>
      
      </div>
  );
};

export default Contact;

