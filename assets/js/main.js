;(function ($) {
  $(document).ready(function () {
    /*-------------------------------------------------------------------------------
        Javascript for preloader
        -------------------------------------------------------------------------------*/
    $(window).on('load', function () {
      $('.preloader').fadeOut()
    })

    /*-------------------------------------------------------------------------------
        javaScript for sticky header
        -------------------------------------------------------------------------------*/
    $('.header-area').sticky()

    $('.navbar-toggler').on('click', function () {
      $('.header-area, .offcanvas-wraper').toggleClass('active')
    })
    $('.navbar-toggler').on('click', function () {
      $('.menu-overlay').toggleClass('show')
    })

    $('.db-menu-trigger').on('click', function () {
      $('.sidebar').toggleClass('active')
    })
    $('.close').on('click', function () {
      $('.sidebar').removeClass('active')
    })
    /*-------------------------------------------------------------------------------
        popup video 
        -------------------------------------------------------------------------------*/
    $('.play-btn').magnificPopup({
      type: 'video',
    })

    /*---------------------------------
    Javascript for AOS animation
    ----------------------------------*/
    AOS.init({
      duration: 1200,
      once: true,
    })

    /*-------------------------------------------------------------------------------
       Javascript for number counter 
        -------------------------------------------------------------------------------*/
    $('.counter').counterUp({
      delay: 10,
      time: 2000,
    })
  })
})(jQuery)


//this is the moving car on roadmap
var leftPosition

var $car = $('.timeline-wraper').find('.plane')
var $smoke = $('.timeline-wraper').find('.carsmoke')

$(window).on('load resize scroll', function () {
  clearTimeout($car.t)
  $('.timeline-wraper').each(function () {
    var windowTop = $(window).scrollTop()
    var elementTop = $(this).offset().top
    leftPosition = windowTop - elementTop + 380
    $car.css({ top: leftPosition })
  })
})

$(window).on('scroll', function () {
  $smoke.css({ display: 'inline' }).fadeOut(300)
})

function reveal() {
  var reveals = document.querySelectorAll('.earn-area')

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight
    var elementTop = reveals[i].getBoundingClientRect().top
    var elementVisible = 150

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active')
    } else {
      reveals[i].classList.remove('active')
    }
  }
}

window.addEventListener('scroll', reveal)



// countdown timer
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const newYears = '1 july 2022'

function countdown() {
  const newYearsDate = new Date(newYears)
  const currentDate = new Date()

  const totalSeconds = (newYearsDate - currentDate) / 1000

  const days = Math.floor(totalSeconds / 3600 / 24)
  const hours = Math.floor(totalSeconds / 3600) % 24
  const mins = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds) % 60

  daysEl ? (daysEl.innerHTML = days) : ''
  hoursEl ? (hoursEl.innerHTML = formatTime(hours)) : ''
  minsEl ? (minsEl.innerHTML = formatTime(mins)) : ''
  secondsEl ? (secondsEl.innerHTML = formatTime(seconds)) : ''
  if (totalSeconds < 1) {
    daysEl.textContent = 0;
    hoursEl.textContent = 0;
    minsEl.textContent = 0;
    secondsEl.textContent = 0;
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

// initial call
countdown()

setInterval(countdown, 1000)

// event page countdown timer
const eventDaysEl = document.getElementById('edays')
const eventHoursEl = document.getElementById('ehours')
const eventMinsEl = document.getElementById('emins')
const eventSecondsEl = document.getElementById('eseconds')
const eventBannerButton = document.getElementById('eventBannerButton')

const eventNewYears = '17 June 2022'

function eventCountdown() {
  const newYearsDate = new Date(eventNewYears)
  const currentDate = new Date()

  const totalSeconds = (newYearsDate - currentDate) / 1000

  const days = Math.floor(totalSeconds / 3600 / 24)
  const hours = Math.floor(totalSeconds / 3600) % 24
  const mins = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds) % 60

  eventDaysEl ? (eventDaysEl.innerHTML = days) : ''
  eventHoursEl ? (eventHoursEl.innerHTML = formatTime(hours)) : ''
  eventMinsEl ? (eventMinsEl.innerHTML = formatTime(mins)) : ''
  eventSecondsEl ? (eventSecondsEl.innerHTML = formatTime(seconds)) : ''

  // console.log(totalSeconds)

  if (totalSeconds < 1) {
    eventBannerButton?eventBannerButton.classList.add('active'):'';
    eventDaysEl?eventDaysEl.textContent = 0:'';
    eventHoursEl?eventHoursEl.textContent = 0:'';
    eventMinsEl?eventMinsEl.textContent = 0:'';
    eventSecondsEl?eventSecondsEl.textContent = 0:'';
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

// initial call
eventCountdown()

setInterval(eventCountdown, 1000)
