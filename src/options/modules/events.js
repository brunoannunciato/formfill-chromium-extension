import elements from './elements.js'
import {
	setTitle,
	addFieldRow,
	renderProfileList,
	showChooseProfile
} from './view.js'

import {
	setProfile,
	getActivedProfile,
	addProfile,
	saveProfile
} from './utils.js'

const {
	addProfileButton,
	saveNewProfileButton,
	chooseProfileSection,
	addProfileSection,
	profileSelect,
	addFieldRowButton,
	saveButton
} = elements

export default () => {
	addProfileButton.addEventListener('click', showChooseProfile)
	addFieldRowButton.addEventListener('click', addFieldRow)
	saveButton.addEventListener('click', saveProfile)
	
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
}