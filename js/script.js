const chk = document.getElementById('chk');

chk.addEventListener("click", () => {
  document.getElementById('body').classList.toggle('body.light');
  document.getElementById('btn').classList.toggle('btn.dark');
  document.getElementById('title').classList.toggle('title.dark');
});