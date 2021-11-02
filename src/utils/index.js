export const getProfiles = async () => {
	const profileList = new Promise((resolve) => {
		chrome.storage.sync.get(['profiles'], (response) => {
			resolve(response.profiles)
		})
	})

	return profileList
}

export const getActivedProfile = async () => {
	const activedProfile = new Promise((resolve) => {
		chrome.storage.sync.get(['activedProfile'], (response) => {
			resolve(response.activedProfile)
		})
	})

	return activedProfile
}

export const addProfile = async (profileName) => {
	const currentProfiles = await getProfiles()
	const newProfiles = {...currentProfiles, [profileName]: {}}

	chrome.storage.sync.set({profiles: newProfiles})
	await setProfile(profileName)
}

export const setProfile = async (selectedProfile) => {
	const currentProfiles = await getProfiles()

	chrome.storage.sync.set({activedProfile: {
		...currentProfiles[selectedProfile],
		name: selectedProfile
	}})
}

export const saveProfile = async (valuesObject = {}) => {
	const profiles = await getProfiles()
	const activedProfile = await getActivedProfile()

	chrome.storage.sync.set({profiles: {
		...profiles,
		[activedProfile.name]: valuesObject
	}})
}