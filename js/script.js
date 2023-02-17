const chk = document.getElementById('chk');

chk.addEventListener('change', function () {
  document.body.classList.toggle('light');
  document.btn.classList.toggle('dark');
  document.title.classList.toggle('dark');
});