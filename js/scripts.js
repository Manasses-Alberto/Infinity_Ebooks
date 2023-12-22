document.querySelector('#buy-ebooks-btn').addEventListener('click', function () {
    document.querySelector('header').style.opacity = '0.1'
    document.querySelector('header').style.pointerEvents = 'none'
    document.querySelector('main').style.opacity = '0.1'
    document.querySelector('main').style.pointerEvents = 'none'
    document.querySelector('footer').style.opacity = '0.1'
    document.querySelector('footer').style.pointerEvents = 'none'
    document.body.style.overflowY = 'hidden'
    document.getElementById('modal-squeeze').classList.remove('visually-hidden')
})

document.querySelector('#close-modal-btn').addEventListener('click', () => {
    document.getElementById('modal-squeeze').classList.add('visually-hidden')
    document.querySelector('header').style.opacity = '1'
    document.querySelector('header').style.pointerEvents = 'auto'
    document.querySelector('main').style.opacity = '1'
    document.querySelector('main').style.pointerEvents = 'auto'
    document.querySelector('footer').style.opacity = '1'
    document.querySelector('footer').style.pointerEvents = 'auto'
    document.body.style.overflowY = 'auto'
})
