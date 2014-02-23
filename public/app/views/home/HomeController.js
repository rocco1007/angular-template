'use strict';

App.controller('HomeController', ['$scope', function HomeController ($scope) {
	this.init = function () {
		this.initScope();
		this.load();
	};

	this.initScope = function () {
		$scope.dataBoundText = "";
		$scope.testText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum lobortis pharetra. Sed eu consequat erat. Sed tempus consectetur adipiscing. Donec nec turpis eu quam tincidunt malesuada. Donec sodales mattis nisi, id convallis nibh tempor a. Duis dapibus nulla quis rhoncus sollicitudin. Vivamus lobortis lobortis eros eu vehicula. Donec pretium sapien eros, eget varius diam facilisis eu. Sed bibendum nisi imperdiet, rhoncus mauris ac, elementum purus. Nam suscipit sapien vel sem aliquam, quis vehicula tellus ornare. Donec nec mi at turpis euismod imperdiet eget vel nunc.";
		$scope.things = [
			"one",
			'two',
			'three'
		];
	};

	this.load = function () {
		this.setPageEvents();
	};

	this.setPageEvents = function () {
		$scope.dataBindThing = function(thing) {
			$scope.dataBoundText = thing;
		};
	};

	this.init();
}]);