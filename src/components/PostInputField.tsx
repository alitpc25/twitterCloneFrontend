import React, { FunctionComponent } from "react";
import { FaRegUserCircle } from 'react-icons/fa'
import { BsImage } from "react-icons/bs"
import "./PostInputField.css"
import { useState } from "react"
import axios from "axios";
import { useAppSelector } from "../redux/hooks";

interface PostInputFieldProps {

}

const PostInputField: FunctionComponent<PostInputFieldProps> = () => {

    const [image, setImage] = useState<string>();
    const [text, setText] = useState<string>("");
    const [imageFile, setImageFile] = useState<File>();

    const user = useAppSelector(state => state.user)

    const handleImageInput = (e: React.FormEvent<HTMLInputElement>) => {
        if(e.currentTarget.files){
            setImage(URL.createObjectURL(e.currentTarget.files[0]));
            setImageFile(e.currentTarget.files[0])
          }
    }

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }

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
            }})
        .then((res) => {
            console.log(res)
        }).catch((e) => {
            console.log(e);
        })
    }
 
    return (
        <div>
            <form className="border-b-2" encType="multipart/form-data">
                <label htmlFor="text" className="mb-2 text-sm font-medium text-gray-900 sr-only">Tweet</label>
                <div className="relative flex flex-row">
                    <div className="inset-y-0 left-0 flex items-start mt-4 pl-3 pointer-events-none">
                        <FaRegUserCircle size={50} />
                    </div>
                    <div className="w-full">
                        {image && 
                        <img alt="not found" width={"250px"} src={image} />}
                        <textarea value={text} onChange={handleTextareaChange} id="text" className="border-b-2 resize-y w-full h-32 p-4 pl-10 text-sm text-gray-900" placeholder="What's happening?" required />
                        <div>
                            <label htmlFor="file-upload" className="custom-file-upload">
                                <div className="w-fit p-2 bg-gray-100 rounded-full m-2 cursor-pointer hover:bg-gray-200">
                                    <BsImage size={18} />
                                </div>
                            </label>
                            <input id="file-upload" type="file" 
                            onChange={handleImageInput} />
                        </div>
                    </div>
                    <button onClick={handleSubmitPost} type="button" className="text-white absolute right-4 bottom-2.5 rounded-full bg-sky-400 hover:bg-sky-500 font-medium text-sm px-4 py-2">Tweet</button>
                </div>
            </form>
        </div>);
}

export default PostInputField;