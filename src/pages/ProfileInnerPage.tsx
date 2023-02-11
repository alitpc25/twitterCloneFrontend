import React, { useState, useEffect } from "react";
import { FunctionComponent } from "react";
import { BsArrowLeft } from "react-icons/bs"
import PostInputField from "../components/PostInputField";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Post from "../models/Post";
import PostCard from "../components/PostCard";
import SetUpProfileModal from "../components/SetUpProfileModal";
import ViewedUser from "../models/ViewedUser";
import moment from "moment";
import LoadingComponent from "../components/LoadingComponent";
import { useParams } from "react-router-dom";
import { updateUserInfo } from "../redux/userSlice";
import { toastError, toastSuccess } from "../utils/toastMessages";
import { getDownloadURLImage } from "../firebase/firebaseGetDownloadUrl";

interface ProfileInnerPageProps {
}

const ProfileInnerPage: FunctionComponent<ProfileInnerPageProps> = () => {

    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    const { username } = useParams();

    const [showModal, setShowModal] = useState(false);

    const [posts, setPosts] = useState<Post[]>()
    const [viewedUser, setViewedUser] = useState<ViewedUser>();

    const [imageUrlViewedUser, setImageUrlViewedUser] = useState("");
    const [imageUrlUser, setImageUrlUser] = useState("");

    if(viewedUser?.imageId) {
        getDownloadURLImage(viewedUser.imageId, setImageUrlViewedUser)
    }

    if(user.imageId) {
        getDownloadURLImage(user.imageId, setImageUrlUser)
    }


    const getUserByUsername = (username: string) => {
        axios.get(`/api/v1/users/user?username=${username}`, {
            headers: {
                'Authorization': `Bearer ${user.jwtToken}`
            }
        }).then((res) => {
            setViewedUser(res.data);
        }).catch((e) => {
            console.log(e);
            if(e.response.status == 403) {
                dispatch(updateUserInfo({
                    username:null,
                    userId:null,
                    jwtToken:null,
                    loggedIn:false,
                    imageId:null
                }))
            }
        })
    }

    const getPostsByUsername = (username: string) => {
        axios.get(`/api/v1/posts?username=${username}`, {
            headers: {
                'Authorization': `Bearer ${user.jwtToken}`
            }
        }).then((res) => {
            setPosts(res.data)
        }).catch((e) => {
            console.log(e);
            if(e.response.status == 403) {
                dispatch(updateUserInfo({
                    username:null,
                    userId:null,
                    jwtToken:null,
                    loggedIn:false,
                    imageId:null
                }))
            }
        })
    }

    const sendFollowRequest = () => {
        if(viewedUser) {
            axios.put(`/api/v1/users/follow`, 
            {
                sender: user.username,
                receiver: viewedUser.username
            },
            {
                headers: {
                    'Authorization': `Bearer ${user.jwtToken}`
                }
            }).then(() => {
                toastSuccess("You are following " + viewedUser.username);
            }).catch((e) => {
                console.log(e);
                if(e.response.status == 403) {
                    dispatch(updateUserInfo({
                        username:null,
                        userId:null,
                        jwtToken:null,
                        loggedIn:false,
                        imageId:null
                    }))
                }
                toastError(e);
            })
        }
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
                        <p className="ml-2 text-xl font-bold ">{user.username === viewedUser.username ? user.username : viewedUser.username}</p>
                    </div>
                </a>
            </div>
        </nav>
        <div className="w-full h-48 bg-gradient-to-r from-cyan-500 to-blue-500 relative">
            {
                user.username === viewedUser.username ?
                <img onClick={() => setShowModal(true)} className={"rounded-full bg-gray-100 border-2 absolute -bottom-16 left-6 cursor-pointer"} style={{ objectFit: "contain", width: "128px", height: "128px" }} src={imageUrlUser != "" ? imageUrlUser : "/avatar.jpg"}></img>
                :
                <img className={`rounded-full bg-gray-100 border-2 absolute -bottom-16 left-6`} style={{ objectFit: "contain", width: "128px", height: "128px" }} src={imageUrlViewedUser != "" ? imageUrlViewedUser : "/avatar.jpg"}></img>
            }
        </div>
        {
            viewedUser.username == user.username ?
                <div className={`flex justify-end mr-4 mt-3`}>
                    <button className="box-border h-fit p-2 border-2 rounded-full " onClick={() => setShowModal(true)}><p>Set up profile</p></button>
                </div>
                :
                <div className={`flex justify-end mr-4 mt-3`}>
                    <button className="box-border h-fit p-2 border-2 rounded-full " onClick={sendFollowRequest}><p>Follow</p></button>
                </div> 
        }
        <div className="flex flex-col items-start justify-start mt-4 mb-4">
            <p className="ml-4 font-bold">{user.username === viewedUser.username ? user.username : viewedUser.username}</p>
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
            posts.map((p, i) => {
                return <div key={i}>
                    <PostCard key={i} post={p} user={user.username === viewedUser.username ? user : viewedUser}></PostCard>
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