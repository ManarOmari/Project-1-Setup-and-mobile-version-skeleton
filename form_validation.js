const submitBtn = document.querySelector('#seeProject');
const validateEmail = (email) => {
  if (email.match(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/)) {
    return true;
  }
  return false;
};

submitBtn.addEventListener('click', (event) => {
  const emailVal = document.getElementById('email').value;
  if (!validateEmail(emailVal)) {
    let label=document.querySelector('.label').innerHTML="Email should be wriitn in small case";
    event.preventDefault();
  }
});
