// Temas que faltan: 

/*
   
   - Arrays
   - callbacks
   - closure
   - self invocation function


*/

// - closure

function creaSuma(x) {
    return function (y) {
        return x + y;
    };
}

var suma5 = creaSuma(5);
var suma10 = creaSuma(10);

console.log(suma5(2));  // muestra 7
console.log(suma10(2)); // muestra 12



// callbacks, ejemplo 1

var Util = {};

Util.print = function (toPrint, callbackSuccess, callbackError) {
    try {
        console.log(toPrint);
        callbackSuccess();
    } catch (e) {
        callbackError();
    }
}

Util.print("hola", function () { console.log("ok") }, function () { console.log("error") });


// callbacks, ejemplo 2

var Util = {};

Util.print = function (obj) {
    try {
        console.log(obj.data);
        obj.success();
    } catch (e) {
        obj.error();
    }
};

Util.print({
    data: "asas",
    success: function () {
        console.log("success");
    },
    error: function () {
        console.log("error");
    }
});

// self invocation function

var module = (function () {
    //private
    
    return {
        //public
    }
}());


