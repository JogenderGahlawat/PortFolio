const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
const toTop = document.getElementById('toTop');
const cursorGlow = document.querySelector('.cursor-glow');

menuBtn.addEventListener('click', () => navMenu.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => navMenu.classList.remove('open')));

toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

window.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add('show'); }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');
window.addEventListener('scroll', () => {
  let current = 'home';
  sections.forEach(section => {
    if(window.scrollY >= section.offsetTop - 160) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});
