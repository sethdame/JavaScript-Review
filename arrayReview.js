var threeItems = [1, 2, 3];

//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

var last = function() {
	alert(threeItems.length - 0);

};



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 

var evenArray = [1, 2, 3, 6, 22, 98, 45, 23, 22, 12];

var evenFinder = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			arr.splice(i, 1)
		};
	};
};

evenFinder(evenArray);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and 
//an array full or numbers 'randomArray'. 

//Write a function that will get a random number, then loop through the 
//array to see if that random number is in the array. If it is, alert true, if it's not,
// alert false

var getRandomArbitrary = function() {
	return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0, 3, 4, 5, 6, 7, 9, 14, 17, 24, 25, 26, 29, 30];

var finder = function(arr) {
	var rndNum = getRandomArbitrary();
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === rndNum) {
			return true;
		}
	}
	return false;
};


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. 
//When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] 
//if you created your copy correctly.

var first = [1, 2, 3, 4, 5];
var second = first.slice();

second.push(6, 7);

alert(first)
alert(second)



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the 
//longest word in that sentence.

var sentence = "Dev Mountain is the best"

var longest = function(sentence) {
	var str = sentence.split(" ");
	var longest = 0;
	var word = null;
	for (var i = 0; i <= str.length - 1; i++) {
		if (longest < str[i].length) {
			longest = str[i].length;
			word = str[i];
		}
	}
	return word;
};

longest(sentence);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes 
//every word 

var myPoem = 'What is a jQuery but a misunderstood object?'


var capitalize = function(str) {
	var strArr = str.split(" ");
	var newArr = [];
	for (var i = 0; i < strArr.length; i++) {
		var FirstLetter = strArr[i].charAt(0).toUpperCase();
		var restOfWord = strArr[i].slice(1);
		newArr[i] = FirstLetter + restOfWord;
	}
	return newArr.join(' ');
}

capitalize(myPoem);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
<!-- //Write a function called vowelCounter that takes in a string (theOdyssey) and returns 
//how many vowels are in that string. -->

var theOdyssey = "function expression or function declaration? Tis an obvious choice";

var vowelCounter = function(str) {
	var strArr = str.split(" ");
	var newArr = [];
	var count = 0;
	for (var i = 0; i < strArr.length; i++) {
		if (newArr[i] === 'a' || 'e' || 'i' || 'o' || 'u' || 'y') {
			newArr.push(i);
			count++
		}
	}
	return count;
};
console.log(vowelCounter(theOdyssey));