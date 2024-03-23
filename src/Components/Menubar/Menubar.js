import React from 'react'
import './Menubar.css'
function Menubar() {
  return (
    <div>
        <nav role="navigation">
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <a href="#"><li>Home</li></a>
        <a href="#"><li>About</li></a>
        <a href="#"><li>Info</li></a>
        <a href="#"><li>Contact</li></a>
        <a href="https://github.com/gevendra2004" target="_blank"><li>Show me more</li></a>
      </ul>
    </div>
  </nav>
      
    </div>
  )
}

export default Menubar
