// =============== theme

const themeToggler = document.querySelector('.nav_theme-btn');

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    const dark = document.body.classList.contains('dark-theme-variables');
    localStorage.setItem('portfolio-theme', dark ? 'dark-theme-variables' : '');
});

// =============== mobile menu

const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

const setMenu = (open) => {
    mobileMenu.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
};

menuBtn.addEventListener('click', () => setMenu(mobileMenu.hidden));

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.hidden) {
        setMenu(false);
        menuBtn.focus();
    }
});

// =============== active section (header nav + index rail)

const sectionLinks = document.querySelectorAll('[data-section]');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        sectionLinks.forEach(link => {
            const active = link.dataset.section === id;
            link.classList.toggle('is-active', active);
            if (active) {
                link.setAttribute('aria-current', 'true');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    });
}, { rootMargin: '-45% 0px -50% 0px' });

document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));

// =============== scroll reveal

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
    });
}, { rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// =============== github stats

const repoCount = document.querySelector('[data-github-repos]');

fetch('https://api.github.com/users/Asikur58')
    .then(res => (res.ok ? res.json() : null))
    .then(user => {
        if (user && typeof user.public_repos === 'number') {
            repoCount.textContent = user.public_repos;
        }
    })
    .catch(() => {});

// =============== footer year

document.querySelector('[data-year]').textContent = new Date().getFullYear();
