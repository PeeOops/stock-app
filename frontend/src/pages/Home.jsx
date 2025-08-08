import { faLayerGroup, faList, faTruck, faUser, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dashboard from "../component/Dashboard";
import { useState } from "react";
import Trucks from "../component/Trucks";
import Inventories from "../component/Inventories";
import Suppliers from "../component/Suppliers";

const Home = () => {

    // State declarations
    const [navigation, setNavigation] = useState("Dashboard");

    // Handle click navigation
    const handleClickNavigation = (e) => {
        setNavigation(e.currentTarget.id);
    }

    return(
        <>
            <div className="grid grid-cols-[1fr_3fr] h-screen font-mono">
                {/* Navigation panel */}
                <div className="flex flex-col items-center bg-slate-800 text-white pt-8">
                    <FontAwesomeIcon icon={faTruck} className="text-3xl mb-4" />
                    <p>PeeDegrees</p>
                    <p className="text-sm">peedegrees@gmail.com</p>

                    {/* Navigation buttons */}
                    <div className="flex flex-col justify-center ml-16 mt-8 gap-4 w-full">
                        <div id="Dashboard" onClick={handleClickNavigation} role="button" className="flex flex-row items-center gap-2 hover:bg-white hover:text-slate-800 cursor-pointer p-1 rounded-sm">
                            <FontAwesomeIcon icon={faLayerGroup} />
                            <p>Dashboard</p>
                        </div>
                        <div id="Trucks" onClick={handleClickNavigation} role="button" className="flex flex-row items-center gap-2 hover:bg-white hover:text-slate-800 cursor-pointer p-1 rounded-sm">
                            <FontAwesomeIcon icon={faList} />
                            <p>Trucks</p>
                        </div>
                        <div id="Inventories" onClick={handleClickNavigation} role="button" className="flex flex-row items-center gap-2 hover:bg-white hover:text-slate-800 cursor-pointer p-1 rounded-sm">
                            <FontAwesomeIcon icon={faWarehouse} />
                            <p>Inventories</p>
                        </div>
                        <div id="Suppliers" onClick={handleClickNavigation} role="button" className="flex flex-row items-center gap-2 hover:bg-white hover:text-slate-800 cursor-pointer p-1 rounded-sm">
                            <FontAwesomeIcon icon={faUser} />
                            <p>Suppliers</p>
                        </div>
                     </div>
                     <div></div>
                </div>
                {/* Content */}
                {
                    navigation === "Dashboard" ? <Dashboard /> : navigation === "Trucks" ? <Trucks /> : navigation === "Inventories" ? <Inventories /> : navigation === "Suppliers" ? <Suppliers /> : <p>Error</p>
                }
            </div>
        </>
    )  
}

export default Home;