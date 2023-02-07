import * as React from 'react';
import PostInputField from './PostInputField';

export interface ICreateTweetModalProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateTweetModal ({setShowModal}: ICreateTweetModalProps) {
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
                            <h3 className="text-3xl font-semibold">
                                Share a tweet
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
                        <div className='w-[500px] h-fit'>
                            <PostInputField setShowModal={setShowModal} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
  );
}
