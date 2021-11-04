export const main = () => {
	const pageFields = document.querySelectorAll('input')

	const getProfiles = () => {
		const profileList = new Promise((resolve) => {
			chrome.storage.sync.get(['profiles'], (response) => {
				resolve(response.profiles)
			})
		})
	
		return profileList
	}

	const getFields = (profiles) => {
			chrome.storage.sync.get(['activedProfile'], (response) => {
				const profileName = response.activedProfile?.name
				const fields = profiles[profileName]

				pageFields.forEach(field => {
					const fieldName = field.getAttribute('name')
					field.setAttribute('value', fields[fieldName] ? fields[fieldName] : '')
				})
			})
	}

	getProfiles().then(getFields)
}