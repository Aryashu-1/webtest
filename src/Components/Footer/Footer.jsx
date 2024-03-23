import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className=' text-black flex '>
         <footer>
        <h2>Subscribe & <br/> get special discount</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt neque animi .</p>
        <div className="input">
            <input  className='' type="text" placeholder="Enter your Email Address"/>
            <button>Subscribe</button>
        </div>
        <ul>
            <li>7823 <br/> <h6>Years Serving the travel Industry</h6></li>
            <li>6374 <br/><h6>Global <br/> Patnership</h6> </li>
            <li>1496 <br/> <h6>Industry Awards since 2022</h6></li>
            <li>5658 <br/> <h6>Subscribe</h6></li>
        </ul>
    </footer>
    </div>
  )
}

export default Footer