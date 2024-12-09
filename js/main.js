// Add scroll effect to navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 100) {
        nav.style.background = 'linear-gradient(to right, rgba(0, 65, 98, 0.98), rgba(0, 127, 171, 0.98))';
    } else {
        nav.style.background = 'linear-gradient(to right, rgba(0, 65, 98, 0.95), rgba(0, 127, 171, 0.95))';
    }
});