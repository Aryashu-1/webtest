import React from 'react'
import Booking from '../Booking/Booking';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Tcc(props) {
    
        let navigate = useNavigate()
        let [modet,setmodet] = useState('')
        // Handle booking based on the mode
        function ToBooking(value){
            setmodet(value)
            if (modet === 'Railways') {
                redirectToBooking('train');
              } else if (modet === 'Cabs') {
                redirectToBooking('cabs');
              } else if (modet === 'Airways') {
                redirectToBooking('flight');
              } else if (modet === 'MiniBus') {
                redirectToBooking('minibus');
              } else if (modet === 'Bus') {
                redirectToBooking('bus');
              } else if (modet === 'Waterways') {
                redirectToBooking('ship');
              }
        }
        const redirectToBooking = (mode) => {
            
            navigate(`/booking/${mode}`);
          };
        
  
          

      
  return (
    <div>
      <div key={props.index} className="w-[300px] rounded-lg overflow-hidden shadow-xl m-2">
                <div className='overflow-hidden object-cover' >
                  <img className="w-full h-40 transform origin-center transition-transform duration-400 object-cover hover:scale-110" src={props.data.url} alt="Your Image" />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{props.data.mode}</div>
                  <p className="text-gray-700 truncate">(Average Budget: {props.data.averageBudget})</p>
                  <button onClick={() => ToBooking(props.data.mode)} className='rounded-full bg-sky-600 p-3 text-white my-2'>View Options</button>
                </div>
              </div>
    </div>
  )
}

export default Tcc
