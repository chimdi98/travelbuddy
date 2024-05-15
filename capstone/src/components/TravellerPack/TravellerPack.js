import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import "./TravellerPack.scss"
const TravellerPack = () => {
    const [traveller, setTraveller] = useState([])
    const fetchTraveller = async() => {
        try {
            const response = await axios.get('http://localhost:8080/travellers');
            console.log(response.data);
            setTraveller(response.data)
        } catch (error) {
            console.error(error);
        }
      }
      const {id} = useParams()
      useEffect (() => {
          fetchTraveller();
      },[id])
      console.log(traveller)
      if (!traveller){
          return<div>Loading...</div>
      }
    

    return (
        <div>
            <h2>Here are your Travel buddies ..</h2>
        <div className='users' >
            {
                traveller.filter((travel) => travel.trip_id === Number(id))
                        .map((travel) => { 
                            console.log(travel)
                    return(
                        <div className='users__div' >
                            <NavLink to= {`/travel/${id}`} key = {travel.id} >
                            <h3>{travel.firstName} {travel.lastName}</h3>
                            <p>{travel.email}</p>
                            </NavLink>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}
export default TravellerPack