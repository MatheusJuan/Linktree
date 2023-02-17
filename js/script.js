const chk = document.getElementById('chk');
const body = document.getElementById('body');
const btn = document.getElementById('btn');
const title = document.getElementById('title');


chk.addEventListener("change", () => {
  body.classList.toggle('lightt');
  btn.classList.toggle('dark');
  title.classList.toggle('dark');
});