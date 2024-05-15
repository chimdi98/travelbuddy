import LogIn from "../../components/LogIn/LogIn"
import { NavLink } from "react-router-dom";
import {MdCardTravel} from "react-icons/md";
import "./LogInPage.scss"

const LogInPage = () => {
    return(
        <div className="login__page" >
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
            <div><LogIn /></div>  
        </div>
    )
}
export default LogInPage;