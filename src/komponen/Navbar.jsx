import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div>
      <div className='bg-gray-900 text-gray-400 h-[100px] max-w-full mx-auto flex justify-between items-center'>

        <h1 className='text-2x1 font-bold primary-color white-color ml-4'>NIA NUR HIDAYATURROHMAH</h1>
        <ul className='hidden md:flex'>
            <li className='p-5'><a href='#home'>Home</a></li>
            <li className='p-5'><a href='#about'>About</a></li>
            <li className='p-5'><a href='#work'>Projects</a></li>
            <li className='p-5'><a href='#contact'>Contact</a></li>
        </ul>

        <div onClick={handleNav} className='block md:hidden mr-6'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#5a0e3e] ease-in-out duration-500' 
                                : 'fixed left-[-100%]'}>
            <h1 className='text-3x1 text-gray-400 m-4'>NIA NUR H.</h1>
            <ul className='p-8 text-2x1'>
                <li className='p-2'><a href='#home'>Home</a></li>
                <li className='p-2'><a href='#about'>About</a></li>
                <li className='p-2'><a href='#work'>Projects</a></li>
                <li className='p-2'><a href='#contact'>Contact</a></li>
            </ul>
        </div>  

      </div>
    </div>
  )
}

export default Navbar
