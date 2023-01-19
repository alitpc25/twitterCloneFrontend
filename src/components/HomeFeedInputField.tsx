import React, { FunctionComponent } from "react";
import { FaRegUserCircle } from 'react-icons/fa'
import {BsImage} from "react-icons/bs"

interface HomeFeedInputFieldProps {
    
}
 
const HomeFeedInputField: FunctionComponent<HomeFeedInputFieldProps> = () => {
    return ( 
    <div className="mt-24">
    <form className="border-b-2">   
        <label htmlFor="text" className="mb-2 text-sm font-medium text-gray-900 sr-only">Tweet</label>
        <div className="relative flex flex-row">
            <div className="inset-y-0 left-0 flex items-start mt-4 pl-3 pointer-events-none">
                <FaRegUserCircle size={50} />
            </div>
            <div className="w-full">
                <textarea id="text" className="border-b-2 resize-y w-full h-32 p-4 pl-10 text-sm text-gray-900" placeholder="What's happening?" required />
                <div>
                    <BsImage className="m-4" size={18} />
                </div>
            </div>
            <button type="submit" className="text-white absolute right-4 bottom-2.5 rounded-full bg-sky-400 hover:bg-sky-500 font-medium text-sm px-4 py-2">Tweet</button>
        </div>
    </form>
    </div>);
}
 
export default HomeFeedInputField;