import 'regenerator-runtime/runtime';
import { fillForms } from './fillForms';

try {
  console.log('Service worker running', fillForms);
  chrome.action.onClicked.addListener(async (tab) => {
    chrome.scripting.executeScript({
      func: fillForms,
      target: { tabId: tab.id },
    });
  });
} catch (error) {
  console.error(error);
}
