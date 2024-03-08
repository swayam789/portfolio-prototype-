import React from "react";
import "./contacts.css"

const Contacts = () => {
   return <div className="collage">
  <div class="animate-on-load"
      data-aos="fade-right"
    > <div className="photoa" >
    <iframe id="idk" width="60%" height="450px" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=5Ra1FM_7TY9vQy3d?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> <div className="form" >  <form action="form.php" method="post">
        <h3>Name*</h3>
    <input type="text" name="Name" id="txtbox" placeholder="Name"></input>
    <h3>Email*</h3>
    <input type="text" name="Email" id="txtbox" placeholder="Email"></input>
    <h3>Phone Number*</h3>
    <input type="text" name="Contact" id="txtbox" placeholder="Phone number"></input>
    <h3>Message*</h3>
    <textarea id="txtbox1" name="message" rows="6" cols="50" placeholder="Enter your message here...(250 max characters)"></textarea>
    <button id="submit" type="Submit">Submit</button>

</form></div>
    </div>
    </div>
    </div>
   
}
 export default Contacts;
