import React from 'react'

const box = () => {
  return (
    <div>
   
    <h1 className='text-center text-4xl py-7 text-blue-900 font-bold'>Corrugated Boxes</h1>
    <a href='../'>
    <img src='back1.png ' className=' arrow h-52'/>
        </a>

    <div className='mt-8 md:grid-cols-3 grid lg:grid-cols-3 px-7 gap-10 '>
    <div className='card rounded-2xl effectback'>
    <img src='box1.jpeg' alt=' ' className='w-full imghgt  object-cover' /> 
    <div className='m-4'>
    <span className='font-bold'>Box No 1 </span>
    <span className='block text-gray-500 text-sm '>ⓒ Deepika Prints</span>
    </div>
    <div className='badge '>
    </div>
    </div>
    <div className='card rounded-2xl effectback'>
    <img src='box2.jpeg' alt=' ' className='w-full imghgt  object-cover' /> 
    <div className='m-4'>
    <span className='font-bold'>Box No 2 </span>
    <span className='block text-gray-500 text-sm '>ⓒ Deepika Prints</span>
    </div>
    <div className='badge'>
    </div>
    </div>
    <div className='card rounded-2xl effectback'>
    <img src='box3.jpeg' alt=' ' className='w-full imghgt   object-cover' /> 
    <div className='m-4'>
    <span className='font-bold'>Box No 3 </span>
    <span className='block text-gray-500 text-sm '>ⓒ Deepika Prints</span>
    </div>
    <div className='badge'>
   
    </div>
    </div>
    <div className='card rounded-2xl effectback'>
    <img src='box4.jpeg' alt=' ' className='w-full imghgt   object-cover' /> 
    <div className='m-4'>
    <span className='font-bold'> Box No 4</span>
    <span className='block text-gray-500 text-sm '>ⓒ Deepika Prints</span>
    </div>
    <div className='badge'>
    </div>
    
    
    </div>
    <div className='card rounded-2xl effectback'>
    <img src='box5.jpeg' alt=' ' className='w-full imghgt   object-cover' /> 
    <div className='m-4'>
    <span className='font-bold'>BoxNo 5 </span>
    <span className='block text-gray-500 text-sm '>ⓒ Deepika Prints</span>
    </div>
    <div className='badge'>
    </div>
    </div>
   
  
   
    
    </div>
</div>
  )
}

export default box