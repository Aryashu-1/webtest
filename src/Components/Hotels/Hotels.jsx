import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import HotelsChild from './HotelsChild'
import BillDisplay from '../Bill/BillDisplay'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './Hotels.css'

function Hotels() {
    const navigate = useNavigate()
    const value = Number(useParams())
    let {register, handleSubmit,formState:{errors}}= useForm();
    function registerSubmit(newUser){
        console.log(newUser)
        setContext({...context,newUser})
        
    }
    let [context,setContext] = useContext(UserContext)
 let userdata =context;
    //fetch data from backend 
    let hotels =[
        {
          "name": "Leela Kempinski",
          "destination": "Delhi",
          "pricePerNight": 6000,
          "isFull": false,
          "starRating": 4,
          "description": "Luxurious hotel offering top-notch amenities and impeccable service.",
          "latitude": 28.6139,
          "longitude": 77.209
        },
        {
          "name": "ITC Maurya",
          "destination": "Delhi",
          "pricePerNight": 5500,
          "isFull": false,
          "starRating": 3,
          "description": "Elegant hotel known for its exquisite interiors and fine dining options.",
          "latitude": 28.7041,
          "longitude": 77.1025
        },
        {
          "name": "The Imperial",
          "destination": "Delhi",
          "pricePerNight": 4000,
          "isFull": true,
          "starRating": 5,
          "description": "Iconic heritage hotel offering a blend of luxury and history.",
          "latitude": 28.7041,
          "longitude": 77.1025
        },
        {
          "name": "Shangri-La",
          "destination": "Delhi",
          "pricePerNight": 3500,
          "isFull": false,
          "starRating": 2,
          "description": "Modern hotel with panoramic views and contemporary design.",
          "latitude": 28.7041,
          "longitude": 77.1025
        },
        {
          "name": "The Lalit",
          "destination": "Delhi",
          "pricePerNight": 2500,
          "isFull": true,
          "starRating": 1,
          "description": "Affordable luxury hotel offering comfortable accommodations and excellent dining options.",
          "latitude": 28.6139,
          "longitude": 77.209
        },
        {
          "name": "Grand Hyatt",
          "destination": "Panaji",
          "pricePerNight": 4500,
          "isFull": false,
          "starRating": 4,
          "description": "Luxurious waterfront hotel with stunning views and world-class amenities.",
          "latitude": 15.4909,
          "longitude": 73.8278
        },
        {
          "name": "Novotel Goa Resort & Spa",
          "destination": "Panaji",
          "pricePerNight": 4000,
          "isFull": false,
          "starRating": 3,
          "description": "Relaxing resort offering spacious accommodations and rejuvenating spa treatments.",
          "latitude": 15.4909,
          "longitude": 73.8278
        },
        {
          "name": "W Goa",
          "destination": "Panaji",
          "pricePerNight": 3000,
          "isFull": true,
          "starRating": 5,
          "description": "Stylish beachfront resort known for its vibrant ambiance and luxurious amenities.",
          "latitude": 15.4909,
          "longitude": 73.8278
        },
        {
          "name": "Alila Diwa Goa",
          "destination": "Panaji",
          "pricePerNight": 2000,
          "isFull": false,
          "starRating": 2,
          "description": "Tranquil resort offering serene accommodations and personalized service.",
          "latitude": 15.4909,
          "longitude": 73.8278
        },
        {
          "name": "The Zuri White Sands",
          "destination": "Panaji",
          "pricePerNight": 1500,
          "isFull": true,
          "starRating": 1,
          "description": "Beachfront resort offering comfortable accommodations and lively entertainment.",
          "latitude": 15.4909,
          "longitude": 73.8278
        },
        {
          "name": "Taj Falaknuma Palace",
          "destination": "Hyderabad",
          "pricePerNight": 6000,
          "isFull": false,
          "starRating": 4,
          "description": "Palatial hotel known for its grand architecture and luxurious amenities.",
          "latitude": 17.385,
          "longitude": 78.4867
        },
        {
          "name": "ITC Kohenur",
          "destination": "Hyderabad",
          "pricePerNight": 5500,
          "isFull": false,
          "starRating": 3,
          "description": "Luxury hotel offering a blend of modern comforts and traditional hospitality.",
          "latitude": 17.385,
          "longitude": 78.4867
        },
        {
          "name": "The Park Hyderabad",
          "destination": "Hyderabad",
          "pricePerNight": 4500,
          "isFull": true,
          "starRating": 5,
          "description": "Chic hotel known for its contemporary design and vibrant ambiance.",
          "latitude": 17.385,
          "longitude": 78.4867
        },
        {
          "name": "Taj Krishna",
          "destination": "Hyderabad",
          "pricePerNight": 3500,
          "isFull": false,
          "starRating": 2,
          "description": "Iconic hotel offering luxurious accommodations and impeccable service.",
          "latitude": 17.385,
          "longitude": 78.4867
        },
        {
          "name": "Lemon Tree Premier",
          "destination": "Hyderabad",
          "pricePerNight": 2500,
          "isFull": true,
          "starRating": 1,
          "description": "Modern hotel known for its comfortable accommodations and friendly service.",
          "latitude": 17.385,
          "longitude": 78.4867
        },
        {
          "name": "Taj Coromandel",
          "destination": "Chennai",
          "pricePerNight": 6000,
          "isFull": false,
          "starRating": 4,
          "description": "Luxurious hotel known for its elegant interiors and fine dining options.",
          "latitude": 13.0827,
          "longitude": 80.2707
        },
        {
          "name": "ITC Grand Chola",
          "destination": "Chennai",
          "pricePerNight": 5500,
          "isFull": false,
          "starRating": 3,
          "description": "Opulent hotel offering a blend of traditional charm and modern amenities.",
          "latitude": 13.0827,
          "longitude": 80.2707
        },
        {
          "name": "Hyatt Regency",
          "destination": "Chennai",
          "pricePerNight": 4500,
          "isFull": true,
          "starRating": 5,
          "description": "Contemporary hotel known for its upscale accommodations and personalized service.",
          "latitude": 13.0827,
          "longitude": 80.2707
        }]
  return (
    <div>
      <div className=' ' >
            <BillDisplay/>
        </div>
        
        <div className='bg-gray-700 text-white'>
        <form className='flex p-3' onSubmit={handleSubmit(registerSubmit, ()=>{console.log('error')})}>
                   
                    <div  className="mr-6 m-2 ">
                        <h4>Destination</h4>
                        <h1 className='p-2 bg-white text-black rounded-lg '>{context.newUser.destination}</h1>
                        
                    </div>
                    <div className="mr-6 m-2">
                        <h4>Check-In Date <i className="bi bi-caret-down-fill"></i></h4>
                        <input className='border-none p-2 rounded-lg text-black' type="date" {...register('startDate', {required:true})}/>
                        {errors.startDate?.type ==='required' && (<h3 className='px-1 text-sm  text-red-600'>! Please Select a Valid date</h3>)}
                    </div>
                    <div className="mr-6 m-2">
                        <h4>Check-OutDate <i className="bi bi-caret-down-fill"></i></h4>
                        <input className='border-none p-2 rounded-lg text-black' type="date" {...register('endDate', {required:true})}/>
                        {errors.endDate?.type ==='required' && (<h3 className='px-1 text-sm  text-red-600'>! Please Select a Valid date</h3>)}
                    </div>
                    <div className="mr-6 m-2">
                        <h4>No Of Rooms <i className="bi bi-caret-down-fill"></i></h4>
                        <input className='p-2 rounded-lg' type="number" placeholder="No of Rooms" {...register('strength', {required:true})}/>
                        {errors.strength?.type ==='required' && (<h3 className='px-1 text-sm  text-red-600'>! Enter destination</h3>)}
                    </div>
                   <div className='flex items-center'> <button className='rounded-lg bg-sky-600 h-[60%] w-[100px] bg-black text-white ' type='submit'>Submit</button></div>
                   
                    </form>
                    </div>
        <div className='flex bg-gray-200 p-4 '>
            <div className='m-2 w-[30%] bg-white rounded-lg'>
        <div className=' rounded-full p-6  '>
            <ol>
                <h1 className='text-xl m-auto  font-semibold'>TOP Picks(Recommended)</h1>
          {  hotels.map((vehicle,index)=> <h1 className='text-md m-2'  key={index} >{vehicle.name}</h1>)}
          </ol>
          <ul>
          <h1 className='text-xl m-5 font-semibold'>Budget Friendly</h1>
          {  hotels.map((hotel,index)=> <h1 className='text-md m-2'  key={index} >{hotel.name}</h1>)}
          </ul>
        </div>
        </div>
        <div className='w-[70%]'>
        <div className='flex-col ' >
            {
            hotels.map((hotel,index)=><HotelsChild data={hotel} center={{"lat":hotel.latitude,"lng":hotel.longitude}}value={index} key={index} mode={value}/>)
            }
        </div>
        </div>
        </div>
    </div>
  )
}

export default Hotels
