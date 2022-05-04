import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '../public/frontpage.png'
import '../public/bat.png'
import Navbar from '../Comp/Navbar'
import Footer from '../Comp/Footer'
import Testimonials from '../Comp/Testimonail'
import { Link } from "react-scroll";
import React, { useState, useRef } from "react";
import Links from 'next/link'
import { Transition } from "@headlessui/react";
import Script from 'next/script'
import Frontpaged from '../Comp/Frontpaged'




 const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <div className=' '>
	<Script src="https://www.google-analytics.com/analytics.js" />
    <nav className=" ournav  fixed w-full z-10" >
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-20  justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className=" font-bold text-xl cursor-pointer">
								DEEPIKA<span className="text-blue-500">PRINTS</span>
								</h1>
							    </div>
							    <div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link
										activeClass=""
										to="home"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
									>
										Home
									</Link>
                  <Link
                  activeClass=""
                  to="ourspecialization"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Specialization
                </Link>
									<Link
										activeClass=""
										to="testimonials"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Testimonails
									</Link>
									<Links  href='/diariess'><a className='cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium'> Diaries</a></Links>
									<Links  href='/bottles'><a className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block text-center py-2 rounded-md text-base font-medium'> Bottles</a></Links>


									<Link
										activeClass=""
										to="contactus"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
									>
										Contact
									</Link>
								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bgournv px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<Link
									href="/home"
									activeClass=""
									to="home"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block text-center py-2 rounded-md text-base font-medium"
								>
									Home

									
								</Link>
								<Link
								href="/services"
								activeClass="services"
								to="ourspecialization"
								smooth={true}
								offset={50}
								duration={500}
								className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block text-center py-2 rounded-md text-base font-medium"
							>
								Specialization
							</Link>

								<Link
									href="/testimonials"
									activeClass=""
									to="testimonials"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block text-center py-2 rounded-md text-base font-medium"
								>
									Testimonails
								</Link>

                
				                <Links  href='/diariess'><a className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block text-center py-2 rounded-md text-base font-medium'> Diaries</a></Links>
				<Links  href='/bottles'><a className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block text-center py-2 rounded-md text-base font-medium'> Bottles</a></Links>

								<Link
									href="/contact"
									activeClass=""
									to="contactus"
									smooth={true}
									offset={50}
									duration={500}
									className=" cursor-pointer hover:bg-blue-600  text-black hover:text-white block text-center py-2 rounded-md text-base font-medium"
								>
									Contact
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
    
    <div className="text-gray-600 body-font effect6  bgour3 pt-14" id='home'>
        <div className="container mx-auto flex  py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <p className="text-xl font-bold  text-black fontour textour6 mr-4  ">Make Every Happiness Possible With Deepika Prints , Join us to get the benefits of our awesome packages and the best <span className=  'font-extrabold'>Client .</span>  </p>
      <a href='https://www.indiamart.com/deepika-prints-delhi/profile.html'><button className="bg-blue-500 btn4 hover:bg-blue-700 text-white font-bold py-2 ml-8 mt-9 bigscreenb px-8 rounded-md">
  EXPLORE
</button></a>  
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  ">
        <img className="object-cover  object-center rounded-3xl mb-7 " alt="hero" src="contact.png"
        />
      </div>

    </div>

  <a href='https://www.indiamart.com/deepika-prints-delhi/profile.html'><button className='bg-blue-500 text-white font-semibold px-9 py-2 smallscreenb rounded-md btn9'>EXPLORE</button></a>  
    </div> 
    <h1 className='text-center font-bold pt-10 text-3xl text-blue-600 decoration-violet-600  '>OUR SPECIALIZATION</h1>

    <div className='  text-gray-900 py-14  grid lg:grid-cols-4 text-center pl-12  ' id='ourspecialization' >
  
    <div className='font-semibold py-5  fontour3'>
    <div className='flex justify-center'>
    <img src='https://static.thenounproject.com/png/2724353-200.png' className=' prour pb-4 h-16  '/>
    </div>
    <h1 className='text-3xl pr-5 '>Corporate Giftings </h1>  <br></br> <p className='font-extralight pr-20 '> A Gift To Build Relations
    </p><br></br>
    </div>
    <div className='font-semibold py-5  fontour3'>
    <div className='flex justify-center'>
    <img src='https://static.thenounproject.com/png/2724353-200.png' className=' prour pb-4 h-16  '/>
    </div>
    <h1 className='text-3xl pr-8 '>Customized Gifts </h1>  <br></br> <p className='font-extralight pr-20  '> Gift for your loved ones
    </p><br></br>
    </div>
    <div className='font-semibold py-5  fontour3'>
    <div className='flex justify-center'>
    <img src='https://static.thenounproject.com/png/2724353-200.png' className=' prour pb-4 h-16  '/>
    </div>
    <h1 className='text-3xl  pr-5'>Event Management </h1>  <br></br> <p className='font-extralight pr-20 '> One Place Event Solution
    </p><br></br>
    </div>
    <div className='font-semibold py-5  fontour3'>
    <div className='flex justify-center '>
    <img src='https://static.thenounproject.com/png/2724353-200.png' className=' prour pb-4 h-16  '/>
    </div>
    <h1 className='text-3xl pr-24  '>Supply Chain </h1>  <br></br> <p className='font-extralight prour8 '> Deliver Anywhere</p><br></br>
    </div>
    </div> 
	<Frontpaged/>

      <div className=' text-gray-900  effect6  bgour7 grid lg:grid-cols-4 text-center '>
      <div className='font-semibold  py-5 text-2xl fontour3'>
      100+ <br></br> Projects <br></br>
      Completed
      </div>
        <div className='font-semibold  text-2xl py-5 fontour3'>
        100+ <br></br>Happy<br></br>
        Clients
        </div>
        <div className='font-semibold text-2xl py-5 fontour3'>
        100+ <br></br> Awards <br></br>
        Recieved
        </div>
        <div className='font-semibold text-2xl py-5 fontour3'>
        100+ <br></br> Cups Of <br></br>
        Coffee
        </div>
        </div>
      <Testimonials/>

     </div>
  
  )
  
}
export default Home;