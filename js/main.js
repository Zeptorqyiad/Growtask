// Открывающиеся табы
const faqWrapper = document.querySelector('.item-1')
const faqBtn1 = document.querySelector('.answear__faq-1')
if (faqWrapper) {
   faqWrapper.addEventListener('click', function (e) {
      faqBtn1.classList.toggle('faq_active')
   })
}
const faqWrapper2 = document.querySelector('.item-2')
const faqBtn2 = document.querySelector('.answear__faq-2')
if (faqWrapper2) {
   faqWrapper2.addEventListener('click', function (e) {
      faqBtn2.classList.toggle('faq_active')
   })
}
const faqWrapper3 = document.querySelector('.item-3')
const faqBtn3 = document.querySelector('.answear__faq-3')
if (faqWrapper3) {
   faqWrapper3.addEventListener('click', function (e) {
      faqBtn3.classList.toggle('faq_active')
   })
}
const faqWrapper4 = document.querySelector('.item-4')
const faqBtn4 = document.querySelector('.answear__faq-4')
if (faqWrapper4) {
   faqWrapper4.addEventListener('click', function (e) {
      faqBtn4.classList.toggle('faq_active')
   })
}

const rotateButton = document.getElementById('rotateButton')

rotateButton.addEventListener('click', function () {
   if (rotateButton.style.transform === 'rotate(-45deg)') {
      rotateButton.style.transform = 'rotate(0deg)'
   } else {
      rotateButton.style.transform = 'rotate(-45deg)'
   }
})

const rotateButton2 = document.getElementById('rotateButton2')

rotateButton2.addEventListener('click', function () {
   if (rotateButton2.style.transform === 'rotate(-45deg)') {
      rotateButton2.style.transform = 'rotate(0deg)'
   } else {
      rotateButton2.style.transform = 'rotate(-45deg)'
   }
})

const rotateButton3 = document.getElementById('rotateButton3')

rotateButton3.addEventListener('click', function () {
   if (rotateButton3.style.transform === 'rotate(-45deg)') {
      rotateButton3.style.transform = 'rotate(0deg)'
   } else {
      rotateButton3.style.transform = 'rotate(-45deg)'
   }
})

const rotateButton4 = document.getElementById('rotateButton4')

rotateButton4.addEventListener('click', function () {
   if (rotateButton4.style.transform === 'rotate(-45deg)') {
      rotateButton4.style.transform = 'rotate(0deg)'
   } else {
      rotateButton4.style.transform = 'rotate(-45deg)'
   }
})

// Presentation image
const imageCheckbox = document.getElementById('imageCheckbox')
const image = document.getElementById('image')

imageCheckbox.addEventListener('change', function () {
   if (imageCheckbox.checked) {
      image.src = '../img/Presentation/01.png'
   } else {
      image.src = '../img/Presentation/01.png'
   }
})

const imageCheckbox2 = document.getElementById('imageCheckbox2')
imageCheckbox2.addEventListener('change', function () {
   if (imageCheckbox2.checked) {
      image.src = '../img/Presentation/02.png'
   } else {
      image.src = '../img/Presentation/02.png'
   }
})

const imageCheckbox3 = document.getElementById('imageCheckbox3')
imageCheckbox3.addEventListener('change', function () {
   if (imageCheckbox3.checked) {
      image.src = '../img/Presentation/03.png'
   } else {
      image.src = '../img/Presentation/03.png'
   }
})
