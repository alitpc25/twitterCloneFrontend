import { FunctionComponent, useState } from "react";
import User from "../models/User";
import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { updateUserInfo } from "../redux/userSlice";
import axios from "axios";
import { Link } from "react-router-dom";

interface RegisterProps {
    
}
 
const Register: FunctionComponent<RegisterProps> = () => {

    const dispatch = useAppDispatch()

    interface FormDataType {email:string, username: string, password: string}
    const formData: FormDataType = {email: "", username: "", password: ""}
    const [requestBody, setRequestBody] = useState<FormDataType>(formData)

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setRequestBody({...requestBody, [name]: value})
    }
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let userToRegister = new User(requestBody.email, requestBody.username, requestBody.password);
        axios.post('/api/v1/auth/register', userToRegister)
        .then((response) => {
          let userState = {
            username: requestBody.username,
            userId: response.data.userId,
            jwtToken: response.data.token,
            loggedIn: true
          }
          const resultOfAction = dispatch(updateUserInfo(userState))
          console.log(resultOfAction)
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return (        
    <div className="flex min-h-full items-center justify-center py-40 px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Register and connect world</h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={submitForm} method="POST">
        <input type="hidden" name="remember" value="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" onChange={(e)=>inputChangeHandler(e)} autoComplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label htmlFor="username" className="sr-only">Username</label>
            <input id="username" name="username" type="username" onChange={(e)=>inputChangeHandler(e)} autoComplete="username" required className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="Username" />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input id="password" name="password" type="password" onChange={(e)=>inputChangeHandler(e)} autoComplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="Password" />
          </div>
        </div>
  
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>
  
          <div className="text-sm">
          <Link to={"/login"}><a className="font-medium text-blue-600 hover:text-blue-500">Already have an account?</a></Link>
          </div>
        </div>
  
        <div>
          <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-5 w-5 text-blue-500 group-hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
              </svg>
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>);
}
 
export default Register;