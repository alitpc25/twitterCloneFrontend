import React from "react";
import { FunctionComponent } from "react";
import { UserState } from "../store/userSlice";

interface ProfileInnerPageProps {
    user: UserState
}
 
const ProfileInnerPage: FunctionComponent<ProfileInnerPageProps> = (props: ProfileInnerPageProps) => {
    return ( <div className="">
            <nav className="bg-white w-full px-1.5 py-2 dark:bg-gray-900 flex-initial z-20 border-b border-gray-200 dark:border-gray-600">
            <div className="col-start-1 col-end-7">
                <a href="/">
                    <div className="flex md:order-1 text-start h-12">
                        <p className="text-xl font-bold ">{props.user.username}</p>
                    </div>
                </a>
            </div>
        </nav>
    </div> );
}
 
export default ProfileInnerPage;