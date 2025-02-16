// js/main.js

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

// Example: Add a console log when the page loads
window.addEventListener('load', () => {
    console.log('Portfolio website loaded successfully!');
});