document.addEventListener('DOMContentLoaded', () => {
    const expandButton = document.querySelector('.expand-button');
    const expandableContent = document.querySelector('.expandable-content');

    expandButton.addEventListener('click', () => {
        expandableContent.classList.toggle('expanded');
        expandButton.textContent = expandableContent.classList.contains('expanded') ? 'Pokaż mniej' : 'Pokaż więcej';
    });
});