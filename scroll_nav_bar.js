var section_det=[
  ['About','282741'],
  ['Sponsors','f6b11d'],
  ['Specials','005a31'],
  ['Developers','374258'],
  ['Heads','bc382e'],
  ['Contact','0f0f0f']
];


// alert(sec_det["About"][0]);
// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};
var key=0;
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll_nav_bar").style.display = "block";

        if(window.location.hash.endsWith("about"))
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
        }
        document.getElementById('nav_title_id').innerHTML=section_det[key][0];
        document.getElementById('scroll_nav_bar_inner').style.background="#" + section_det[key][1];
        // console.log(window.location.hash);
        // console.log(key);
    } else {
        document.getElementById("scroll_nav_bar").style.top = "none";
    }
}



$(document).bind('scroll',function(e){
    $('.scrollclass').each(function(){
        if (
           $(this).offset().top < window.pageYOffset + 10
//begins before top
        && $(this).offset().top + $(this).height() > window.pageYOffset + 10
//but ends in visible area
//+ 10 allows you to change hash before it hits the top border
        ) {
            window.location.hash = $(this).attr('id');
        }
    });
});
