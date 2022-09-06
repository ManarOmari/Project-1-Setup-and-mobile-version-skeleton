const form = document.querySelector('.formSection');
const {name, email, msg } = form.elements;
if (!localStorage.getItem('formObjectData')) {
  const formData = { fnameData: '', emailData: '', messageData: '' };
  localStorage.setItem('formObjectData', JSON.stringify(formData));
}
const reservedata = (element, val) => {
  element.addEventListener('change', () => {
    const data = element.value;
    const formData = JSON.parse(localStorage.getItem('formObjectData'));
    formData[val] = data;
    localStorage.setItem('formObjectData', JSON.stringify(formData));
  });
};
reservedata(name, 'fnameData');
reservedata(email, 'emailData');
reservedata(msg, 'messageData');