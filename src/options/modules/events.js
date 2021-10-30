import elements from './elements.js'
import { setTitle, addFieldRow, renderProfileList } from './view.js'
import { setProfile, getActivedProfile, addProfile } from './utils.js'

const {
	addProfileButton,
	saveNewProfileButton,
	chooseProfileSection,
	addProfileSection,
	profileSelect,
	addFieldRowButton
} = elements

export default () => {
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