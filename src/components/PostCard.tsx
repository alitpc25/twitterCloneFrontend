import * as React from 'react';
import Post from '../models/Post';
import moment from 'moment';
import ViewedUser from '../models/ViewedUser';

export interface IPostCardProps {
    post: Post
    user: ViewedUser
}

export default function PostCard(props: IPostCardProps) {
    return (
        <div>
            <div className='flex'>
                <div className='mt-4 ml-4'>
                    <img className="rounded-full" style={{objectFit:"contain", width:"50px", height:"50px"}} src={`data:image/png;base64,${props.user.image}`}></img>
                </div>
                <div className='flex flex-col ml-4 mt-4'>
                    <div className='flex justify-start items-center space-x-4'>
                        <p className='font-bold'>{props.user.username}</p>
                        <p className='text-xs'>{moment(props.post.createdDate).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    </div>
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
