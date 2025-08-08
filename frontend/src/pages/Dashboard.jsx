import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
    return(
        <>
            <div className="grid grid-cols-[1fr_3fr] h-screen font-mono">
                {/* Navigation panel */}
                <div className="flex flex-col items-center bg-slate-800 text-white pt-8">
                    <FontAwesomeIcon icon={faTruck} className="text-3xl mb-4" />
                    <p>PeeDegrees</p>
                    <p className="text-sm">peedegrees@gmail.com</p>
                </div>
                {/* Content */}
                <div className="bg-white">
                    <p>tes</p>
                </div>
            </div>
        </>
    )  
}

export default Dashboard;