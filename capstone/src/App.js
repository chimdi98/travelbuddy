
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
//import Header from './components/Header/Header';
//import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import LogInPage from './pages/LogInPage/LogInPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AboutPage from './pages/AboutPage/AboutPage';
import Flights from './components/Flights/Flights';
import PackagesPage from './pages/PackagesPage/PackagesPage';
//import TravelDetailsPage from './pages/TravelDetailsPage/TravelDetailsPage';
import Contact from './components/Contact/Contact';
import TravellerPack from './components/TravellerPack/TravellerPack';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path= "/" element= {<HomePage/>}/>
          <Route path= "/login" element= {<LogInPage/>}/>
          <Route path= "/register" element= {<RegisterPage/>}/>
          <Route path= "/about" element= {<AboutPage/>}/>
          <Route path= "/flight" element= {<Flights/>}/>
          <Route path="/packages/:id" element={<PackagesPage/>}/>
          <Route path= "/packages" element={<PackagesPage/>}/>
          <Route path= "/contact" element = {<Contact />}/>
          <Route path= "/travel/:id" element={<TravellerPack/>}/>
        </Routes> 
        {/* <Footer />  */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
