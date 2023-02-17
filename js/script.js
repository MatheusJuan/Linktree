const chk = document.getElementById('chk');
const body = document.getElementById('body');
const btn = document.getElementById('btn-primary');
const title = document.getElementById('title');


chk.addEventListener('change', () => {
  document.body.classList.toggle('light');
  document.title.classList.toggle('dark');
  document.btn.classList.toggle('dark');
});