import profiles from '../../utils/profiles';

import { SetProfileListType } from './types';

export const useProfileList = (setProfileList: SetProfileListType) => {
  const handleActivedProfile = (profileName: string) => {
    profiles.setActived(profileName).then((data) => setProfileList(data));
  };

  const onDelete = (profile: string) => {
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
