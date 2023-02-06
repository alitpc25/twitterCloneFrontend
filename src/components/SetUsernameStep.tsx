import * as React from 'react';

export interface ISetUsernameStepProps {
    username: string | null,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SetUsernameStep (props: ISetUsernameStepProps) {
  return (
    <div>
      {props.username}
    </div>
  );
}
