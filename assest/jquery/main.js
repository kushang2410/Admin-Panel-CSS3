$(document).ready(function () {
  $(".aside-menu").click(function () {
    $(this).next().slideToggle(500);
    $("* > .accordion").not($(this).next()).slideUp(500);
  });
});
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 250) {
    $(".top").css({ display: "block" });
  } else {
    $(".top").css({ display: "none" });
  }
});
$(".fa-chevron-right").click(function () {
  $(this).toggleClass("fa-chevron-right");
  $(this).addClass("fa-angle-down");
});

let count = 0;

$(".clickable-icon").click(function (e) {
  e.preventDefault();
  $(".clickable-icon").toggleClass("active");
  $(".w-12").toggleClass("slide-left")
  if (count % 2 !== 0) {
    $("aside span").addClass("d-none");
    $("aside ul li > a").addClass("d-none");
    $("aside").addClass("w-0");
  } else {
    $("aside span").removeClass("d-none");
    $("aside ul li > a").removeClass("d-none");
    $("aside").removeClass("w-0");
  }
});

$("aside").mouseenter(function () {
  if ($(".clickable-icon").hasClass("active")) {
    count++; // 1
    console.log(count);
    $("aside span").removeClass("d-none");
    $("aside ul li > a").removeClass("d-none");
    $("aside").removeClass("w-0");
  }
});

$("aside").mouseleave(function () {
  if ($(".clickable-icon").hasClass("active")) {
    count++; //2
    console.log(count);
    $("aside span").toggleClass("d-none");
    $("aside ul li a").toggleClass("d-none");
    $("aside").toggleClass("w-0");
  }
});
$(".light").on("click", function (e) {
  e.preventDefault();
  $(":root").css({ "--text-gray-color": "gray" });
  $(":root").css("--aside-bg", " white");
  $(":root").css("--text-body-color", " #f3f3f9");
  $("#dark-svg").addClass("d-none");
  $("#light-svg").addClass("d-none");
  $("#light-svg").removeClass("d-none");
  $(":root").css("--text-gray-1-color", " #f8f7fa");
});
$(".dark").on("click", function (e) {
  e.preventDefault();
  $(":root").css("--text-gray-color", "#9b9fb9");
  $(":root").css("--text-gray-1-color", "#25293c");
  $(":root").css("--text-color", "#9b9fb9");
  $(":root").css("--aside-bg", " #2f3349");
  $(":root").css("--text-body-color", "#25293c");
  $(":root").css("--text-iogin-img-color", "rbg(47,51,73)");
  $("#light-svg").addClass("d-none");
  $("#dark-svg").addClass("d-none");
  $("#dark-svg").removeClass("d-none");
});
$(".cus-control").click(function (e) {
  e.preventDefault();
  $(".Customize").toggleClass("move-cus");
});
$(".cus-control").click(function (e) {
  e.preventDefault();
  $(".Customize1").toggleClass("move-cus");
});
var swiper = new Swiper(".mySwiper", {
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
