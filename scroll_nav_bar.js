var section_det=[
  ['About','282741'],
  ['Sponsors','f6b11d'],
  ['Specials','005a31'],
  ['Developers','374258'],
  ['Heads','bc382e'],
  ['Contact','0f0f0f']
];

var ie_i=0;
$(function () {
    var a=$('#about').position().top;
    var spo=$('#sponsors').position().top;
    var spe=$('#specials').position().top;
    var dev=$('#developers').position().top;
    var h=$('#heads').position().top;
    var c=$('#contacts').position().top;
  $(".mdl-layout__content").on("scroll", function () {
    var key = 0;

    if ($(this).scrollTop() >= a ){
      key = 0;
    }
    if ($(this).scrollTop() >= spo) {
      key = 1;
    }
    if ($(this).scrollTop() >= spe) {
      key = 2;
    }
    if ($(this).scrollTop() >= dev) {
      key = 3;
    }
    if ($(this).scrollTop() >= h) {
      key = 4;
    }
    if ($(this).scrollTop() >= c){
      key = 5;
    }
    document.getElementById('nav_title_id').innerHTML = section_det[key][0];
    document.getElementById('scroll_nav_bar_inner').style.background = "#" + section_det[key][1];
  });
});
// alert(sec_det["About"][0]);
// When the user scrolls down 20px from the top of the document, slide down the navbar
/*var key=0;
$(".mdl-layout__content").on('scroll', function () {
  alert("scrolling");
  if ($(this).scrollTop() >= $('#about').position().top) {
    key = 0;
  }
});
$(document).on('scroll', function () {
  if ($(this).scrollTop() >= $('#sponsors').position().top) {
    key = 1;
  }
});
$(document).on('scroll', function () {
  if ($(this).scrollTop() >= $('#specials').position().top) {
    key = 2;
  }
});
$(document).on('scroll', function () {
  if ($(this).scrollTop() >= $('#developers').position().top) {
    key = 3;
  }
});
$(document).on('scroll', function () {
  if ($(this).scrollTop() >= $('#heads').position().top) {
    key = 4;
  }
});
$(document).on('scroll', function () {
  if ($(this).scrollTop() >= $('#contacts').position().top) {
    key = 5;
  }
});*/
/*if(window.location.hash.endsWith("about"))
{
  key=0;
}
else if(window.location.hash.endsWith("sponsors"))
{
  key=1;
}
else if(window.location.hash.endsWith("specials"))
{
  key=2;
}
else if(window.location.hash.endsWith("developers"))
{
  key=3;
}
else if(window.location.hash.endsWith("heads"))
{
  key=4;
}
else if(window.location.hash.endsWith("contact"))
{
  key=5;
}*/
$("a[href^=#]").on("click", function(e) {
   e.preventDefault();
   history.pushState({}, "", this.href);
});
