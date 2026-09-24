if (window.matchMedia('(pointer: fine)').matches) {
    const ring = document.querySelector('.cursor-ring');
    const dot = document.querySelector('.cursor-dot');
    const interactive = 'a, button, [role="button"], input, textarea, select, label';

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let visible = false;

    document.body.classList.add('custom-cursor');

    const show = () => {
        visible = true;
        ring.classList.remove('is-hidden');
        dot.classList.remove('is-hidden');
    };

    const hide = () => {
        visible = false;
        ring.classList.add('is-hidden');
        dot.classList.add('is-hidden');
    };

    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        if (!visible) show();
    });

    document.addEventListener('mouseleave', hide);
    document.addEventListener('mouseenter', show);

    document.addEventListener('mouseover', (event) => {
        if (event.target.closest(interactive)) {
            ring.classList.add('is-hover');
        }
    });

    document.addEventListener('mouseout', (event) => {
        if (event.target.closest(interactive)) {
            ring.classList.remove('is-hover');
        }
    });

    const animate = () => {
        ringX += (mouseX - ringX) * 0.14;
        ringY += (mouseY - ringY) * 0.14;

        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

        requestAnimationFrame(animate);
    };

    animate();
}
