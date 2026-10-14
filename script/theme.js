(function () {
    const KEY = 'site-theme', root = document.documentElement;
    const saved = () => { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
    const mq = matchMedia('(prefers-color-scheme: light)');
    const current = () => saved() || (mq.matches ? 'light' : 'dark');
  
    function apply(theme, persist) {
      root.classList.add('theme-anim');
      root.classList.toggle('light-theme', theme === 'light');
      const b = document.getElementById('themeToggle');
      if (b) {
        b.setAttribute('aria-pressed', theme === 'light');
        b.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
      }
      let m = document.querySelector('meta[name="theme-color"]');
      if (!m) { m = document.createElement('meta'); m.name = 'theme-color'; document.head.appendChild(m); }
      m.content = theme === 'light' ? '#e9e0d9' : '#030000';
      if (persist) { try { localStorage.setItem(KEY, theme); } catch (e) {} }
      clearTimeout(apply.t);
      apply.t = setTimeout(() => root.classList.remove('theme-anim'), 500);
    }
  
    document.addEventListener('DOMContentLoaded', () => {
      apply(current(), false);
      const b = document.getElementById('themeToggle');
      if (b) b.addEventListener('click', () =>
        apply(root.classList.contains('light-theme') ? 'dark' : 'light', true));
    });
  
    if (mq.addEventListener) mq.addEventListener('change', () => { if (!saved()) apply(current(), false); });
  })();