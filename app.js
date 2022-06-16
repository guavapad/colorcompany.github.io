//membuat function untuk mengklik toggle bar
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

// show active menu when is scrolling
const highlightMenu = () => {
    const el = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('.#about-page')
    const servicesMenu = document.querySelector('.#services-page')
    let scrollPos = window.scrollY

    //adds 'highlight' class to my menu items
    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 2345){
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }

    if((el && window.innerWidth < 960 && scrollPos < 600)||el){
        el.classList.remove('highlight')
    }
    window.addEventListener('scroll',highlightMenu);
    window.addEventListener('click',highlightMenu);
    //close navbar menu when clicking on a menu item
    const hidemobileMenu = () => {
        const menuBars = document.querySelector('.is-active')
        if(window.innerWidth <= 768 && menuBars){
            menu.classList.toggle('is-active')
            menuLinks.classList.remove('active')
        }
    }
}
menuLinks.addEventListener('click', hidemobileMenu);
navLogo.addEventListener('click',hidemobileMenu);