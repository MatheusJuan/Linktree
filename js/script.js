const chk = document.getElementById('chk');

chk.addEventListener("click", () => {
  document.getElementById('body').classList.toggle('light');
  document.getElementById('btn').classList.toggle('dark');
  document.getElementById('title').classList.toggle('dark');
});