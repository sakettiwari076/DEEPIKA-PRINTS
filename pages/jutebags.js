import React from 'react'

const jutebags = () => {
  return (
    <div>
   
    <h1 className='text-center text-4xl py-7 text-blue-900 font-bold'>Jute bags</h1>
    <a href='../'>
    <img src='back1.png' className=' arrow '/>
        </a>

    <div className='mt-8  grid lg:grid-cols-3 px-7 gap-10 '>
    <div className='card rounded-2xl effectback'>
    <img src='Jute1.jpeg' alt=' ' className='w-full imghgt  object-cover' /> 
    <div className='m-4'>
    <span className='font-bold'>JuteBag No 1 </span>
    <span className='block text-gray-500 text-sm '>ⓒ Deepika Prints</span>
    </div>
    <div className='badge '>
    </div>
    </div>
    <div className='card rounded-2xl effectback'>
    <img src='jute2.jpeg' alt=' ' className='w-full imghgt  object-cover' /> 
    <div className='m-4'>
    <span className='font-bold'>JuteBag No 2 </span>
    <span className='block text-gray-500 text-sm '>ⓒ Deepika Prints</span>
    </div>
    <div className='badge'>
    </div>
    </div>
    <div className='card rounded-2xl effectback'>
    <img src='jute3.jpeg' alt=' ' className='w-full imghgt   object-cover' /> 
    <div className='m-4'>
    <span className='font-bold'>JuteBag No 3 </span>
    <span className='block text-gray-500 text-sm '>ⓒ Deepika Prints</span>
    </div>
    <div className='badge'>
   
    </div>
    </div>
    <div className='card rounded-2xl effectback'>
    <img src='jute4.jpeg' alt=' ' className='w-full imghgt   object-cover' /> 
    <div className='m-4'>
    <span className='font-bold'> JuteBag No 4</span>
    <span className='block text-gray-500 text-sm '>ⓒ Deepika Prints</span>
    </div>
    <div className='badge'>
    </div>
    
</div>
    
    </div>
</div>
  )
}

export default jutebags