import React from 'react';
import HeroVid from '../assets/video.mp4'

const Hero = () => {
  return (
    <div className='w-full h-screen top-[90px]'>

        <video className='object-cover w-full h-full
               absolute z-[-1]'
               src={HeroVid} autoPlay loop muted />
        
        <div className='w-full h-screen flex flex-col
             justify-center items-center text-[#fff] px-4'>
            <h1>Decentralized</h1>
            <h1 className='py-2'><span className='blue'>Trading </span> 
                protocol</h1>
            <p className='text-xl text-center py-3'>
                Guaranteed liquidity trading for millions of users
                and Ethereum applications.
            </p>

            <div>
                <button className='m-2'>Use Defi</button>
                <button className='m-2'>FAQ</button>
            </div>
        </div>

        <div>
            <p className='text-[#fff] text-center
                text-2xl font-bold'>
                Total volume secured: $12,345,678.90</p>
        </div>

    </div>
  )
}

export default Hero;