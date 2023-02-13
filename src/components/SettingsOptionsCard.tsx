import * as React from 'react';
import { IconType } from 'react-icons';
import { useNavigate } from 'react-router-dom';

export interface ISettingsOptionsCardProps {
    icon: IconType,
    text: string | null,
    routeTo: string, 
}

export default function SettingsOptionsCard (props: ISettingsOptionsCardProps) {

    const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/settings"+props.routeTo)} className='cursor-pointer flex flex-1 justify-start p-4 bg-red-400 items-center'>
      <props.icon size={20} className='mr-4'/> 
      {props.text}
    </div>
  );
}
