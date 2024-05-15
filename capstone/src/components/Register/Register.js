import { Link } from "react-router-dom";
import "./Register.scss"
import { useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    console.log(password)
    const registerUser = async(e) => {
        e.preventDefault();
        try{
        const response = await axios.post('http://localhost:8080/user/register',{
            firstName,
            lastName,
            email,
            password
        });
        console.log(response)
        alert('Signed up successfully.')
        navigate('/login')
        if (response) {
            setSuccess(true);
            setError("");
            e.target.reset();
        }
        }
        catch(err){
            alert('Sign Up failed.Please try again later')
            console.log(err.response.data);
            setError(err.response.data);
            // return success to false if true was stored in state from previous submission
            setSuccess(false);
            console.log(err);
        }}
        
    return(
        <div>
        <div className="login" >
            <h1>Sign Up</h1>
            <form className="login__form" onSubmit={registerUser} >
                <div className="login__inputdiv" >
                    <input type="text" className="login__input" placeholder="enter first name..."
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="login__inputdiv" >
                    <input type="text" className="login__input" placeholder="enter last name..."
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} />
                </div>
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
                <button type="submit" className="login__button" >Sign Up</button> 
                {success && <div className="signup__message">Signed up!</div>}
                {error && <div className="signup__message">{error}</div>}
            </form> 
        </div>
        <div className="login__regcon">
            <p>Already a member?</p>
            <Link to={'/login'}>Log In</Link>
        </div>
        </div>
    )
}
export default Register;