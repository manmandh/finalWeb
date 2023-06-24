let passwordField = document.querySelector(".password input");
let confirmPasswordFields = document.querySelector(".confirm-password input");
let icon1 = document.querySelector(".password i");
let icon2 = document.querySelector(".confirm-password i");
let form = document.querySelector("form");

function showHidePassword(icon, passwordField) {
  icon.addEventListener("click", () => {
    if (icon.classList == "fa-solid fa-eye") {
      icon.classList = "fa-solid fa-eye-slash";
    }
    else {
      icon.classList = "fa-solid fa-eye";
    }
    passwordField.setAttribute('type', passwordField.type === 'text' ? 'password' : 'text');
  });
}

showHidePassword(icon1, passwordField);
showHidePassword(icon2, confirmPasswordFields);