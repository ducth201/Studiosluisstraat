window.addEventListener( "scroll", function( e ) {
 
 if ( window.scrollY < 10 ) {
  document.body.classList.remove( "scrolled" );
 }
 else {
  document.body.classList.add( "scrolled" );
 }
 

});