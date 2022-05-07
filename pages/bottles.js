import React from 'react'
import Link from 'react-scroll/modules/components/Link'
import Image from 'next'
import "../public/b1.jpeg" 
import "../public/b2.jpeg" 
import "../public/b3.jpeg" 
import "../public/b4.jpeg" 
import "../public/b5.jpeg" 
import "../public/b6.jpeg" 
import "../public/b7.jpeg" 
import "../public/b8.jpeg" 
import "../public/b9.jpeg" 
import "../public/b10.jpeg" 
import "../public/b11.jpeg" 
import "../public/b12.jpeg" 



const product = () => {
 
  return (
    <div>
    
    <h1 className='text-center py-3 text-3xl txtnavy font-bold'>Bottles</h1>
       <a href='../'>
    <img src='https://www.kindpng.com/picc/m/78-780481_inside-page-left-back-button-back-button-png.png' className=' arrow '/>
    </a>
<div className='mt-8 grid lg:grid-cols-3 py-4 px-4'>

<div className='py-3'>

<img src= "b1.jpeg" />


</div>
<div className='py-3'>

<img src= "b2.jpeg" />


</div>
<div className='py-3'>

<img src= "b3.jpeg" />


</div>
<div className='py-3'>

<img src= "b4.jpeg" />


</div>
<div className='py-3'>

<img src= "b5.jpeg" />


</div>
<div className='py-3'>

<img src= "b6.jpeg" />


</div>
<div className='py-3'>

<img src= "b7.jpeg" />


</div>
<div className='py-3'>

<img src= "b8.jpeg" />


</div>
<div className='py-3'>

<img src= "b9.jpeg" />


</div>
<div className='py-3'>

<img src= "b10.jpeg" />


</div>
<div className='py-3'>

<img src= "b11.jpeg" />


</div>
<div className='py-3'>

<img src= "b12.jpeg" />


</div>

<div className='py-3 flex justify-center mt-28'>

<a href='' className='text-blue-400 underline font-bold text-2xl' >MORE</a>

</div>

</div>
</div>

  )
}

export default product