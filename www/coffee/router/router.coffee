define ['backbone', 'views/login/login_layout'], (Backbone, LoginLayoutView) ->

	class Router extends Backbone.Router
		initialize: ->
			@LoginView = new LoginLayoutView(el: 'body')
			@val = 5

		routes:
			"": "login"
			"join_confirmable": "join_confirmable"
			"join_express": "join_express"
		
		#login
		login: ->
			console.log 'start'
			@LoginView.renderLogin()

		join_confirmable: ->
			@LoginView.renderLogin()

		join_express: ->
			
		func: ->
			@navigate("")
