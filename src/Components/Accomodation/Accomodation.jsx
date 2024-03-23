import React from 'react'
import AccChild from '../AccChild/AccChild'
import BillDisplay from '../Bill/BillDisplay'
function Accomodation() {
  return (
    <div>
        <div>
            <BillDisplay/>
        </div>
      
        <div className='flex '>
        <a className='mx-2' href='/Home'><img className='w-9' src="https://static.vecteezy.com/system/resources/thumbnails/000/589/654/small/40_436.jpg" alt=''/></a>
        <div><h1 className='text-xl font-bold'>Accomodation</h1></div>
        </div>
        <AccChild/>
    </div>
  )
}

export default Accomodation
