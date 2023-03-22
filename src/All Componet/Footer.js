import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div>
        <div class="footer1">

    <div class="footer2">
        <h2>BRIGHT FUTURE ACADEMY</h2><br></br> 
        <p> PRADEEP PAREEK , PRINCIPAL <br></br>
            V.P.O. JAMAL<br></br>
            Disst. SIRSA <br></br>
            HARYANA<br></br>
         PIN CODE -125110 </p>
    </div>

    <div class="importent">
        <h4>IMPORTENT LINK</h4><br></br>
        <p><Link to="/Login">Login</Link><br></br>
        <Link to="/Registration Certificate">Registration Certificate</Link> <br></br>
        <Link to="/General Rules & Regulations">General Rules & Regulations</Link><br></br> </p>
    </div>

    <div class="contact">
        <h4> CONTACT US</h4><br></br>
        <p> PH0NE NUMBER<br></br>                       
            +91-99969-45159<br></br>
            +91-94683-53510<br></br>
            ( 24/7 Support Line) </p>
    </div>
</div>
 <hr></hr>
<div class="devlop">
<div class="right">
Copyright © Rights Reserved - www.brightfutureacademy.com 
</div>
<div class="aggarwal"> 
Developed by SANJAY GOYAL 
- Co-Operate : DIPESH SINGLA
</div>
</div>
</div>

  )
}
