const chk = document.getElementById('chk');
const body = document.getElementById(('.body');
const btn = document.getElementById(('.btn-primary');
const title = document.getElementById(('.title');

chk.addEventListener('change', () => {
  body.classList.toggle('light');
  title.classList.toggle('dark');
  btn.classList.toggle('dark');
});