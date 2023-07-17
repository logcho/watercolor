function createCircle() {
  const circle = document.createElement('div');
  circle.classList.add('circle');

  const size = Math.random() * 100 + 50; // Random size between 50 and 150 pixels
  const color = `hsl(${Math.random() * 360}, 70%, 50%)`; // Random color using HSL

  // Ensure the circle is completely within the visible area
  const radius = size / 2;
  const maxX = window.innerWidth - size;
  const maxY = window.innerHeight - size;
  const minX = radius;
  const minY = radius;

  const x = Math.random() * (maxX - minX) + minX; // Random x-coordinate within the visible width
  const y = Math.random() * (maxY - minY) + minY; // Random y-coordinate within the visible height

  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.background = color;

  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  document.getElementById('background').appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 2000); // Remove the circle after 2 seconds
}

setInterval(createCircle, 500); // Create a circle every 0.5 seconds
