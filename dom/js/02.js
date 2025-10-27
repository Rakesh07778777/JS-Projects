const div = document.querySelector('.texts')
const body = document.querySelector('body')
const button = document.querySelector('button')


theme()

function theme() {


button.addEventListener('click', () => {
    body.classList.toggle('dark')

    if(body.classList.contains('dark')){
        button.innerText = '🌟'
    }else{
        button.innerText = '☀️'
    }
})

}