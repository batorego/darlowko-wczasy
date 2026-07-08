for (const facade of document.querySelectorAll<HTMLAnchorElement>('a[data-video-id]')) {
  facade.addEventListener('click', (event) => {
    event.preventDefault();
    const videoId = facade.dataset.videoId!;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    iframe.title = facade.dataset.videoTitle ?? 'Film';
    iframe.allow =
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;

    // div przejmuje klasę i atrybuty scope'ujące Astro (data-astro-cid-*),
    // żeby zachować stylowanie .video-embed dla osadzonego iframe'a
    const wrapper = document.createElement('div');
    for (const attr of Array.from(facade.attributes)) {
      if (attr.name !== 'href' && attr.name !== 'rel') {
        wrapper.setAttribute(attr.name, attr.value);
      }
    }
    wrapper.style.transform = 'none';
    wrapper.appendChild(iframe);
    facade.replaceWith(wrapper);
    iframe.focus();
  });
}
