const getAll = () => {
  const profileList = new Promise((resolve) => {
    chrome.storage.sync.get(['profiles'], (response) => {
      resolve(response.profiles);
    });
  });

  return profileList;
};

const add = (profile) => {
  getAll().then((savedProfiles) => {
    const storageProfiles = savedProfiles || [];
    const profiles = [...storageProfiles, profile];

    chrome.storage.sync.set({ profiles });
  });

  const profiles = [profile];
};

export default {
  add,
  getAll,
};
