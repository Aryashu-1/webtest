import React from 'react'
import Booking from '../Booking/Booking';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Acc(props) {
    
        let navigate = useNavigate()
        let [modet,setmodet] = useState('')
        // Handle booking based on the mode
        function ToBooking(){
            setmodet(props.data.mode)
            if (modet === '1 Star Hotels') {
                redirectToBooking('1');
              } else if (modet === '2 Star Hotels') {
                redirectToBooking('2');
              } else if (modet === '3 Star Hotels') {
                redirectToBooking('3');
              } else if (modet === '4 Star Hotels') {
                redirectToBooking('4');
              } else if (modet === '5 Star Hotels') {
                redirectToBooking('5');
              } 
        }
        const redirectToBooking = (mode) => {
            
            navigate(`/hotelbooking/${mode}`);
          };
        
  
          

      
  return (
    <div>
      <div key={props.index} className="w-[300px] rounded-lg overflow-hidden shadow-xl m-2">
                <div className='overflow-hidden object-cover' >
                  <img className="w-full h-40 transform origin-center transition-transform duration-400 object-cover hover:scale-110" src={props.data.url} alt="Your Image" />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{props.data.mode}</div>
                  <p className="text-gray-700 truncate">(Average Budget: )</p>
                  <button onClick={ToBooking} className='rounded-full bg-sky-600 p-3 text-white my-2'>View Options</button>
                </div>
              </div>
    </div>
  )
}

export default Acc
