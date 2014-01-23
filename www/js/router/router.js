(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'views/login/login_layout'], function(Backbone, LoginLayoutView) {
    var Router, _ref;
    return Router = (function(_super) {
      __extends(Router, _super);

      function Router() {
        _ref = Router.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Router.prototype.initialize = function() {
        this.LoginView = new LoginLayoutView({
          el: 'body'
        });
        return this.val = 5;
      };

      Router.prototype.routes = {
        "": "login",
        "join_confirmable": "join_confirmable",
        "join_express": "join_express"
      };

      Router.prototype.login = function() {
        console.log('start');
        return this.LoginView.renderLogin();
      };

      Router.prototype.join_confirmable = function() {
        return this.LoginView.renderLogin();
      };

      Router.prototype.join_express = function() {};

      Router.prototype.func = function() {
        return this.navigate("");
      };

      return Router;

    })(Backbone.Router);
  });

}).call(this);
