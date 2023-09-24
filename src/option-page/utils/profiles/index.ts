import { IProfile } from './types';

const getAll = () => {
  const profileList = new Promise((resolve) => {
    chrome.storage.sync.get(['profiles'], (response) => {
      resolve(response.profiles);
    });
  });

  return profileList;
};

const get = (name: string) => {
  return new Promise((resolve) => {
    getAll().then((profiles: IProfile[]) => {
      resolve(
        profiles.find((profile: IProfile) => profile.profileName === name)
      );
    });
  });
};

const add = (profile: IProfile) => {
  return new Promise((resolve, reject) => {
    getAll().then((storageProfiles: IProfile[] = []) => {
      const nameInvalid = storageProfiles.filter(
        (storageProfile) =>
          storageProfile.profileName.toLowerCase() ===
          profile.profileName.toLowerCase()
      ).length;

      if (nameInvalid) {
        alert('This name is already in use');
        reject(false);
        return;
      }

      const profiles = [...storageProfiles, profile];

      chrome.storage.sync.set({ profiles });
      resolve(true);
    });
  });
};

const remove = (profileName: string) => {
  getAll().then((profiles: IProfile[]) => {
    const newProfiles = profiles.filter((profile) => {
      return profile.profileName !== profileName;
    });

    chrome.storage.sync.set({ profiles: newProfiles });
  });
};

const update = (profileToEdit: string, data: IProfile) => {
  return new Promise((resolve) => {
    getAll().then((profiles: IProfile[]) => {
      const newProfiles = profiles.filter((profile: IProfile) => {
        return profile.profileName !== profileToEdit;
      });

      chrome.storage.sync.set({ profiles: [data, ...newProfiles] });

      resolve(null);
    });
  });
};

const setActived = (profileName: string) => {
  return new Promise((resolve) => {
    getAll().then((data: IProfile[]) => {
      const newProfiles = data.map((profile) => {
        return {
          ...profile,
          actived: profile.profileName === profileName,
        };
      });

      chrome.storage.sync.set({ profiles: newProfiles });

      resolve(newProfiles);
    });
  });
};

export default {
  add,
  getAll,
  get,
  remove,
  update,
  setActived,
};
