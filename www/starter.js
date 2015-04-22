var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');


var Starter = function();

Starter.show = function(){
	exec(function callback(data) {
            var msg = data;
            alert(msg);
            },
            function errorHandler(err) {
                alert('Error');
            },
            'HelloIos',
            'sayHello',
            []
        );

}

module.exports = Starter;