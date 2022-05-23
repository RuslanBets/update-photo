
const colorInput = document.querySelector('.color')
const bluerInput = document.querySelector('.blur')
const spacingInput = document.querySelector('.spacing')
const img = document.querySelector('.img')
const letterJS = document.querySelector('.js')


colorInput.addEventListener('input', () => {
  img.style.backgroundColor = colorInput.value
  letterJS.style.color = colorInput.value
})

bluerInput.addEventListener('input', () => {
  img.style.filter = `blur(${bluerInput.value / 6}px)`
})

spacingInput.addEventListener('input', () => {
  img.style.padding = spacingInput.value + 'px'
})



window.addEventListener('resize', handleSize);
handleSize()

function handleSize() {
  if (innerWidth <= 390) {
    spacingInput.max = '30'
    spacingInput.value = '0'
  } else {
    spacingInput.max = '100'
    spacingInput.value = '0'
  }
}