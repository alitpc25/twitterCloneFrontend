import * as React from 'react';
import Post from '../models/Post';
import { UserState } from '../redux/userSlice';

export interface IPostCardProps {
    post: Post
    user: UserState
}

export default function PostCard(props: IPostCardProps) {
    return (
        <div>
            <div className='flex'>
                <div className='mt-4 ml-4'>
                    <img className="rounded-full" style={{objectFit:"contain", width:"50px", height:"50px"}} src={`data:image/png;base64,${props.user.image}`}></img>
                </div>
                <div className='flex flex-col ml-4 mt-4'>
                    <div className='flex justify-start font-bold'>{props.user.username}</div>
                    <div className='flex justify-start m-4'>{props.post.text}</div>
                    <div className='flex flex-row justify-center'>
                        {props.post.image && <img width={"400px"} src={`data:image/png;base64,${props.post.image}`}></img>}
                    </div>
                </div>
            </div>
            <hr className="border-1 mt-10"></hr>
        </div>
    );
}
