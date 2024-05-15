import { useState, useEffect } from "react"
import hero from "../../Assets/video-hero.mp4"
import "./TravelPage.scss"
import {FaLocationDot} from "react-icons/fa6"
import {HiFilter} from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const TravelPage = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState('');
    const [date, setDate] = useState('');
    const[price, setPrice] = useState('');

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
      const handleSearch = (e) => {
        setSearch(e.target.value)
        if (searched) navigate(`/packages/${searched.id}`)
      }
      useEffect (() => {
          fetchCities();
      },[])
      console.log(cities)
      if (!cities){
          return<div>Loading...</div>
      }
     const searched = cities.find((city) => search == city.destination)
    if (searched) navigate(`/packages/${searched.id}`)
    return(
        <section className="travel__home">
            <div className="travel__overlay" >
                {/* <div className="travel__con"> */}
                <video className="travel__hero" src={hero} muted autoPlay loop type="video/mp4" ></video>
                {/* </div> */}
                <div className="travel__content">
                    <div className="travel__div">
                        <span className="travel__text">
                            Our Packages
                        </span>
                        <h1 className="travel__title" >
                            Search your packages
                        </h1>
                    </div>
                    <form className="travel__card">
                        <div className="travel__destination">
                            <label htmlFor="city" className="travel__label" >Search your destination:</label>
                            <div className="travel__input">
                                <input type="text" className="travel__in" id="city" placeholder="Enter city here..." value={search} onChange={handleSearch}/>
                                
                                <FaLocationDot className="travel__icon icon" />
                            </div>
                        </div>
                        <div className="travel__date">
                            <label htmlFor="date" className="travel__label" >Search your date:</label>
                            <div className="travel__input">
                                <input type="date" className="travel__in" value={date} onChange={(e) => setDate(e.target.value)}/>
                            </div>
                        </div>
                        <div className="travel__price">
                            <div className="travel__labelcon flex">
                                <label htmlFor="price" className="travel__label" >Max price: $5000</label>
                                {/* <h3 className="travel__total">$5000</h3> */}
                            </div>
                            <div className="travel__input">
                                <input type="range" max="5000" min="500" className="travel__in input" value={price} onChange={(e) => setPrice(e.target.value)}/>
                                <p>${price}</p>
                            </div>
                        </div>
                        <div className="travel__options flex">
                            <HiFilter className="icon" />
                            <span>MORE FILTERS</span>
                        </div>
                    </form>
                    <div className=""></div>

                </div>
            </div>
        </section>
    )
}
export default TravelPage;