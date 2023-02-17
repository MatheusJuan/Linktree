const chk = document.getElementById('chk');

chk.addEventListener('click', function () {
  document.body.classList.toggle('light');
  document.btn.classList.toggle('dark');
  document.title.classList.toggle('dark');
});