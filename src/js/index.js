import '../scss/style.scss'

console.log('Works!')
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 16,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

const button = document.querySelector('.show-close')
const icon = document.querySelector('.icon-swiper')
const text = document.querySelector('.text-swiper')
const viewsonic = document.querySelector('.viewsonic')
const sony = document.querySelector('.sony')
const sumsung2 = document.querySelector('.sumsung2')
const lenovo2 = document.querySelector('.lenovo2')
const apple2 = document.querySelector('.apple2')

button.addEventListener('click', function () {
  if (text.textContent === 'Показать все') {
    text.textContent = 'Скрыть'
    icon.style.transform = 'rotate(180deg)'
    viewsonic.classList.remove('none1')
    sony.classList.remove('none1')
    sumsung2.classList.remove('none')
    lenovo2.classList.remove('none')
    apple2.classList.remove('none')
  } else {
    text.textContent = 'Показать все'
    icon.style.transform = 'rotate(360deg)'
    viewsonic.classList.add('none1')
    sony.classList.add('none1')
    sumsung2.classList.add('none')
    lenovo2.classList.add('none')
    apple2.classList.add('none')
  }
})
