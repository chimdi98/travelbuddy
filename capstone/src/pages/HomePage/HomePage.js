import TravelPage from "../../components/TravelPage/TravelPage";
import Header from "../../components/Header/Header";
import Popular from "../../components/Popular/Popular";
import Footer from "../../components/Footer/Footer";
const HomePage = () => {
    return(
        <div className="homepage" >
            <Header />
            <TravelPage />
            <Popular/> 
            {/* <Footer /> */}
            
        </div>
    )
}
export default HomePage;