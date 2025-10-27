const body = document.body
const div = document.querySelector('div')
const spanHi = document.querySelector('.hii')
const spanHello = document.querySelector('.hello')

/*
console.log(spanHi.getAttribute('title'))
console.log(spanHi.setAttribute('class', 'gufyuyfk'))
console.log(spanHi.setAttribute('title', 'gufyuyfk'))
*/

//we can remove anything from html using removeAttribute()
// spanHi.removeAttribute('title')
// spanHi.setAttribute('id', 'hello')
// spanHi.dataset.newName = 'ewoifheqwhf'
// console.log(spanHi.dataset)
// spanHi.classList.add('open')
// spanHi.classList.remove('hii')
spanHi.classList.toggle('hii2')// if there is already exist hii2 class then it will remove hii2 and if its not then it will add this class.

spanHi.style.color = 'blue' 





/*
spanHi.remove()
div.append(spanHi)
*/

/*
const div = document.createElement('div')
const strong = document.createElement('strong')
strong.innerText = 'Hello World'
div.append(strong)
body.append(div)

// strong.innerHTML = 'hello World' // this way is not secure.
*/