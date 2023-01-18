import React from "react";
import { FunctionComponent } from "react";
import HomeFeedInputField from "../components/HomeFeedInputField";
import HomeFeedHeader from "../components/HomeFeedHeader";

interface HomeInnerPageProps {
    
}
 
const HomeInnerPage: FunctionComponent<HomeInnerPageProps> = () => {
    return ( <div>
        <HomeFeedHeader></HomeFeedHeader>
        <HomeFeedInputField></HomeFeedInputField>
        </div>
     );
}
 
export default HomeInnerPage;