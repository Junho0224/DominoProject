//헤더 GNB 메뉴창 더보기▼ 눌렀을 때 슬라이드, 화살표 회전 구현
$(function () {
  const checkbox = $('#snb-more');
  const snbWrap = $('.snb-wrap');
  const arrow = $('.more-label .arrow');

  snbWrap.hide(); // 더보기 메뉴 기본 숨김

  checkbox.change(function () {
      if (this.checked) {
      snbWrap.stop().slideDown(300);
      arrow.css('transform', 'rotate(-135deg)');
      } else {
      snbWrap.stop().slideUp(300);
      arrow.css('transform', 'rotate(45deg)');
      }
  });
});

/* // 헤더 GNB 스크롤바 조정시 상단 고정
window.addEventListener("load", function () {
  const gnb = document.querySelector(".gnb");
  const gnbTop = gnb.offsetTop;

  window.addEventListener("scroll", function () {
    if (window.scrollY >= gnbTop) {
      gnb.classList.add("fixed");
    } else {
      gnb.classList.remove("fixed");
    }
  });
}); */

/* window.addEventListener("load", function () {
  const gnb = document.querySelector(".gnb");
  const snb = document.querySelector(".snb-wrap");
  const gnbTop = gnb.offsetTop;
  const gnbHeight = gnb.offsetHeight;

  function updateSnbPosition() {
    if (window.scrollY >= gnbTop) {
      // gnb 고정
      gnb.classList.add("fixed");

      // snb 고정 + 중앙정렬 유지
      snb.style.position = "fixed";
      snb.style.top = gnbHeight + "px";
      snb.style.left = "50%";
      snb.style.transform = "translateX(-50%)";
      snb.style.width = "1200px"; // 고정값
      snb.style.zIndex = "1000";
    } else {
      // 원래 위치 복구
      gnb.classList.remove("fixed");

      snb.style.position = "absolute";
      snb.style.top = "100%";
      snb.style.left = "0";
      snb.style.transform = "none";
      snb.style.width = "1200px"; // 이건 유지해도 됨
      snb.style.zIndex = "10";
    }
  }

  window.addEventListener("scroll", updateSnbPosition);
}); */
