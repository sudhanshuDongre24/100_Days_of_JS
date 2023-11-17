const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.querySelector("input");
  const convertedWeight = document.querySelector("span");

  let kgTOpound;

  if (isNaN(input.value) || input.value <= 0) {
    convertedWeight.classList.add("error");
    convertedWeight.innerHTML = "<p>Please enter a valid number!</p>";

    setTimeout(() => {
      convertedWeight.innerHTML = "";
      convertedWeight.classList.remove("error");
    }, 2500);
  } else {
    kgTOpound = Number(input.value) * 2.20462;
    convertedWeight.classList.add("successfull");
    convertedWeight.innerHTML = `${kgTOpound.toFixed(2)}`;

    setTimeout(() => {
      convertedWeight.innerHTML = "";
      input.value = "";
      convertedWeight.classList.remove("successfull");
    }, 20000);
  }
});
