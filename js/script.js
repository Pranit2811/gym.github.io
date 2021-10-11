let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

$('.schedule-filter li').on('click', function() {
    var tsfilter = $(this).data('tsfilter');
    $('.schedule-filter li').removeClass('active');
    $(this).addClass('active');
    if (tsfilter == 'all') {
        $('.schedule-table').removeClass('filtering');
        $('.ts-item').removeClass('show');
    } else {
        $('.schedule-table').addClass('filtering');
    }
    $('.ts-item').each(function() {
        $(this).removeClass('show');
        if ($(this).data('tsmeta') == tsfilter) {
            $(this).addClass('show');
        }
    });
});
