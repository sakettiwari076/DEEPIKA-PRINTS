import React from 'react'

const pendrives = () => {
  return (
    <div>
   
    <h1 className='text-center text-4xl py-7 text-blue-900 font-bold'> Pendrives</h1>
    <a href='../'>
    <img src='back1.png' className=' arrow h-52'/>
        </a>

    <div className='mt-8 md:grid-cols-4 grid lg:grid-cols-4 px-7 gap-10 '>
    <div className='card rounded-2xl effectback'>
    <img src='pendrive1.jpeg' alt=' ' className='w-full imghgt  object-cover' /> 
    <div className='m-4'>
    <span className='font-bold'>Pendrive No 1 </span>
    <span className='block text-gray-500 text-sm '>ⓒ Deepika Prints</span>
    </div>
    <div className='badge '>
    </div>
    </div>
    <div className='card rounded-2xl effectback'>
    <img src='pendrive2.jpeg' alt=' ' className='w-full imghgt  object-cover' /> 
    <div className='m-4'>
    <span className='font-bold'>Pendrive No 2 </span>
    <span className='block text-gray-500 text-sm '>ⓒ Deepika Prints</span>
    </div>
    <div className='badge'>
    </div>
    </div>
    <div className='card rounded-2xl effectback'>
    <img src='pendrive3.jpeg' alt=' ' className='w-full imghgt   object-cover' /> 
    <div className='m-4'>
    <span className='font-bold'>Pendrive No 3 </span>
    <span className='block text-gray-500 text-sm '>ⓒ Deepika Prints</span>
    </div>
    <div className='badge'>
   
    </div>
    </div>
    <div className='card rounded-2xl effectback'>
    <img src='pendrive4.jpeg' alt=' ' className='w-full imghgt   object-cover' /> 
    <div className='m-4'>
    <span className='font-bold'> Pendrivep No 4</span>
    <span className='block text-gray-500 text-sm '>ⓒ Deepika Prints</span>
    </div>
    <div className='badge'>
    </div>
    
    
    </div>
   
    </div>
   
    
    </div>
  )
}

export default pendrives