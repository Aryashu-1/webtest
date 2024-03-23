import React, { useContext } from 'react'
import Tcc from '../Tcc/Tcc'
import { TransportContext } from '../Context/TransportContext'
import Booking from '../Booking/Booking'
import { useNavigate } from 'react-router-dom'
import Acc from '../Acc/Acc'
function AccChild(props) {
    let navigate = useNavigate()
    
    console.log(props.data)
    const accomodateOptions = [
        {
          url: 'https://c4.wallpaperflare.com/wallpaper/905/654/385/5bd31e1f538c0-wallpaper-preview.jpg',
          mode: '1 Star Hotels',
          averageBudget: 2000
        },
        {
          url: 'https://c4.wallpaperflare.com/wallpaper/905/654/385/5bd31e1f538c0-wallpaper-preview.jpg',
          mode: '2 Star Hotels',
          averageBudget: 2000
        },
        {
          url: 'https://c4.wallpaperflare.com/wallpaper/905/654/385/5bd31e1f538c0-wallpaper-preview.jpg',
          mode: '3 Star Hotels',
          averageBudget: 2000
        },
        {
          url: 'https://c4.wallpaperflare.com/wallpaper/905/654/385/5bd31e1f538c0-wallpaper-preview.jpg',
          mode: '4 Star Hotels',
          averageBudget: 2000
        },
        {
          url: 'https://c4.wallpaperflare.com/wallpaper/905/654/385/5bd31e1f538c0-wallpaper-preview.jpg',
          mode: '5 Star Hotels',
          averageBudget: 2000
        },
        
      ];
      
      
       
      
        return (<div>
            <div className="flex flex-wrap justify-center">
            {accomodateOptions.map((option, index) =><Acc key={index} data={option} index={index} />  )}
          </div>
          </div>
        );
      }
   
  


export default AccChild
