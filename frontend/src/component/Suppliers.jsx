import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Suppliers = () => {
    return(
        <div className="flex flex-col gap-4 h-full bg-gray-300 p-6 font-mono">
            <div className="flex flex-row items-center justify-between">
                <h1 className="text-xl">Suppliers</h1>
                <div role="button" className="flex flex-row items-center gap-1 bg-white shadow-md p-2 rounded-sm"><FontAwesomeIcon icon={faAdd} /> Add Supplier</div>
            </div>
        </div>
    )
}

export default Suppliers;