function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
  
    const size = Math.random() * 100 + 50;
    const color = `hsl(${Math.random() * 360}, 70%, 50%)`;
  
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.background = color;
  
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
  
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
  
    document.getElementById('background').appendChild(circle);
  
    setTimeout(() => {
      circle.remove();
    }, 2000);
  }
  
  setInterval(createCircle, 500);