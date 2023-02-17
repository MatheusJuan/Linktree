const chk = document.getElementById('chk');

chk.addEventListener("click", () => {
  body.classList.toggle('body.light');
  btn.classList.toggle('btn.dark');
  title.classList.toggle('title.dark');
});