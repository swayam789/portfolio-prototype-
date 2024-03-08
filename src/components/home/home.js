import React,{useEffect, } from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./home.css"

export default function Home() {
  
    useEffect(() => {
      AOS.init();
      
        
      }, [])
  return ( <div className="collage">
  <div class="animate-on-load"
      data-aos="fade-right"
    > <div className="photo1" >
    <img src="349026517_1298948130988067_6701350303677468558_n.jpg" alt="349026517_1298948130988067_6701350303677468558_n.jpg" width={"100%"}/>
    </div> <div className="word" ><div class="animate-on-load"
      data-aos="fade-up"
    ><h1>Swayam Lama</h1><strong>A bit About me </strong> <br/>Swayam Lama,I, a whimsical explorer of the digital realm, navigate the vast landscapes of code with a creative spirit and an insatiable curiosity. Fueled by a passion for weaving imaginative tales in the virtual space, I thrive on the harmonious dance of algorithms and pixels. With a penchant for conjuring up fantastical worlds in the realm of bits and bytes, 
    I endeavor to craft digital wonders that transcend the ordinary. Unveiling the magic hidden within lines of code, I am not just a coder but a sorcerer in the enchanting tapestry of the digital universe.
    </div></div> </div>
   
    </div>
  );
  }
