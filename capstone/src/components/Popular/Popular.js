import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./Popular.scss"
import { NavLink } from "react-router-dom";


const Popular = () => {
    const[cities, setCities] = useState(null);
    const fetchCities = async() => {
        try {
            const response = await axios.get('http://localhost:8080/trips');
            console.log(response.data);
            setCities(response.data)
        } catch (error) {
            console.error(error);
        }
      }
      useEffect (() => {
          fetchCities();
      },[])
      console.log(cities)
      if (!cities){
          return<div>Loading...</div>
      }
    return (
            <div className="city" >
                <h1>Popular Destinations</h1>
                <div className="city__map" >
                {
                    cities.map((city) => {
                        return(

                            <NavLink key={city.id} to={`/packages/${city.id}`} className="city__dest" >
                                <div className="city__imgcon" ><img src={city.image} className="city__img"/></div>
                                <h3>{city.destination}</h3> 
                            </NavLink>
                        )
                    })
                }
                </div>

                
            </div>
    )
}

export default Popular;