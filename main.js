const openButton = document.getElementById('openButton')
const closeButton = document.getElementById('closeButton')
const modalContainer = document.getElementById('modalContainer')
const modal = document.getElementById('modal')

modal.addEventListener('click', e => {
  e.stopPropagation()
})

modalContainer.addEventListener('click', () => {
  modalContainer.style.display = 'none'
})

openButton.addEventListener('click', () => {
  modalContainer.style.display = 'grid'
})

closeButton.addEventListener('click', () => {
  modalContainer.style.display = 'none'
})
