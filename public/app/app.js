'use strict';

var App = angular.module('App', ['ngResource', 'ngRoute']);

App.config(function($routeProvider) {
	var viewsPath = 'app/views/';

	//Making routing objects
	var home = {
		templateUrl: viewsPath + 'home/home.html',
		controller: 'HomeController',
		activeTab: 'home'
	};

	var about = {
		templateUrl: viewsPath + 'about/about.html',
		controller: 'AboutController',
		activeTab: 'about'
	};

	//Defining routes
	$routeProvider.when("/", home);
	$routeProvider.when("/home", home);
	$routeProvider.when("/about", about);
});