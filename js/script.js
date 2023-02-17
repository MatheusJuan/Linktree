const chk = document.getElementById('chk');

chk.addEventListener('click', () => {
  document.body.classList.toggle('light');
  document.btn.classList.add('dark');
  document.title.classList.add('dark');
});