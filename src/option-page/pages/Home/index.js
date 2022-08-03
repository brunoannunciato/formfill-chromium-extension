import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import ProfileList from '../../components/ProfileList';

import { useCloseModal, useOpenModal } from './hooks';
import profiles from '../../utils/profiles';

import './home.scss';
import NewProfileForm from '../../components/NewProfileForm';

const Home = () => {
  const [isCreatingNewProfile, setIsCreatingNewProfile] = useState(false);
  const [profileList, setProfileList] = useState([]);

  useEffect(() => {
    profiles.getAll().then((data) => {
      setProfileList(data);
    });
  }, []);

  return (
    <main className="home">
      <div className="container">
        <div className="profile-list">
          <div className="profile-list__header">
            <h2 className="profile-list__title">Profiles:</h2>

            <Button onClick={() => useOpenModal(setIsCreatingNewProfile)}>
              {' '}
              New profile{' '}
            </Button>
          </div>

          <div className="profile-list__body">
            {profileList?.length ? (
              <ProfileList profiles={profileList} />
            ) : (
              `There is no profile created yet. To create your first profile, click the button above.`
            )}
          </div>
        </div>
      </div>

      <Modal
        isVisible={isCreatingNewProfile}
        onCloseModal={() => useCloseModal(setIsCreatingNewProfile)}
      >
        <NewProfileForm
          onSubmit={() => {
            useCloseModal(setIsCreatingNewProfile);
          }}
        />
      </Modal>
    </main>
  );
};

export default Home;
