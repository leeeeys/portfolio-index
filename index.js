$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >600) {
        //console.log('a');
        $("header").addClass("active");
    } else {
        //console.log('a');
        $("header").removeClass("active");
    }
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll > 600) {
        //console.log('a');
        $(".head-inner").addClass("active2");
    } else {
        //console.log('a');
        $(".head-inner").removeClass("active2");
    }
});

        // scroll-animation
        const saTriggerMargin = 300;
      const saElementList = document.querySelectorAll('.sa');

      const saFunc = function() {
        for (const element of saElementList) {
          if (!element.classList.contains('show')) {
            if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
              element.classList.add('show');
            }
          }
        }
      }
      window.addEventListener('load', saFunc);
      window.addEventListener('scroll', saFunc);
    // 푸터 미디어쿼리 메뉴
    $(".media-gnb ul.media-sub").hide();
    $(".media-gnb ul.media-menu li").on('click', function () {
        $("ul", this).slideToggle("fast");
        $(".accordion", this).toggleClass("active");
    })


    // modal open

    function openModal(modalname){
      document.get
     $("#modal").fadeIn(300);
     $("."+modalname).fadeIn(300);
   }

   $("#modal, .close").on('click',function(){
     $("#modal").fadeOut(300);
     $(".modal-con").fadeOut(300);
     $(".web-modal-con").fadeOut(300);
     $(".logo-con").fadeOut(300);
     });