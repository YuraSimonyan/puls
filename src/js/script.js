
$(document).ready(function(){
    let value=document.querySelectorAll('.catalog-item__content');
for (let item of value){
    item.classList.add('catalog-item__content_active');
  }
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  dots: true
                } 
            }
        ]
      });
      
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        
    $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
 
    function toogleSlide(item){
        $(item).each(function(i){
            $(this).on('click',(e)=>{
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    };
    toogleSlide('.catalog-item__link');
    toogleSlide('.catalog-item__back');

    ////modal
    $('[data-modal=consultation]').on('click', ()=>{
        $('.overlay, #consultation'  ).fadeIn('fast');
    });



    $('.modal__close').on('click', ()=>{
        $('.overlay, #consultation, #order, #thanks').fadeOut();
    });
  
    $('.button_mini').each(function(i){
        $(this).on('click', function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn();
        });
    });

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');
  });
  