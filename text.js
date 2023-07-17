window.onload = () => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let intervals = [];
  const h2Elements = document.querySelectorAll("h2");

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

      iteration += 1 / 10;
    }, 30);

    intervals.push(interval);
  };

  // Apply effect on mouseover for each h2 and h4 element
  h2Elements.forEach((element) => {
    element.onmouseover = () => applyEffect(element);
  });

  // Apply effect onload for each h2 and h4 element
  h2Elements.forEach(applyEffect);
};
