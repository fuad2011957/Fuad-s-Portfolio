const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.header-nav .nav-link');
const heroSection = document.querySelector('.im_fuad');
const sections = document.querySelectorAll('section[id]');


const SCROLL_THRESHOLD = 60;

window.addEventListener('scroll', () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
        header.classList.add('is-floating');
    } else {
        header.classList.remove('is-floating');
    }
}, { passive: true });


const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -50% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            const isHero = entry.target === heroSection;

            navLinks.forEach((link) => {
                const href = link.getAttribute('href');

               
                if (isHero && href === '#') {
                    link.classList.add('active');
                } 
             
                else if (!isHero && href === `#${currentId}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}, observerOptions);


if (heroSection) observer.observe(heroSection);
sections.forEach((section) => observer.observe(section));


const setupInteractiveSection = (sectionSelector, cardSelector, readyClass) => {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    const cards = section.querySelectorAll(cardSelector);
    section.classList.add(readyClass);

    const reveal = () => {
        section.classList.add('is-visible');
    };

    if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    reveal();
                    observerInstance.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12
        });

        obs.observe(section);
    } else {
        reveal();
    }

    const hasFinePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (hasFinePointer) {
        cards.forEach((card) => {
            card.addEventListener('pointermove', (event) => {
                const bounds = card.getBoundingClientRect();
                const pointerX = ((event.clientX - bounds.left) / bounds.width) * 100;
                const pointerY = ((event.clientY - bounds.top) / bounds.height) * 100;

                card.style.setProperty('--mouse-x', `${pointerX}%`);
                card.style.setProperty('--mouse-y', `${pointerY}%`);
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
const burger       = document.querySelector('.burger');
const mobDrawer    = document.querySelector('.mob-drawer');
const mobBackdrop  = document.querySelector('.mob-backdrop');
const mobNavLinks  = document.querySelectorAll('.mob-nav-link');

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

if (mobBackdrop) {
    mobBackdrop.addEventListener('click', closeMenu);
}

const mobCloseBtn = document.querySelector('.mob-drawer__close');
if (mobCloseBtn) {
    mobCloseBtn.addEventListener('click', closeMenu);
}

mobNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobNavLinks.forEach(l => l.classList.remove('active'));
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
    // Чтобы сообщения реально приходили тебе на почту, создай форму на https://formspree.io
    // и вставь сюда ссылку вида 'https://formspree.io/f/xxxxxxxx'.
    // Пока пусто, отправка просто имитируется (для теста дизайна).
    const CONTACT_ENDPOINT = '';

    const modal        = document.getElementById('contactModal');
    const modalName    = document.getElementById('contactModalName');
    const modalClose   = document.getElementById('contactModalClose');
    const submitBtn    = contactForm.querySelector('.contact-form__submit');
    const statusBox    = document.getElementById('contactStatus');
    const counter      = document.getElementById('contactCounter');

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

        const data = {
            name:    contactForm.elements.name.value.trim(),
            email:   contactForm.elements.email.value.trim(),
            subject: contactForm.elements.subject.value.trim(),
            message: contactForm.elements.message.value.trim()
        };

        submitBtn.classList.add('is-loading');
        submitBtn.disabled = true;
        submitBtn.querySelector('.contact-form__label').textContent = 'SENDING...';

        try {
            await sendMessage(data);
            contactForm.reset();
            counter.textContent = '0';
            openModal(data.name);
        } catch (err) {
            statusBox.textContent = 'Something went wrong. Please try again or write to me by email.';
            statusBox.classList.add('is-visible');
        } finally {
            submitBtn.classList.remove('is-loading');
            submitBtn.disabled = false;
            submitBtn.querySelector('.contact-form__label').textContent = 'SEND MESSAGE';
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