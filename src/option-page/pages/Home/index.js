import React from 'react';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import ProfileList from '../../components/ProfileList';

import { useHome } from './hooks';

import './home.scss';
import NewProfileForm from '../../components/NewProfileForm';

const Home = () => {
  const {
    profileList,
    toggleModal,
    isModalOpen,
    setProfileList,
    setProfileToEdit,
    profileToEdit,
  } = useHome();

  return (
    <main className="home">
      <div className="container">
        <div className="profile-list">
          <div className="profile-list__header">
            <h2 className="profile-list__title">Profiles:</h2>

            <Button onClick={toggleModal}> New profile </Button>
          </div>

          <div className="profile-list__body">
            {profileList?.length ? (
              <ProfileList
                setProfileList={setProfileList}
                setProfileToEdit={setProfileToEdit}
                profiles={profileList}
              />
            ) : (
              `There is no profile created yet. To create your first profile, click the button above.`
            )}
          </div>
        </div>
      </div>

      <Modal isVisible={isModalOpen} onCloseModal={toggleModal}>
        <NewProfileForm onSubmit={toggleModal} profileToEdit={profileToEdit} />
      </Modal>
    </main>
  );
};

export default Home;
