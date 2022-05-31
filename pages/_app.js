import { Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import useSWR from 'swr';
import '../public/fb.png';
import '../public/whatsapp.png';
import '../styles/globals.css';
const scrollRef = (ref) => window.scrollTo(0 , ref.current.offset.Top)

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const ScrollDemo = () => {
const myRef = useRef(null)
const executeScroll = () => scrollToRef(myRef)
  }

  return(
    // NAVBAR 

    <div className=''>
  

  <Component {...pageProps} />
  <div className='  font-semibold bgtest mt-12 txtnavy text-center py-12 lg:text-4xl text-3xl' id='' >
  <h1 className='' id='contactus '>CONTACT US</h1>
  </div>

  <div className="text-gray-600 bgtest  text-2xl body-font relative" id='contactus'>
<div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
  <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14012.014268470783!2d77.0619035!3d28.5996698!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x983aaecf13f656a0!2sAdarsh%20Apartment%2C%20Sector%203%2C%20Pocket%2016%2C%20Dwarka!5e0!3m2!1sen!2sin!4v1651079425095!5m2!1sen!2sin "loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
    <div className="">
      <div className="lg:w-1/2 px-6">
        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
        <p className="mt-1">Flat No 452, Adarsh Apartment, Pocket - 16, Sector - 3, Dwarka, Delhi - 110075</p>
      </div>
      <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
        <a className="text-indigo-500 leading-relaxed">Deepikaprints7@gamil.com</a>
        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
        <p className="leading-relaxed">7827102242</p>
        <p className="leading-relaxed">7827655889</p>

      </div>
    </div>
  </div>



  <div className="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Drop your requirements ! </h2>
    <p className="leading-relaxed mb-5 text-gray-600">Please enter your valuable feedbacks here!</p>
    <div className="relative mb-4">
      <label htmlFor="name" className="leading-7 text-lg font-mono text-gray-600">Name</label>
      <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
    </div>
    <div className="relative mb-4">
      <label htmlFor="email" className="leading-7 text-lg font-mono text-gray-600">Email</label>
      <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
    </div>
    <div className="relative mb-4">
      <label htmlFor="message" className="leading-7 text-lg font-mono text-gray-600">Message</label>
      <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
    </div>
    <button className="text-white bg-navy border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Share</button>
    <p className="text-xs text-gray-500 mt-3">Best wishes from Deepika Prints</p>
  </div>
  
</div>

</div>

  
  
  <p className=' bgour6 text-xl text-white text-center
  '>© 2021-22 Deepika Prints. All Rights Reserved.</p>
  <div className="w-full bgour6   text-center">
          <a className="text-white">Deepikaprints7@gmail.com</a>
          <p className="leading-normal my-5 text-white">Flat No 452 , Adarsh Apartment
            <br></br>Pocket-16 , Sector 3 , Delhi , 110075
          </p>
          <span className="inline-flex">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
      </div>
	  <a href='https://wa.me/917827102242?text='>
	  <img src='whatsapp.png' className='h-14 imgour8'></img>
	  </a>
      </div>
  )
}

export default MyApp