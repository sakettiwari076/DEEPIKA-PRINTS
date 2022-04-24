import '../styles/globals.css'
import '../Subcomponents/my.css'
import '../public/fb.png'
function MyApp({ Component, pageProps }) {
  return(
    <div>
    
    <header className="text-black body-font py-5  effect6 bgour5">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       
        <span class="ml-3 text-xl font-semibold text-white fontlogo ">DEEPIKA PRINTS</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap space-x-6 font-medium text-lg font- items-center navtxt justify-center">
        <a href="#contactus" className="cursor-pointer mr-5 hover:text-gray-900">Products</a>
        <a className="mr-5 cursor-pointer hover:text-gray-900">Packages</a>
        <a className="mr-5 cursor-pointer hover:text-gray-900">About us</a>
        <a className="mr-5 cursor-pointer hover:text-gray-900">Contact us</a>
      </nav>
      <button className="  text-black inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">BACK
      </button>
    </div>
  </header>
  
  <Component {...pageProps} />

  <div className='  text-center	text-4xl font-mono py-6 ' >

  <h1 className='' id='contactus'>Contact Us</h1>
  </div>
  <div className="text-gray-600  text-2xl body-font relative">
<div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
  <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe>
    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
      <div className="lg:w-1/2 px-6">
        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
        <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
      </div>
      <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
        <a className="text-indigo-500 leading-relaxed">example@email.com</a>
        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
        <p className="leading-relaxed">123-456-7890</p>
      </div>
    </div>
  </div>
  <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
    <p className="leading-relaxed mb-5 text-gray-600">Please enter your valuable feedbacks here!</p>
    <div className="relative mb-4">
      <label for="name" class="leading-7 text-lg font-mono text-gray-600">Name</label>
      <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
    </div>
    <div class="relative mb-4">
      <label for="email" class="leading-7 text-lg font-mono text-gray-600">Email</label>
      <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
    </div>
    <div className="relative mb-4">
      <label for="message" class="leading-7 text-lg font-mono text-gray-600">Message</label>
      <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
    </div>
    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Share</button>
    <p className="text-xs text-gray-500 mt-3">Best wishes from Deepika Prints</p>
  </div>
</div>
</div>
  <div className='footer grid lg:grid-cols-3  text-center bgour6 py-36'>
<div className='font-semibold text-2xl text-white '>DEEPIKA PRINTS <br></br>ESTD : </div>
<div className=''></div>

<div className='flex space-x-8 text-white'>
<h1 className='font-semibold pt-2 sm:pl-10'>FOLLOW US</h1>
<img src='fb.png' className='' />
<img src='fb.png' className='' />
<img src='fb.png' className='' />
</div>

 

<div className=''>2nd</div>
  </div>
  
  <p className=' bgour6 text-xl text-white text-center
  '>© 2021-22 Priyanka Press. All Rights Reserved.</p>
  </div>
 
  )
}

export default MyApp
