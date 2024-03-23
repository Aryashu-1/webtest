import React from 'react'

import { BillContext } from '../../Context/Bill'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'

function BookingChild(props) {
let [bill,setbill]= useContext(BillContext)
console.log(props.mode)
let [context,setContext] = useContext(UserContext)
let navigate = useNavigate()
function confirmTransport(){
    
 setbill(bill + props.data.price)
 setContext({...context,"trainName" :props.data.name})
 navigate('/Accomodation')
}


  return (

    <div className='flex bg-gray-200 '>

      <div className=' w-[100%] shadow overflow-hidden  rounded-lg flex bg-white p-3 m-3 transform origin-center transition-transform duration-400 object-cover hover:scale-[102%]'>
        <div className='w-[60%] flex items-center '>
            <div>
            <h1 className='text-xl'>{props.data.name}</h1>
            <h1 className='text-md'>{props.data.vehicleNumber}</h1>
            </div>
        </div>
        <div className='w-[70%] flex mr-3'>
        <div className='flex items-center  mr-5'>
            <h1>{props.data.departureTime}</h1>
        </div>
        <div className='flex text-sm text-gray-400 items-center mr-5'>
            <h1>-{props.data.timeOfTravel}-</h1>
        </div>
        
        <div className='flex items-center mr-5'>
         <h1>{props.data.departureTime}</h1>    
        </div>
        </div>
        <div className='w-[30%] flex'>
        <div className='flex items-center mx-2'>
            <h1>&#8377;{props.data.price}</h1>
        </div>
        <div className='flex items-center  '>
            <button onClick={confirmTransport} className='h-[50px] w-[100px] rounded-lg text-white  bg-sky-600'>Book</button>
        </div>
        </div>
      </div>
    </div>
  )

}

export default BookingChild
