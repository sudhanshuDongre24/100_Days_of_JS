const inputs = document.querySelectorAll(".input input");

inputs.forEach((input) => {
  input.onfocus = function () {
    if (!input.classList.contains("onFocus")) {
      input.classList.add("onFocus");
    }
  };

  input.onblur = function () {
    if (input.value === "" && input.classList.contains("onFocus")) {
      input.classList.remove("onFocus");
    }
  };
});
