'use strict';

App.controller('AboutController', ['$scope', function AboutController ($scope) {
	this.init = function () {
		this.initScope();
		this.load();
	};

	this.initScope = function () {
		$scope.pageTite = "";
	};

	this.load = function () {
		this.setPageEvents();
	};

	this.setPageEvents = function () {

	};

	this.init();
}]);