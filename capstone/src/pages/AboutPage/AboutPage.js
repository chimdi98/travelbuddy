import './AboutPage.scss';
import Header from '../../components/Header/Header'; 

const AboutPage = () => {
  return (
    <div  className='about'>
        <Header />
    
    <div className="about__page">
      <h2>About Us</h2>
      <p>Bored of solo travels? We are passionate about providing unforgettable travel experiences with people of like mindset for our customers.</p>
      <p>Our mission is to help you discover amazing destinations and groups, find the best deals on flights and accommodations, and make your travel dreams a reality.</p>
      <p>Whether you're planning a relaxing beach vacation, an adventurous trek through the mountains, or a cultural tour of historic cities, we're here to assist you every step of the way.</p>
      <h3>Our Services</h3>
      <ul className='about__list' >
        <li>Flight booking</li>
        <li>Hotel reservations</li>
        <li>Group Tour packages</li>
        <li>Car rentals</li>
        <li>Travel insurance</li>
      </ul>
    </div>
    </div>
  );
};

export default AboutPage;