import { useEffect, useState } from 'react';
import profiles from '../../utils/profiles';

export const useHome = () => {
  const [profileList, setProfileList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileToEdit, setProfileToEdit] = useState(null);

  const toggleModal = (showModal) => {
    setIsModalOpen((state) =>
      typeof showModal === 'boolean' ? showModal : !state
    );
  };

  useEffect(() => {
    if (isModalOpen === false) {
      profiles.getAll().then((data) => {
        setProfileList(data);
      });
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (!!profileToEdit) {
      setIsModalOpen(true);
    }
  }, [profileToEdit]);

  return {
    toggleModal,
    setProfileList,
    profileList,
    isModalOpen,
    setProfileToEdit,
    profileToEdit,
  };
};
