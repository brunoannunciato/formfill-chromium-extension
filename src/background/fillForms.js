export const fillForms = () => {
  const pageFields = document.querySelectorAll('input');

  const getProfiles = () => {
    const profileList = new Promise((resolve) => {
      chrome.storage.sync.get(['profiles'], (response) => {
        resolve(response.profiles);
      });
    });

    return profileList;
  };

  getProfiles().then((data) => {
    console.log({ data });
  });
  // ************
  // SNIPPET FROM:
  // https://stackoverflow.com/questions/50035325/filling-a-react-form-from-the-google-chrome-console
  // ************
  // const inputTypes = [
  //   window.HTMLInputElement,
  //   window.HTMLSelectElement,
  //   window.HTMLTextAreaElement,
  // ];

  // const triggerInputChange = (node, value) => {
  //   if (inputTypes.indexOf(node.__proto__.constructor) > -1) {
  //     const setValue = Object.getOwnPropertyDescriptor(
  //       node.__proto__,
  //       'value'
  //     ).set;
  //     let event = new Event('input', { bubbles: true });

  //     if (node.__proto__.constructor === window.HTMLSelectElement) {
  //       event = new Event('change', { bubbles: true });
  //     }
  //     setValue.call(node, value);
  //     node.dispatchEvent(event);
  //   }
  // };

  // // ************

  // const getFields = (profiles) => {
  //   chrome.storage.sync.get(['activedProfile'], (response) => {
  //     const profileName = response.activedProfile?.name;
  //     const fields = profiles[profileName];

  //     pageFields.forEach((field) => {
  //       const fieldName = field.getAttribute('name');

  //       if (fields[fieldName]) {
  //         triggerInputChange(field, fields[fieldName]);
  //       }
  //     });
  //   });
  // };

  // getProfiles().then(getFields);
};
