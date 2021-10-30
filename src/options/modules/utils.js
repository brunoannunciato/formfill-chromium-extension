import elements from './elements.js'

const { profileNameField, fieldsContainer } = elements

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

export const addProfile = async () => {
	const currentProfiles = await getProfiles()
	const newProfiles = {...currentProfiles, [profileNameField.value]: {}}

	chrome.storage.sync.set({profiles: newProfiles})
	profileNameField.value = ''
}

export const setProfile = async (selectedProfile) => {
	const currentProfiles = await getProfiles()

	chrome.storage.sync.set({activedProfile: {
		...currentProfiles[selectedProfile],
		name: selectedProfile
	}})
}

export const saveProfile = async () => {
	const rows = fieldsContainer.querySelectorAll('.fields__row')
	const valuesObject = {}

	rows.forEach(row => {
		const fieldName = row.querySelector('.fields__name').value
		const fieldValues = row.querySelector('.fields__values').value

		valuesObject[fieldName] = fieldValues
	})

	const profiles = await getProfiles()
	const activedProfile = await getActivedProfile()
	console.log(activedProfile, profiles)

	chrome.storage.sync.set({profiles: {
		...profiles,
		[activedProfile.name]: valuesObject
	}})
}