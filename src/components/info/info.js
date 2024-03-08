import React from "react";
import { useParams } from "react-router-dom";
import "./info.css";
import Contacts from "../contacts/contacts";

const Info = () => {
    const {id} = useParams();
    
    return id === "Contact" ? 
    <div><Contacts /></div>
    : <h1>error</h1>;

}
export default Info;