import { getProfiles } from './src/background/teste.js'

try {
	chrome.action.onClicked.addListener(async (tab) => {
		const profiles = await getProfiles()
	})
} catch (error) {
	console.error(error)
}