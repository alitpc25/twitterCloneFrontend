import * as React from 'react';
import ViewedUser from '../models/ViewedUser';
import { useNavigate } from 'react-router-dom';

export interface ISearchCardProps {
    data: ViewedUser;
}

export default function SearchCard(props: ISearchCardProps) {

    const navigate = useNavigate();

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div onClick={() => navigate("/profile/"+props.data.username)} className='flex flex-row cursor-pointer items-center'>
                    <div className='mt-4 ml-4'>
                        <img className="rounded-full" style={{ objectFit: "contain", width: "50px", height: "50px" }} src={`data:image/png;base64,${props.data.image}`}></img>
                    </div>
                    <div className='flex flex-col ml-4 mt-4'>
                        <div className='flex justify-start items-center space-x-4'>
                            <p className='font-bold'>{props.data.username}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-full">Follow</button>
                </div>
            </div>
            <hr className="border-1 mt-4"></hr>
        </div>
    );
}
