import React from 'react';
import Button from '../Button';

import './profile-list.scss';

import { BiDownload, BiPencil, BiTrash } from 'react-icons/bi';

const ProfileList = ({ profiles }) => {
  return (
    <ul className="profile-list">
      {profiles.map(({ profileName, description }) => (
        <li className="profile-list__item" key={profileName}>
          <div className="profile-list__first-row">
            <p className="profile-list__name">{profileName}</p>

            <div className="profile-list__buttons-shelf">
              <Button>
                <BiDownload />
              </Button>

              <Button>
                <BiPencil />
              </Button>

              <Button>
                <BiTrash />
              </Button>
            </div>
          </div>

          <div className="profile-list__second-row">
            <p className="profile-list__description">
              <strong>description: </strong>
              {description ? description : '--'}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProfileList;
