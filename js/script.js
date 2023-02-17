const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('light');
  document.getElementById('btn-primary').toggle('light')
  document.getElementById('title').toggle('light')
})