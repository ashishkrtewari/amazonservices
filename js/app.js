$(document).ready(function() {
   // Stuff to do as soon as the DOM is ready
   $(window).resize(function(event) {
     /* Act on the event */
     var query = Modernizr.mq('(min-width: 992px)');
     var querylow = Modernizr.mq('(max-width: 991px)');
     if(querylow) {
       $('.navbar-nav li .dropdown').addClass('open');
       $('.navbar-nav li .dropdown').attr('aria-expanded', 'true');
     }
   });
   var query = Modernizr.mq('(min-width: 992px)');
   if (query) {
     // the browser window is larger than 900px
     $('.navbar [data-toggle="dropdown"]').bootstrapDropdownHover({
        // see next for specifications
      });
   }
   var querylow = Modernizr.mq('(max-width: 991px)');
   if(querylow) {
     $('.dropdown').addClass('open');
     $('.dropdown').attr('aria-expanded', 'true');
   }
});
