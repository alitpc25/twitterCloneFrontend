import React, { KeyboardEvent, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { RiMailAddLine } from 'react-icons/ri';

export interface IMessagePageProps {
}

export default function MessagePage() {

    const [searchKey, setSearchKey] = useState("");

    const onKeyPressed = (e: KeyboardEvent<HTMLFormElement>) => {
        if (e.key === "Enter") {
            e.preventDefault()
            console.log(searchKey);
        }
    }

    // const [messagedUsers, setMessagedUsers] = useState();
    // const [selectedUser, setSelectedUser] = useState();

    return (
        <div className="flex flex-row divide-x h-screen flex mr-20">
            <div className="basis-1/4 flex-1">
                <div className='flex justify-between m-4'>
                    <h3 className='font-bold text-xl'>Messages</h3>
                    <div className='flex flex-row items-center'>
                        <div className='p-1.5 rounded-full cursor-pointer hover:bg-gray-200'>
                            <FiSettings size={20} />
                        </div>
                        <div className='p-1.5 rounded-full cursor-pointer hover:bg-gray-200'>
                            <RiMailAddLine size={20} />
                        </div>
                    </div>
                </div>
                <div className="h-max flex-1">
                    <form className="flex items-center justify-center mt-2" onKeyDown={(e) => onKeyPressed(e)} tabIndex={0}>
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-4/5">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                <BsSearch />
                            </div>
                            <input
                                onChange={(e) => setSearchKey(e.target.value)}
                                type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Direct Messages" required />
                        </div>
                    </form>
                </div>
            </div>
            <div>
                //MessagedUsersList
            </div>
            <div className="basis-2/4 flex-1">
        //Messaging
            </div>
        </div>
    );
}
