let passwordField = document.querySelector(".password input");
let icon = document.querySelector(".password i");
let form = document.querySelector('form');


icon.addEventListener("click", () => {
  if (icon.classList == "fa-solid fa-eye") {
    icon.classList = "fa-solid fa-eye-slash";
  }
  else {
    icon.classList = "fa-solid fa-eye";
  }
  passwordField.setAttribute('type', passwordField.type === 'text' ? 'password' : 'text');
});
