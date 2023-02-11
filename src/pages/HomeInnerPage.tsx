import React, { useEffect, useState } from "react";
import { FunctionComponent } from "react";
import PostInputField from "../components/PostInputField";
import HomeFeedHeader from "../components/HomeFeedHeader";
import Post from "../models/Post";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import axios from "axios";
import { updateUserInfo } from "../redux/userSlice";
import PostCard from "../components/PostCard";
import ViewedUser from "../models/ViewedUser";
import LoadingComponent from "../components/LoadingComponent";

interface HomeInnerPageProps {

}

const HomeInnerPage: FunctionComponent<HomeInnerPageProps> = () => {

    const user = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    const [followingsPosts, setFollowingsPosts] = useState<Post[]>();

    const getFollowingsPosts = () => {
        axios.get(`/api/v1/posts/getAll?username=${user.username}`, {
            headers: {
                'Authorization': `Bearer ${user.jwtToken}`
            }
        }).then((res) => {
            setFollowingsPosts(res.data)
        }).catch((e) => {
            console.log(e);
            if(e.response.status == 403) {
                dispatch(updateUserInfo({
                    username:null,
                    userId:null,
                    jwtToken:null,
                    loggedIn:false,
                    imageId:null
                }))
            }
        })
    }

    useEffect(() => {
      getFollowingsPosts();
    }, [])
    

    return (<div>
        <HomeFeedHeader></HomeFeedHeader>
        <div className="mt-24">
            <PostInputField></PostInputField>
        </div>
        <div>
            {
                followingsPosts ? 
                followingsPosts?.map((post, i) => {
                    return <PostCard key={i} post={post} user={new ViewedUser(post.userImage,post.username)} />
                })
                : <LoadingComponent />
            }
        </div>
    </div>
    );
}

export default HomeInnerPage;