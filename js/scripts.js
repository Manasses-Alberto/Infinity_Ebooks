document.getElementById('buy-ebooks-btn').addEventListener('click', function () {
    document.querySelector('header').style.opacity = '0.1'
    document.querySelector('header').style.pointerEvents = 'none'
    document.querySelector('main').style.opacity = '0.1'
    document.querySelector('main').style.pointerEvents = 'none'
    document.querySelector('footer').style.opacity = '0.1'
    document.querySelector('footer').style.pointerEvents = 'none'
    document.body.style.overflowY = 'hidden'
    document.getElementById('modal-squeeze').classList.remove('visually-hidden')
})
