import React from 'react';
import {
    SiHiveBlockchain,
    SiStrapi,
    SiFsecure
} from 'react-icons/si';
import {VscServerProcess} from 'react-icons/vsc';
import AboutCard from './AboutCard';

const About = () => {
  return (
    <div className='w-full  bg-[#070505]'>

        
      <div className='max-w-[1240px] mx-auto
         px-4 py-16 text-[#fff]'>

          <div className='text-center'>
            <h1 className='py-4'>
                A growing protocol ecosystem.</h1>
            <p className='py-4 text-xl'>The Defi protocol system empowers developers, liquidity providers and traders
                to participate in financial marketplace that is opet and accessible to all.
            </p>
          </div>


          {/* Card container */}

          <div className='grid gap-2 grid-cols-1
               md:grid-cols-2 lg:grid-cols-4 text-left'>
             
              {/* Cards */}

              <AboutCard
                icon={<SiHiveBlockchain size={30}/>}
                heading='Lorem ipsum dolor sit amet.'
                text='Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Distinctio eligendi voluptas,
                fugiat perferendis dicta impedit 
                cupiditate modi ipsum voluptatibus dolorum!'
              />

            <AboutCard
                icon={<SiStrapi size={30}/>}
                heading='Lorem ipsum dolor sit amet.'
                text='Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Distinctio eligendi voluptas,
                fugiat perferendis dicta impedit 
                cupiditate modi ipsum voluptatibus dolorum!'
            />

            <AboutCard
                icon={<SiFsecure size={30}/>}
                heading='Lorem ipsum dolor sit amet.'
                text='Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Distinctio eligendi voluptas,
                fugiat perferendis dicta impedit 
                cupiditate modi ipsum voluptatibus dolorum!'
            />

            <AboutCard
                icon={<VscServerProcess size={30}/>}
                heading='Lorem ipsum dolor sit amet.'
                text='Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Distinctio eligendi voluptas,
                fugiat perferendis dicta impedit 
                cupiditate modi ipsum voluptatibus dolorum!'
            />
              
          </div>

      </div>
      
    </div>
  )
}

export default About;