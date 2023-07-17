const toggleBtn = document.querySelector('.toggle_btn');
const dropDownMenu = document.querySelector('.dropdown_menu');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');

let isFirstClick = true; // Flag variable to track the first click

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

  // Toggle popup only on the first click
  if (isFirstClick) {
    popup.classList.toggle('open');
    isFirstClick = false; // Set the flag to false after the first click
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
