document.addEventListener('DOMContentLoaded', () => {
  const metrics = document.querySelectorAll('.metric');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.dataset.target;
        let current = 0;
        const inc = target / 60;
        const tick = () => {
          current += inc;
          if (current >= target) {
            el.textContent = target;
          } else {
            el.textContent = Math.floor(current);
            requestAnimationFrame(tick);
          }
        };
        requestAnimationFrame(tick);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  metrics.forEach(m => obs.observe(m));
});
