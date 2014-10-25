//don't return an error if console.log is undefined in ancient browsers 
if (typeof console === "undefined") {
  console = {
    log: function() { },
  };
};
//define the core of our app
var craftManagersConsole = {
  app: $('#craftManagersConsole'),
  apiURI: 'http://craftdigitallab.com/craft-manager-console/api/',
  getHashParams: function() {
    var hashParams = {};
    var e,
        a = /\+/g,  // Regex for replacing addition symbol with a space
        r = /([^&;=]+)=?([^&;]*)/g,
        d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
        q = window.location.hash.substring(1);

    while (e = r.exec(q))
       hashParams[d(e[1])] = d(e[2]);
    return hashParams;
  },
  initPage: function() {
    var app = this.app;
    var _self = this;
    $("#bookmarks-menu", app).load( "partials/bookmarks-menu/");
    $('#loading-modal').modal('hide');
    _self.loadPage();
  },
  loadPage: function() {
    var _self = this
    , app = _self.app
    , hashParams = {}
    , e
    , a = /\+/g  // Regex for replacing addition symbol with a space
    , r = /([^&;=]+)=?([^&;]*)/g
    , d = function (s) { return decodeURIComponent(s.replace(a, " ")); }
    , q = window.location.hash.substring(1);
    
    while (e = r.exec(q)) {
      hashParams[d(e[1])] = d(e[2]);
    }
    var hash = hashParams;
    if (hash["project"]) {
      $( "#data-dashboard").load( "partials/project/?id="+hash["project"], function(response, status, xhr ) {
        if ( status == "error" ) {
          $(e.target).data('loaded', false);
          $("#data-dashboard").html('Unable to load content.');
        }
      });
    } else if (hash["dashboard"]) {
      $("#data-dashboard").load( "partials/"+hash['dashboard']+"/", function(response, status, xhr ) {
        if ( status == "error" ) {
          $(e.target).data('loaded', false);
          $("#data-dashboard").html('Unable to load content.');
        }
      });
    } else if (hash["client"]) {
      $( "#data-dashboard").load( "partials/client/?id="+hash["client"], function(response, status, xhr ) {
        if ( status == "error" ) {
          $(e.target).data('loaded', false);
          $("#data-dashboard").html('Unable to load content.');
        }
      });
    } else if (hash["user"]) {
      $( "#data-dashboard").load( "partials/user/?id="+hash["user"], function(response, status, xhr ) {
        if ( status == "error" ) {
          $(e.target).data('loaded', false);
          $("#data-dashboard").html('Unable to load content.');
        }
      });
    } else {
      $( "#data-dashboard").load( "partials/home/", function(response, status, xhr ) {
        if ( status == "error" ) {
          $(e.target).data('loaded', false);
          $("#data-dashboard").html('Unable to load content.');
        }
      });
    }  
  },
  refreshHarvestData: function() {
    var app = this.app;
    var _self = this;
    $('#loading-modal').modal('show');
    var loaded = 0;
    $.ajax({
      xhr: function() {
        var xhr = new window.XMLHttpRequest();
        //Download progress
        xhr.addEventListener("progress", function(evt){
          if (evt.lengthComputable) {
            var percentComplete = Math.round(100*(evt.loaded / evt.total));
            //Do something with download progress
            $('#download-users-progress').text(percentComplete+'%');
          }
        }, false);
        return xhr;
      },
      type: 'GET',
      url: _self.apiURI+"users/",
      success: function(users){
        $('#download-users-progress').text("Done!");
        _self.harvestUsers = users;
        _self.users;
        loaded++;
        if (loaded == 3) {
          _self.initPage();
        }
      },
      error: function(err) {
        $('#download-users-progress').text("Error. Cannot continue.");
        console.log(err);
      }
    });
    $.ajax({
      xhr: function() {
        var xhr = new window.XMLHttpRequest();
        //Download progress
        xhr.addEventListener("progress", function(evt){
          if (evt.lengthComputable) {
            var percentComplete = Math.round(100*(evt.loaded / evt.total));
            //Do something with download progress
            $('#download-clients-progress').text(percentComplete+'%');
          }
        }, false);
        return xhr;
      },
      type: 'GET',
      url: _self.apiURI+"clients/",
      data: {},
      success: function(clients){
        $('#download-clients-progress').text("Done!");
        _self.clients = clients;
        loaded++;
        if (loaded == 3) {
          _self.initPage();
        }
      },
      error: function(err) {
        $('#download-users-progress').text("Error. Cannot continue.");
        console.log(err);
      }
    });
    $.ajax({
      xhr: function() {
        var xhr = new window.XMLHttpRequest();
        //Download progress
        xhr.addEventListener("progress", function(evt){
          if (evt.lengthComputable) {
            var percentComplete = Math.round(100*(evt.loaded / evt.total));
            //Do something with download progress
            $('#download-projects-progress').text(percentComplete+'%');
          }
        }, false);
        return xhr;
      },
      type: 'GET',
      url: _self.apiURI+"projects/",
      data: {},
      success: function(projects){
        $('#download-projects-progress').text("Done!");
        _self.projects = projects;
        loaded++;
        if (loaded == 3) {
          _self.initPage();
        }
      },
      error: function(err) {
        $('#download-users-progress').text("Error. Cannot continue.");
        console.log(err);
      }
    });
  }
}