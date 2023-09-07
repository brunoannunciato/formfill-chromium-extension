import profiles from '../../utils/profiles';

export const useProfileList = (setProfileList) => {
  const handleActivedProfile = (profileName) => {
    profiles.setActived(profileName).then((data) => setProfileList(data));
  };

  const onDelete = (profile) => {
    profiles.remove(profile);
  };

  chrome.storage.sync.onChanged.addListener(() => {
    profiles.getAll().then((profiles) => {
      setProfileList(profiles);
    });
  });

  return {
    onDelete,
    handleActivedProfile,
  };
};
