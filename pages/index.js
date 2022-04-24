import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../Subcomponents/Navbar'
export default function Home() {
  return (
    <div className=' '>
    <div className="text-gray-600 body-font">
    <div className="container mx-auto flex  py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 fontour pt-4 text-gray-900">Before they sold out,
          
        </h1>
        <p className="text-4xl text-black fontour  ">Make Every Happiness Possible With Deepika Prints.</p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-5">KNOW MORE</button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded-3xl" alt="hero" src="https://img.freepik.com/free-vector/document-signing-partnership-deal-business-consultation-work-arrangement-client-assistant-writing-contract-cartoon-characters-vector-isolated-concept-metaphor-illustration_335657-2761.jpg?w=740"/>
      </div>
    </div>
    </div>  
    <div className=' bgour text-gray-900 py-28 mt-8 grid lg:grid-cols-4 text-center '>
    <div className='font-semibold text-4xl fontour3'>
        100+ <br></br> CLIENTS
        </div>
        <div className='font-semibold text-4xl fontour3'>
        100+ <br></br> CLIENTS
        </div>
        <div className='font-semibold text-4xl fontour3'>
        100+ <br></br> CLIENTS
        </div>
        <div className='font-semibold text-4xl fontour3'>
        100+ <br></br> CLIENTS
        </div>
   
   
        </div>
     <div className=' bgour text-gray-900 py-28 mt-8 grid lg:grid-cols-4 text-center '>
 <div className='font-semibold text-4xl fontour3'>
     100+ <br></br> CLIENTS
     </div>
     <div className='font-semibold text-4xl fontour3'>
     100+ <br></br> CLIENTS
     </div>
     <div className='font-semibold text-4xl fontour3'>
     100+ <br></br> CLIENTS
     </div>
     <div className='font-semibold text-4xl fontour3'>
     100+ <br></br> CLIENTS
     </div>


     </div>
     </div>
  
  )
}
