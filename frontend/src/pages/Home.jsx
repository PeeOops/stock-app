import { faBell, faLayerGroup, faList, faRightFromBracket, faTruck, faUser, faWarehouse } from "@fortawesome/free-solid-svg-icons";
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
                    <div className="flex flex-col justify-center mt-8 gap-4 w-full">
                        <div id="Dashboard" onClick={handleClickNavigation} role="button" className={`flex flex-row items-center gap-2 hover:bg-teal-400 hover:text-slate-800 cursor-pointer py-1 px-6 md:px-12 ${navigation === "Dashboard" && "bg-teal-400 text-slate-800"} `}>
                            <FontAwesomeIcon icon={faLayerGroup} />
                            <p>Dashboard</p>
                        </div>
                        <div id="Trucks" onClick={handleClickNavigation} role="button" className={`flex flex-row items-center gap-2 hover:bg-teal-400 hover:text-slate-800 cursor-pointer py-1 px-6 md:px-12 ${navigation === "Trucks" && "bg-teal-400 text-slate-800"} `}>
                            <FontAwesomeIcon icon={faList} />
                            <p>Trucks</p>
                        </div>
                        <div id="Inventories" onClick={handleClickNavigation} role="button" className={`flex flex-row items-center gap-2 hover:bg-teal-400 hover:text-slate-800 cursor-pointer py-1 px-6 md:px-12 ${navigation === "Inventories" && "bg-teal-400 text-slate-800"} `}>
                            <FontAwesomeIcon icon={faWarehouse} />
                            <p>Inventories</p>
                        </div>
                        <div id="Suppliers" onClick={handleClickNavigation} role="button" className={`flex flex-row items-center gap-2 hover:bg-teal-400 hover:text-slate-800 cursor-pointer py-1 px-6 md:px-12 ${navigation === "Suppliers" && "bg-teal-400 text-slate-800"} `}>
                            <FontAwesomeIcon icon={faUser} />
                            <p>Suppliers</p>
                        </div>
                     </div>
                     <div></div>
                </div>
                {/* Content */}
                <div className="flex flex-col">
                    {/* Header */}
                    <div className="flex flex-row items-center justify-between border-b-3 border-gray-400 p-4">
                        <h1 className="text-xl">Welcome back, PeeDegrees!</h1>
                        <div className="flex flex-row items-center gap-4">
                            <FontAwesomeIcon icon={faBell} className="text-lg cursor-pointer" arial-label="Notification" />
                            <FontAwesomeIcon icon={faRightFromBracket} className="text-lg cursor-pointer" arial-label="Logout" />
                        </div>
                        
                    </div>
                    {/* Components */}
                    {
                        navigation === "Dashboard" ? <Dashboard /> : navigation === "Trucks" ? <Trucks /> : navigation === "Inventories" ? <Inventories /> : navigation === "Suppliers" ? <Suppliers /> : <p>Error</p>
                    }
                </div>

            </div>
        </>
    )  
}

export default Home;