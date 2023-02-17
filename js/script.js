const chk = document.querySelector('.chk');
const body = document.querySelector('.body');
const btn = document.querySelector('.btn-primary');
const title = document.querySelector('.title');

chk.addEventListener('change', () => {
  body.classList.toggle('light');
  title.classList.toggle('dark');
  btn.classList.toggle('dark');
});