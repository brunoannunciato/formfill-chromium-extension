const getAll = () => {
  const profileList = new Promise((resolve) => {
    chrome.storage.sync.get(['profiles'], (response) => {
      resolve(response.profiles);
    });
  });

  return profileList;
};

const add = (profile) => {
  return new Promise((resolve, reject) => {
    getAll().then((storageProfiles = []) => {
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

export default {
  add,
  getAll,
};
