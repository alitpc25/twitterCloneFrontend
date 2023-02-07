import * as React from 'react';

export interface ISetUsernameStepProps {
    username: string | null,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SetUsernameStep ({username, handleInputChange}: ISetUsernameStepProps) {

  return (
    <div>
      <div className='flex flex-col justify-center items-center space-y-8'>
        <div className='space-y-4'>
          <p className='text-3xl font-bold mt-4'>Username</p>
          <input value={username ? username : ""} onChange={(e) => handleInputChange(e)} id="text" className="mt-2 border-b-2 resize-y w-full p-4 text-sm text-gray-900" placeholder="Enter new username" required />
        </div>
      </div>
    </div>
  );
}
