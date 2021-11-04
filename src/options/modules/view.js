import { getProfiles, getActivedProfile } from "../../utils/index.js"
import elements from "./elements.js"

const { profileSelect,
	chooseProfileSection,
	addProfileSection,
	fieldsContainer
} = elements

export const setTitle = title => {
	const titleElement = document.querySelector('.fields__title')

	titleElement.innerHTML = title
}

export const addFieldRow = (_, fieldName = '', values = '') => {
	const template = `
	<div class="fields__row">
		<input type="text" class="fields__name" placeholder="Nome do campo" value="${fieldName}">

		<textarea placeholder="Valor do campo" class="fields__values">${values}</textarea>

		<img src="./images/delete-icon.png" id="remove-field" class="fields__remove-button" alt="Remover caompo">
	</div>
	`

	fieldsContainer.insertAdjacentHTML('beforeEnd', template)
}

export const renderProfileList = async () => {
	const profiles = await getProfiles() || {}
	const activedProfile = await getActivedProfile()

	const profileNames = Object.keys(profiles)
	profileSelect.innerHTML = ''
	
	profileNames.forEach(profile => {
		const template = `
			<option value="${profile}" ${activedProfile?.name === profile ? 'selected' : ''}>
				${profile}
			</option>
		`
		profileSelect.insertAdjacentHTML('afterBegin', template)
	})
}

export const showChooseProfile = () => {
	chooseProfileSection.classList.add('hide')
	addProfileSection.classList.remove('hide')
}

export const cleanFieldList = () => {
	fieldsContainer.innerHTML = ''
}

export const loadProfileFields = async () => {
	const activedProfile = await getActivedProfile()
	const profiles = await getProfiles()
	const activedProfileName = activedProfile?.name
	const fieldsValues = profiles && profiles[activedProfileName]

	Object.keys(fieldsValues).forEach(item => {
		addFieldRow(null, item, fieldsValues[item])
	})
}