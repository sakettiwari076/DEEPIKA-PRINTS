import '../styles/globals.css'
import '../public/fb.png'
function MyApp({ Component, pageProps }) {
  return(
    // NAVBAR 
    <div>
    
    <header className="text-black body-font py-5  effect6 bgour5">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       
        <span className="ml-3 text-xl font-semibold text-white fontlogo ">DEEPIKA PRINTS</span>
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



  <div className='  font-bold bgtest mt-12 text-red-600 text-center py-12 text-4xl' >
  <h1 className='' id='contactus'>CONTACT US</h1>
  </div>
  <div className="text-gray-600 bgtest  text-2xl body-font relative">
<div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
  <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe>
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
    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Share</button>
    <p className="text-xs text-gray-500 mt-3">Best wishes from Deepika Prints</p>
  </div>
  
</div>

</div>
  <div className='footer grid lg:grid-cols-3  text-center bgour6 py-36'>
<div className='font-semibold text-2xl text-white '>DEEPIKA PRINTS <br></br>ESTD : </div>
<div className=''></div>



 

<div className=''>2nd</div>
  </div>
  
  
  <p className=' bgour6 text-xl text-white text-center
  '>© 2021-22 Priyanka Press. All Rights Reserved.</p>
  <div className="w-full bgour6   text-center">
          <a className="text-indigo-500">example@email.com</a>
          <p className="leading-normal my-5">49 Smith St.
            <br></br>Saint Cloud, MN 56301
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
      </div>
  )
}

export default MyApp
