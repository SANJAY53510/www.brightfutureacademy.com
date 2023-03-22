import React from 'react'
import { Routes, Route } from "react-router-dom";

import Header from './All Componet/Header.js'
import Navabar from './All Componet/Navabar.js'
import Home from './All Componet/Home.js'
import Admission from './All Componet/Admission.js'
import Facilities from './All Componet/Facilities.js'
import Gallery from './All Componet/Gallery.js'
import Contact from './All Componet/Contact.js'
import About from './All Componet/About.js'
import Login from './All Componet/Login.js'
import RegiCerti from './All Componet/RegiCerti.js'
import Rule from './All Componet/Rule.js'
import Footer from './All Componet/Footer.js'



  export default function App(){
  return (
<> 
  <Header/>
  <Navabar/>
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="Admission" element={<Admission/>} />
  <Route path="Facilities" element={<Facilities/>} />
  <Route path="Gallery" element={<Gallery/>} />
  <Route path="Contact" element={<Contact/>} />
  <Route path="About Us" element={<About/>} />
  <Route path="Login" element={<Login/>} />
  <Route path="Registration Certificate" element={<RegiCerti/>}/>
  <Route path="General Rules & Regulations" element={<Rule/>} />
</Routes>
<Footer/>
</>

  ) 
}










