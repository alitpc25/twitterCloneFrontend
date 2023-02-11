import React, { useState } from 'react';
import ViewedUser from '../models/ViewedUser';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { toastError, toastSuccess } from '../utils/toastMessages';
import { updateUserInfo } from '../redux/userSlice';
import { addToFollowings } from '../redux/followingsSlice';
import { getDownloadURLImage } from '../firebase/firebaseGetDownloadUrl';

export interface ISearchCardProps {
    data: ViewedUser;
    isFollowed: boolean;
}

export default function SearchCard(props: ISearchCardProps) {

    const navigate = useNavigate();
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch();

    const [imageUrl, setImageUrl] = useState("");
    getDownloadURLImage(props.data.imageId, setImageUrl);

    const sendFollowRequest = () => {
            axios.put(`/api/v1/users/follow`, 
            {
                sender: user.username,
                receiver: props.data.username
            },
            {
                headers: {
                    'Authorization': `Bearer ${user.jwtToken}`
                }
            }).then(() => {
                toastSuccess("You are following " + props.data.username);
                dispatch(addToFollowings(props.data))
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

    return (
        <div>
            <div className='flex justify-between items-center mt-3'>
                <div onClick={() => navigate("/profile/"+props.data.username)} className='flex flex-row cursor-pointer items-center'>
                    <div className='ml-4'>
                        <img className="rounded-full" style={{ objectFit: "contain", width: "50px", height: "50px" }} src={imageUrl}></img>
                    </div>
                    <div className='flex flex-col ml-4'>
                        <div className='flex justify-start items-center space-x-4'>
                            <p className='font-bold'>{props.data.username}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row'>
                    {
                        props.isFollowed ? 
                        <button disabled className="mr-4 bg-black text-white font-bold py-2 px-4 rounded-full">Followed</button>
                        :
                        <button onClick={sendFollowRequest} className="mr-4 bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-full">Follow</button>
                    }
                </div>
            </div>
            <hr className="border-1 mt-4"></hr>
        </div>
    );
}
