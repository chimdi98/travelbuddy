
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import "./Packages.scss"

const Packages = ({id}) => {
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
      console.log(id)
      if (!cities){
          return<div>Loading...</div>
      }
    return (
            <div className="city package__city" >
                <h1>Packages</h1>
                <div className="package__map" >
                {
                    cities.filter((city) => city.id !== Number(id))
                            .map((city) => {
                        return(

                            <NavLink key={city.id} to={`/packages/${city.id}`} className="package__dest" >
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
export default Packages;