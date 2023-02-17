const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('light')
  document.btn-primary.classList.toggle('light')
  document.ig.classList.toggle('light')
  document.title.classList.toggle('light')
})