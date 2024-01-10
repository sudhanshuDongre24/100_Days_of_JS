const button = document.getElementById("copy");
const p = document.getElementById("p");
const message = document.getElementById("message");

button.onclick = (e) => {
  message.classList.add("after_clicked");

  let temp = p.innerText;
  navigator.clipboard.writeText(`${temp}`);
  setTimeout(() => {
    message.classList.remove("after_clicked");
  }, 2000);
};
