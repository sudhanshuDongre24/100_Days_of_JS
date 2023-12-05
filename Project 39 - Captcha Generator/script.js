const display = document.getElementById("status");
const body = document.body;
const text = document.getElementById("clientText");
const generator = document.getElementById("generator");
const submit = document.getElementById("submit");
const refresh = document.getElementById("refresh");
const char = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let captcha = "";
text.value = "";
let pwdLength = 6;
function captchaGen() {
  for (let i = 0; i < pwdLength; i++) {
    let generatePwd = Math.floor(Math.random() * char.length);
    captcha += char.substring(generatePwd, generatePwd + 1);
  }
  generator.value = captcha;
  display.innerText = "Captcha Generator";
}

captchaGen();

submit.addEventListener("click", () => {
  if (text.value == "") {
    display.innerText = "Please Enter the text shown below👇";
  } else if (text.value == captcha) {
    display.innerText = "Matched😎";
  } else {
    display.innerText = "Not Matched😢";
  }
});

refresh.onclick = function refreshing() {
  captcha = "";
  text.value = "";
  captchaGen();
};
