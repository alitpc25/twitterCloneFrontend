import * as React from 'react';
import { useState } from "react";
import { useAppSelector } from '../redux/hooks';
import SetProfileImageStep from './SetProfileImageStep';
import SetUsernameStep from './SetUsernameStep';

export interface ISetUpProfileProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SetUpProfile({ setShowModal }: ISetUpProfileProps) {

    const user = useAppSelector(state => state.user)

    const [image, setImage] = useState<string | null>(user.image);
    const [username, setUsername] = useState<string | null>(user.username);
    //const [imageFile, setImageFile] = useState<File>();

    const [step, setStep] = useState<number>(1);

    const handleImageInput = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            setImage(URL.createObjectURL(e.currentTarget.files[0]));
            //setImageFile(e.currentTarget.files[0])
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    /*
    const handleSubmitPost = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        let data = {
            text: text,
            image: imageFile,
            username: user.username
        }
        axios.post('/api/v1/posts', data, {
            headers: {
                'Authorization': `Bearer ${user.jwtToken}`,
                "Content-type": "multipart/form-data",
            }
        })
            .then((res) => {
                console.log(res)
                setText("")
                setImage("")
            }).catch((e) => {
                console.log(e);
            })
    }
    */

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <button
                                className="p-1 bg-transparent border-0 text-black text-3xl leading-none font-semibold outline-none focus:outline-none"
                                disabled={step<2}
                                onClick={() => setStep(step-1)}
                            >
                                <span className="">
                                    {"<"}
                                </span>
                            </button>
                            <h3 className="text-3xl font-semibold">
                                Set up profile
                            </h3>
                            <button
                                className="p-1 bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="">
                                    x
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className='w-[500px] h-[500px]'>
                        {
                            {
                                1: <SetProfileImageStep image={image} handleImageInput={handleImageInput} />,
                                2: <SetUsernameStep username={username} handleInputChange={handleInputChange} />,
                                3: <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Save Changes
                                </button>
                            </div>
                              }[step]
                        }
                        </div>
                        {/*footer*/}
                        <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setStep(step+1)}
                                >
                                    Next
                                </button>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}
