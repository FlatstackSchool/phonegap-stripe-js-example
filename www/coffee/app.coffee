requirejs.config
  urlArgs: "bust=" + (new Date()).getTime(), #only in dev mode
  baseUrl: "js/libs"
  paths:
    zepto: "zepto.min"
    underscore: "underscore-min"
    backbone: "backbone-min"

    views: "../views"
    models: "../models"
    router: "../router"
  shim:
    'backbone':
      deps: ['underscore', 'zepto']
      exports: 'Backbone'

require ['zepto', 'router/router', 'backbone'], ($, Router, Backbone) ->
  router = new Router()
  Backbone.history.start()
