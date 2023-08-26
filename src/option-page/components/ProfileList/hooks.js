import profiles from "../../utils/profiles";

export const useProfileList = (setProfileList) => {
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
  };
};
