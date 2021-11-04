import { main } from './src/background/index.js';

try {
	chrome.action.onClicked.addListener(async (tab) => {
		chrome.scripting.executeScript({
			func: main,
			target: { tabId: tab.id }
		})
	})
} catch (error) {
	console.error(error)
}