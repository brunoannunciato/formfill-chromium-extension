const addProfileButton = document.querySelector('#add-profile-button')
const saveNewProfileButton = document.querySelector('#confirm-profile-button')

const chooseProfileSection = document.querySelector('.header__profiles')
const addProfileSection = document.querySelector('.header__add-profile')

const profileSelect = document.querySelector('#profile')
const profileNameField = document.querySelector('#profile-name')

const addFieldRowButton = document.querySelector('#add-field')

const getProfiles = async () => {
	const profileList = new Promise((resolve) => {
		chrome.storage.sync.get(['profiles'], (response) => {
			resolve(response.profiles)
		})
	})

	return profileList
}

const getActivedProfile = async () => {
	const activedProfile = new Promise((resolve) => {
		chrome.storage.sync.get(['activedProfile'], (response) => {
			resolve(response.activedProfile)
		})
	})

	return activedProfile
}

const renderProfileList = async () => {
	const profiles = await getProfiles()
	const activedProfile = await getActivedProfile()

	const profileNames = Object.keys(profiles)
	profileSelect.innerHTML = ''
	
	profileNames.forEach(profile => {
		const template = `
			<option value="${profile}" ${activedProfile.name === profile ? 'selected' : ''}>
				${profile}
			</option>
		`
		profileSelect.insertAdjacentHTML('afterBegin', template)
	})
}

const addProfile = async () => {
	const currentProfiles = await getProfiles()
	const newProfiles = {...currentProfiles, [profileNameField.value]: {}}

	chrome.storage.sync.set({profiles: newProfiles})
	profileNameField.value = ''
}

const setProfile = async (selectedProfile) => {
	const currentProfiles = await getProfiles()
	console.log({currentProfiles, selectedProfile})

chrome.storage.sync.set({activedProfile: {
	...currentProfiles[selectedProfile],
	name: selectedProfile
}})
}

const addFieldRow = (_, fieldName = '', values = '') => {
	const rowsContainer = document.querySelector('.fields__body')
	const template = `
	<div class="fields__row">
		<input type="text" class="fields__name" placeholder="Nome do campo" value="${fieldName}">

		<textarea placeholder="Valores separados por vírgula" class="fields__values">${values}</textarea>

		<img src="./images/delete-icon.png" id="remove-field" class="fields__remove-button" alt="Remover caompo">
	</div>
	`

	rowsContainer.insertAdjacentHTML('beforeEnd', template)
}

const setTitle = title => {
	const titleElement = document.querySelector('.fields__title')

	titleElement.innerHTML = title
}


const setEvents = () => {
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
	
	profileSelect.addEventListener('change', async (event) => {
		const title = event.target.value
	
		await setProfile(title)
		const activedProfile = await getActivedProfile()
		setTitle(title)
	})
	
	addFieldRowButton.addEventListener('click', addFieldRow)
}


window.addEventListener('DOMContentLoaded', async () => {
	renderProfileList()
	setEvents()
	const activedProfile = await getActivedProfile()
	setTitle(activedProfile.name)
})