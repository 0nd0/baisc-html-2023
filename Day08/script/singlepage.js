$(document).ready(function() {
    // 화면을 스크롤 다운하면 => 메뉴바 색상이 흰색으로 바뀜
    var navbarShrink = () => {
        const mainNav = $('#mainNav');
        if(!mainNav) {
            return;
        }

        if(window.scrollY === 0) 
            mainNav.removeClass('navbar-shrink');
        else    
            mainNav.addClass('navbar-shrink');
    };

    navbarShrink();
    $(document).scroll(function() {
        navbarShrink();
    });

    // 실패!! 동작 안하네용...
    // const navbarToggler = $('.navbar-toggler');
    // const resNavItems = [].slice.call(
    //     document.querySelectorAll('#navbarResponsive .nav-link')
    // );
    // resNavItems.map(function (resNavItem) {
    //     resNavItem.addEventListener('click', () => {
    //         if (window.getComputedStyle(navbarToggler).display !== 'none') {
    //             navbarToggler.click();
    //         }
    //     });
    // });

    // 이건 클릭 시에만 동작함
    // $('#menu_about').click(function () {
    //     console.log($(window).scrollTop());
    //     $(this).addClass('active');
    //     $('#menu_portfolio').removeClass('active');
    //     $('#menu_signup').removeClass('active');
    // });
    // $('#menu_portfolio').click(function () {
    //     console.log($(window).scrollTop());
    //     $(this).addClass('active');
    //     $('#menu_about').removeClass('active');
    //     $('#menu_signup').removeClass('active');
    // });
    // $('#menu_signup').click(function () {
    //     $(this).addClass('active');
    //     $('#menu_about').removeClass('active');
    //     $('#menu_portfolio').removeClass('active');
    // });
    
    

    $(document).on('scroll', function() {

        var about = document.getElementById('about');
        var aboutHeight = about.getBoundingClientRect().top;
        var portfolio = document.getElementById('portfolio');
        var portfolioHeight = portfolio.getBoundingClientRect().top;
        var signup = document.getElementById('signup');
        var signupHeight = signup.getBoundingClientRect().top;
    
        if (window.scrollY > aboutHeight && window.scrollY < portfolioHeight) {
            $('#menu_about').addClass('active');
            $('#menu_portfolio').removeClass('active');
            $('#menu_signup').removeClass('active');
        } else if (window.scrollY > portfolioHeight && window.scrollY < signupHeight ) {
            $('#menu_about').removeClass('active');
            $('#menu_portfolio').addClass('active');
            $('#menu_signup').removeClass('active');
        } else if(window.scrollY > signupHeight) {
            $('#menu_about').removeClass('active');
            $('#menu_portfolio').removeClass('active');
            $('#menu_signup').addClass('active');
        }
    });
});