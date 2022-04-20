$(function () {
  new WOW().init();

  (function () {
    // 슬라이드
    function slideItem() {

      var slideSetting = {
        slidesPerView: 4,
        spaceBetween: 25,
        observer: true,
        observeParents: true,
        loopAdditionalSlides: 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
        // watchOverflow : true, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정
        loop: true,
        // loopedSlides:1,
        speed: 2000,
        autoplay: {
          // 자동 슬라이드 설정 , 비 활성화 시 false
          delay: 2000, // 시간 설정
          disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        navigation: {
          // 버튼 사용자 지정
          nextEl: ".visual-btn-next",
          prevEl: ".visual-btn-prev",
        },
        pagination: {
          // 페이징 설정
          el: ".swiper-pagination",
          clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
        },

        breakpoints: { //반응형 조건 속성
          1200:{
            slidesPerView: 4,
          },
          900: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 1,
          },
        }
      };

      const mainSlide = new Swiper("#visual-slide", slideSetting);

    }

    function gnb(){
      const visual = $(".visual");
      const subCnt = $(".sub-cnt");
      const gnbItem = $(".gnb__item");
      const gnbSubList = $(".gnb__sub-list");
      const gnbSubListHeight = $(".gnb__sub-list").height();
      const gnbLink = $(".gnb__link");
      const headerBg = $(".header__bg");
      const headerSearch = $(".header-search__inner");
      const headerBtn = $(".header__btn");
      
      // headerBg.height(gnbSubListHeight );
      subCnt.on("mouseenter",function(){
        $(gnbSubList).removeClass("open");
        headerBg.removeClass("open");
      });
      
      visual.on("mouseenter",function(){
        $(gnbSubList).removeClass("open");
        headerBg.removeClass("open");
      });

      headerSearch.on("mouseenter",function(){
        $(gnbSubList).removeClass("open");
        headerBg.removeClass("open");
      });

      headerBtn.on("click",function(){
        $(gnbSubList).removeClass("open");
        headerBg.removeClass("open");
      });

      gnbItem.on("mouseenter",function(){
        $(gnbSubList).removeClass("open");
        $(this).find(gnbSubList).addClass("open");
        headerBg.addClass("open");
      });

      headerBg.on("mouseleave",function(){
        headerBg.removeClass("open");
        $(gnbSubList).removeClass("open");
      });

      // 모바일메뉴

      // menu click event
      $('.mo-menu').click(function () {
          $(this).toggleClass('act');
          if ($(this).hasClass('act')) {
              $('.mainMenu').addClass('act');
          }
          else {
              $('.mainMenu').removeClass('act');
          }
      });

      $(".dapth2").hide();

      $(".mainMenu > ul > li > a").on("click", function (e) {
          e.preventDefault();

          if ($(this).hasClass("on")) {
              $(".dapth2").hide();
              $(this).removeClass("on");
          } else {
              $(".mainMenu.act > ul > li > a").removeClass('on');
              $(this).addClass("on");

              $(".dapth2").hide();
              $(this).siblings(".dapth2").show();
          }

       });


     
    }

    function search(){
      const searchBtn = $(".header__btn");
      const search = $(".header-search");
      const searchClose = $(".header-search__close");

      searchBtn.on("click",function(){

        search.show();
        
      });

      searchClose.on("click",function(){

        search.hide();

      });
    }


    function init() {
      slideItem(); //슬라이드 모음
      gnb(); // 헤더메뉴
      search(); // 돋보기
    }

    init();
  })();

});
