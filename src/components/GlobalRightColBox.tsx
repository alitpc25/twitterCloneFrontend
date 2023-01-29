import React, { KeyboardEvent } from "react";
import { FunctionComponent } from "react";
import { BsSearch } from "react-icons/bs"

interface GlobalRightColBoxProps {

}

const GlobalRightColBox: FunctionComponent<GlobalRightColBoxProps> = () => {

    const onKeyPressed = (e: KeyboardEvent<HTMLFormElement>) =>  {
        if (e.key === "Enter") {
            e.preventDefault()
            console.log("a");
          }
    }

    return (
        <div className="h-max flex-1">
        <form className="flex items-center justify-center mt-2" onKeyDown={(e) => onKeyPressed(e)} tabIndex={0}>
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-4/5">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <BsSearch />
                </div>
                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
            </div>
        </form>
        </div>
    );
}

export default GlobalRightColBox;