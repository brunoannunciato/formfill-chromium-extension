import { setTitle, renderProfileList } from './modules/view.js'
import dispatchEvents from './modules/events.js'
import { getActivedProfile } from '../utils/index.js'

window.addEventListener('DOMContentLoaded', async () => {
	renderProfileList()
	dispatchEvents()
	const activedProfile = await getActivedProfile()
	setTitle(activedProfile?.name || '')
})