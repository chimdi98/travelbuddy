import Register from "../../components/Register/Register"
import { NavLink } from "react-router-dom";
import {MdCardTravel} from "react-icons/md";
import "./RegisterPage.scss"

const RegisterPage = () => {
    return(
        <div className="register__page" >
            <section className="header__sec" >
            <header className="header" >
                <div>
                    <NavLink to = "/" className="">
                       <h1><MdCardTravel className="header_icon"/> TravelBuddy</h1> 
                    </NavLink>
                </div>
                <nav  className="header__nav none">                    
                </nav>
            </header> 
        </section>
            <div><Register /></div>  
        </div>
    )
}
export default RegisterPage;