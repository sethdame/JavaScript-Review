var callFriend = function() {
	var friend = 'Jake';

	function callF(number) {
		return 'Calling ' + friend + ' at ' + number;
	}
	return callF;
};

//Above you're given a callFriend function that returns another function. 
//Do what you need to do in order to call your function and get 'Calling Jake at
// 435-215-9248' in your console.

var callMeMaybe = callFriend();

callMeMaybe('801-222-5558');

/*

Write a function that accepts a function as it's first argument and returns a new 
//function (which calls the original function that was passed in) that can only ever be 
//executed once.

Once completed, add a second arguments that allows the function to be executed N number
// of times. After the function has been called N number of times, console.log('STAHHP');

*/

var first = function(cb) {
	var n = 1;
	return function() {
		cb();
	}
}

first(function() {
	return n;
});


function howdydoody(fn) {
	return function() {
		fn();
	};
}

var test = howdydoody(function() {
	console.log('foo');
})

test();


var first = function(cb, n) {
	var n = 0;
	return function() {
		cb();
		return function() {
			return number += 1;
		};
		return console.log('STAHHP');
	}
}

num(function() {
	return n;
})

var second = first();

second();