import React from 'react'
import './HotelsChild.css'
import { BillContext } from '../Context/Bill'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import DisplayMap from '../Map/DisplayMap'
import { useState } from 'react'

function HotelsChild(props) {
let [bill,setbill]= useContext(BillContext)
let [context,setContext] = useContext(UserContext)
console.log(props.mode)

let navigate = useNavigate()
function confirmHotel(){
    
 setbill(bill + props.data.pricePerNight)
 setContext({...context,"hotelName":props.data.name})
 navigate('/Places')
}

const [showMap, setShowMap] = useState(false);
console.log(props.data)

const handleTrackVehicle = () => {
setShowMap(true);
};

const handleCloseMap = () => {
setShowMap(false);
};


return (
<div>
    <div className='flex bg-white rounded-lg overflow-hidden  m-10 h-72 '>
        <div className=''>
            <img src='' alt='' className='h-full w-[270px] '></img>
        </div>
        <div className='w-72'>
            <div className='flex text-3xl'>
    
                <h1 className='mx-2 mt-4'>{props.data.name}</h1>
            </div>
            <div className='flex text-sm'>
    
                <h1 className='mx-2'>{props.data.starRating}*</h1>
            </div>
            {/* <div className='flex' >
                <h1 className='text-green-600 mx-2'>Price/Night :</h1>
                <h1 className='mx-2'>{props.data.pricePerNight}</h1>
            </div> */}
            
           <div className='flex mt-3'>
              
                <h1 className='mx-2'>{props.data.description}</h1>
            </div> 
            <div className='flex mt-3'>
              
              <h1 className='mx-2'>Popular!!</h1>
          </div> 
            
            
        
        <div className=' p-2'>
            <button className=' m-auto p-4 rounded-full underline underline-offset-1' onClick={handleTrackVehicle}>Locate on map</button>
        </div>
        
        </div>
        <div className='mx-4 m-2 pl-8 border-l-2 border-t-black'>
            <h1 className='mt-5'>Rating:7.7</h1>
            <h1 className='mt-[60px]'>Rs.{props.data.pricePerNight}</h1>
            <h1 className='text-green-600 text-[15px]'>+Free Cancellation</h1>
            <button className='bg-sky-600 p-2 m-2 rounded-lg' onClick={confirmHotel}>Book</button>
        </div>
        
    </div>
    {showMap && (
    <div className="modal">
      <div className="modal-content text-center">
        <DisplayMap handleCloseMap={handleCloseMap} center ={props.center} />
        <button className='bg-sky-600 m-3 p-4 rounded-lg w-20 text-white' onClick={handleCloseMap}>Close</button>
      </div>
    </div>
  )}
</div>
)

//   return (
//     <div className='flex bg-gray-200 '>

//       <div className=' w-[100%] shadow overflow-hidden  rounded-lg flex bg-white p-3 m-3 transform origin-center transition-transform duration-400 object-cover hover:scale-[102%]'>
//         <div className='w-[60%] flex items-center '>
//             <div>
//             <h1 className='text-xl'>{props.data.name}</h1>
//             <h1 className='text-md'>{props.data.vehicleNumber}</h1>
//             </div>
//         </div>
        
//         <div className='flex items-center  '>
//             <button onClick={confirmHotel} className='h-[50px] w-[100px] rounded-lg text-white  bg-sky-600'>Book</button>
//         </div>
//         </div>
//       </div>
    
//   )
}

export default HotelsChild
