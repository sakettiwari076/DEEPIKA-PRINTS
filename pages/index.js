import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '../public/frontpage.png'
import '../public/bat.png'
import Testimonials from '../Comp/Testimonail'
import { Link } from "react-scroll";
import React, { useState, useRef } from "react";
import Links from 'next/link'
import Script from 'next/script'
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
					<div className="flex bg-navy   text-white items-center h-20 w-full">
						<div className="flex items-center  mx-20  justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
							<img src='logo.jpeg ' className='w-14 logo rounded-full '/>
				
								<h1 className=" font-extralight text-xl deepikaprints text-white cursor-pointer">
								DEEPIKA<span className="text-white ">PRINTS</span>
								</h1>
							    </div>
							    <div className="hidden  md:block ">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link
										activeClass=""
										to="home"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-blue-600 text-white hover:text-white lg:text-xl px-3 py-2 rounded-md  text-sm font-normal"
									>
										Home
									</Link>
									<Link
									activeClass=""
									to="aboutus"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 lg:text-xl text-white hover:text-white px-3 py-2 rounded-md text-sm font-normal"
								  >
									About us
								  </Link>
								
									<Menu as="div" className="  relative inline-block text-left">
									<div >
										<Menu.Button className=" buttoncss inline-flex justify-center w-full lg:text-xl rounded-md  shadow-sm px-4 py-2  text-sm font-normal text-black hover:bg-blue-600 ">
										Products
										<ChevronDownIcon className="" aria-hidden="true" />
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
												href="/myPen"
												className={classNames(
												  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
												  'block px-4 py-2 text-sm'
												)}
											  >
												Pens
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
												Mugs
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
										  </Menu.Item>									  <Menu.Item>
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
											href="/tshirt"
											className={classNames(
											  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
											  'block px-4 py-2 text-sm'
											)}
										  >
											Tshirt
										  </a>
										)}
									  </Menu.Item>
									  <Menu.Item>
									  {({ active }) => (
										// eslint-disable-next-line @next/next/no-html-link-for-pages
										<a
										  href="/pendrives"
										  className={classNames(
											active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
											'block px-4 py-2 text-sm'
										  )}
										>
										   Pendrives
										</a>
									  )}
									</Menu.Item>
									<Menu.Item>
									{({ active }) => (
									  // eslint-disable-next-line @next/next/no-html-link-for-pages
									  <a
										href="/jutebags"
										className={classNames(
										  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										  'block px-4 py-2 text-sm'
										)}
									  >
										Jutebags
									  </a>
									)}
								  </Menu.Item>
								  <Menu.Item>
								  {({ active }) => (
									// eslint-disable-next-line @next/next/no-html-link-for-pages
									<a
									  href="/laptopbags"
									  className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block px-4 py-2 text-sm'
									  )}
									>
									  Laptop Bags
									</a>
								  )}
								</Menu.Item>
								<Menu.Item>
								{({ active }) => (
								  // eslint-disable-next-line @next/next/no-html-link-for-pages
								  <a
									href="/chocolates"
									className={classNames(
									  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
									  'block px-4 py-2 text-sm'
									)}
								  >
									Chocolates
								  </a>
								)}
							  </Menu.Item>
							  <Menu.Item>
							{({ active }) => (
							  // eslint-disable-next-line @next/next/no-html-link-for-pages
							  <a
								href="/corrugatedboxes"
								className={classNames(
								  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
								  'block px-4 py-2 text-sm'
								)}
							  >
								Corrugated Boxes
							  </a>
							)}
						  </Menu.Item>
								<Menu.Item>
								{({ active }) => (
								  // eslint-disable-next-line @next/next/no-html-link-for-pages
								  <a
									href="/scentedcandles"
									className={classNames(
									  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
									  'block px-4 py-2 text-sm'
									)}
								  >
									Scented candles
								  </a>
								)}
							  </Menu.Item>
							  <Menu.Item>
							  {({ active }) => (
								// eslint-disable-next-line @next/next/no-html-link-for-pages
								<a
								  href="/key"
								  className={classNames(
									active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
									'block px-4 py-2 text-sm'
								  )}
								>
								  Keys
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

												</button>
											  )}
											</Menu.Item>
										  </form>
										</div>
									  </Menu.Items>
									</Transition>
								  </Menu>
										  

									<Link
										activeClass=""
										to="testimonials"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer lg:text-xl hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-normal"
									>
										Testimonials
									</Link>

                                 

									<Link
										activeClass=""
										to="contactus"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer lg:text-xl bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-normal hover:bg-black"
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
									className="bg-navy inline-flex items-center justify-center p-2 rounded-md text-white lg:text-2xl    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
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
									className="cursor-pointer hover:bg-blue-600  text-black hover:text-white block text-center py-2 rounded-md text-base font-medium bordernavrest"
								>
									Home

									
								</Link>
								<Link
								href="/services"
								activeClass="services"
								to="aboutus"
								smooth={true}
								offset={50}
								duration={500}
								className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block text-center py-2 rounded-md text-base font-medium bordernavrest"
							>
								About
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
									Testimonials
								</Link>

								<div className='flex justify-center bordernavrest font-medium text-black'>
								<Menu as="div" className="relative inline-block  text-left">
								<div className='' >
									<Menu.Button className=" inline-flex justify-center w-full   px-2 py-2 text-black text-sm font-medium ">
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
											href="/myPen"
											className={classNames(
											  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
											  'block px-4 py-2 text-sm'
											)}
										  >
											Pens
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
											Mugs
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
										href="/tshirt"
										className={classNames(
										  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										  'block px-4 py-2 text-sm'
										)}
									  >
										Tshirt
									  </a>
									)}
								  </Menu.Item>
								  <Menu.Item>
								  {({ active }) => (
									// eslint-disable-next-line @next/next/no-html-link-for-pages
									<a
									  href="/pendrives"
									  className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block px-4 py-2 text-sm'
									  )}
									>
									   Pendrives
									</a>
								  )}
								</Menu.Item>
								<Menu.Item>
								{({ active }) => (
								  // eslint-disable-next-line @next/next/no-html-link-for-pages
								  <a
									href="/jutebags"
									className={classNames(
									  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
									  'block px-4 py-2 text-sm'
									)}
								  >
									Jutebags
								  </a>
								)}
							  </Menu.Item>
							  <Menu.Item>
							  {({ active }) => (
								// eslint-disable-next-line @next/next/no-html-link-for-pages
								<a
								  href="/laptopbags"
								  className={classNames(
									active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
									'block px-4 py-2 text-sm'
								  )}
								>
								  Laptop Bags
								</a>
							  )}
							</Menu.Item>
							<Menu.Item>
							{({ active }) => (
							  // eslint-disable-next-line @next/next/no-html-link-for-pages
							  <a
								href="/corrugatedboxes"
								className={classNames(
								  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
								  'block px-4 py-2 text-sm'
								)}
							  >
								Corrugated Boxes
							  </a>
							)}
						  </Menu.Item>
							<Menu.Item>
							  {({ active }) => (
								// eslint-disable-next-line @next/next/no-html-link-for-pages
								<a
								  href="/chocolates"
								  className={classNames(
									active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
									'block px-4 py-2 text-sm'
								  )}
								>
								  Chocolates
								</a>
							  )}
							</Menu.Item>
							<Menu.Item>
							{({ active }) => (
							  // eslint-disable-next-line @next/next/no-html-link-for-pages
							  <a
								href="/scentedcandles"
								className={classNames(
								  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
								  'block px-4 py-2 text-sm'
								)}
							  >
								Scented candles
							  </a>
							)}
						  </Menu.Item>
						  <Menu.Item>
						  {({ active }) => (
							// eslint-disable-next-line @next/next/no-html-link-for-pages
							<a
							  href="/key"
							  className={classNames(
								active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
								'block px-4 py-2 text-sm'
							  )}
							>
							  Keys
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

											</button>
										  )}
										</Menu.Item>
									  </form>
									</div>
								  </Menu.Items>
								</Transition>
							  </Menu>
							  </div>
								  

			

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

		 
			<div className="txtnavy effect6 pt-14 lg:pt-28 bgour3 " id='home'>

			<section className="text-gray-600 body-font">
		  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
			<div className="lg:flex-grow lg:ml-28 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
			  <h1 className="title-font md:text-5xl  font-bold  text-5xl fontpop mb-4   text-gray-900">Before they <span className='colorfront'>sold out</span> 
				<br></br> <div  className="hidden  lg:inline-block">Book your order </div>
			  </h1>
			  <p className="mb-8 leading-relaxed">We are delivering 11 varities of products which includes Diaries, Pens, Keychaining, Personalized Pendrives, Bottles, T-shirt, Laptop bags, Jute bags, Scented candles, chocolates(Handmade), Mugs, Corrugated Boxes. </p>
			  <div className="flex justify-center">
				<button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Explore</button>
				<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
			  </div>
			</div>
			<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			  <img className="object-cover object-center rounded" alt="hero" src="man.png"/>
			</div>
		  </div>
		</section>
			
			
		  

      
    
    
	
<div className='' id='aboutus' > </div>
    </div>
    <h1 className='text-center font-semibold pt-10 lg:text-4xl text-3xl txtnavy decoration-violet-600  '>ABOUT US</h1>

    <div className='  text-gray-900 py-8  grid lg:grid-cols-1 text-center px-8  ' id='' >
  
    <div className=' py-5 grid lg:grid-cols-2  fontour3'>
	<img src='contactus.png' className=''/>
    <div className='flex justify-center'>
	<p className='text-justify lg:text-2xl   lg:px-32 lg:pt-14  lg:leading-8  lg:font-medium text-gray-900'>We deals in 12 category of products for personalized giftings with very good percentage of repeated orders .
	Our products includes Diaries , Pens , Keychaining , Personalized Pendrives , Bottles, T-shirt , Laptop bags , Jute bags , Scented candles , chocolates(Handmade) , Mugs , Corrugated Boxes . 
	</p>
    </div>
    </div>
    </div> 
      <div className=' text bg-navy text-white  effect6 lg:py-14 lg:text-3xl grid lg:grid-cols-3 text-center '>
      <div className='font-semibold text-white py-6  text-2xl '>
      Catered to <br></br> 70+ corporates <br></br>
      
      </div>
        <div className='font-semibold  text-2xl py-6 '>
        Delivered to <br></br>5000+ end users<br></br>
        </div>
        <div className='font-semibold text-2xl py-6 ' id='testimonials'>
        Repeated orders<br></br> ~70% <br></br>

        </div>

        </div>
      <Testimonials/>
	  </div>

  
  )
  
}
export default Home;