import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { useState } from 'react';
import { TransportContext } from '../Context/TransportContext';
import BookingChild from './BookingChild/BookingChild';
import Best from '../Best/Best';
import BillDisplay from '../Bill/BillDisplay';

function Booking() {
  const { mode } = useParams();
 let [context,setContext] = useContext(UserContext)
 let data =context;

 
 let [newdata,setnewdata] = useState([]);
 let transport =  [
    {
      "vehicleNumber": "MH12 AB 3456",
      "name": "Mumbai Train (Fast)",
      "source": "Hyderabad",
      "destination": "Delhi",
      "price": 500,
      "departureTime": "08:00 AM",
      "timeOfTravel": "12h",
      "isFull": false,
      "typeOfTransport": "train"
    },
    {
      "vehicleNumber": "9W 1234",
      "name": "Indigo",
      "source": "Hyderabad",
      "destination": "Delhi",
      "price": 3500,
      "departureTime": "10:30 AM",
      "timeOfTravel": "2h 15m",
      "isFull": true,
      "typeOfTransport": "flight"
    },
    {
      "vehicleNumber": "GOA12345",
      "name": "Mumbai Delhi Exp",
      "source": "Mumbai",
      "destination": "Delhi",
      "price": 800,
      "departureTime": "17:00 PM",
      "timeOfTravel": "8h 30m",
      "isFull": false,
      "typeOfTransport": "train"
    },
    {
      "vehicleNumber": "KL10 12345",
      "name": "Kerala State Water Transport Department",
      "source": "Thiruvananthapuram",
      "destination": "Mumbai",
      "price": 150,
      "departureTime": "14:00 PM",
      "timeOfTravel": "2h",
      "isFull": false,
      "typeOfTransport": "ship"
    },
    {
      "vehicleNumber": "KA 01 C 1234",
      "name": "Volvo B9R",
      "source": "Hyderabad",
      "destination": "Delhi",
      "price": 1200,
      "departureTime": "22:00 PM",
      "timeOfTravel": "10h",
      "isFull": true,
      "typeOfTransport": "bus"
    },
    {
      "vehicleNumber": "MH 46 Y 7890",
      "name": "Mahindra Tempo Traveller",
      "source": "Hyderabad",
      "destination": "Delhi",
      "pricePerKM": 15,
      "departureTime": "On Demand",
      "timeOfTravel": "Varies (Approx. 1h)",
      "isFull": false,
      "typeOfTransport": "minibus"
    },
    {
      "vehicleNumber": "DL 01 U 1234",
      "name": "Raju Car Services (Sedan)",
      "source": "Hyderabad",
      "destination": "Delhi",
      "pricePerKM": 22,
      "departureTime": "On Demand",
      "timeOfTravel": "Varies (Approx. 10hrs)",
      "isFull": false,
      "typeOfTransport": "cabs"
    },
    {
      "vehicleNumber": "AP 28 BY 4567",
      "name": "Nexus cabs",
      "source": "Chennai",
      "destination": "Hyderabad",
      "pricePerKM": 20,
      "departureTime": "On Demand",
      "timeOfTravel": "Varies (Approx. 6h)",
      "isFull": false,
      "typeOfTransport": "cabs"
    },
    {
      "vehicleNumber": "TN 07 N 9876",
      "name": "",
      "source": "Chennai",
      "destination": "Mumbai",
      "price": 60,
      "departureTime": "11:00 AM",
      "timeOfTravel": "5h",
      "isFull": false,
      "typeOfTransport": "train"
    },
    {
      "vehicleNumber": "HR 26 AB 1234",
      "name": "Shatabdi Express",
      "source": "Chennai",
      "destination": "Delhi",
      "price": 1200,
      "departureTime": "07:30 AM",
      "timeOfTravel": "23h",
      "isFull": false,
      "typeOfTransport": "train"
    },
    {
      "vehicleNumber": "GJ 01 G 5678",
      "name": "Ro-Pax Ferry",
      "source": "Mumbai",
      "destination": "Chennai",
      "price": 450,
      "departureTime": "13:00 PM",
      "timeOfTravel": "14h",
      "isFull": false,
      "typeOfTransport": "ship"
    },
    {
      "vehicleNumber": "KL 09 Z 4321",
      "name": "Houseboat (Alleppey Backwaters)",
      "source": "Kochi",
      "destination": "Thiruvananthapuram",
      "price": 3000,
      "departureTime": "5:00 PM",
      "timeOfTravel": "Varies",
      "isFull": false,
      "typeOfTransport": "ship"
    },
    {
      "vehicleNumber": "PB 06 C 9876",
      "name": "Volvo Multi Axle AC Sleeper Coach (Amritsar - Delhi)",
      "source": "Hyderabad",
      "destination": "Tirupati",
      "price": 1500,
      "departureTime": "20:30 PM",
      "timeOfTravel": "8h",
      "isFull": false,
      "typeOfTransport": "bus"
    },
    {
      "vehicleNumber": "RJ 14 F 1234",
      "name": "Non-AC Mini Bus",
      "source": "Hyderabad",
      "destination": "Panaji",
      "price": 20,
      "departureTime": "6:00 AM",
      "timeOfTravel": "6h",
      "isFull": false,
      "typeOfTransport": "bus"
    },
    {
      "vehicleNumber": "GA 09 U 7890",
      "name": "Force Traveller",
      "source": "Hyderabad",
      "destination": "Panaji",
      "pricePerKM": 18,
      "departureTime": "On Demand",
      "timeOfTravel": "Varies (Approx. 45m)",
      "isFull": false,
      "typeOfTransport": "minibus"
    },
    {
      "vehicleNumber": "MP 04 Z 5678",
      "name": "Uberiman (Micro)",
      "source": "Hyderabad",
      "destination": "Jammu",
      "pricePerKM": 15,
      "departureTime": "On Demand",
      "timeOfTravel": "Varies (Approx. 30h)",
      "isFull": false,
      "typeOfTransport": "cabs"
    },
    {
      "vehicleNumber": "AS 01 Y 3456",
      "name": "Sai Ram Bus Services",
      "source": "Hyderabad",
      "destination": "Delhi",
      "pricePerKM": 10,
      "departureTime": "On Demand",
      "timeOfTravel": "Varies",
      "isFull" : false,
      "typeOfTransport": "minibus"
    },
    {
      "vehicleNumber": "Y 3456",
      "name": "Spicejet",
      "source": "Hyderabad",
      "destination": "Delhi",
      "price": 10000,
      "departureTime": "6:00 AM",
      "timeOfTravel": "2h",
      "isFull" : false,
      "typeOfTransport": "flight"
    },
    {
      "vehicleNumber": "Y 3456",
      "name": "Spicejet",
      "source": "Hyderabad",
      "destination": "Delhi",
      "price": 10000,
      "departureTime": "6:00 AM",
      "timeOfTravel": "2h",
      "isFull": false,
      "typeOfTransport": "flight"
    },
    {
      "vehicleNumber": "AP 19 Z 7890",
      "name": "Air India",
      "source": "Hyderabad",
      "destination": "Delhi",
      "price": 8500,
      "departureTime": "12:00 PM",
      "timeOfTravel": "2h 15m",
      "isFull": true,
      "typeOfTransport": "flight"
    },
    {
      "vehicleNumber": "KA 26 Y 4321",
      "name": "Deccan Express (Hyderabad - Delhi)",
      "source": "Hyderabad",
      "destination": "Delhi",
      "price": 700,
      "departureTime": "18:30 PM",
      "timeOfTravel": "16h",
      "isFull": false,
      "typeOfTransport": "train"
    },
    {
      "vehicleNumber": "MH 09 U 1234",
      "name": "Nizamuddin Express (Hyderabad - Delhi)",
      "source": "Hyderabad",
      "destination": "Delhi",
      "price": 950,
      "departureTime": "09:15 AM",
      "timeOfTravel": "14h 30m",
      "isFull": false,
      "typeOfTransport": "train"
    },
    {
      "vehicleNumber": "HR 14 AB 5678",
      "name": "Rajdhani Express (Hyderabad - Delhi)",
      "source": "Hyderabad",
      "destination": "Delhi",
      "price": 1500,
      "departureTime": "23:00 PM",
      "timeOfTravel": "11h",
      "isFull": false,
      "typeOfTransport": "train"
    },
    {
      "vehicleNumber": "TN 04 XY 3456",
      "name": "Volvo Multi Axle AC Sleeper (Hyderabad - Delhi)",
      "source": "Hyderabad",
      "destination": "Delhi",
      "price": 1800,
      "departureTime": "20:00 PM",
      "timeOfTravel": "9h",
      "isFull": true,
      "typeOfTransport": "bus"
    },
    {
      "vehicleNumber": "KL 56 C 9876",
      "name": "RK Travels (Hyderabad - Delhi)",
      "source": "Hyderabad",
      "destination": "Delhi",
      "pricePerKM": 17,
      "departureTime": "On Demand",
      "timeOfTravel": "Varies (Approx. 12h)",
      "isFull": false,
      "typeOfTransport": "bus"
    }       
]
//temporaray best

let sbest = [ {
    "vehicleNumber": "MH12 AB 3456",
    "name": "Mumbai Train (Fast)",
    "source": "Hyderabad",
    "destination": "Delhi",
    "price": 500,
    "departureTime": "08:00 AM",
    "timeOfTravel": "12h",
    "isFull": false,
    "typeOfTransport": "train"
  },
  {
    "vehicleNumber": "9W 1234",
    "name": "Indigo",
    "source": "Hyderabad",
    "destination": "Delhi",
    "price": 3500,
    "departureTime": "10:30 AM",
    "timeOfTravel": "2h 15m",
    "isFull": true,
    "typeOfTransport": "flight"
  },
  {
    "vehicleNumber": "GOA12345",
    "name": "Mumbai Delhi Exp",
    "source": "Mumbai",
    "destination": "Delhi",
    "price": 800,
    "departureTime": "17:00 PM",
    "timeOfTravel": "8h 30m",
    "isFull": false,
    "typeOfTransport": "train"
  },
  {
    "vehicleNumber": "KL10 12345",
    "name": "Kerala State Water Transport Department",
    "source": "Thiruvananthapuram",
    "destination": "Mumbai",
    "price": 150,
    "departureTime": "14:00 PM",
    "timeOfTravel": "2h",
    "isFull": false,
    "typeOfTransport": "ship"
  },
  {
    "vehicleNumber": "KA 01 C 1234",
    "name": "Volvo B9R",
    "source": "Hyderabad",
    "destination": "Delhi",
    "price": 1200,
    "departureTime": "22:00 PM",
    "timeOfTravel": "10h",
    "isFull": true,
    "typeOfTransport": "bus"
  },
  {
    "vehicleNumber": "MH 46 Y 7890",
    "name": "Mahindra Tempo Traveller",
    "source": "Hyderabad",
    "destination": "Delhi",
    "pricePerKM": 15,
    "departureTime": "On Demand",
    "timeOfTravel": "Varies (Approx. 1h)",
    "isFull": false,
    "typeOfTransport": "minibus"
  },
  {
    "vehicleNumber": "DL 01 U 1234",
    "name": "Raju Car Services (Sedan)",
    "source": "Hyderabad",
    "destination": "Delhi",
    "pricePerKM": 22,
    "departureTime": "On Demand",
    "timeOfTravel": "Varies (Approx. 10hrs)",
    "isFull": false,
    "typeOfTransport": "cabs"
  },
  {
    "vehicleNumber": "AP 28 BY 4567",
    "name": "Nexus cabs",
    "source": "Chennai",
    "destination": "Hyderabad",
    "pricePerKM": 20,
    "departureTime": "On Demand",
    "timeOfTravel": "Varies (Approx. 6h)",
    "isFull": false,
    "typeOfTransport": "cabs"
  }]


//api call for top 5 based onc price (low-to high)


  console.log(newdata)
  
  return (
    <div>
        <div className=' ' >
            <BillDisplay/>
        </div>
       <div className='flex my-9'>
        <div className='bg-gray-200 rounded-lg mx-2 w-60 flex-col px-3 py-2'>
        <div className=''><label className='m-2 text-xl'>From</label></div>
        <div><h1 className='my-2 text-2xl font-bold'>{data.From}</h1></div>
        </div>
        <div className='w-9 '>
            <img src="https://t4.ftcdn.net/jpg/05/30/79/15/360_F_530791557_T8hNharBQQJqmw0R2FRjCrC9CgNwaeui.jpg"/>
        </div>
        <div className='bg-gray-200 rounded-lg mx-2 w-60 flex-col px-3 py-2'>
        <div><label className='m-2 text-xl'>To</label></div>
        <div><h1 className='my-2 text-2xl font-bold'>{data.destination}</h1></div>
        </div>
        <div className=' bg-gray-200 rounded-lg mx-2 w-60 flex-col px-3 py-2'>
        <div><label className='m-2 text-xl'>Departure</label></div>
        <div><h1 className='my-2 text-2xl font-bold'>{data.startDate}</h1></div>
        </div>
        <div className='bg-gray-200 rounded-lg mx-2 w-60 flex-col px-3 py-2'>
        <div><label className='m-2 text-xl'>Return</label></div>
        <div><h1 className='my-2 text-2xl font-bold'>{data.endDate}</h1></div>
        </div>
        <div className='bg-gray-200 rounded-lg mx-2 w-60 flex-col px-3 py-2'>
        <div><label className='m-2 text-xl'>No of Passengers</label></div>
        <div><h1 className='my-2 text-2xl font-bold'>{data.strength}</h1></div>
        </div>
        
        </div>
        <div className='flex bg-gray-200 p-4 '>
            <div className='m-2 w-[30%] bg-white rounded-lg'>
        <div className=' rounded-full p-6  '>
            <ol>
                <h1 className='text-xl m-auto  font-semibold'>TOP Picks(Recommended)</h1>
          {  transport.map((vehicle,index)=> <h1 className='text-md m-2'  key={index} >{vehicle.name}</h1>)}
          </ol>
          <ul>
          <h1 className='text-xl m-5 font-semibold'>Budget Friendly</h1>
          {  transport.map((vehicle,index)=> <h1 className='text-md m-2'  key={index} >{vehicle.name}</h1>)}
          </ul>
        </div>
        </div>
        <div className='w-[70%]'>
        <div className='flex-col ' >
            {
            transport.map((vehicle,index)=><BookingChild data={vehicle} value={index} key={index} mode={mode}/>)
            }
        </div>
        </div>
        </div>
    </div>
  );
}

export default Booking;
