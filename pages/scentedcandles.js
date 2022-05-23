import React from 'react'

const candles = () => {
  return (
    <div>
   
    <h1 className='text-center text-4xl py-7 text-blue-900 font-bold'>Scented candles</h1>
    <a href='../'>
    <img src='back1.png' className=' arrow h-52'/>
        </a>

    <div className='mt-8  grid lg:grid-cols-3 px-7 gap-10 '>
    <div className='card rounded-2xl effectback'>
    <img src='candle1.jpeg' alt=' ' className='w-full imghgt  object-cover' /> 
    <div className='m-4'>
    <span className='font-bold'>Candle No 1 </span>
    <span className='block text-gray-500 text-sm '>ⓒ Deepika Prints</span>
    </div>
    <div className='badge '>
    </div>
    </div>
    <div className='card rounded-2xl effectback'>
    <img src='candle2.jpeg' alt=' ' className='w-full imghgt  object-cover' /> 
    <div className='m-4'>
    <span className='font-bold'>Candle No 2 </span>
    <span className='block text-gray-500 text-sm '>ⓒ Deepika Prints</span>
    </div>
    <div className='badge'>
    </div>
    </div>
    <div className='card rounded-2xl effectback'>
    <img src='candle3.jpeg' alt=' ' className='w-full imghgt   object-cover' /> 
    <div className='m-4'>
    <span className='font-bold'>Candle No 3 </span>
    <span className='block text-gray-500 text-sm '>ⓒ Deepika Prints</span>
    </div>
    <div className='badge'>
   
    </div>
    </div>

    </div>
</div>
  )
}

export default candles