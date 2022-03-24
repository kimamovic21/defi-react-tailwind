import React from 'react';

const Subscribe = () => {
  return (
    <div className='w-full px-4 py-15 
        bg-[rgb(8,8,8)] text-[#fff]
        text-center'>
        
        <h1>Join our DeFi community</h1>

        <div className='py-4'>
            <input  className='p-3 rounded-3xl mr-5'
            type="email" 
            placeholder='Enter you email'/>
            <button>Sign up</button>
        </div>

        <div className='flex justify-center items-center'>
            <input className='m-4'
            type="checkbox" />
            <p>Yes, I agree to receive an email from DeFi</p>
        </div>

    </div>
  )
}

export default Subscribe;