const getAll = () => {
  const profileList = new Promise((resolve) => {
    chrome.storage.sync.get(['profiles'], (response) => {
      resolve(response.profiles)
    })
  })

  return profileList
}

const add = (profile) => {
  getAll()
    .then(savedProfiles => {
      const profiles = [
        ...savedProfiles,
        profile
      ]


      chrome.storage.sync.set({profiles})
    })

  const profiles = [
    profile
  ]

}

export default {
  add,
  getAll
}
