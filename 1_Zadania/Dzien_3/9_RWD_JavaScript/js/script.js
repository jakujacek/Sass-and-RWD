var counterResize = 0;

window.addEventListener("resize", function(){
  counterResize++;
  document.getElementById("counter-resize").innerHTML = counterResize;

});


/**
*matchMedia
*/

var mobile = window.matchMedia( '(min-width: 200px) and (max-width: 700px)' ),
    counterMatchMedia = 0;

mobile.addListener( function(mobile){
  if( mobile.matches ){
    counterMatchMedia++;
    document.getElementById('match-media').innerHTML =
    counterMatchMedia;
  }
});

// Zadanie 1
document.getElementById('toggle-menu').onclick = function(){
  document.getElementById('menu').classList.toggle('opened');

};
