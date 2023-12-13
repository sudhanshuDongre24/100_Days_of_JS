const counter = document.querySelectorAll(".counter");

counter.forEach((singleCounter) => {
  singleCounter.innerText = 0;

  const counting = () => {
    const totalCount = +singleCounter.getAttribute("data-counter");
    const incrementing = +singleCounter.innerText;

    const speed = totalCount / 1000;

    console.log(incrementing + speed);

    if (incrementing < totalCount) {
      singleCounter.innerText = `${Math.floor(incrementing + speed)}`;
      setTimeout(counting, 1);
    } else {
      singleCounter.innerText = totalCount;
    }
  };
  counting();
});
