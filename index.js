import './scss/main.scss'

const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 'auto',
  direction: 'horizontal',
  loop: true,
  spaceBetween: 16,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

// обработчик клика для иконок брендов
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
// обработчик кнопки с текстом после header
const textMain = document.querySelector('.main-content__text__secondPart')
const buttonText = document.querySelector('.main-contentButton')
const iconText = document.querySelector('.main-contentIcon')
const readText = document.querySelector('.main-content__read')

buttonText.addEventListener('click', function () {
  if (readText.textContent === 'Читать далее') {
    readText.textContent = 'Скрыть'
    textMain.classList.remove('hidden')
    iconText.style.transform = 'rotate(180deg)'
  } else {
    readText.textContent = 'Читать далее'
    textMain.classList.add('hidden')
    iconText.style.transform = 'rotate(0deg)'
  }
})

const repairButton = document.querySelector('.repair-list__button')
const repairItems = document.getElementsByClassName('repair-list__item')
const repairIcon = document.querySelector('.repair-icon')
const repairText = document.querySelector('.repair-text')
const arrRepair = Array.from(repairItems)

repairButton.addEventListener('click', function () {
  if (
    repairText.textContent === 'Показать все' &&
    window.innerWidth >= 769 &&
    window.innerWidth <= 1120
  ) {
    repairIcon.style.transform = 'rotate(180deg)'
    repairText.textContent = 'Скрыть'
    arrRepair.slice(-3).forEach((item) => {
      item.classList.remove('hidden')
    })
  } else if (
    repairText.textContent === 'Скрыть' &&
    window.innerWidth >= 769 &&
    window.innerWidth <= 1120
  ) {
    repairIcon.style.transform = 'rotate(0deg)'
    repairText.textContent = 'Показать все'
    arrRepair.slice(-3).forEach((item) => {
      item.classList.add('hidden')
    })
  } else if (
    repairText.textContent === 'Показать все' &&
    window.innerWidth >= 1121
  ) {
    repairIcon.style.transform = 'rotate(180deg)'
    repairText.textContent = 'Скрыть'
    arrRepair.slice(4).forEach((item) => {
      item.classList.remove('hidden')
    })
  } else if (repairText.textContent === 'Скрыть' && window.innerWidth >= 1121) {
    arrRepair.slice(4).forEach((item) => {
      item.classList.add('hidden')
    })
    repairIcon.style.transform = 'rotate(0deg)'
    repairText.textContent = 'Показать все'
  }
})

window.addEventListener('resize', function () {
  if (window.innerWidth >= 1121 && repairText.textContent === 'Показать все') {
    arrRepair[3].classList.remove('hidden')
  } else if (
    window.innerWidth >= 769 &&
    window.innerWidth <= 1120 &&
    repairText.textContent === 'Показать все'
  ) {
    arrRepair[3].classList.add('hidden')
  }
})

if (window.innerWidth >= 1121) {
  arrRepair[3].classList.remove('hidden')
} else if (window.innerWidth >= 769 && window.innerWidth <= 1120) {
  arrRepair[3].classList.add('hidden')
}

const layerOpacity = document.querySelector('.sidebar-blur')
const leftSidebar = document.querySelector('.aside')

document.querySelector('.aside-button').addEventListener('click', function () {
  if (window.innerWidth <= 1120) {
    leftSidebar.style.transform = 'translateX(360px)'
    layerOpacity.classList.add('left-sidebar')
  }
})

document.querySelector('.icon-quit').addEventListener('click', function () {
  if (window.innerWidth <= 1120) {
    leftSidebar.style.transform = 'translateX(-360px)'
    layerOpacity.classList.remove('left-sidebar')
  }
})

layerOpacity.addEventListener('click', function () {
  if (window.innerWidth <= 1120) {
    layerOpacity.classList.remove('left-sidebar')
    leftSidebar.style.transform = 'translateX(-360px)'
  } else if (window.innerWidth >= 1121) {
    layerOpacity.classList.remove('left-sidebar')
    rightsidebar.style.transform = 'translateX(520px)'
  }
})

const chatbtn = document.querySelector('.chatbtn')
const rightsidebar = document.querySelector('.asideModalFeedback')
const quitbtn = document.querySelector('.quitbtn')
const iconchat768 = document.querySelector('.icon-chat')
const blurRight = document.querySelector('.sidebar-blur-right')

chatbtn.addEventListener('click', function () {
  if (window.innerWidth <= 768 || window.innerWidth <= 1120) {
    rightsidebar.style.transform = 'translateX(-360px)'
    rightsidebar.style.width = '100%'
  } else if (window.innerWidth >= 1121) {
    blurRight.classList.add('left-sidebar')
    rightsidebar.style.transform = 'translateX(-520px)'
  }
})

quitbtn.addEventListener('click', function () {
  if (window.innerWidth <= 768 || window.innerWidth <= 1120) {
    rightsidebar.style.width = '320px'
    rightsidebar.style.transform = 'translateX(360px)'
    blurRight.classList.remove('left-sidebar')
  } else if (window.innerWidth >= 1121) {
    blurRight.classList.remove('left-sidebar')
    rightsidebar.style.transform = 'translateX(520px)'
  }
})

iconchat768.addEventListener('click', function () {
  if (window.innerWidth <= 1120) {
    rightsidebar.style.transform = 'translateX(-360px)'
    blurRight.classList.add('left-sidebar')
  }
})

blurRight.addEventListener('click', function () {
  if (window.innerWidth <= 1120) {
    blurRight.classList.remove('left-sidebar')
    rightsidebar.style.transform = 'translateX(360px)'
  } else if (window.innerWidth >= 1121) {
    blurRight.classList.remove('left-sidebar')
    rightsidebar.style.transform = 'translateX(520px)'
  }
})

const callbtn = document.querySelector('.callbtn')
const callbtn768 = document.querySelector('.icon-call')
const asidecallback = document.querySelector('.call')
const callquit = document.querySelector('.call-quit')
const callbackOpacity = document.querySelector('.sidebar-callbackOpacity')

callbtn.addEventListener('click', function () {
  if (window.innerWidth <= 1120) {
    asidecallback.style.transform = 'translateX(-360px)'
    asidecallback.style.width = '100%'
  } else if (window.innerWidth >= 1121) {
    asidecallback.style.transform = 'translateX(-520px)'
    callbackOpacity.classList.add('left-sidebar')
  }
})

callbtn768.addEventListener('click', function () {
  if (window.innerWidth <= 1120) {
    asidecallback.style.transform = 'translateX(-360px)'
    callbackOpacity.classList.add('left-sidebar')
  }
})

callquit.addEventListener('click', function () {
  if (window.innerWidth <= 1120) {
    asidecallback.style.width = '320px'
    asidecallback.style.transform = 'translateX(360px)'
    callbackOpacity.classList.remove('left-sidebar')
  } else if (window.innerWidth >= 1121) {
    asidecallback.style.transform = 'translateX(520px)'
    callbackOpacity.classList.remove('left-sidebar')
  }
})

callbackOpacity.addEventListener('click', function () {
  callbackOpacity.classList.remove('left-sidebar')
  if (window.innerWidth <= 1120) {
    asidecallback.style.transform = 'translateX(360px)'
  } else if (window.innerWidth >= 1121) {
    asidecallback.style.transform = 'translateX(520px)'
  }
})
