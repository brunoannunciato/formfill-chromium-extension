import { useEffect, useState } from 'react';
import profiles from '../../utils/profiles';
import { IProfile } from '../../utils/profiles/types';

export const useHome = () => {
  const [profileList, setProfileList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileToEdit, setProfileToEdit] = useState(null);

  const toggleModal = (showModal?: boolean) => {
    setIsModalOpen((state) => {
      if (state) setProfileToEdit(null);
      return typeof showModal === 'boolean' ? showModal : !state;
    });
  };

  useEffect(() => {
    if (isModalOpen === false) {
      profiles.getAll().then((data: IProfile[]) => {
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
