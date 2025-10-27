const para = document.querySelector('#message')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  para.style.color = 'red'
  para.innerText = 'Hello Dom'
})