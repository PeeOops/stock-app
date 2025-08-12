import { faBox, faBoxesStacked, faCircleExclamation, faPeopleCarryBox, faSquareCheck, faTruck, faTruckFast, faTruckMonster } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
    return(
        <div className="flex flex-col gap-4 h-full bg-gray-300 p-6 font-mono">
            {/* Overview */}
            <div className="grid grid-cols-[1fr_1fr] gap-8">
                {/* Inventory Overview */}
                <div className="flex flex-col gap-2 bg-white rounded-md shadow-md shadow-gray-600 p-3">
                    <h1 className="text-xl">Inventory Overview</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-row items-center gap-2">
                            <FontAwesomeIcon icon={faBoxesStacked} className="text-2xl p-1.5 bg-gray-200 text-gray-800 rounded-sm" />
                            <div className="flex flex-col">
                                <p className="text-sm">Total Stocks</p>
                                <p className="text-lg font-bold">36</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <FontAwesomeIcon icon={faPeopleCarryBox} className="text-2xl p-1.5 bg-blue-200 text-blue-800 rounded-sm" />
                            <div className="flex flex-col">
                                <p className="text-sm">Most used</p>
                                <p className="text-lg font-bold">Aki baterai</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <FontAwesomeIcon icon={faSquareCheck} className="text-2xl p-1.5 bg-red-200 text-red-800 rounded-sm" />
                            <div className="flex flex-col">
                                <p className="text-sm">Out of Stock</p>
                                <p className="text-lg font-bold">10</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trucks overview */}
                <div className="flex flex-col gap-2 bg-white rounded-md shadow-md shadow-gray-600 p-3">
                    <h1 className="text-xl">Trucks Overview</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-row items-center gap-2">
                            <FontAwesomeIcon icon={faTruck} className="text-2xl p-1.5 bg-gray-200 text-gray-800 rounded-sm" />
                            <div className="flex flex-col">
                                <p className="text-sm">Total Trucks</p>
                                <p className="text-lg font-bold">24</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <FontAwesomeIcon icon={faTruckFast} className="text-2xl p-1.5 bg-green-200 text-green-800 rounded-sm" />
                            <div className="flex flex-col">
                                <p className="text-sm">Active Trucks</p>
                                <p className="text-lg font-bold">5</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <FontAwesomeIcon icon={faTruckMonster} className="text-2xl p-1.5 bg-yellow-200 text-yellow-800 rounded-sm" />
                            <div className="flex flex-col">
                                <p className="text-sm">Maintenance Trucks</p>
                                <p className="text-lg font-bold">2</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <FontAwesomeIcon icon={faCircleExclamation} className="text-2xl p-1.5 bg-red-200 text-red-800 rounded-sm" />
                            <div className="flex flex-col">
                                <p className="text-sm">Inactive Trucks</p>
                                <p className="text-lg font-bold">25</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top 5 used items + Alerts */}
            <div className="grid grid-cols-[1fr_1fr] gap-8">
                {/* Top 5 used items */}
                <div className="flex flex-col gap-2 bg-white rounded-md shadow-md shadow-gray-600 p-3">
                    <h1 className="text-xl">Top 5 used items</h1>
                    <ul className="list-decimal pl-8">
                        <li>Air baterai A</li>
                        <li>Air baterai B</li>
                        <li>Air baterai C</li>
                        <li>Air baterai D</li>
                        <li>Air baterai E</li>
                    </ul>
                </div>

                {/* Low Stock Reminder */}
                <div className="flex flex-col gap-2 bg-white rounded-md shadow-md shadow-gray-600 p-3">
                    <h1 className="text-xl">Low Stock Reminder</h1>
                    <ul className="list-disc pl-8">
                        <li>Air baterai A</li>
                        <li>Air baterai B</li>
                        <li>Air baterai C</li>
                        <li>Air baterai D</li>
                        <li>Air baterai E</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Dashboard;

