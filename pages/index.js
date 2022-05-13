import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'



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
import Script from 'next/script'
import Frontpaged from '../Comp/Frontpaged'
function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
  }

 const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <div className=''>
	<Script src="https://www.google-analytics.com/analytics.js" />
    <nav className=" ournav   fixed w-full z-10" >
				<div className="w-full">
					<div className="flex bg-navy  text-white items-center h-20 w-full">
						<div className="flex items-center  mx-20  justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className=" font-extralight text-xl text-white cursor-pointer">
								DEEPIKA<span className="text-white">PRINTS</span>
								</h1>
							    </div>
							    <div className="hidden md:block ">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link
										activeClass=""
										to="home"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-blue-600 text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Home
									</Link>
									<Menu as="div" className="relative inline-block text-left">
									<div>
									  <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
										Options
										<ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
									  </Menu.Button>
									</div>
							  
									<Transition
									  as={Fragment}
									  enter="transition ease-out duration-100"
									  enterFrom="transform opacity-0 scale-95"
									  enterTo="transform opacity-100 scale-100"
									  leave="transition ease-in duration-75"
									  leaveFrom="transform opacity-100 scale-100"
									  leaveTo="transform opacity-0 scale-95"
									>
									  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
										<div className="py-1">
										  <Menu.Item>
											{({ active }) => (
											  <a
												href="#"
												className={classNames(
												  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
												  'block px-4 py-2 text-sm'
												)}
											  >
												Account settings
											  </a>
											)}
										  </Menu.Item>
										  <Menu.Item>
											{({ active }) => (
											  <a
												href="#"
												className={classNames(
												  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
												  'block px-4 py-2 text-sm'
												)}
											  >
												Support
											  </a>
											)}
										  </Menu.Item>
										  <Menu.Item>
											{({ active }) => (
											  <a
												href="#"
												className={classNames(
												  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
												  'block px-4 py-2 text-sm'
												)}
											  >
												License
											  </a>
											)}
										  </Menu.Item>
										  <form method="POST" action="#">
											<Menu.Item>
											  {({ active }) => (
												<button
												  type="submit"
												  className={classNames(
													active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
													'block w-full text-left px-4 py-2 text-sm'
												  )}
												>
												  Sign out
												</button>
											  )}
											</Menu.Item>
										  </form>
										</div>
									  </Menu.Items>
									</Transition>
								  </Menu>
								)
							  
                  <Link
                  activeClass=""
                  to="ourspecialization"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Specialization
                </Link>
									<Link
										activeClass=""
										to="testimonials"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Testimonails
									</Link>
									<Links  href='/diariess'><a className='cursor-pointer hover:bg-blue-600  hover:text-white px-3 py-2 rounded-md text-sm font-medium'> Diaries</a></Links>
									<Links  href='/bottles'><a className='cursor-pointer hover:bg-blue-600  hover:text-white block text-center py-2 rounded-md text-base font-medium'> Bottles</a></Links>
									
									<Links  href='/Cup'><a className='cursor-pointer hover:bg-blue-600  hover:text-white block text-center py-2 rounded-md text-base font-medium'> Cup</a></Links>
									<Links  href='/Fillform'><a className='cursor-pointer hover:bg-blue-600  hover:text-white block text-center py-2 rounded-md text-base font-medium'> One click</a></Links>


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
									className="bg-navy inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
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
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block text-center py-2 rounded-md text-base font-medium bordernavrest"
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
								className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block text-center py-2 rounded-md text-base font-medium bordernavrest"
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
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block text-center py-2 rounded-md text-base font-medium bordernavrest"
								>
									Testimonails
								</Link>
								<Menu as="div" className="relative inline-block text-left">
								<div>
								  <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 mx-20 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
									Products
									<ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
								  </Menu.Button>
								</div>
						  
								<Transition
								  as={Fragment}
								  enter="transition ease-out duration-100"
								  enterFrom="transform opacity-0 scale-95"
								  enterTo="transform opacity-100 scale-100"
								  leave="transition ease-in duration-75"
								  leaveFrom="transform opacity-100 scale-100"
								  leaveTo="transform opacity-0 scale-95"
								>
								  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
									<div className="py-1">
									  <Menu.Item>
										{({ active }) => (
										  // eslint-disable-next-line @next/next/no-html-link-for-pages
										  <a
											href="/diariess"
											className={classNames(
											  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
											  'block px-4 py-2 text-sm'
											)}
										  >
											Diaries
										  </a>
										)}
									  </Menu.Item>
									  <Menu.Item>
										{({ active }) => (
										  // eslint-disable-next-line @next/next/no-html-link-for-pages
										  <a
											href="/Cup"
											className={classNames(
											  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
											  'block px-4 py-2 text-sm'
											)}
										  >
											Cup
										  </a>
										)}
									  </Menu.Item>
									  <Menu.Item>
										{({ active }) => (
										  // eslint-disable-next-line @next/next/no-html-link-for-pages
										  <a
											href="/bottles"
											className={classNames(
											  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
											  'block px-4 py-2 text-sm'
											)}
										  >
											Bottles
										  </a>
										)}
									  </Menu.Item>
									  <form method="POST" action="#">
										<Menu.Item>
										  {({ active }) => (
											<button
											  type="submit"
											  className={classNames(
												active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
												'block w-full text-left px-4 py-2 text-sm'
											  )}
											>
											  Comming soon...
											</button>
										  )}
										</Menu.Item>
									  </form>
									</div>
								  </Menu.Items>
								</Transition>
							  </Menu>
							)			  

				<Links  href='/Fillform'><a className='bordernavrest cursor-pointer hover:bg-blue-600 text-black hover:text-white block text-center py-2 rounded-md text-base font-medium'> Fillform</a></Links>

								<Link
									href="/contact"
									activeClass=""
									to="contactus"
									smooth={true}
									offset={50}
									duration={500}
									className=" cursor-pointer hover:bg-blue-600  text-black hover:text-white block text-center py-2 rounded-md text-base font-medium  bordernavrest"
								>
									Contact
								</Link>

							</div>
						</div>
						
					)}
				</Transition>

				
			</nav>

		
    <div className="txtnavy effect6  bgour3 pt-14" id='home'>
        <div className="container  mx-auto flex  pt-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <p className="text-xl font-semibold    bodyfont9  textour6 mr-4 tracking-wider  "> <span className='font-semibold'> Make Every Happiness Possible With Deepika Prints ,</span>  Join us to get the benefits of our awesome packages and the best Client .  </p>
      <a href='https://www.indiamart.com/deepika-prints-delhi/profile.html'>
	  <button className="bg-navy btn4 hover:bg-blue-200 text-white font-bold py-2 ml-8 mt-9 bigscreenb px-8 rounded-md">
  EXPLORE
</button></a>  
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6   ">
        <img className="object-cover position3  object-center rounded-3xl mb-7 " alt="hero" src="ast.png"
        />
      </div>

    </div>
	

  <a href='https://www.indiamart.com/deepika-prints-delhi/profile.html'><button className='bg-navy text-white hover:bg-blue-200 font-normal space-x-3 px-9 py-2 smallscreenb rounded-md btn9'>EXPLORE</button></a>  
    </div> 
    <h1 className='text-center font-bold pt-10 text-3xl txtnavy decoration-violet-600  '>OUR SPECIALIZATION</h1>

    <div className='  text-gray-900 py-14  grid lg:grid-cols-4 text-center pl-12  ' id='ourspecialization' >
  
    <div className='font-semibold py-5  fontour3'>
    <div className='flex justify-center'>
    <img src='https://static.thenounproject.com/png/2724353-200.png' className=' prour pb-4 h-16  '/>
    </div>
    <h1 className='text-3xl pr-5 txtnavy'>Corporate Giftings </h1>  <br></br> <p className='font-extralight pr-20 '> A Gift To Build Relations
    </p><br></br>
    </div>
    <div className='font-semibold py-5  fontour3'>
    <div className='flex justify-center'>
    <img src='https://static.thenounproject.com/png/2724353-200.png' className=' prour pb-4 h-16  '/>
    </div>
    <h1 className='text-3xl pr-8  txtnavy'>Customized Gifts </h1>  <br></br> <p className='font-extralight pr-20  '> Gift for your loved ones
    </p><br></br>
    </div>
    <div className='font-semibold py-5  fontour3'>
    <div className='flex justify-center '>
    <img src='https://static.thenounproject.com/png/2724353-200.png' className=' prour pb-4 h-16  '/>
    </div>
    <h1 className='text-3xl txtnavy  pr-5'>Event Management </h1>  <br></br> <p className='font-extralight pr-20 '> One Place Event Solution
    </p><br></br>
    </div>
    <div className='font-semibold py-5  fontour3'>
    <div className='flex justify-center '>
    <img src='https://static.thenounproject.com/png/2724353-200.png' className=' prour pb-4 h-16  '/>
    </div>
    <h1 className='text-3xl pr-24 txtnavy  '>Supply Chain </h1>  <br></br> <p className='font-extralight prour8 '> Deliver Anywhere</p><br></br>
    </div>
    </div> 
	<Frontpaged/>

      <div className=' text bg-navy text-white  effect6  grid lg:grid-cols-4 text-center '>
      <div className='font-semibold text-white py-5 text-2xl '>
      120+ <br></br> Projects <br></br>
      Completed
      </div>
        <div className='font-semibold  text-2xl py-5 '>
        100+ <br></br>Happy<br></br>
        Clients
        </div>
        <div className='font-semibold text-2xl py-5 '>
        50+ <br></br> Awards <br></br>
        Recieved
        </div>
        <div className='font-semibold text-2xl py-5 '>
        99+ <br></br> Cups Of <br></br>
        Coffee
        </div>
        </div>
      <Testimonials/>

     </div>
  
  )
  
}
export default Home;