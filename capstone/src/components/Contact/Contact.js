import Header from "../Header/Header";
import "./Contact.scss"

const Contact = () => {
return(
    <div>
        <Header />
        <div className="contact" >
        <h3>Contact Us</h3>
        <p>If you have any questions or need assistance, feel free to contact us:</p>
        <ul>
            <li>Email: info@travelbuddy.com</li>
            <li>Phone: +1234567890</li>
        </ul>
        </div>
    </div>
      )
    }

export default Contact;