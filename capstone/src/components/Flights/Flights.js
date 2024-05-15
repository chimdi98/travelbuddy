import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const Flights = () => {
    const [flight, setFlights] = useState({})
    const options = {
        method: 'GET',
        url: 'https://booking-com18.p.rapidapi.com/flights/search-return',
        params: {
          fromId: 'MSY',
          toId: 'ORY',
          departureDate: '2024-05-22',
          returnDate: '2024-05-23'
        },
        headers: {
          'X-RapidAPI-Key': '5827ca26abmshaee89ac7d4cbcdap13398cjsnec46fe781ae6',
          'X-RapidAPI-Host': 'booking-com18.p.rapidapi.com'
        }
      };
  
  const fetchFlights = async() => {
  try {
      const response = await axios.request(options);
      console.log(response.data);
      setFlights(response.data)
  } catch (error) {
      console.error(error);
  }
}
useEffect (() => {
    fetchFlights();
},[])
console.log(flight[0])
if (!flight){
    return<div>Loading...</div>
}
return(
    <div>{}</div>
)
}
export default Flights;