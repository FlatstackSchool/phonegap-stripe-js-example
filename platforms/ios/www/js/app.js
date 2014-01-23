(function() {
  requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    baseUrl: "js/libs",
    paths: {
      zepto: "zepto.min",
      underscore: "underscore-min",
      backbone: "backbone-min",
      views: "../views",
      models: "../models",
      router: "../router"
    },
    shim: {
      'backbone': {
        deps: ['underscore', 'zepto'],
        exports: 'Backbone'
      }
    }
  });

  require(['zepto', 'router/router', 'backbone'], function($, Router, Backbone) {
    var router;
    router = new Router();
    return Backbone.history.start();
  });

}).call(this);
