import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Suppliers = () => {
    return(
        <div className="flex flex-col gap-4 h-full bg-gray-300 p-6 font-mono">
            <div className="flex flex-row items-center justify-between">
                <h1 className="text-xl">Suppliers</h1>
                <div role="button" className="flex flex-row items-center gap-1 bg-white shadow-md p-2 rounded-sm"><FontAwesomeIcon icon={faAdd} /> Add Supplier</div>
            </div>
            <table class="table-auto border-collapse border border-black bg-white shadow-md shadow-gray-400">
                <thead>
                    <tr className="text-center">
                        <th className="border border-black">No.</th>
                        <th className="border border-black">Name</th>
                        <th className="border border-black">Company</th>
                        <th className="border border-black">Phone Number</th>
                        <th className="border border-black">Options</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td className="border border-black">1</td>
                        <td className="border border-black">Makarov</td>
                        <td className="border border-black">PT Damai Sementara</td>
                        <td className="border border-black">0812-4512-5555</td>
                        <td className="border border-black">
                            <div className="flex flex-row items-center justify-evenly">
                                <button className="cursor-pointer">Edit</button>
                                <button className="cursor-pointer">Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-center">
                        <td className="border border-black">2</td>
                        <td className="border border-black">Makarov</td>
                        <td className="border border-black">PT Damai Sementara</td>
                        <td className="border border-black">0812-4512-5555</td>
                        <td className="border border-black">
                            <div className="flex flex-row items-center justify-evenly">
                                <button className="cursor-pointer">Edit</button>
                                <button className="cursor-pointer">Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-center">
                        <td className="border border-black">3</td>
                        <td className="border border-black">Makarov</td>
                        <td className="border border-black">PT Damai Sementara</td>
                        <td className="border border-black">0812-4512-5555</td>
                        <td className="border border-black">
                            <div className="flex flex-row items-center justify-evenly">
                                <button className="cursor-pointer">Edit</button>
                                <button className="cursor-pointer">Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-center">
                        <td className="border border-black">4</td>
                        <td className="border border-black">Makarov</td>
                        <td className="border border-black">PT Damai Sementara</td>
                        <td className="border border-black">0812-4512-5555</td>
                        <td className="border border-black">
                            <div className="flex flex-row items-center justify-evenly">
                                <button className="cursor-pointer">Edit</button>
                                <button className="cursor-pointer">Delete</button>
                            </div>
                        </td>
                    </tr>

                    
                </tbody>
            </table>
        </div>
    )
}

export default Suppliers;