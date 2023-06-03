
const toggleBtn = document.querySelector('.toggle_btn');
const dropDownMenu = document.querySelector('.dropdown_menu');
const overlay = document.querySelector('.overlay');

toggleBtn.onclick = function() {
  dropDownMenu.classList.toggle('open');
  toggleBtn.classList.toggle('open');
  overlay.classList.toggle('open');
  
  // Add shading effect
  if (dropDownMenu.classList.contains('open')) {
    overlay.style.display = 'block'; // Show the overlay when the dropdown menu is open
  } else {
    overlay.style.display = 'none'; // Hide the overlay when the dropdown menu is closed
  }
};

overlay.onclick = function() {
  dropDownMenu.classList.toggle('open');
  toggleBtn.classList.toggle('open');
  overlay.classList.toggle('open');
  
  // Add shading effect
  if (dropDownMenu.classList.contains('open')) {
    overlay.style.display = 'block'; // Show the overlay when the dropdown menu is open
  } else {
    overlay.style.display = 'none'; // Hide the overlay when the dropdown menu is closed
  }
};
