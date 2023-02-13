import React, { useState } from 'react';
import { getDownloadURLImage } from '../firebase/firebaseGetDownloadUrl';

export interface IMessageUserListCardProps {
    username: string,
    imageId: string,
    lastMessage: string
}

export default function MessageUserListCard (props: IMessageUserListCardProps) {

    const [imageUrl, setImageUrl] = useState("");
    getDownloadURLImage(props.imageId, setImageUrl);

  return (
    <div>
        <div>
            <div className='flex justify-between items-center mt-3'>
                <div onClick={() => console.log("oncliccck")} className='flex flex-row cursor-pointer items-center'>
                    <div className='ml-4'>
                        <img className="rounded-full" style={{ objectFit: "contain", width: "50px", height: "50px" }} src={props.imageId !== null ? imageUrl : "/avatar.jpg"}></img>
                    </div>
                    <div className='flex flex-col ml-4'>
                        <div className='flex justify-start items-center space-x-4'>
                            <p className='font-bold'>{props.username}</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-1 mt-4"></hr>
        </div>
    </div>
  );
}
