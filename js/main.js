const cart_icon = document.querySelector('.cart_icon');
const cart_menu = document.querySelector('.cart_menu');
let menu_click = false;

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