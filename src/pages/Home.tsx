import React from "react";
import { useAppSelector } from '../hooks';
import HomeLeftColBox from '../components/HomeLeftColBox';
import { BsTwitter } from 'react-icons/bs'
import { TbHome2 } from 'react-icons/tb'
import { FaHashtag, FaFeatherAlt,FaRegUserCircle } from 'react-icons/fa'
import { IoMdNotificationsOutline } from "react-icons/io"
import { MdOutlineMail } from "react-icons/md"
import { BsBookmarks} from "react-icons/bs"
import { RiFileListLine } from "react-icons/ri"
import { AiOutlineUser } from "react-icons/ai"
import { CiCircleMore } from "react-icons/ci"



function Home() {

    const user = useAppSelector(state => state.user)
    /*
    const dispatch = useAppDispatch()

    useEffect(() => {
        
        axios.get(`/api/v1/users`, { headers: {"Authorization" : `Bearer ${user.jwtToken}`} })
        .then(res => {
          setUsers(res.data);
        }).catch(err => {
            console.log(err)
            let userState = {
                username: null,
                jwtToken: null,
                loggedIn: false
            }
            dispatch(updateUserInfo(userState))
        })
      }, []);
      */

    return (
        <div className="flex flex-row">
            <div id="leftPart" className="basis-1/4">
                <HomeLeftColBox icon={BsTwitter} text={null}></HomeLeftColBox>
                <HomeLeftColBox icon={TbHome2} text="Home"></HomeLeftColBox>
                <HomeLeftColBox icon={FaHashtag} text="Explore"></HomeLeftColBox>
                <HomeLeftColBox icon={IoMdNotificationsOutline} text="Notifications"></HomeLeftColBox>
                <HomeLeftColBox icon={MdOutlineMail} text="Messages"></HomeLeftColBox>
                <HomeLeftColBox icon={BsBookmarks} text="Bookmarks"></HomeLeftColBox>
                <HomeLeftColBox icon={RiFileListLine} text="Lists"></HomeLeftColBox>
                <HomeLeftColBox icon={AiOutlineUser} text="Profile"></HomeLeftColBox>
                <HomeLeftColBox icon={CiCircleMore} text="More"></HomeLeftColBox>
                <HomeLeftColBox icon={FaFeatherAlt} text="Tweet"></HomeLeftColBox>
                <HomeLeftColBox icon={FaRegUserCircle} text={user.username}></HomeLeftColBox>
            </div>
            <div id="feed" className="basis-2/4">
                <HomeLeftColBox icon={BsTwitter} text=""></HomeLeftColBox>
                <HomeLeftColBox icon={TbHome2} text={user.username}></HomeLeftColBox>
            </div>
            <div id="rightPart" className="basis-1/4">
                <HomeLeftColBox icon={BsTwitter} text=""></HomeLeftColBox>
                <HomeLeftColBox icon={TbHome2} text={user.username}></HomeLeftColBox>
            </div>
        </div>
    );
}

export default Home;