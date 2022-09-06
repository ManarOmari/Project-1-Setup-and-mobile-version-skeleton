const submitBtn = document.querySelector('.seeProject');
const validateEmail = (email) => {
  if (email.match(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/)) {
    return true;
  }
  return false;
};

submitBtn.addEventListener('click', () => {
  const emailVal = document.getElementById('email').value;
  if (!validateEmail(emailVal)) {
    document.querySelector('.txtt').innerHTML = ' please enter correct email in lower case eg abcde@fgh.com';
  }
});
