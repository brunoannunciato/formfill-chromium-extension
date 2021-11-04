import { background } from './src/background/index.js'
import { contextMenu } from './src/contextMenu/index.js'

try {
	chrome.action.onClicked.addListener(async (tab) => {
		chrome.scripting.executeScript({
			func: background,
			target: { tabId: tab.id }
		})
	})

	contextMenu()
} catch (error) {
	console.error(error)
}