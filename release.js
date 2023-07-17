function createCircle() {
  const circle = document.createElement('div');
  circle.classList.add('circle');

  const size = Math.random() * 100 + 50; // Random size between 50 and 150 pixels
  const color = `hsl(${Math.random() * 360}, 70%, 50%)`; // Random color using HSL

  const padding = 20; // Padding in pixels

  // Ensure the circle is completely within the visible area with padding
  const radius = size / 2;
  const maxX = window.innerWidth - size - padding * 2;
  const maxY = window.innerHeight - size - padding * 2;
  const minX = radius + padding;
  const minY = radius + padding;

  const x = Math.random() * (maxX - minX) + minX; // Random x-coordinate within the visible width with padding
  const y = Math.random() * (maxY - minY) + minY; // Random y-coordinate within the visible height with padding

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
