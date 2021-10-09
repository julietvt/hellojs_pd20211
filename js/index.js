//lazy load

window.onload = () => {
  const options = { threshold: 0.5 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
      }
    });
  }, options);

  document
    .querySelectorAll('img')
    .forEach((target) => observer.observe(target));
};
