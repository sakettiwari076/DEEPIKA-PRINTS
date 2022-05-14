import React from 'react'
import Link from 'react-scroll/modules/components/Link'
import Image from 'next'
import '../public/cup1.jpeg'
import '../public/cup2.jpeg'



const product = () => {
 
  return (
    <div>
    
    <h1 className='text-center py-5 text-3xl txtnavy font-bold'>Mugs</h1>
       <a href='../'>
    <img src='https://www.kindpng.com/picc/m/78-780481_inside-page-left-back-button-back-button-png.png' className=' arrow '/>
    </a>
<div className='mt-8 grid lg:grid-cols-3 py-4 px-4'>

<div className='py-3'>

<img src= "mug1.jpeg" />


</div>
<div className='py-3'>

<img src= "mug2.jpeg" />


</div>
<div className='py-3'>

<img src= "mug3.jpeg" />


</div>
<div className='py-3'>

<img src= "mjug4.jpeg" />


</div>

<div className='py-3'>

<img src= "mug5.jpeg" />


</div>

<div className='py-3'>

<img src= "cup3.jpeg" />


</div>





<div className='py-3 flex justify-center mt-28'>

<a href='' className='text-blue-400 underline font-bold text-2xl' >MORE</a>

</div>

</div>
</div>

  )
}

export default product