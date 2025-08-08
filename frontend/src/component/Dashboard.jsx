import { faBox, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
    return(
        <div className="bg-teal-400 p-6 h-screen font-mono">
            {/* Overview */}
            <div className="flex flex-col gap-2 bg-white rounded-md shadow-md shadow-gray-600 p-2">
                <h1 className="text-2xl">Overview</h1>
                <div className="flex flex-row justify-evenly gap-2">
                    <div className="flex flex-col border-2 border-black rounded-md text-xl py-2 px-8">
                        <p>22 <FontAwesomeIcon icon={faTruck} /></p>
                        <p>Total Trucks</p>
                    </div>
                    <div className="flex flex-col border-2 border-black rounded-md text-xl py-2 px-8">
                        <p>22 <FontAwesomeIcon icon={faBox} /></p>
                        <p>Total Items</p>
                    </div>
                    <div className="flex flex-col border-2 border-black rounded-md text-xl py-2 px-8">
                        <p>22 <FontAwesomeIcon icon={faTruck} /></p>
                        <p>Total Trucks</p>
                    </div>
                    <div className="flex flex-col border-2 border-black rounded-md text-xl py-2 px-8">
                        <p>22 <FontAwesomeIcon icon={faTruck} /></p>
                        <p>Total Trucks</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;

