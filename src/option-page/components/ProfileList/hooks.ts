import profiles from '../../utils/profiles';
import { IProfile } from '../../utils/profiles/types';

import { SetProfileListType } from './types';

export const useProfileList = (setProfileList: SetProfileListType) => {
  const handleActivedProfile = (profileName: string) => {
    profiles
      .setActived(profileName)
      .then((data: IProfile[]) => setProfileList(data));
  };

  const onDelete = (profile: string) => {
    profiles.remove(profile);
  };

  chrome.storage.sync.onChanged.addListener(() => {
    profiles.getAll().then((profiles: IProfile[]) => {
      setProfileList(profiles);
    });
  });

  return {
    onDelete,
    handleActivedProfile,
  };
};
