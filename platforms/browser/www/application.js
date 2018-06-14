document.addEventListener('deviceready', function() {
    // erst jetzt ist APP geladen und ready um was zu tun!
    console.log( 'DEVICE READY!' );
    $( document ).ready( function() {
      console.log( 'DOM READY!' );
      var ctx = $('<canvas id="flaeche">', {width:$(window).width(), height:$(window).height()} );
      $('body').prepend(ctx);
      ctx.css({'backgroundColor': '#666'});
    });
});
