import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import "./header.css"

function smallbar() {
    document.getElementById('inner_resume').style.height = 10+"vh";
}
function openbar() {
  document.getElementById('inner_resume').style.maxHeight = "100vh";
    document.getElementById('inner_resume').style.height = "100vh";
    
    document.querySelector('.header').style.display = "none";
    document.getElementById('x').style.display = "block";
    document.getElementById('doc').style.display = "block";
    let CircularBar = document.querySelectorAll(".circular-bar");
    
    let InitialValue = [0,0,0,0,0];
    let finaleValue = [70 , 90 , 80 , 95 ,77];
    let speed = 30;
    
    const intervalid = setInterval(() => {
      
    
      for (let i = 0; i < CircularBar.length; i++) {
        
        CircularBar[i].style.background = `conic-gradient(#4285f4 ${InitialValue[i]/100 * 360}deg, #e8f0f7 0deg)`;
        if(InitialValue[i] <= finaleValue[i]){
          InitialValue[i] += 1;
          document.getElementById('x').addEventListener('click', function (){
            clearInterval(intervalid);
          })

        }
      }
    
    
      
    }, speed)

    
}
function closebtn(){

  document.getElementById('inner_resume').style.maxHeight = "80px";
    document.getElementById('inner_resume').style.height = "10vh";
    
    document.querySelector('.header').style.display = "flex";
    document.getElementById('x').style.display = "none";
    document.getElementById('inner_resume').scrollTo(0,0);

    
    
}
function Header() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHeader(true);
    }, 600);

    return () => clearTimeout(timeout);
  }, []);
 

  return (
    <>
      {showHeader && (
        <><div className="header" onClick={smallbar()}>
          <div className="name">Swayam Lama</div>
          <div className="space"></div>
          <div className="info"><Link to="/">Home</Link></div>
          <div className="info"><button onClick={openbar}>Resume</button></div>
          <div className="info"><Link to="/Contact">Contact</Link></div>
          
        </div><div className="info"><button  id='x' onClick={closebtn}>X</button></div></>
      )}
        {true && (
        <div className="header_place"></div>)}
    </>
  );
}

export default Header;
