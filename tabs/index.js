let tab = function () {
  const tabNav = document.querySelectorAll('.tabs-nav__item')
  const tabContent = document.querySelectorAll('.tab')
  const tabName

  tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav)
  })

  function selectTabNav() {
    console.log(this)
  }
}

tab()

