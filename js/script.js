const chk = document.getElementById('chk');

chk.addEventListener('click', function () {
  document.getElementById('body').toggle('dark')
  document.getElementById('btn').toggle('dark');
  document.getElementById('title').toggle('dark');
});