$(function(){

/*Slider1*/

    $('.header__slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt=""></button>',
        fade: true,
        responsive: [
         {
            breakpoint: 371,
            settings: {
              dots: false,
              arrows: false,
              autoplay: true,
              autoplaySpeed: 2000,
            }
         }
        ]
         
    });

    /*Slider2*/

    $('.product__name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product__content',
        vertical: true,
        prevArrow: '<button type="button" class="product-prev"><img src="images/product-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="product-next"><img src="images/product-next.svg" alt=""></button>',
        responsive: [
          {
             breakpoint: 891,
             settings: {
               vertical: false,
               slidesToShow: 3,
               arrows: false,
               centerMode: true,
               dots: true,
             },
            },
            {
             breakpoint: 463,
             settings: {
               vertical: false,
               slidesToShow: 1,
               arrows: false,
               centerMode: true,
               dots: true,
             }
          }
         ]
      });

      $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        focusOnSelect: true,
        fade: true,
        arrows: false,
        centerMode: true,
      });

      $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
      });

      /*Nav*/

      $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        console.log(elementOffset);

        $("html, body").animate({
          scrollTop: elementOffset 
        });
        
      });

});


