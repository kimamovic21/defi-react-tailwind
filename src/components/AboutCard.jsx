import React from 'react';
import {
    SiHiveBlockchain,
    SiStrapi,
    SiFsecure
} from 'react-icons/si';
import {VscServerProcess} from 'react-icons/vsc';

const AboutCard = (props) => {
  return (
    <div className='flex flex-col border rounded-2xl
           py-12 px-8'>

       <div>
          <div className='bg-[#00d8ff] inline-block
               p-2 rounded-full'>
            {props.icon}
          </div>
         <h3 className='text-xl font-bold py-3'>
             {props.heading}</h3>
         <p>{props.text}</p>
      </div>

   </div>
  )
}

export default AboutCard;