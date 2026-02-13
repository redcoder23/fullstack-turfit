import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'  
import './CSS/Home.css'
import TurfCard from './TurfCard';
function Home() {   
  const current_theme=localStorage.getItem('current_theme'); 
  const[theme,settheme]=useState(current_theme ? current_theme: 
   'light');   

   useEffect(()=>{ 
    localStorage.setItem('current_theme',theme);
    },[theme])
  return (
    <div className={`container ${theme}`}>  
    <Navbar theme={theme} settheme={settheme}/> 
    <TurfCard/>
    </div>
  )
}

export default Home
