const chk = document.getElementById('chk');

chk.addEventListener('change', function () {
  document.body.classList.toggle('light');
  document.getElementById("btn").style.backgroundColor = chk.light;
  document.getElementById("title").style.backgroundColor = chk.light;
});