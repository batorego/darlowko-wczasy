const fab = document.querySelector<HTMLAnchorElement>('.drone-fab');
const videosSection = document.getElementById('z-drona');

if (fab && videosSection) {
  let pastIntro = false;
  let videosInView = false;

  const update = () => {
    const visible = pastIntro && !videosInView;
    fab.classList.toggle('drone-fab--visible', visible);
    fab.setAttribute('aria-hidden', String(!visible));
    fab.tabIndex = visible ? 0 : -1;
  };

  const onScroll = () => {
    pastIntro = window.scrollY > window.innerHeight * 0.6;
    update();
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  new IntersectionObserver(
    (entries) => {
      videosInView = entries[0].isIntersecting;
      update();
    },
    { rootMargin: '0px 0px -15% 0px' }
  ).observe(videosSection);
}
