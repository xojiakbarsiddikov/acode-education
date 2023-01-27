let open = document.querySelector('.open-js')
let close = document.querySelector('.close-js')
let body = document.querySelector('body')

open.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.toggle('active-hidden')
})

