import React, { useState } from 'react';
import { getDownloadURLImage } from '../firebase/firebaseGetDownloadUrl';

export interface ISetProfileImageStepProps {
  imageId: string | null,
  handleImageInput: (e: React.FormEvent<HTMLInputElement>) => void
}

export default function SetProfileImageStep({ handleImageInput, imageId }: ISetProfileImageStepProps) {

  const [imageUrlUser, setImageUrlUser] = useState("");

  if(imageId) {
      getDownloadURLImage(imageId, setImageUrlUser);
  }

  return (
    <div>
      <div className='flex flex-col justify-center items-center space-y-8'>
        <div className='space-y-4'>
          <p className='text-3xl font-bold mt-4'>Pick a profile picture</p>
          <p>Have a favorite selfie? Upload it now.</p>
        </div>
        <div>
          <label htmlFor="user-image-change" className="custom-file-upload">
            <div className="w-fit p-2 bg-gray-100 rounded-full m-2 cursor-pointer hover:bg-gray-200">
              {
                <img style={{objectFit:"contain", width:"300px", height:"300px"}} className='rounded-full' src={imageUrlUser ? imageUrlUser : "/avatar.jpg"}></img> 
              }
            </div>
          </label>
          <input id="user-image-change" type="file"
            onChange={(e) => {
              handleImageInput(e)
            }} />
        </div>
      </div>
    </div>
  );
}
