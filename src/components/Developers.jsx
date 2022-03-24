import React from 'react';
import Terminal from '../assets/terminal.png';

const Developers = () => {
  return (
    <div className='w-full h-screen text-[#fff] bg-[rgb(5,3,3)]'>

        <div className='max-w-[1240px] mx-auto px-4 py-16 sm:flex'>

            {/* Left */}
            <div>
                <h2 className='p-2'>Superpowers for Defi developers</h2>
                <p className='p-2 text-left'>Lorem ipsum <span className='blue'> dolor</span> sit amet consectetur 
                    adipisicing elit. Facere voluptas 
                    aspernatur expedita illum, rerum 
                    sunt! Reiciendis eos asperiores 
                    aspernatur voluptatem!</p>
            </div>

            {/* Right */}
            <div className='flex justify-center w-full p-14'>
                <img className='max-w-[250px] shadow-lg shadow-cyan-500/50'
                     src={Terminal} alt="Terminal img" />
            </div>

        </div>

    </div>
  )
}

export default Developers;