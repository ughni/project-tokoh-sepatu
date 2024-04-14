// toogel class active
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#humburger-menu').onclick = () => {
    navbarNav.classList.toggle('active')
}

// click di luar sidebar untuk mehilangkan navbar
const hamburger = document.querySelector('#humburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})
