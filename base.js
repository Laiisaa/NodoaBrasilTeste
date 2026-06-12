// Tema escuro/claro
const btn = document.getElementById('themeBtn');
const icon = document.getElementById('themeIcon');
const moon = '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>';
const sun  = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
if (localStorage.getItem('nodoa-theme') === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  if (icon) icon.innerHTML = sun;
}
if (btn) {
  btn.addEventListener('click', () => {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (dark) {
      document.documentElement.removeAttribute('data-theme');
      if (icon) icon.innerHTML = moon;
      localStorage.setItem('nodoa-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (icon) icon.innerHTML = sun;
      localStorage.setItem('nodoa-theme', 'dark');
    }
  });
}
// Busca
const si = document.getElementById('searchInput');
if (si) {
  si.addEventListener('keydown', e => {
    if (e.key === 'Enter' && e.target.value.trim())
      window.location.href = `busca.html?q=${encodeURIComponent(e.target.value.trim())}`;
  });
}
