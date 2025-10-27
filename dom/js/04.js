const txtArea = document.getElementById('myTxtArea')
const count = document.getElementById('charCount')

txtArea.addEventListener('input', (dets) => {
    count.textContent = txtArea.value.length
})