import elements from './elements.js'
import {
	addFieldRow,
	cleanFieldList,
	loadProfileFields,
	renderProfileList,
	setTitle,
	showChooseProfile
} from './view.js'

import {
	addProfile,
	setProfile,
	saveProfile
} from '../../utils/index.js'

const {
	addProfileButton,
	addProfileSection,
	addFieldRowButton,
	chooseProfileSection,
	fieldsContainer,
	saveNewProfileButton,
	saveButton,
	profileSelect,
	profileNameField
} = elements

export default () => {
	addProfileButton.addEventListener('click', showChooseProfile)
	addFieldRowButton.addEventListener('click', addFieldRow)
	
	saveButton.addEventListener('click', () => {
		const rows = fieldsContainer.querySelectorAll('.fields__row')
		let valuesObject = {}

		rows.forEach(row => {
			const fieldName = row.querySelector('.fields__name').value
			const fieldValues = row.querySelector('.fields__values').value

			valuesObject[fieldName] = fieldValues
		})

		saveProfile(valuesObject)

		alert('✅!!')
	})
	
	saveNewProfileButton.addEventListener('click', async () => {
		const newProfileName = profileNameField.value

		addProfileSection.classList.add('hide')
		chooseProfileSection.classList.remove('hide')
		await addProfile(newProfileName)

		profileNameField.innerHTML = ''
	
		chrome.storage.onChanged.addListener(async (changes) => {
			const newValues = {...changes.profiles?.oldValue, ...changes.profiles?.newValue}
	
			await renderProfileList(newValues)
		})
	})
	
	profileSelect.addEventListener('change', async (event) => {
		const title = event.target.value
		await setProfile(title)
		cleanFieldList()
		await loadProfileFields()
		setTitle(title)
	})

	loadProfileFields()
}