const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
  body.classList.toggle('light');
  chk.title.classList.toggle('dark');
  chk.btn.classList.toggle('dark');
});