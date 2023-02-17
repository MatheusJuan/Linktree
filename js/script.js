const chk = document.getElementById('chk');
const body = document.getElementById('body');
const btn = document.getElementById('btn');
const title = document.getElementById('title');


chk.addEventListener("click", () => {
  body.classList.toggle('light');
  btn.classList.toggle('dark');
  title.classList.toggle('dark');
});