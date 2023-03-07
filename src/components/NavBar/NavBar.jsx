import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const NavBar = () => {
  
  const [open, setOpen] = useState(false)

  return (
    <div className='shadow-md w-full fixed top-0 left-0 '>
      <div className='md:flex items-center justify-center bg-gray-200 py-4 md:px-15 px-7'>
      <div className='flex '>  
         <img className='w-9 flex ' src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" alt="" /> <h1 className='px-10 text-[25px]  text-gray-700'><a href="/">iPhoneShop</a></h1>
      </div>

      <div onClick={() => setOpen (!open)} className='text-3xl text-blue-500 absolute right-8 top-5 cursor-pointer md:hidden '>      
        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
      </div>

      <div className= ' relative'>
        <div className={`menu  flex gap-5  max-auto px-20 justify-center text-2xl md:pb-0 
         pb-3 absolute md:static bg-gray-200 rounded-lg md:z-auto z-[-1] left-0
         w-full md:w-auto md:pl-0 pl-20 
         transition-all duration-500 easy-in ${ open ?  'top-4 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0 ` }>
        <Link className='text-xl text-gray-400 hover:text-blue-600 transition-all' to='/'>Home</Link>
        <Link className='text-xl text-gray-400 hover:text-blue-600 transition-all' to='/phones'>Phones</Link>
        <Link className='text-xl text-gray-400 hover:text-blue-600 transition-all' to='/ipads'>Ipads</Link>
        <Link className='text-xl text-gray-400 hover:text-blue-600 transition-all' to='/imacs'>Imacs</Link>
        <Link className='text-xl text-gray-400 hover:text-blue-600 transition-all' to='/contact'>Contact</Link>

        </div>
      </div>
      </div>
    </div>
  )
}

export default NavBar