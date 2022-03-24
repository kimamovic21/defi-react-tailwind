import React, {useState} from 'react';
import {
    AiOutlineMenu,
    AiOutlineClose
} from 'react-icons/ai';

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
      setNav(!nav)
  }

  return (
    <div className='w-full h-[80px] bg-[rgba(0,0,0,.5)] fixed'>

       <div className='max-w-[1240px] mx-auto px-4 
            flex justify-between items-center h-full'>

         <div>
             <h1 className='text-[#00d8ff]'>Defi</h1>
        </div>

         <div className='hidden md:flex'>
             <ul className='flex text-[#fff] items-center'>
                 <li>Platforms</li>
                 <li>Developers</li>
                 <li>Community</li>
                 <li>About</li>
                 <button className='ml-4'>Use Defi</button>
             </ul>
         </div>


         {/* Hamburger menu */}

         <div onClick={handleNav}
              className='block text-white md:hidden cursor-pointer'>
              {nav ? (<AiOutlineClose size={30}/>) : (<AiOutlineMenu size={30}/>)}
         </div>


        {/* Mobile menu */}

         <div className={nav ? 'w-full bg-[#000] text-[#fff] absolute top-[90px] left-0 flex justify-center text-center md:hidden' :
            'absolute left-[-100%]'}>
             <ul>
                 <li className='text-xl'>Platforms</li>
                 <li className='text-xl'>Developers</li>
                 <li className='text-xl'>Community</li>
                 <li className='text-xl'>About</li>
                 <button className='m-8'>Use Defi</button>
             </ul>
         </div>

       </div>

    </div>
  )
}

export default Navbar;