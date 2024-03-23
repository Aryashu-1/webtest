import React, { useContext } from 'react'
import Tcc from '../Tcc/Tcc'
import { TransportContext } from '../Context/TransportContext'
import Booking from '../Booking/Booking'
import { useNavigate } from 'react-router-dom'
function TransportChild(props) {
    let navigate = useNavigate()
    let [transportContext,setTransportContext] = useContext(TransportContext)
    console.log(props.data)
    const transportOptions = [
        {
          url: 'https://c4.wallpaperflare.com/wallpaper/905/654/385/5bd31e1f538c0-wallpaper-preview.jpg',
          mode: 'Cabs',
          averageBudget: 2000
        },
        {
          url: 'https://c4.wallpaperflare.com/wallpaper/905/654/385/5bd31e1f538c0-wallpaper-preview.jpg',
          mode: 'Railways',
          averageBudget: 2000
        },
        {
          url: 'https://c4.wallpaperflare.com/wallpaper/905/654/385/5bd31e1f538c0-wallpaper-preview.jpg',
          mode: 'Airways',
          averageBudget: 2000
        },
        {
          url: 'https://c4.wallpaperflare.com/wallpaper/905/654/385/5bd31e1f538c0-wallpaper-preview.jpg',
          mode: 'Waterways',
          averageBudget: 2000
        },
        {
          url: 'https://c4.wallpaperflare.com/wallpaper/905/654/385/5bd31e1f538c0-wallpaper-preview.jpg',
          mode: 'MiniBus',
          averageBudget: 2000
        },
        {
          url: 'https://c4.wallpaperflare.com/wallpaper/905/654/385/5bd31e1f538c0-wallpaper-preview.jpg',
          mode: 'Bus',
          averageBudget: 2000
        }
      ];
      
      
       
      
        return (<div>
            <div className="flex flex-wrap justify-center">
            {transportOptions.map((option, index) =><Tcc key={index} data={option} index={index} />  )}
          </div>
          </div>
        );
      }
   
  


export default TransportChild
