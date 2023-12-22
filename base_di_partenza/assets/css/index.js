window.onscroll = function () {
  const greenButton = document.getElementById('nero')
  const header = document.getElementsByTagName('header')[0]
  if (window.scrollY > 400) {
    greenButton.style.backgroundColor = '#1a8917'
    header.classList.add('scrolled')
  } else {
    greenButton.style.backgroundColor = '#191919'
    header.classList.remove('scrolled')
  }
}
