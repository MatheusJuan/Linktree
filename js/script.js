const chk = document.getElementById('chk');
const change = document.getElementById("change");

chk.change('click', function () {
  document.getElementById('body').toggle('dark')
  document.getElementById('btn').toggle('dark');
  document.getElementById('title').toggle('dark');
});