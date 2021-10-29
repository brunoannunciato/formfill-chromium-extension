const addProfileButton = document.querySelector('#add-profile-button')
const saveNewProfileButton = document.querySelector('#confirm-profile-button')

const chooseProfileSection = document.querySelector('.header__profiles')
const addProfileSection = document.querySelector('.header__add-profile')

const profileSelect = document.querySelector('#profile')
const profileNameField = document.querySelector('#profile-name')
let profileList

const getProfiles = async () => {
	const profileList = new Promise((resolve) => {
		chrome.storage.sync.get(['profiles'], (response) => {
			resolve(response.profiles)
		})
	})

	return profileList
}


const renderProfileList = async () => {
	const profiles = await getProfiles()
	const profileNames = Object.keys(profiles)
	profileSelect.innerHTML = ''
	
	profileNames.forEach(profile => {
		const template = `<option value="${profile}">${profile}</option>`
		profileSelect.insertAdjacentHTML('afterBegin', template)
	})
}

const addProfile = async () => {
	const currentProfiles = await getProfiles()
	const newProfiles = {...currentProfiles, [profileNameField.value]: {}}

	chrome.storage.sync.set({profiles: newProfiles})
	profileNameField.value = ''
}


addProfileButton.addEventListener('click', () => {
	chooseProfileSection.classList.add('hide')
	addProfileSection.classList.remove('hide')
})

saveNewProfileButton.addEventListener('click', async () => {
	addProfileSection.classList.add('hide')
	chooseProfileSection.classList.remove('hide')
	await addProfile()

	chrome.storage.onChanged.addListener(async (changes) => {
		const newValues = {...changes.profiles.oldValue, ...changes.profiles.newValue}

		await renderProfileList(newValues)
	})
})

window.addEventListener('DOMContentLoaded', () => {
	renderProfileList()
})