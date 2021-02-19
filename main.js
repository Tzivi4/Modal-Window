const openButton = document.getElementById('openButton')
const closeButton = document.getElementById('closeButton')
const modal = document.getElementById('modal')

openButton.addEventListener('click', () => {
    
  modal.style.display = 'initial'
})

closeButton.addEventListener('click', () => {

  modal.style.display = 'none'
})
