const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const themeToggle = document.getElementById('themeToggle');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  root.classList.remove('dark');
  document.body.classList.remove('bg-black', 'text-slate-100');
  document.body.classList.add('bg-slate-100', 'text-slate-900');
}

themeToggle?.addEventListener('click', () => {
  const isDark = root.classList.toggle('dark');
  if (isDark) {
    document.body.classList.remove('bg-slate-100', 'text-slate-900');
    document.body.classList.add('bg-black', 'text-slate-100');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('bg-black', 'text-slate-100');
    document.body.classList.add('bg-slate-100', 'text-slate-900');
    localStorage.setItem('theme', 'light');
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
