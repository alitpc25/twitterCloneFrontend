import React, { useState, useEffect } from "react";
import { FunctionComponent } from "react";
import { UserState } from "../redux/userSlice";
import { BsArrowLeft } from "react-icons/bs"
import PostInputField from "../components/PostInputField";
import axios from "axios";
import { useAppSelector } from "../redux/hooks";
import Post from "../models/Post";
import PostCard from "../components/PostCard";
import SetUpProfileModal from "../components/SetUpProfileModal";

interface ProfileInnerPageProps {
    user: UserState
}

const ProfileInnerPage: FunctionComponent<ProfileInnerPageProps> = (props: ProfileInnerPageProps) => {

    const user = useAppSelector(state => state.user)

    const [showModal, setShowModal] = useState(false);

    const [posts, setPosts] = useState<Post[]>([])

    const getPostsByUserId = () => {
        axios.get(`/api/v1/posts?userId=${user.userId}`, {
            headers: {
              'Authorization': `Bearer ${user.jwtToken}` 
            }}).then((res) => {
                setPosts(res.data)
                console.log(res.data);
            }).catch((e) => {
                console.log(e);
            })
    }

    useEffect(() => {
        getPostsByUserId();
    }, [])
    

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
        <div onClick={() => setShowModal(true)} className="w-full h-48 bg-gradient-to-r from-cyan-500 to-blue-500 relative">
            <img className="rounded-full bg-gray-100 border-2 absolute -bottom-16 left-6" width={"128px"} src={`data:image/png;base64,${user.image}`}></img>
        </div>
        <div className={`flex justify-end`}>
            <div className="box-border h-fit mr-4 mt-3 p-2 border-2 rounded-full ">
                <button onClick={() => setShowModal(true)}><p>Set up profile</p></button>
            </div>
        </div>
        <div className="flex justify-start mt-4 mb-4">
            <p className="ml-4">{props.user.username}</p>
        </div>
        <hr className="border-1"></hr>
        <div>
            <PostInputField></PostInputField>
        </div>
        <div>
            {posts.map(p => {
                return <div>
                    <PostCard post={p} user={user}></PostCard>
                </div>
            })}
        </div>

        {showModal ? (
            <SetUpProfileModal setShowModal={setShowModal} />
      ) : null}

    </div>);
}

export default ProfileInnerPage;