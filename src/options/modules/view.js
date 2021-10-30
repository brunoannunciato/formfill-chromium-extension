import { getProfiles, getActivedProfile } from "./utils.js"
import elements from "./elements.js"

const { profileSelect } = elements

export const setTitle = title => {
	const titleElement = document.querySelector('.fields__title')

	titleElement.innerHTML = title
}

export const addFieldRow = (_, fieldName = '', values = '') => {
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

export const renderProfileList = async () => {
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