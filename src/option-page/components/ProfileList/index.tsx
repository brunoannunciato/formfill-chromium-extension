import React, { useState } from 'react';
import Button from '../Button';
import Switch from 'react-switch';
import { ProfileListProps } from './types';

import './profile-list.scss';

import { BiPencil, BiTrash } from 'react-icons/bi';
import { useProfileList } from './hooks';

const ProfileList = ({
  profiles,
  setProfileList,
  setProfileToEdit,
}: ProfileListProps) => {
  const { onDelete, handleActivedProfile } = useProfileList(setProfileList);

  return (
    <ul className="profile-list">
      {profiles.map(({ profileName, description, actived }) => (
        <li className="profile-list__item" key={profileName}>
          <div className="profile-list__first-row">
            <p className="profile-list__name">{profileName}</p>

            <div className="profile-list__buttons-shelf">
              <Button onClick={() => setProfileToEdit(profileName)}>
                <BiPencil />
              </Button>
              <Button>
                <BiTrash onClick={() => onDelete(profileName)} />
              </Button>
            </div>
          </div>

          <div className="profile-list__second-row">
            <p className="profile-list__description">
              <strong>description: </strong>
              {description ? description : '--'}
            </p>
            <div className="profile-list__actived-shelf">
              <p className="profile-list__actived-label">Actived profile: </p>

              <Switch
                onChange={() => handleActivedProfile(profileName)}
                checked={actived}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProfileList;
