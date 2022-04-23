import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../Subcomponents/Navbar'

export default function Home() {
  return (

    <div className=' bgour '>
  
    <div className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 fontour pt-4 text-gray-900">Before they sold out,
          
        </h1>
        <p className="text-4xl text-black fontour  ">Make Every Happiness Possible With Deepika Prints.</p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-5">KNOW MORE</button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src="giveaw.jpg"/>
      </div>
    </div>
  </div>  
<div className='py-24'></div>
  </div>
  
  )
}
