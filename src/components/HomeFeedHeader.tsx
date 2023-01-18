import React from "react";
import { FunctionComponent } from "react";

interface HomeFeedProps {

}

const HomeFeed: FunctionComponent<HomeFeedProps> = () => {

    const selectedOpt: number = 2;

    return (<div>

        <nav className="bg-white w-full px-1.5 py-2 dark:bg-gray-900 flex-initial z-20 border-b border-gray-200 dark:border-gray-600">
            <div className="col-start-1 col-end-7">
                <a href="/">
                    <div className="flex md:order-1 text-start h-12">
                        <p className="text-xl font-bold ">Home</p>
                    </div>
                </a>
            </div>
            <div className="grid grid-cols-2">
                <div className={`h-8 col-start-1 ${selectedOpt === 1 ? 'underline underline-offset-8 decoration-sky-400 decoration-4' : ''} hover:bg-gray-300`}>
                    <a href="/">
                        <div className="">
                            For You
                        </div>
                    </a>
                </div>
                <div className={`h-8 col-start-2 ${selectedOpt === 2 ? 'underline underline-offset-8 decoration-sky-400 decoration-4' : ''} hover:bg-gray-300`}>
                    <a href="/">
                        <div>
                            Following
                        </div>
                    </a>
                </div>
            </div>
        </nav>

    </div>);
}

export default HomeFeed;