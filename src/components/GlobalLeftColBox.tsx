import React from "react";
import { FunctionComponent } from "react";
import { IconType } from "react-icons";

interface HomeLeftColBoxProps {
    icon: IconType,
    text: String | null
}
 
const HomeLeftColBox: FunctionComponent<HomeLeftColBoxProps> = (props: HomeLeftColBoxProps) => {
    return ( <div className={`box-border h-fit ml-32 mb-1.5 w-fit p-3 rounded-full flex items-center justify-center ${props.text !== null  ? 'hover:bg-gray-200' : 'hover:bg-sky-200'} ${props.text === "Tweet" ? 'bg-sky-500 hover:bg-sky-600 text-white'  : ''}`}>
        <div className={`flex-initial w-fit`}>
        <props.icon size={30} color={`${props.text === null ? '#26B3FF' : ''}`} />
        </div>
        <div className={`flex-initial w-fit text-start font-semibold text-lg ${props.text != null ? 'ml-5 pr-3' : ''} `}>
        {props.text}
        </div>
    </div>  );
}
 
export default HomeLeftColBox;