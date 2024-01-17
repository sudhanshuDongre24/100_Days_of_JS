const upperPart = document.querySelector(".upperPart");
const belowPart = document.querySelector(".belowPart");

function scrollingSmoothly(targetSource, timeDuration) {
  let target = document.querySelector(targetSource);
  const targetPos = target.getBoundingClientRect().top;
  const startPos = window.pageYOffset;

  let distance = targetPos - startPos;
  let startTime = null;

  function animate(currentTime) {
    if (startTime == null) {
      startTime = currentTime;
    }

    let timeElapsed = currentTime - startTime;
    let scroll = ease(timeElapsed, startPos, distance, timeDuration);
    window.scrollTo(0, scroll);

    if (timeElapsed < timeDuration) {
      requestAnimationFrame(animate);
    }
  }
  function ease(t, b, c, d) {
    t /= d / 2;

    if (t < 1) {
      return (c / 2) * t * t + b;
    }

    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animate);
}
upperPart.addEventListener("click", () => {
  scrollingSmoothly(".belowPart", 2500);
});

belowPart.addEventListener("click", () => {
  scrollingSmoothly(".upperPart", 2500);
});
