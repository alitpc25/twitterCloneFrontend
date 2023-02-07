import * as React from 'react';

export interface ISetProfileImageStepProps {
  image: string | null,
  handleImageInput: (e: React.FormEvent<HTMLInputElement>) => void
}

export default function SetProfileImageStep({ handleImageInput, image }: ISetProfileImageStepProps) {

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
                image?.startsWith("blob") ? 
                  <img style={{objectFit:"contain", width:"300px", height:"300px"}} className='rounded-full' src={image!}></img>
                :
                  <img style={{objectFit:"contain", width:"300px", height:"300px"}} className='rounded-full' src={`data:image/png;base64,${image}`}></img> 
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
