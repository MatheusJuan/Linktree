const chk = document.getElementById('chk');

chk.addEventListener('click', function () {
  document.body.classList.toggle('light');
  document.getElementById('btn').toggle('dark');
  document.getElementById('title').toggle('dark');
});