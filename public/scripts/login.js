

$(document).ready(function() {
  const loginButton = document.getElementById('loginbutton');
  const loginInput = document.getElementById('logininput');
  loginButton.addEventListener('click', () => {
    const inputValue = loginInput.value;
    document.cookie = `User = ${inputValue}`
  });
});
