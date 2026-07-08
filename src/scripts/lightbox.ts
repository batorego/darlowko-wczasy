const dialog = document.getElementById('lightbox') as HTMLDialogElement | null;
const links = Array.from(
  document.querySelectorAll<HTMLAnchorElement>('a[data-lightbox]')
);

if (dialog && links.length > 0) {
  const image = dialog.querySelector('img')!;
  const caption = dialog.querySelector('.lightbox-caption')!;
  const prevButton = dialog.querySelector<HTMLButtonElement>('[data-lightbox-prev]')!;
  const nextButton = dialog.querySelector<HTMLButtonElement>('[data-lightbox-next]')!;
  const closeButton = dialog.querySelector<HTMLButtonElement>('[data-lightbox-close]')!;

  let group: HTMLAnchorElement[] = [];
  let index = 0;
  let opener: HTMLElement | null = null;

  const show = (nextIndex: number) => {
    index = (nextIndex + group.length) % group.length;
    const link = group[index];
    image.src = link.href;
    image.alt = link.dataset.caption ?? '';
    caption.textContent = link.dataset.caption ?? '';
    const single = group.length < 2;
    prevButton.hidden = single;
    nextButton.hidden = single;
  };

  for (const link of links) {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      opener = link;
      group = links.filter((l) => l.dataset.lightbox === link.dataset.lightbox);
      show(group.indexOf(link));
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    });
  }

  prevButton.addEventListener('click', () => show(index - 1));
  nextButton.addEventListener('click', () => show(index + 1));
  closeButton.addEventListener('click', () => dialog.close());

  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') show(index - 1);
    if (event.key === 'ArrowRight') show(index + 1);
  });

  // Klik w tło (poza zawartością) zamyka podgląd.
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener('close', () => {
    document.body.style.overflow = '';
    image.src = '';
    opener?.focus();
  });
}
