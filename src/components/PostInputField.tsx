import React, { FunctionComponent } from "react";
import { BsImage } from "react-icons/bs"
import "./PostInputField.css"
import { useState } from "react"
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toastError, toastSuccess } from "../utils/toastMessages";
import { updateUserInfo } from "../redux/userSlice";
import { getDownloadURLImage } from "../firebase/firebaseGetDownloadUrl";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify"

interface PostInputFieldProps {
    setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostInputField: FunctionComponent<PostInputFieldProps> = ({ setShowModal }: PostInputFieldProps) => {

    const [image, setImage] = useState<string>();
    const [text, setText] = useState<string>("");
    const [imageFile, setImageFile] = useState<File>();

    const user = useAppSelector(state => state.user)

    const [imageUrlUser, setImageUrlUser] = useState("");

    getDownloadURLImage(user.imageId!, setImageUrlUser);

    const dispatch = useAppDispatch()

    //Firebase 
    const storage = getStorage();

    const handleImageInput = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            setImage(URL.createObjectURL(e.currentTarget.files[0]));
            setImageFile(e.currentTarget.files[0])
        }
    }

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }

    const handleSubmitPost = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (text == "" && imageFile == undefined) {
            console.log("you should add something to share.")
            return;
        }
        let imageId = null;
        if (imageFile != undefined) {
            imageId = uuidv4();
            const storageRef = ref(storage, imageId);
            const uploadBytesPromise = uploadBytes(storageRef, imageFile).then((snapshot) => {
                console.log(snapshot);
            });
            toast.promise(
                uploadBytesPromise,
                {
                  pending: 'Sharing post...',
                  error: 'An error occurred'
                }
            )
        }

        axios.post(`/api/v1/posts?userId=${user.userId}`,
                {
                    text: text,
                    imageId: imageId
                }, {
                headers: {
                    'Authorization': `Bearer ${user.jwtToken}`,
                }
            })
                .then(() => {
                    setText("")
                    setImage("")
                    toastSuccess("Successfully shared.");
                }).catch((e) => {
                    console.log(e);
                    toastError(e);
                    if (e.response.status == 403) {
                        dispatch(updateUserInfo({
                            username: null,
                            userId: null,
                            jwtToken: null,
                            loggedIn: false,
                            imageId: null
                        }))
                    }
                })


        if (setShowModal) {
            setShowModal(false)
        }
    }

    return (
        <div>
            <form className="border-b-2" encType="multipart/form-data">
                <label htmlFor="text" className="mb-2 text-sm font-medium text-gray-900 sr-only">Tweet</label>
                <div className="relative flex flex-row">
                    <div className="inset-y-0 left-0 flex items-start mt-4 pl-3 pointer-events-none">
                        <img className="rounded-full" style={{ objectFit: "contain", width: "50px", height: "50px" }} src={imageUrlUser != "" ? imageUrlUser : "/avatar.jpg"}></img>
                    </div>
                    <div className="w-full flex flex-col">
                        {image &&
                            <img alt="not found" style={{ objectFit: "contain", width: "250px", height: "250px" }} src={image} />}
                        <textarea value={text} onChange={handleTextareaChange} id="text" className="mt-2 border-b-2 resize-y w-full h-32 p-4 pl-10 text-sm text-gray-900" placeholder="What's happening?" required />
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