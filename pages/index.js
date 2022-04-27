import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '../public/frontpage.png'
import '../public/bat.png'
import Navbar from '../Comp/Navbar'
import Footer from '../Comp/Footer'
import Testimonials from '../Comp/Testimonail'

export default function Home() {
  return (
    <div className=' '>
    <div className="text-gray-600 body-font effect6  bgour3 pt-14">
    <div className="container mx-auto flex  py-24 md:flex-row flex-col items-center">
    
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
       
        <p className="text-3xl text-black fontour textour6   ">Make Every Happiness Possible With Deepika Prints, Join us to get the benefits of our awesome packages and the best client experience.</p>
        <div className="grid  ">
          <button className="inline-flex text-white mt-7   bg-red-600 border-0 py-3 mb-4 rounded-md  px-8  focus:outline-none hover:bg-indigo-600  text-lg ">KNOW MORE</button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  ">
        <img className="object-cover imgour8 object-center rounded-3xl mb-7 " alt="hero" src="contact.png"
        />
      </div>
      
    </div>
    
   
    </div> 
    <h1 className='text-center font-bold pt-12 text-4xl text-red-600 decoration-violet-600  '>OUR SPECIALIZATION</h1>

    <div className='  text-gray-900 py-28  grid lg:grid-cols-4 text-center '>
    <div className='font-semibold py-5 fontour3'>
    <div className='flex justify-center '>
    <img src='bat.png' className='h-12 pr-44 pb-4   '/>
    </div>
    <h1 className='text-3xl font-semibold '>Corporate Giftings </h1>  <br></br> <p className='font-extralight pr-20'> A Gift to Build Relations</p><br></br>
  
    </div>
    <div className='font-semibold  fontour3 py-5'>
    <div className='flex justify-center'>
    <img src='bat.png' className='h-12 pr-44 pb-4  '/>
    </div>
    <h1 className='text-3xl '>Corporate Giftings </h1>  <br></br> <p className='font-extralight pr-20'> A Gift to Build Relations</p><br></br>

    </div>
    <div className='font-semibold py-5  fontour3'>
    <div className='flex justify-center '>
    <img src='bat.png' className='h-12 pr-44 pb-4   '/>
    </div>
    <h1 className='text-3xl '>Corporate Giftings </h1>  <br></br> <p className='font-extralight pr-20'> A Gift to Build Relations</p><br></br>
    </div>
   
    <div className='font-semibold py-5  fontour3'>
    <div className='flex justify-center'>
    <img src='bat.png' className='h-12 pr-44 pb-4  '/>
    </div>
    <h1 className='text-3xl '>Corporate Giftings </h1>  <br></br> <p className='font-extralight pr-20'> A Gift to Build Relations</p><br></br>
    </div>
    </div> 
      <div className=' text-gray-900 py-12 effect6  bgour7 grid lg:grid-cols-4 text-center '>
      <div className='font-semibold py-5 text-3xl fontour3'>
      100+ <br></br> CLIENTS
      </div>
        <div className='font-semibold  text-3xl py-5 fontour3'>
        100+ <br></br> CLIENTS
        </div>
        <div className='font-semibold text-3xl py-5 fontour3'>
        100+ <br></br> CLIENTS
        </div>
        <div className='font-semibold text-3xl py-5 fontour3'>
        100+ <br></br> CLIENTS
        </div>
        </div>
      <Testimonials/>
     </div>
  
  )
}
