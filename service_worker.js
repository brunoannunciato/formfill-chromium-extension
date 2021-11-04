import { background } from './src/background/index.js';

try {
	chrome.action.onClicked.addListener(async (tab) => {
		chrome.scripting.executeScript({
			func: background,
			target: { tabId: tab.id }
		})
	})
} catch (error) {
	console.error(error)
}