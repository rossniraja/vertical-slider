const upBtn = document.querySelector('.upper-button')
const downBtn = document.querySelector('.down-button')
const leftSlide = document.querySelector('.left-holder')
const rightSlide = document.querySelector('.right-holder')
const sliderContainer = document.querySelector('.space-holder')

const slidesLength = rightSlide.querySelectorAll('div').length

let activeSlideIndex = 0

// Move left side initially
leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))

function changeSlide(direction) {
  const sliderHeight = sliderContainer.clientHeight

  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0
    }
  } else {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1
    }
  }

  rightSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
  leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}