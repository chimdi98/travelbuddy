import "./Header.scss"
import {NavLink} from "react-router-dom";
import {MdCardTravel} from "react-icons/md";
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';
import { useState } from "react";
const Header = () => {
    const [active,setActive] = useState('header__nav')
    const showNav =() => {
        setActive('header__nav active')
    }
    const closeNav =() => {
        setActive('header__nav')
    }
    return(

        <section className="header__sec" >
            <header className="header" >
                <div>
                    <div>
                       <h1><MdCardTravel className="header_logo"/> TravelBuddy</h1> 
                    </div>
                </div>
                <nav  className={active}>
                    <ul className="header__navlist" >
                        <li className="header__navitems" >
                            <NavLink to ="/" className="header__navlink">Home</NavLink>
                        </li>
                        <li className="header__navitems" >
                            <NavLink to ="/about" className="header__navlink">About</NavLink>
                        </li>
                        <li className="header__navitems" >
                            <NavLink to ="/packages" className="header__navlink">Packages</NavLink>
                        </li>
                        <li className="header__navitems" >
                            <NavLink to ="/" className="header__navlink">Info</NavLink>
                        </li>
                        <li className="header__navitems" >
                        <NavLink to ="/contact" className="header__navlink">Contact</NavLink>
                        </li>
                        <button className="header__button" >
                            <a href="#" className="header__buttonlink"> BOOK NOW </a>
                        </button>
                    </ul> 
                    <div className="header__closebar" onClick={closeNav} ><AiFillCloseCircle className="icon"/> </div>
                     
                </nav>
                <div className="header__toggle" onClick={showNav} ><TbGridDots className="icon"/> </div>                                     
            </header> 
        </section>
    )
}
export default Header;