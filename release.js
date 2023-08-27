function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
  
    const size = Math.random() * 100 + 50; // Random size between 10 and 100 pixels
    const color = 'hsl(0, 0%, 100%)'; // White color using HSL
  
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.background = color;
  
    const x = Math.random() * window.innerWidth; // Random x-coordinate within the window width
    const y = Math.random() * window.innerHeight; // Random y-coordinate within the window height
  
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
  
    document.getElementById('background').appendChild(circle);
  
    setTimeout(() => {
      circle.remove();
    }, 2000); // Remove the circle after 2 seconds
  }
  
  setInterval(createCircle, 500); // Create a circle every 0.5 seconds
  
