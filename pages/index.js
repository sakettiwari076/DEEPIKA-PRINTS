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

        <p className="text-xl text-black fontour textour6 mr-4  "><b>Make Every Happiness Possible With Deepika Prints , Join us to get the benefits of our awesome packages and the best </b> <span className='text-red-600 font-extrabold'>Client experience.</span>  </p>
        
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  ">
        <img className="object-cover  object-center rounded-3xl mb-7 " alt="hero" src="contact.png"
        />
      </div>
      
    </div>
    
    <button className='bg-blue-500 text-white font-semibold px-9 py-2 rounded-md btn9'>Share</button>


   
    </div> 
    <h1 className='text-center font-bold pt-10 text-3xl text-red-600 decoration-violet-600  '>OUR SPECIALIZATION</h1>

    <div className='  text-gray-900 py-28  grid lg:grid-cols-4 text-center pl-12'>
  
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
    <h1 className='text-3xl pr-8 '>Customized Gifts </h1>  <br></br> <p className='font-extralight pr-20 '> Gift for your loved ones
    </p><br></br>
    </div>
    <div className='font-semibold py-5  fontour3'>
    <div className='flex justify-center'>
    <img src='https://static.thenounproject.com/png/2724353-200.png' className=' prour pb-4 h-16  '/>
    </div>
    <h1 className='text-3xl  '>Event Management </h1>  <br></br> <p className='font-extralight pr-20 '> One Place Event Solution
    </p><br></br>
    </div>
    <div className='font-semibold py-5  fontour3'>
    <div className='flex justify-center '>
    <img src='https://static.thenounproject.com/png/2724353-200.png' className=' prour pb-4 h-16  '/>
    </div>
    <h1 className='text-3xl pr-20  '>Supply Chain </h1>  <br></br> <p className='font-extralight prour8 '> Deliver Anywhere</p><br></br>
    </div>
    </div> 
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
