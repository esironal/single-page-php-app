$(function() {
  var _self = craftManagersConsole;
  var app = _self.app;
  $('#home-bookmarks-project').empty();
  var bookmarks = _.filter(_self.projects, function(project) {
    return project.bookmark;
  });
  _.each(bookmarks, function(bookmark) {
    $('#home-bookmarks-project').append('<li><nobr><a href="javascript:void(0);" class="bookmark" data-type="project" data-id="'+bookmark.id+'" data-action="delete"><i class="fa fa-star"></i></a>&nbsp;<a href="javascript:void(0);" class="load-project" data-project="'+bookmark.id+'" title="'+bookmark.name+'">'+bookmark.name+'</a></nobr></li>')
  });

  $('#home-bookmarks-user').empty();
  var bookmarks = _.filter(_self.harvestUsers, function(user) {
    return user.bookmark;
  });
  _.each(bookmarks, function(bookmark) {
    bookmark.name = bookmark["first-name"]+' '+bookmark["last-name"];
    $('#home-bookmarks-user').append('<li><nobr><a href="javascript:void(0);" class="bookmark" data-type="user" data-id="'+bookmark.id+'" data-action="delete"><i class="fa fa-star"></i></a>&nbsp;<a href="javascript:void(0);" class="load-user" data-user="'+bookmark.id+'" title="'+bookmark.name+'">'+bookmark.name+'</a></nobr></li>')
  });
});

