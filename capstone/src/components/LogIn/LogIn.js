import { Link, useNavigate } from "react-router-dom";
import "./LogIn.scss"
import axios from 'axios';
import { useState } from "react";


const LogIn = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();
        
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = async(e) => {
        e.preventDefault();
        try{
        const response = await axios.post('http://localhost:8080/user/login',{
            email,
            password,
        });
        alert('Reserved!')
        sessionStorage.setItem("token", response.data.token);
            navigate("/");
        }
        catch(err){
            alert('Failed to log in')
            setError("Something went wrong", error);
        }}
    return(
        <div>
        <div className="login" >
            <h1>LogIn</h1>
            <form className="login__form" onSubmit={handleLogIn} >
               <div className="login__inputdiv" >
                    <input type="email" className="login__input" placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/> 
               </div>
               <div className="login__inputdiv" >
                    <input type="password" className="login__input" placeholder="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
               <button type="submit" className="login__button" >Login</button> 
               {error && <div className="login__message">{error}</div>}
            </form> 
        </div>
        <div className="login__regcon">
            <p>Dont have an account yet?</p>
            <Link to={'/register'}>Register Now</Link>
        </div>
        </div>
    )
}
export default LogIn;