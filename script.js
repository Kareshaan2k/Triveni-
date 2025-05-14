// Animation trigger on scroll
const animatedSections = document.querySelectorAll('.animate-slide-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

animatedSections.forEach(section => {
  observer.observe(section);
});
