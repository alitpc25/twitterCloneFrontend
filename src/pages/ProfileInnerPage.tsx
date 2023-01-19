import React from "react";
import { FunctionComponent } from "react";
import { UserState } from "../store/userSlice";
import { BsArrowLeft } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai"

interface ProfileInnerPageProps {
    user: UserState
}

const ProfileInnerPage: FunctionComponent<ProfileInnerPageProps> = (props: ProfileInnerPageProps) => {
    return (<div className="">
        <nav className="h-14 items-center bg-white w-full px-1.5 py-2 dark:bg-gray-900 flex flex-row z-20 border-b border-gray-200 dark:border-gray-600">
            <div>
                <BsArrowLeft className="ml-4" size={24} />
            </div>
            <div>
                <a href="/profile">
                    <div className="flex md:order-1 text-start  ">
                        <p className="ml-2 text-xl font-bold ">{props.user.username}</p>
                    </div>
                </a>
            </div>
        </nav>
        <div className="w-full h-48 bg-gradient-to-r from-cyan-500 to-blue-500 relative">
            <AiOutlineUser size={128} className="rounded-full bg-gray-100 border-4 absolute -bottom-16 left-6" />
        </div>
        <div className={`flex justify-end`}>
            <div className="box-border h-fit mr-4 mt-3 p-2 border-2 rounded-full ">
                <button><p>Set up profile</p></button>
            </div>
        </div>
        <div className="flex justify-start mt-4">
            <p className="ml-4">{props.user.username}</p>
        </div>
        
    </div>);
}

export default ProfileInnerPage;