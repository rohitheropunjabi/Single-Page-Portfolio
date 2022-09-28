const hamburger = document.querySelector('.header .navbar .navlist .hamburger');
const mobile_menu = document.querySelector('.header .navbar .navlist ul');
const header = document.querySelector('.header .container');
const manu_item = document.querySelector('.header .navbar .navlist ul li a');


hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () =>{
    var scroll_position = window.scrolly;
    if(scroll_position > 250) {
        header.style.backgroundColor = '#485563';
    }   else{
        header.style.backgroundColor = 'transparent';
    }
})

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active')
    })
});