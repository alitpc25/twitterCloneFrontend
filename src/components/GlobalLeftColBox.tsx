import React from "react";
import { FunctionComponent } from "react";
import { IconType } from "react-icons";

interface GlobalLeftColBoxProps {
    icon?: IconType,
    text: string | null,
    routeTo?: string,
    image?: string | null
}

const GlobalLeftColBox: FunctionComponent<GlobalLeftColBoxProps> = (props: GlobalLeftColBoxProps) => {
    return (
        <div className="h-max flex mb-1">
            <a href={props.routeTo} className="flex flex-row">
                <div className={`cursor-pointer box-border w-fit p-3 rounded-full flex items-center justify-center ${props.text !== null ? 'hover:bg-gray-200' : 'hover:bg-sky-200'} ${props.text === "Tweet" ? 'bg-sky-500 hover:bg-sky-600 text-white' : ''}`}>
                    <div className={`flex-initial w-fit`}>
                        {props.icon ? <props.icon size={30} color={`${props.text === null ? '#26B3FF' : ''}`} /> :
                            <img className="rounded-full" style={{ objectFit: "contain", width: "30px", height: "30px" }} src={`data:image/png;base64,${props.image}`}></img>
                        }

                    </div>
                    <div className={`flex-initial w-fit text-start font-semibold text-lg ${props.text != null ? 'ml-5 pr-3' : ''} `}>
                        {props.text}
                    </div>
                </div>
            </a>
        </div>);
}

export default GlobalLeftColBox;