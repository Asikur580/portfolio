// =============== theme (shared by blog pages)

const themeToggler = document.querySelector('.nav_theme-btn');

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    const dark = document.body.classList.contains('dark-theme-variables');
    localStorage.setItem('portfolio-theme', dark ? 'dark-theme-variables' : '');
});

// =============== footer year

document.querySelector('[data-year]').textContent = new Date().getFullYear();
