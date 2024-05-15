import {FaFacebookF} from 'react-icons/fa6';
import {FaTwitter} from 'react-icons/fa6';
import{FaInstagram} from 'react-icons/fa6';
import "./Footer.scss"

const Footer = () => {
    return(
        <footer class="footer">
        <nav class="footer__nav">
            <section class="footer__list">
                <div class="footer__address">
                      <h3>Contact</h3>
                        <div class="footer__items footer__items--mod">
                            <div class="footer__title">EMAIL</div>
                         <a class="footer__mail-link" 
                          href="mailto:info@travelbuddy.com">info@travelsite.com</a>
                        </div>
                    
                </div>
                <div class="footer__social">
                       <h3>Social</h3>
                       <div class="footer__items">
                         <div class="footer__img">
                            <a href="https://www.instagram.com/">
                                <FaInstagram alt="instagram link"/>
                                </a>
                                <a href="https://www.facebook.com/">
                                <FaFacebookF alt="facebook link"/>
                                </a>
                                <a href="https://www.twitter.com/">
                                <FaTwitter alt="twiter link"/>
                                </a>
                        </div>
                       </div>   
                </div>
                
            </section>
        </nav> 
    </footer>
    )
}
export default Footer;