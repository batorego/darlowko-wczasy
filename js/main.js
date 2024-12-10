/*// Add scroll effect to navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    nav.style.background = '#B8C5D6';
});*/

// Set current year in footer
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});