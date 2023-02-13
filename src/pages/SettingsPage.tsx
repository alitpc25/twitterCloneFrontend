import * as React from 'react';
import SettingsOptionsCard from '../components/SettingsOptionsCard';
import { RiLockPasswordLine } from 'react-icons/ri';

export interface ISettingsPageProps {
}

export default function SettingsPage () {

  return (
    <div>
      <SettingsOptionsCard icon={RiLockPasswordLine} text={"Change password"} routeTo={"/changePassword"} />
    </div>
  );
}
