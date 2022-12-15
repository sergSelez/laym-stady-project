import ready from '../../js/utils/documentReady'

ready(function() {
  const burger = document.querySelector('.header__burger')
  const menu = document.querySelector('.menu')
  const menuList = document.querySelectorAll('.menu__item')
  const subMenuList = document.querySelectorAll('.menu__submenu-wrapper')
  const substrate = document.querySelector('.menu__dark-wrapper')
  
  burger.addEventListener('click', () => {
    menu.classList.toggle('active')
    substrate.classList.toggle('active')
  })

  menu.addEventListener('click', (e) => {
    if (e.target.closest('.menu__item')) {
      const currentItem = e.target.closest('.menu__item')
      const nextItem = currentItem.nextElementSibling

      if (currentItem.classList.contains('active')) {
        removeActive(currentItem)
        removeActive(nextItem)
        return
      }

      menuList.forEach(item => removeActive(item))
      subMenuList.forEach(item => removeActive(item))
      addActive(currentItem)
      addActive(nextItem)
    }
  })

  const addActive = (item) => {
    item.classList.add('active')
  }

  const removeActive = (item) => {
    item.classList.remove('active')
  }
})