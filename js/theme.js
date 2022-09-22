jQuery(function($){

    'use strict';

    function wowInit() {
        var scrollingAnimations = false; // Set false for turn off animation
        if(scrollingAnimations){
            $(window).on('load', function () {
                setTimeout(function () {
                    new WOW().init();
                },400);
            });

        }
    }
    wowInit();

    //mobile-menu
    $('.mobile-btn, .close-mob-menu').on('click', function () {
        $('.mob-menu-wrapper').toggleClass('active');
    });
    $('.mobile-menu ul li a').on('click', function () {
        $('.mob-menu-wrapper').removeClass('active');
    });

    //scroll to anchor
    $('.main-menu ul li a[href*="#"], .mobile-menu ul li a[href*="#"]').on('click', function(event){
        event.preventDefault();
        var margin = $('.header').outerHeight();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - margin
        }, 800);
    });

    // //init custom select
    // $('select').customSelect();

    //bootstrap portfolio modal
    $('#portfolio-modal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var workName = button.data('name'); // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        $(this).find('.modal-body').hide();
        $('.modal-body[data-name = ' + workName + ']').show();
    });

    //fixed header
    function fixedHeader() {
        var ww = $(window).scrollTop();
        if(ww > 0){
            $('.header').addClass('active');
        }else{
            $('.header').removeClass('active');
        }
    }
    fixedHeader();
    $(window).on('scroll', function () {
        fixedHeader();
    });

    //open bootstrap modal from modal
    $(document).on('hidden.bs.modal', '.modal', function () {
        if($('.modal:visible').length){
            $(document.body).addClass('modal-open');
             if($(window).width() > 991){
                 $(document.body).css({paddingRight: '17px'});
             }
        }else {
            $(document.body).css({paddingRight: 0});
        }
    });

    function validateForm(selector) {
      Array.from(document.querySelectorAll(selector)).forEach(item => {
        item.addEventListener('input', (e) => {
            if(e.target.value === ''){
                item.dataset.touched = false;
            }
        });
        item.addEventListener('invalid', () => {
          item.dataset.touched = true;
        });
        item.addEventListener('blur', () => {
          if (item.value !== '') item.dataset.touched = true;
        });
      });
    };
});
