const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach((smoothLink) => smoothLink.addEventListener('click', (e) => {
  e.preventDefault();
  const id = smoothLink.getAttribute('href');
  if (id) {

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}));
