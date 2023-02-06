import * as React from 'react';
import GlobalLeftColBox from './GlobalLeftColBox';
import { BsTwitter } from 'react-icons/bs'
import { TbHome2 } from 'react-icons/tb'
import { FaHashtag, FaFeatherAlt } from 'react-icons/fa'
import { IoMdNotificationsOutline } from "react-icons/io"
import { MdOutlineMail } from "react-icons/md"
import { BsBookmarks } from "react-icons/bs"
import { RiFileListLine } from "react-icons/ri"
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi"
import { FiSettings } from "react-icons/fi"
import MoreDropdownButton from './MoreDropdownButton';
import { UserState } from '../redux/userSlice';

export interface IGlobalLeftColProps {
    user: UserState
}

export default function GlobalLeftCol({user}: IGlobalLeftColProps) {
    return (
        <div className='ml-32'>
            <GlobalLeftColBox icon={BsTwitter} text={null} routeTo="/"></GlobalLeftColBox>
            <GlobalLeftColBox icon={TbHome2} text="Home" routeTo="/"></GlobalLeftColBox>
            <GlobalLeftColBox icon={FaHashtag} text="Explore" routeTo="/explore"></GlobalLeftColBox>
            <GlobalLeftColBox icon={IoMdNotificationsOutline} text="Notifications" routeTo="/notifications"></GlobalLeftColBox>
            <GlobalLeftColBox icon={MdOutlineMail} text="Messages" routeTo="/messages"></GlobalLeftColBox>
            <GlobalLeftColBox icon={BsBookmarks} text="Bookmarks" routeTo="/bookmarks"></GlobalLeftColBox>
            <GlobalLeftColBox icon={RiFileListLine} text="Lists" routeTo="/lists"></GlobalLeftColBox>
            <GlobalLeftColBox icon={FiSettings} text="Settings" routeTo="/settings"></GlobalLeftColBox>
            <MoreDropdownButton>
                <GlobalLeftColBox icon={HiOutlineDotsCircleHorizontal} text="More"></GlobalLeftColBox>
            </MoreDropdownButton>

            <GlobalLeftColBox icon={FaFeatherAlt} text="Tweet"></GlobalLeftColBox>

            <GlobalLeftColBox image={user.image} text={user.username} routeTo="/profile"></GlobalLeftColBox>
        </div>
    );
}
