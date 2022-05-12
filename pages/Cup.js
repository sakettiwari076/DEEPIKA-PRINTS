import React from 'react'
import Link from 'react-scroll/modules/components/Link'
import Image from 'next'
import '../public/cup1.jpeg'
import '../public/cup2.jpeg'



const product = () => {
 
  return (
    <div>
    
    <h1 className='text-center py-5 text-3xl txtnavy font-bold'>Diaries</h1>
       <a href='../'>
    <img src='https://www.kindpng.com/picc/m/78-780481_inside-page-left-back-button-back-button-png.png' className=' arrow '/>
    </a>
<div className='mt-8 grid lg:grid-cols-3 py-4 px-4'>

<div className='py-3'>

<img src= "cup1.jpeg" />


</div>
<div className='py-3'>

<img src= "cup2.jpeg" />


</div>


<div className='py-3 flex justify-center mt-28'>

<a href='' className='text-blue-400 underline font-bold text-2xl' >MORE</a>

</div>

</div>
</div>

  )
}

export default product