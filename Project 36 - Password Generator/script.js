const button = document.getElementById("button");
const show = document.querySelector(".show");
const copy = document.querySelector(".copy");

button.onclick = function generatePassword() {
  let characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_";
  let pwdLenght = 16;
  let password = "";

  for (let i = 0; i < pwdLenght; i++) {
    let generatePwd = Math.floor(Math.random() * characters.length);
    password += characters.substring(generatePwd, generatePwd + 1);
  }

  document.getElementById("password").value = password;
  show.innerHTML = "Your New Password is: <br>" + password;
};

copy.onclick = function copyPwd() {
  let text = document.getElementById("password");
  text.select();
  text.setSelectionRange(0, 9999);
  document.execCommand("copy");
  //   document.execCommand("i");
  show.classList.toggle("active");
  setTimeout(() => {
    show.classList.toggle("active");
  }, 2000);
};
