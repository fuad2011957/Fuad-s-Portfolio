const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.header-nav .nav-link');
const heroSection = document.querySelector('.im_fuad');
const sections = document.querySelectorAll('section[id]');

const SCROLL_THRESHOLD = 60;

window.addEventListener('scroll', () => {
    header.classList.toggle('is-floating', window.scrollY > SCROLL_THRESHOLD);
}, { passive: true });

/* ---------- Active nav link ---------- */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const currentId = entry.target.getAttribute('id');
        const isHero = entry.target === heroSection;

        navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            const active = isHero ? href === '#' : href === `#${currentId}`;
            link.classList.toggle('active', active);
        });
    });
}, { root: null, rootMargin: '-20% 0px -50% 0px', threshold: 0 });

if (heroSection) observer.observe(heroSection);
sections.forEach((section) => observer.observe(section));

/* ---------- Reveal + mouse glow on cards ---------- */
const setupInteractiveSection = (sectionSelector, cardSelector, readyClass) => {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    const cards = section.querySelectorAll(cardSelector);
    section.classList.add(readyClass);

    const reveal = () => section.classList.add('is-visible');

    if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries, instance) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    reveal();
                    instance.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        obs.observe(section);
    } else {
        reveal();
    }

    const hasFinePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (hasFinePointer) {
        cards.forEach((card) => {
            card.addEventListener('pointermove', (event) => {
                const b = card.getBoundingClientRect();
                card.style.setProperty('--mouse-x', `${((event.clientX - b.left) / b.width) * 100}%`);
                card.style.setProperty('--mouse-y', `${((event.clientY - b.top) / b.height) * 100}%`);
            });
            card.addEventListener('pointerleave', () => {
                card.style.setProperty('--mouse-x', '50%');
                card.style.setProperty('--mouse-y', '50%');
            });
        });
    }
};

setupInteractiveSection('.skills', '.skill-card', 'skills--ready');
setupInteractiveSection('.about', '.about-card, .about__profile-card', 'about--ready');

/* ==========================================
   MOBILE BURGER MENU
   ========================================== */
const burger      = document.querySelector('.burger');
const mobDrawer   = document.querySelector('.mob-drawer');
const mobBackdrop = document.querySelector('.mob-backdrop');
const mobNavLinks = document.querySelectorAll('.mob-nav-link');

const openMenu = () => {
    document.body.classList.add('nav-open');
    burger.setAttribute('aria-expanded', 'true');
    mobDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
};

const closeMenu = () => {
    document.body.classList.remove('nav-open');
    burger.setAttribute('aria-expanded', 'false');
    mobDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
};

if (burger) {
    burger.addEventListener('click', () => {
        document.body.classList.contains('nav-open') ? closeMenu() : openMenu();
    });
}
if (mobBackdrop) mobBackdrop.addEventListener('click', closeMenu);

const mobCloseBtn = document.querySelector('.mob-drawer__close');
if (mobCloseBtn) mobCloseBtn.addEventListener('click', closeMenu);

mobNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
        mobNavLinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
        closeMenu();
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
        closeMenu();
        burger.focus();
    }
});

setupInteractiveSection('.contact', '.contact-card', 'contact--ready');

/* ==========================================
   CONTACT FORM
   ========================================== */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    /*
     * ПОЧТА: чтобы сообщения приходили на твою почту:
     * 1) зайди на https://formspree.io, создай форму (New Form) и укажи свою почту;
     * 2) подтверди письмо от Formspree;
     * 3) вставь сюда ссылку вида 'https://formspree.io/f/xxxxxxxx'.
     * Пока пусто — отправка только имитируется, реальные письма НЕ уходят.
     */
    const CONTACT_ENDPOINT = 'https://formspree.io/f/xwlvwpop';

    const modal      = document.getElementById('contactModal');
    const modalName  = document.getElementById('contactModalName');
    const modalClose = document.getElementById('contactModalClose');
    const submitBtn  = contactForm.querySelector('.contact-form__submit');
    const submitLbl  = submitBtn.querySelector('.contact-form__label');
    const statusBox  = document.getElementById('contactStatus');
    const counter    = document.getElementById('contactCounter');

    const rules = {
        name:    v => v.trim().length >= 2 || 'Please enter your name (min. 2 characters)',
        email:   v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Please enter a valid email',
        message: v => v.trim().length >= 10 || 'Message is too short (min. 10 characters)'
    };

    const setError = (name, msg) => {
        const input = contactForm.elements[name];
        const field = input.closest('.field');
        field.classList.toggle('has-error', Boolean(msg));
        field.querySelector('.field__error').textContent = msg || '';
        input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    };

    const validateField = (name) => {
        const result = rules[name](contactForm.elements[name].value);
        setError(name, result === true ? '' : result);
        return result === true;
    };

    Object.keys(rules).forEach((name) => {
        const el = contactForm.elements[name];
        el.addEventListener('blur', () => validateField(name));
        el.addEventListener('input', () => {
            if (el.closest('.field').classList.contains('has-error')) validateField(name);
        });
    });

    contactForm.elements.message.addEventListener('input', (e) => {
        counter.textContent = e.target.value.length;
    });

    /* ---- Modal ---- */
    let lastFocused = null;

    const openModal = (name) => {
        lastFocused = document.activeElement;
        modalName.textContent = name || 'friend';
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        setTimeout(() => modalClose.focus(), 100);
    };

    const closeModal = () => {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (lastFocused) lastFocused.focus();
    };

    modalClose.addEventListener('click', closeModal);
    modal.querySelector('[data-close]').addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('is-open')) return;
        if (e.key === 'Escape') closeModal();
        if (e.key === 'Tab') {
            e.preventDefault();
            modalClose.focus();
        }
    });

    /* ---- Send ---- */
    const sendMessage = async (data) => {
        if (!CONTACT_ENDPOINT) {
            await new Promise((resolve) => setTimeout(resolve, 1400)); // имитация
            return;
        }

        const res = await fetch(CONTACT_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!res.ok) throw new Error('Request failed');
    };

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        statusBox.classList.remove('is-visible');

        const results = Object.keys(rules).map(validateField);
        if (results.includes(false)) {
            const firstBad = contactForm.querySelector('.has-error input, .has-error textarea');
            if (firstBad) firstBad.focus();
            return;
        }

        // Honeypot: боты заполняют скрытое поле
        if (contactForm.elements._gotcha.value) {
            openModal(contactForm.elements.name.value.trim());
            contactForm.reset();
            return;
        }

        const name = contactForm.elements.name.value.trim();
        const data = {
            name,
            email:   contactForm.elements.email.value.trim(),
            subject: contactForm.elements.subject.value.trim(),
            message: contactForm.elements.message.value.trim(),
            _subject: `Portfolio: new message from ${name}`
        };

        const originalLabel = submitLbl.textContent; // сохраняем текст на текущем языке
        submitBtn.classList.add('is-loading');
        submitBtn.disabled = true;
        submitLbl.textContent = '...';

        try {
            await sendMessage(data);
            contactForm.reset();
            counter.textContent = '0';
            openModal(name);
        } catch (err) {
            statusBox.textContent = 'Something went wrong. Please try again or write to me by email.';
            statusBox.classList.add('is-visible');
        } finally {
            submitBtn.classList.remove('is-loading');
            submitBtn.disabled = false;
            submitLbl.textContent = originalLabel;
        }
    });
}

setupInteractiveSection('.footer', '.footer__brand', 'footer--ready');

/* ==========================================
   FOOTER
   ========================================== */
const footerYear = document.getElementById('footerYear');
if (footerYear) footerYear.textContent = new Date().getFullYear();

const backToTop = document.getElementById('backToTop');
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ==========================================
   PROJECTS FILTER
   ========================================== */
const projFilterBtns = document.querySelectorAll('.proj-filter');
const projCards = document.querySelectorAll('.projects__bento .proj-card');

projFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        projFilterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        projCards.forEach((card) => {
            card.classList.toggle('is-hidden', !(filter === 'all' || card.dataset.category === filter));
        });
    });
});