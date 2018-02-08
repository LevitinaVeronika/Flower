$(document).ready(function(){
  $(document).on("click", ".tabSelect",
      function(){
          $('nav .active').removeClass('active');
          $(this).addClass('active');
          var a=$(this).attr('numberTab');
          $('.tabContent').hide();
          $("#mainidcontent"+a).show();
      });
    navMobile();
  ////выдвижной nav//////
    function navMobile() {
        if ($(document).width() <= '600') {
            $('.navHidden').show();
            $('.tabs_block').removeClass('computerNav').addClass('mobileNav');
        }
        else {

            $('.navHidden').hide();
            $('.tabs_block').addClass('computerNav').removeClass('mobileNav');
        }
    }
    $(document).on("click", ".navHidden",
        function(){
        $('.tabs_block').toggleClass('visible');

        }
    );
    // if ($('.navHidden').hasClass("visible")){
    //  $(document).on("click", '.wrap',
    //      function() {
    //         $('.tabs_block').removeClass('visible');
    //     })
    // }

});

