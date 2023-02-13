import axios from 'axios';
import React, {useState} from 'react';
import { UserState } from '../redux/userSlice';
import { toastError, toastSuccess } from '../utils/toastMessages';

export interface IPasswordChangePageProps {
    user: UserState
}

export default function PasswordChangePage ({user}: IPasswordChangePageProps) {

    interface FormDataType {oldPassword:string, newPassword: string}
    const formData: FormDataType = { oldPassword: "", newPassword: "" }
    const [requestBody, setRequestBody] = useState<FormDataType>(formData)

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setRequestBody({ ...requestBody, [name]: value })
    }

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        axios.put('/api/v1/users/changeCredentials/'+user.userId, {
            oldPassword: requestBody.oldPassword,
            newPassword: requestBody.newPassword
        }, 
        {
            headers: {
                'Authorization': `Bearer ${user.jwtToken}`,
            }  
        })
      .then(() => {
        toastSuccess("Password successfully updated.");
      })
      .catch(function (error) {
        console.log(error);
        toastError(error.response.data);
      });
    }

  return (
    <div className='flex items-center justify-center'>
      <form className="mt-8 space-y-6 w-96" onSubmit={submitForm} method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="oldPassword" className="sr-only">Old password</label>
              <input id="oldPassword" name="oldPassword" type="password" onChange={(e) => inputChangeHandler(e)} required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="Old password" />
            </div>
            <div>
              <label htmlFor="newPassword" className="sr-only">New password</label>
              <input id="newPassword" name="newPassword" type="password" onChange={(e) => inputChangeHandler(e)} required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="New password" />
            </div>
          </div>

          <div className='flex justify-center'>
            <button type="submit" className="group relative flex w-fit justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-white-500 group-hover:text-white-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                </svg>
              </span>
              <div className='ml-5'>Change credentials</div>
            </button>
          </div>
        </form>
    </div>
  );
}
