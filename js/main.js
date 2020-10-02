const cart_icon = document.querySelector('.cart_icon');
const cart_menu = document.querySelector('.cart_menu');
let menu_click = false;
let combo_swiper;

cart_icon.addEventListener('click', function(){
    if( menu_click === false ){
        cart_menu.classList.add('show');
        menu_click = true;
    }
    else if( menu_click === true ){
        cart_menu.classList.remove('show');
        menu_click = false;
    }
});

combo_swiper = new Swiper('.group2_wrapper', {
    slidesPerView: 'auto',
    spaceBetween: 60,
    GrabCursor: true
});

document.querySelectorAll('.swiper-slide')[2].style.marginRight = '0';

window.addEventListener('resize', function(){
    document.querySelectorAll('.swiper-slide')[2].style.marginRight = '0';
});