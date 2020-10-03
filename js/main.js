//cart icon
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

//mobile menu controll
const mobile_menu_icon = document.querySelector('.mobile_menu_icon');
const mobile_menu_wrapper = document.querySelector('.mobile_menu_wrapper');
const mobile_menu = document.querySelector('.mobile_menu');
const moblie_menu_close = document.querySelector('.moblie_menu_close');

mobile_menu_icon.addEventListener('click', function(){
    mobile_menu_wrapper.classList.add('show');
    mobile_menu.classList.add('show');
    document.body.classList.add('scroll_lock');
});
moblie_menu_close.addEventListener('click', function(){
    mobile_menu_wrapper.classList.remove('show');
    mobile_menu.classList.remove('show');
    document.body.classList.remove('scroll_lock');
});

//main menu controll
const main_menu_li = document.querySelectorAll('.main_menu>li');
const section = document.querySelectorAll('section');

function get_index(elm){
    let c = elm.parentNode.children;
    for( let i = 0 ; i < c.length ; i++ )
        if( c[i] === elm ) return i;
}
// let get_index = elm => [...elm.parentNode.children].indexOf(elm);

main_menu_li.forEach(function(li){
    li.addEventListener('click', function(){
        if( get_index(li) === 3 )
            document.querySelector('footer').scrollIntoView({behavior:'smooth'});
        else section[get_index(li)].scrollIntoView({behavior:'smooth'});
    });
});

//top button controll
const top_btn_wrapper = document.querySelector('.top_btn_wrapper');
const top_btn = document.querySelector('.top_btn_wrapper>button');

window.addEventListener('scroll', function(){
    if( window.pageYOffset >= document.body.scrollHeight/4 )
        top_btn_wrapper.classList.add('show');
    else if( window.pageYOffset < document.body.scrollHeight/4 )
        top_btn_wrapper.classList.remove('show');
});
top_btn.addEventListener('click', function(){
    document.querySelector('header').scrollIntoView({behavior:'smooth'});
});

//combo siwper
let combo_swiper = new Swiper('.group2_wrapper', {
    slidesPerView: 'auto',
    spaceBetween: 60,
    GrabCursor: true
});

document.querySelectorAll('.swiper-slide')[2].style.marginRight = '0';

window.addEventListener('resize', function(){
    document.querySelectorAll('.swiper-slide')[2].style.marginRight = '0';
});