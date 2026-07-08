const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
const panel = document.getElementById('nav-menu');

if (toggle && panel) {
  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    panel.classList.toggle('open', open);
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  panel.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).closest('a')) setOpen(false);
  });

  document.addEventListener('click', (event) => {
    if (
      panel.classList.contains('open') &&
      !(event.target as HTMLElement).closest('.site-header')
    ) {
      setOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && panel.classList.contains('open')) {
      setOpen(false);
      toggle.focus();
    }
  });
}
