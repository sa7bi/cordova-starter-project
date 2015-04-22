var exec = require('cordova/exec');


var starter = function();

starter.show = function(){
	exec(
        function callback(data) {
            var msg = data;
            alert(msg);
            },
            function errorHandler(err) {
                alert('Error');
            },
            'HelloIos',
            '',
            []
        );

}