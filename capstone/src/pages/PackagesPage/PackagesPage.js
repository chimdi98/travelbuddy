import Packages from "../../components/Packages/Packages";
import "./PackagesPage.scss"
import Header from "../../components/Header/Header";
import CityPackage from "../../components/CityPackage/CityPackage";
import { useParams } from "react-router-dom";

const PackagesPage = () => {
    const {id} =useParams();
    console.log(id)
    return(
     <div className="packages">
        <Header />
        <div className="packages__layout" >
            <Packages 
            id= {id}/>
            <div>
            <CityPackage 
             id= {id || '1'}/>
             {/* <Traveller /> */}
             </div>

        </div>
     </div>
    )
}
export default PackagesPage;