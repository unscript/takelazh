window.onload=function(){function e(){var e=document.documentElement.scrollTop||document.body.scrollTop;t.style.display=e>d?"block":"none"}var o=document.getElementById("header"),n=document.getElementById("nav"),t=document.getElementById("up"),d=o.offsetHeight+n.offsetHeight;window.onresize=function(){d=o.offsetHeight+n.offsetHeight},window.onscroll=e,e()};