window.onload = () => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let intervals = [];
  const h1Elements = document.querySelectorAll("h1"); // Updated the selector to "h2"
  const applyEffect = (element) => {
    let interval = null;
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      element.innerText = element.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return element.dataset.value[index].toLowerCase();
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= element.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 4;
    }, 30);

    intervals.push(interval);
  };

  const checkScrollAndApplyEffect = () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    if (scrollPosition >= 150) {
      h1Elements.forEach(applyEffect);
      window.removeEventListener("scroll", checkScrollAndApplyEffect); // Remove the scroll event listener once animation is triggered
    }
  };

  // Add scroll event listener
  window.addEventListener("scroll", checkScrollAndApplyEffect);

  // Apply effect on mouseover for each h2 element
  h1Elements.forEach((element) => {
    element.onmouseover = () => applyEffect(element);
  });
};
