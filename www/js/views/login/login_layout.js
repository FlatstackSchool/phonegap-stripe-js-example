(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone'], function(Backbone) {
    var LoginLayoutView, _ref;
    return LoginLayoutView = (function(_super) {
      __extends(LoginLayoutView, _super);

      function LoginLayoutView() {
        _ref = LoginLayoutView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      LoginLayoutView.prototype.initialize = function() {};

      LoginLayoutView.prototype.renderLogin = function() {};

      return LoginLayoutView;

    })(Backbone.View);
  });

}).call(this);
