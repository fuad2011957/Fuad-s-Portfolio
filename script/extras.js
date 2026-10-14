(() => {
  const root = document.documentElement;
  const bar = document.querySelector('.scroll-progress');
  const sec = document.getElementById('process');
  const line = sec && sec.querySelector('.process__line');
  const steps = sec ? [...sec.querySelectorAll('.process-step')] : [];

  /* Scroll progress bar + process timeline */
  const onScroll = () => {
    const max = root.scrollHeight - innerHeight;
    if (bar) bar.style.setProperty('--p', max > 0 ? Math.min(scrollY / max, 1) : 0);
    if (line) {
      const r = sec.getBoundingClientRect();
      const p = Math.min(Math.max((innerHeight * 0.6 - r.top) / (r.height * 0.7), 0), 1);
      line.style.setProperty('--p', p);
    }
    steps.forEach((s) => {
      if (s.getBoundingClientRect().top < innerHeight * 0.85) s.classList.add('is-lit');
    });
  };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  onScroll();

  /* Count-up numbers in About cards */
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.about-card__stat').forEach((el) => {
      const m = el.textContent.trim().match(/^(\d+)(.*)$/);
      if (!m) return;
      const end = +m[1], suf = m[2];
      el.textContent = '0' + suf;
      const io = new IntersectionObserver(([e], o) => {
        if (!e.isIntersecting) return;
        o.disconnect();
        const t0 = performance.now();
        const tick = (t) => {
          const k = Math.min((t - t0) / 1400, 1);
          el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suf;
          if (k < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }, { threshold: 0.6 });
      io.observe(el);
    });
  }

  /* Magnetic buttons */
  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.im_fuad_content .button, .about__btn, .contact-form__submit, .footer__mail').forEach((b) => {
      b.addEventListener('pointermove', (e) => {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${(e.clientY - r.top - r.height / 2) * 0.28}px)`;
      });
      b.addEventListener('pointerleave', () => { b.style.transform = ''; });
    });
  }
})();
