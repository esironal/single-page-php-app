//this file defines our routes since we're using hashes.
window.addEventListener("hashchange", craftManagersConsole.loadPage, false);

$(function() {
  var _self = appName;
  var app = _self.app;

  app.on('show.bs.tab', 'a[data-toggle="tab"]', function (e) {
    var page   = $(e.target).data('load')
    , reload = $(e.target).data('reload')
    , loaded = $(e.target).data('loaded');
    if (reload || !loaded || page=="home") {
      $(e.target).data('loaded', true);
      $( "#"+page ).load( "partials/"+page+"/", function(response, status, xhr ) {
        if ( status == "error" ) {
          $(e.target).data('loaded', false);
          $("#data-dashboard").html('Unable to load content.');
        }
      });
    }
  });

  app.on('click', '.load-dashboard', function (e) {
    var page = $(e.target).data('load');
    window.location.hash = "dashboard="+page;
  });
});
