const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('light')
  page.classList.add('light');
})