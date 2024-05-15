
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import "./CityPackage.scss"
import Form from "../Form/Form";

const CityPackage = ({id}) => {
    const[city, setCity] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const fetchCity = async() => {
        try {
            const response = await axios.get('http://localhost:8080/trips');
            console.log(response.data);
            setCity(response.data)
        } catch (error) {
            console.error(error);
        }
      }
      useEffect (() => {
          fetchCity();
      },[id])
      console.log(city)
      if (!city){
          return<div>Loading...</div>
      }
    
      const handleClick =() => {
        setShowForm(true);
      };
      const closeNavs = () => {
        setShowForm(false)
      }

    
      const citye =city[`${id}`-1]
      const remaining = 5- `${citye.travellers}`
      console.log(city)
    return (
            <div className="packs" >
                <h1>{citye.destination}</h1>
                <div className="packs__div" >
                        <div className="packs__imgcon" ><img src={citye.image} className="packs__img"/></div>
                        <p>${citye.price}</p>
                        <div className="packs__con" >
                            <h3>Trip Details</h3>
                            <p>Airline : {citye.airline}</p>
                            <p>From {citye.origin} {citye.departure_date} </p>
                            <p>To {citye.destination} {citye.return_date} </p>
                            <p>There are {remaining} spots left!</p>
                            <button className="pack__btn" onClick={handleClick} >CHOOSE PACKAGE</button>
                            {showForm && <Form closeNavs= {closeNavs}
                            id = {id}/>}

                        </div>
                </div>

                
            </div>
    )
}
export default CityPackage;