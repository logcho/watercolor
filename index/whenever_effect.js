window.addEventListener('scroll', function() {
    var whenElement = document.querySelector('#when');
    var whereElement = document.querySelector('#where');

    if (window.scrollY >= 800) {  // Replace 100 with the actual scroll position where you want the text to change
        whenElement.style.opacity = '0';
        whenElement.style.transform = 'translateY(-20px)'; // Again, adjust this as necessary

        whereElement.style.opacity = '1';
        whereElement.style.transform = 'translateY(0)';
    } else {
        whenElement.style.opacity = '1';
        whenElement.style.transform = 'translateY(0)';

        whereElement.style.opacity = '0';
        whereElement.style.transform = 'translateY(20px)'; // Adjust this as necessary
    }
});
