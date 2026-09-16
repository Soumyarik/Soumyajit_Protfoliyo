const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
const theme = document.getElementById('theme');

menu.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

if (localStorage.getItem('portfolio-theme') === 'light') {
  document.body.classList.add('light');
  theme.textContent = '☀';
}
theme.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const light = document.body.classList.contains('light');
  localStorage.setItem('portfolio-theme', light ? 'light' : 'dark');
  theme.textContent = light ? '☀' : '☾';
});

// Highlight the nav link for the section currently in view.
const links = [...nav.querySelectorAll('a')];
const sections = links
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

const setActive = () => {
  const scrollPos = window.scrollY + 140;
  let current = sections[0];
  for (const s of sections) {
    if (s.offsetTop <= scrollPos) current = s;
  }
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current.id));
};
document.addEventListener('scroll', setActive, { passive: true });
setActive();
