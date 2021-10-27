const addProfileButton = document.querySelector('#add-profile-button')
const saveNewProfileButton = document.querySelector('#confirm-profile-button')

const chooseProfileSection = document.querySelector('.header__profiles')
const addProfileSection = document.querySelector('.header__add-profile')

const profileSelect = document.querySelector('#profile')
const profileNameField = document.querySelector('#profile-name')
let profileList

const getProfiles = () => {
	chrome.storage.sync.get(['profiles'], (profiles) => {
		profileList = profiles
	})

	return profileList || []
}


const renderProfileList = (profiles) => {
	const profileNames = Object.keys(profiles)
	profileSelect.innerHTML = ''
	
	profileNames.forEach(profile => {
		const template = `<option value="${profile}">${profile}</option>`
		profileSelect.insertAdjacentHTML('afterBegin', template)
	})
}

const addProfile = () => {
	const currentProfiles = getProfiles()
	const newProfiles = {...currentProfiles?.profiles, [profileNameField.value]: {}}

	chrome.storage.sync.set({profiles: newProfiles})
	profileNameField.value = ''
}


addProfileButton.addEventListener('click', () => {
	chooseProfileSection.classList.add('hide')
	addProfileSection.classList.remove('hide')
})

saveNewProfileButton.addEventListener('click', () => {
	addProfileSection.classList.add('hide')
	chooseProfileSection.classList.remove('hide')
	addProfile()

	chrome.storage.onChanged.addListener((changes) => {
		const newValues = {...changes.profiles.oldValue, ...changes.profiles.newValue}

		renderProfileList(newValues)
	})
})