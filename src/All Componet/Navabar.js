import React from 'react'
import './Navabar.css' 
import { Link } from "react-router-dom";

export default function Navabar() {
  return (
    <div><div class="navbar">
    <ul>
        <li><Link to="/">HOME</Link> </li>
        <li><Link to="/ADMISSION">ADMISSION</Link> </li>
       <li><Link to="/FACILITIES">FACILITIES</Link></li>
        <li> <Link to="/GALLERY">GALLERY</Link></li>
       <li><Link to="/CONTACT">CONTACT</Link> </li>
      <li><Link to="/ABOUT US">ABOUT US</Link></li>
    </ul>
</div></div>
  )
}
