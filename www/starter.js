var exec = require('cordova/exec');


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