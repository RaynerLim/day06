//IIFE: Immediately invoked function expression
(function(){
    //create a module
    var MainApp = angular.module("MainApp",[]);

    //Create a function constructor.
    var MyCon = function(){
        var myCon = this;
    };
    //Use the function as a controller
	MainApp.controller("MyCon", MyCon);
})();