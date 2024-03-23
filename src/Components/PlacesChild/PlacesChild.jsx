import React from 'react'
import Pcc from './Pcc/Pcc'
import BillDisplay from '../Bill/BillDisplay'
function PlacesChild() {
    let PlacesList =[
        {
          "name": "Statue of Liberty",
          "imageURL": "https://example.com/statue-of-liberty-image.jpg",
          "description": "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States.",
          "ticketFare": 250,
          "openTime": "8:30 AM",
          "closeTime": "5:00 PM",
          "latitude": "40.689247",
          "longitude": "-74.044502",
          "destination": "New York City, USA"
        },
        {
          "name": "Machu Picchu",
          "imageURL": "https://example.com/machu-picchu-image.jpg",
          "description": "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a mountain ridge 2,430 meters above sea level.",
          "ticketFare":180,
          "openTime": "6:00 AM",
          "closeTime": "5:30 PM",
          "latitude": "-13.163068",
          "longitude": "-72.545128",
          "destination": "Cusco Region, Peru"
        },
        {
          "name": "Sydney Opera House",
          "imageURL": "https://example.com/sydney-opera-house-image.jpg",
          "description": "The Sydney Opera House is a multi-venue performing arts center at Sydney Harbour in Sydney, New South Wales, Australia.",
          "ticketFare": 1200,
          "openTime": "9:00 AM",
          "closeTime": "8:30 PM",
          "latitude": "-33.856784",
          "longitude": "151.215296",
          "destination": "Sydney, Australia"
        },
        {
          "name": "Taj Mahal",
          "imageURL": "https://example.com/taj-mahal-image.jpg",
          "description": "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra.",
          "ticketFare": 1100 ,
          "openTime": "6:00 AM",
          "closeTime": "6:30 PM",
          "latitude": "27.175015",
          "longitude": "78.042155",
          "destination": "Agra, India"
        },
        {
          "name": "Colosseum",
          "imageURL": "https://example.com/colosseum-image.jpg",
          "description": "The Colosseum is an oval amphitheater in the center of the city of Rome, Italy.",
          "ticketFare": 80,
          "openTime": "8:30 AM",
          "closeTime": "7:15 PM",
          "latitude": "41.890210",
          "longitude": "12.492231",
          "destination": "Rome, Italy"
        }
      ]
      
  return (
    <div><div m-5>
        <BillDisplay/>
    </div>
        <div className="flex flex-wrap justify-center">
            {PlacesList.map((option, index) =><Pcc key={index} data={option} index={index} />  )}
          </div>
          </div>
    
  )
}

export default PlacesChild
