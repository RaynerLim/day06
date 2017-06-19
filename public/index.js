//IIFE: Immediately invoked function expression
(function(){
    //create a module
    var MainApp = angular.module("MainApp",[]);

    //Create a function constructor.
    var MyCon = function(){
        var myCon = this;
        myCon.submitForm = function(){
            for(var i in myCon){
                if (typeof(myCon[i])!="function") console.log("Input: %s = %s", i, myCon[i]);
            }
            console.log("Feedback submited");
            myCon.resetForm();
        };

        myCon.resetForm = function(){
            myCon.name = "";
            myCon.email = "";
            myCon.phone = "";
            myCon.comment = "";
            myCon.exp = "";
        };
       myCon.resetForm();

    };
    //Use the function as a controller
	MainApp.controller("MyCon", MyCon);
})();