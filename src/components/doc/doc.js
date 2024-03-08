import React , {useEffect} from "react"
import "./doc.css";



const Doc = () =>{ 
    useEffect(() => {
        const res = document.getElementById("inner_resume");
        res.addEventListener('scroll', () => {
            if (res.scrollTop > 250) {
                document.getElementById("progress").style.width = "250px";
                document.getElementById("progress0").style.width = "200px";
                document.getElementById("progress1").style.width = "230px";
                document.getElementById("progress2").style.width = "150px";
                document.getElementById("progress3").style.width = "170px";
                document.getElementById("progress4").style.width = "200px";
                document.getElementById("progress5").style.width = "80px";
                document.getElementById("progress6").style.width = "10px";
            }
        });
        res.addEventListener('scroll', () => {
            if (res.scrollTop < 250) {
                document.getElementById("progress").style.width = "0%";
                document.getElementById("progress0").style.width = "0%";
                document.getElementById("progress1").style.width = "0%";
                document.getElementById("progress2").style.width = "0%";
                document.getElementById("progress3").style.width = "0%";
                document.getElementById("progress4").style.width = "0%";
                document.getElementById("progress5").style.width = "0%";
                document.getElementById("progress6").style.width = "0%";
            }
        });
       
    }, []);   
    return <div className="Resume"><div id="inner_resume">
        
        
        <div id='doc'> <div className="head1"> <div className="containerimg"><img id="it" width="300px" height="300px" src="swayam.jpg" alt="public/ed3e80e1-70d3-443b-8c3f-f9b5103e7535.jpg" /></div>
        <div className="myname"> <h1>Swayam  Lama</h1> 
        <i>Aspiring web/software developer</i><hr></hr></div></div>
        <div className="restcont">
        <div className="contactme">
        <h3><i class="fa-solid fa-phone"></i><i>Address :</i></h3>
        Permanent : kalika-1, chitwan Nepal<br></br> Temporary : kalika-1, chitwan Nepal <hr></hr>
        <h3><i class="fa-solid fa-phone"></i><i>contact me :</i></h3>
            <ul>
                <li>Phone : 9829028280</li>
                <li>Email : elecrectrolles@gmail.com</li>
                <li>Github: <a href="https://github.com/swayam789">https://github.com/swayam789</a></li>
                <li>Fb: <a href="https://facebook.com/swayamlama80">www.facebook.com/swayamlama80</a></li>
                <li>Ig: <a href="https://instagram.com/swayampakhrin/">www.instagram.com/swayampakhrin/</a></li>
                <li></li>
            </ul>
            <hr></hr>
            <h3><i class="fa-solid fa-graduation-cap"></i><i>Education :</i></h3>
            <ul>
                <li>Siddhi Vinayak Seconday School<br/> <i>(2008-2021)</i>: SEE
                    
                </li>
                <li>Aroma English Higher Secondary School (2022-2023): SLC </li>
                <li>Forbes College (2024-present): -</li>
            </ul><br></br>
            <table>
                <tr><td>Board</td><td>GPA(4.0)</td></tr>
                <tr><td>BLE</td><td>3.72</td></tr>
                <tr><td>SEE</td><td>3.95</td></tr>
                <tr><td>SLC</td><td>3.60</td></tr>
                

            </table><hr></hr>
            <h3><i class="fa-solid fa-pen-ruler"></i><i>Skills :</i></h3>
           <div className="idkcnt"><div className="py">HTML:</div> <div id="progress"></div></div>
           <div className="idkcnt"><div className="py">CSS:</div> <div id="progress0"></div></div>
           <div className="idkcnt"> <div className="py">Js:</div><div id="progress1"></div></div>
           <div className="idkcnt"><div className="py">PHP:</div> <div id="progress2"></div></div>
           <div className="idkcnt"> <div className="py">React:</div> <div id="progress3"></div></div>
           <div className="idkcnt"> <div className="py">C:</div> <div id="progress4"></div></div>
           <div className="idkcnt"> <div className="py">C++:</div> <div id="progress5"></div></div>
           <div className="idkcnt"> <div className="py">Python:</div> <div id="progress6"></div></div>
           <hr></hr>
           <h3><i class="fa-solid fa-language"></i><i>Language :</i></h3>
           <ol>
            <li>Nepali</li>
            <li>English</li>
            <li>Spanish</li>
            <li>Japanese</li>
            <li>Hindi</li>
           </ol>
        </div>
       <div className="restpage"> <div className="part"><div class="wrapper">
      <div class="circular-bar">
        <div class="percent">Creativity</div>
      </div>
    </div>
    <div class="wrapper">
      <div class="circular-bar">
        <div class="percent">Problem Solving</div>
      </div>
    </div>
    </div><div className="part"><div class="wrapper">
      <div class="circular-bar">
        <div class="percent">Team Work</div>
      </div>
    </div><div class="wrapper">
      <div class="circular-bar">
        <div class="percent">Leadership</div>
      </div>
    </div></div>
    
    <div className="part"><div class="wrapper">
      <div class="circular-bar">
        <div class="percent">Communication</div>
      </div>
    </div></div>
    </div>



        </div>
        </div></div></div>
}
export default Doc;