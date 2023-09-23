import React from 'react';
export type ProfileListProps = {
  profiles: ProfileType[];
  setProfileList: SetProfileListType;
  setProfileToEdit: (profile: string) => void;
};

export type ProfileType = {
  profileName: string;
  description: string;
  actived: boolean;
};

export type SetProfileListType = React.Dispatch<React.SetStateAction<any[]>>;
