export const contextMenu = () => {
	chrome.contextMenus.removeAll()

	chrome.contextMenus.create({
		id: 'profiles',
		title: 'Select profile',
		'contexts': ['all']
	})

	const getProfiles = () => {
		const profileList = new Promise((resolve) => {
			chrome.storage.sync.get(['profiles'], (response) => {
				resolve(response.profiles)
			})
		})
	
		return profileList
	}

	const createOptions = (profiles) => {
		chrome.storage.sync.get(['activedProfile'], (response) => {
			const activedProfile = response.activedProfile?.name
			const profileList = Object.keys(profiles)

			profileList.forEach(profile => {
				chrome.contextMenus.create({
					id: `profiles-${profile}`,
					title: `${profile === activedProfile ? '✅ ': ' '}${profile}`,
					parentId: 'profiles',
					'contexts': ['all']
				})
			})
		})
	}

	getProfiles().then(profiles => {
		createOptions(profiles)
		const profileList = Object.keys(profiles)
	
		chrome.contextMenus.onClicked.addListener((event) => {
			profileList.forEach(profile => {
				chrome.contextMenus.remove(`profiles-${profile}`)
			})

			const selectedOption = event.menuItemId.split('profiles-')[1]
	
			chrome.storage.sync.set({activedProfile: {
				...profiles[selectedOption],
				name: selectedOption
			}})

			createOptions(profiles)
		})
	})
}

