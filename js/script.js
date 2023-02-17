const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.title.classList.toggle('light')
  document.body.classList.toggle('light')
})