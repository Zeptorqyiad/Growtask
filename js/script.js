// Прокрутка при клике
const menuLinks = document.querySelectorAll('.link-id[data-goto]')

if (menuLinks.length > 0) {
   menuLinks.forEach((menuLink) => {
      menuLink.addEventListener('click', onMenuLinkClick)
   })

   function onMenuLinkClick(e) {
      const menuLink = e.target

      if (
         menuLink.dataset.goto &&
         document.querySelector(menuLink.dataset.goto)
      ) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto)
         const gotoBlockValue =
            gotoBlock.getBoundingClientRect().top + scrollY ||
            document.documentElement.scrollTop -
               document.querySelector('header')

         if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock')
            logoName.classList.remove('_opened')
            iconMenu.classList.remove('_active')
            menuBody.classList.remove('_active')
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: 'smooth',
         })

         e.preventDefault()
      }
   }
}

// Меню бургер
const iconMenu = document.querySelector('.header__burger')
const menuBody = document.querySelector('.menu__list')
const logoName = document.querySelector('.header__logo')
if (iconMenu) {
   iconMenu.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock')
      logoName.classList.toggle('_opened')
      iconMenu.classList.toggle('_active')
      menuBody.classList.toggle('_active')
   })
}

// Стилизация кнопки checkbox

const btnEl = document.querySelector('.checkbox-icon')
if (btnEl) {
   btnEl.addEventListener('click', function (e) {
      btnEl.classList.toggle('active')
   })
}
