import React from 'react'

const Footer = () => {
  return (
    <div className=' text-black flex '>
        <div className='px-40 flex-col py-10'>
            
                <h1 className='p-3'>CONTACT US</h1>
                <li>shmr123@gmail.com</li>
                <li>Mobile-1 : 7013108450</li>
                <li>Mobile-2 : 8686335240</li>
            
        </div>
        <div className='px-35 flex-col py-10'>
                <h1 className='p-3'>ACTIVITIES</h1>
                <li>SUPPORT</li>
                <li>PROJECTS</li>
                <li>SERVICES</li>
            
        </div>
        <div className='px-40 flex-col py-10'>
            
                <h1 className='p-3'>SOCIAL</h1>
                <li>Git</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
            
        </div>  
    </div>
  )
}

export default Footer