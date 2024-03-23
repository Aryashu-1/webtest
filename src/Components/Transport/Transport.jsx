import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext';
import TransportChild from '../TransportChild.js/TransportChild';
import { TransportContext } from '../Context/TransportContext';
import { useEffect } from 'react';
function Transport() {
    let [context,setContext] = useContext(UserContext)
    let [transportContext,setTransportContext] = useContext(TransportContext)
    let data = context;
    let transport;
   
         
    setTransportContext(transport)
    
    console.log(data)
  return (
    <div className=''>
        <div className='flex '>
        <a className='mx-2' href='/Home'><img className='w-9' src="https://static.vecteezy.com/system/resources/thumbnails/000/589/654/small/40_436.jpg" alt=''/></a>
        <div><h1 className='text-xl font-bold'>Select Mode of Transport</h1></div>
        </div>
        <TransportChild/>
{/* {
    transport.map(
        (vehicle,index)=>{
            if(vehicle.destination === data.destination){
              return  <TransportChild data={vehicle}/>
            }
            else{
                return null
            }
        }
    )
} */}

    </div>
  )
}

export default Transport
