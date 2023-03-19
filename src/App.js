import Navbar from "./Components/Navbar";
import React, { useState } from 'react'
import { FaMoon, FaRegSun } from 'react-icons/fa';
import { BrowserRouter as Router, Routes,Route  } from "react-router-dom";
import Homepage from "./Components/Home";
import Careers from "./Components/Careers";
import Services from "./Components/Services";

import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  let [text,setText]=useState('black')
  let [bgColor, setBgColor]=useState('white')
  let [mode,setMode]=useState(FaMoon)
  let backGround=()=>{
    if(bgColor==='white')
    {
      setBgColor('#212121')
      setMode(FaRegSun)
      setText('white')
    }
    else{
      setBgColor('white')
      setMode(FaMoon)
      setText('black')
    }
  }
  return (
    <div className="App" style={{backgroundColor:bgColor, color:text}}>
     <Router>
     <Navbar mode={mode} backGround={backGround} bgColor={bgColor} text={text}></Navbar>
     
     <Routes>
      <Route path="/" element={<Homepage ></Homepage>}></Route>
      <Route path="/services" element={<Services></Services>}></Route>
      <Route path="/careers" element={<Careers></Careers>}></Route>
     
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="*" element={<Homepage></Homepage>}></Route>

     </Routes>
    <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
