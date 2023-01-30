import React from "react";
import { FunctionComponent } from "react";
import PostInputField from "../components/PostInputField";
import HomeFeedHeader from "../components/HomeFeedHeader";

interface HomeInnerPageProps {
    
}
 
const HomeInnerPage: FunctionComponent<HomeInnerPageProps> = () => {
    return ( <div>
        <HomeFeedHeader></HomeFeedHeader>
        <div className="mt-24">
        <PostInputField></PostInputField>
        </div>
        </div>
     );
}
 
export default HomeInnerPage;