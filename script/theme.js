(function () {
    const KEY = 'site-theme';
    const root = document.documentElement;
    const btn = () => document.getElementById('themeToggle');

    function apply(theme) {
        root.classList.toggle('light-theme', theme === 'light');
        const b = btn();
        if (b) b.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
        try { localStorage.setItem(KEY, theme); } catch (e) {}
    }

    function current() {
        try { return localStorage.getItem(KEY) || 'dark'; } catch (e) { return 'dark'; }
    }

    document.addEventListener('DOMContentLoaded', () => {
        apply(current());
        const b = btn();
        if (b) {
            b.addEventListener('click', () => {
                apply(current() === 'light' ? 'dark' : 'light');
            });
        }
    });
})();