import React, { useState, useEffect } from "react";
import { FunctionComponent } from "react";
import { BsArrowLeft } from "react-icons/bs"
import PostInputField from "../components/PostInputField";
import axios from "axios";
import { useAppSelector } from "../redux/hooks";
import Post from "../models/Post";
import PostCard from "../components/PostCard";
import SetUpProfileModal from "../components/SetUpProfileModal";
import ViewedUser from "../models/ViewedUser";
import moment from "moment";
import LoadingComponent from "../components/LoadingComponent";
import { useParams } from "react-router-dom";

interface ProfileInnerPageProps {
}

const ProfileInnerPage: FunctionComponent<ProfileInnerPageProps> = () => {

    const user = useAppSelector(state => state.user)

    const { username } = useParams();

    const [showModal, setShowModal] = useState(false);

    const [posts, setPosts] = useState<Post[]>()
    const [viewedUser, setViewedUser] = useState<ViewedUser>();

    const getUserByUsername = (username: string) => {
        axios.get(`/api/v1/users/user?username=${username}`, {
            headers: {
                'Authorization': `Bearer ${user.jwtToken}`
            }
        }).then((res) => {
            console.log(res.data);
            setViewedUser(res.data);
        }).catch((e) => {
            console.log(e);
        })
    }

    const getPostsByUsername = (username: string) => {
        axios.get(`/api/v1/posts?username=${username}`, {
            headers: {
                'Authorization': `Bearer ${user.jwtToken}`
            }
        }).then((res) => {
            setPosts(res.data)
            console.log(res.data);
        }).catch((e) => {
            console.log(e);
        })
    }

    useEffect(() => {
        getUserByUsername(username!)
        getPostsByUsername(username!);
    }, [])

    if (!viewedUser) return (
        <LoadingComponent />
    );

    return (<div>
        <nav className="h-14 items-center bg-white w-full px-1.5 py-2 dark:bg-gray-900 flex flex-row z-20 border-b border-gray-200 dark:border-gray-600">
            <div>
                <BsArrowLeft className="ml-4" size={24} />
            </div>
            <div>
                <a href="/profile">
                    <div className="flex md:order-1 text-start  ">
                        <p className="ml-2 text-xl font-bold ">{viewedUser.username}</p>
                    </div>
                </a>
            </div>
        </nav>
        <div className="w-full h-48 bg-gradient-to-r from-cyan-500 to-blue-500 relative">
            <img onClick={() => user.username == viewedUser.username ? setShowModal(true) : null} className={`rounded-full bg-gray-100 border-2 absolute -bottom-16 left-6 ${viewedUser.username == user.username ? "cursor-pointer" : ""}`} style={{ objectFit: "contain", width: "128px", height: "128px" }} src={`data:image/png;base64,${viewedUser.image}`}></img>
        </div>
        {
            viewedUser.username == user.username ?
                <div className={`flex justify-end mr-4 mt-3`}>
                    <button className="box-border h-fit p-2 border-2 rounded-full " onClick={() => setShowModal(true)}><p>Set up profile</p></button>
                </div>
                : 
                <div className="mt-20"></div>
        }
        <div className="flex flex-col items-start justify-start mt-4 mb-4">
            <p className="ml-4 font-bold">{viewedUser.username}</p>
            <p className="ml-4">Joined at {moment(viewedUser?.createdDate).format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
        <hr className="border-1"></hr>
        {
            viewedUser.username == user.username ?
                <div>
                    <PostInputField></PostInputField>
                </div>
                : null
        }
        <div>
            {
                posts ?
            posts.map(p => {
                return <div>
                    <PostCard post={p} user={viewedUser}></PostCard>
                </div>
            }) : 
                <LoadingComponent />
            }
        </div>

        {showModal ? (
            <SetUpProfileModal setShowModal={setShowModal} />
        ) : null}

    </div>);
}

export default ProfileInnerPage;