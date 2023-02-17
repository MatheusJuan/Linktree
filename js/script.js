const chk = document.getElementById('chk');

chk.addEventListener("click", () => {
  body.classList.toggle('light');
  btn.classList.toggle('dark');
  title.classList.toggle('dark');
});