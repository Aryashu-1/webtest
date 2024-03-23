import React from 'react'

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { BillContext } from '../../Context/Bill';
import { UserContext } from '../../Context/UserContext';
import { PlacesContext } from '../../Context/PlaceContext';
function Pcc(props) {
    
        let navigate = useNavigate()
        let [modet,setmodet] = useState([])
        let[context,setContext]=useContext(UserContext)
        let[bill,setbill]= useContext(BillContext)
        let [places ,setplaces]=useContext(PlacesContext)
        // Handle booking based on the mode
        function ToBooking(){
            setbill(bill + (props.data.ticketFare)*(context.newUser.strength))
            setplaces([...places,props.data.name])
           setContext({...context,"place":places})
           console.log(context)
        }
        
  
          

      
  return (
    <div>
      <div key={props.index} className="w-[300px] rounded-lg overflow-hidden shadow-xl m-2">
                <div className='overflow-hidden object-cover' >
                  <img className="w-full h-40 transform origin-center transition-transform duration-400 object-cover hover:scale-110" src={props.data.url} alt="Your Image" />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{props.data.name}</div>
                  <p className="text-gray-700 truncate">{props.data.description}</p>
                  <h1 className='text-lg font-semibiold mt-2'>Timings :</h1>
                  <p className="text-gray-700 truncate">{props.data.openTime} -- {props.data.closeTime} </p>
                  <h1 className='text-lg font-semibiold mt-2'>Timings :</h1>
                  <p className="text-gray-700 truncate">Rs.{props.data.ticketFare} </p>
                  <button onClick={ToBooking} className='rounded-full w-[100px] bg-sky-600 p-3 text-white my-2 active:bg-black '>Add</button>
                </div>
              </div>
    </div>
  )
}

export default Pcc
