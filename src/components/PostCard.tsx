import * as React from 'react';
import Post from '../models/Post';
import { UserState } from '../redux/userSlice';
import { FaRegUserCircle } from 'react-icons/fa';

export interface IPostCardProps {
    post: Post
    user: UserState
}

export default function PostCard(props: IPostCardProps) {
    return (
        <div>
            <div className='flex'>
                <div className='mt-4 ml-4'>
                    <FaRegUserCircle size={50} />
                </div>
                <div className='flex flex-col ml-4 mt-4'>
                    <div className='flex justify-start font-bold'>{props.user.username}</div>
                    <div className='flex justify-start m-4'>{props.post.text}</div>
                    <div className='flex flex-row justify-center'>
                        <img width={"fit-content"} src={`data:image/png;base64,${props.post.image}`}></img>
                    </div>
                </div>
            </div>
            <hr className="border-1 mt-10"></hr>
        </div>
    );
}
