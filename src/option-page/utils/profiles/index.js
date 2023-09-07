const getAll = () => {
  const profileList = new Promise((resolve) => {
    chrome.storage.sync.get(['profiles'], (response) => {
      resolve(response.profiles);
    });
  });

  return profileList;
};

const get = (name) => {
  return new Promise((resolve) => {
    getAll().then((profiles) => {
      resolve(profiles.find((profile) => profile.profileName === name));
    });
  });
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

const remove = (profileName) => {
  getAll().then((profiles) => {
    const newProfiles = profiles.filter((profile) => {
      return profile.profileName !== profileName;
    });

    chrome.storage.sync.set({ profiles: newProfiles });
  });
};

const update = (data) => {
  return new Promise((resolve) => {
    getAll().then((profiles) => {
      const newProfiles = profiles.filter((profile) => {
        return profile.profileName !== data.profileName;
      });

      chrome.storage.sync.set({ profiles: [data, ...newProfiles] });

      resolve();
    });
  });
};

export default {
  add,
  getAll,
  get,
  remove,
  update,
};
