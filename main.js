//http://winter2014.refactoru.com/exercises/problem-set/function-practice2

//7) Write a function called 'vowels' which takes a string and returns an array of all the vowels in the string, including duplicates.
//7a) vowels('alabama') should return ['a', 'a', 'a', 'a']
//7b) vowels('What lets in youth?') should return['a', 'e', 'i', 'o', 'u']

// var vowels = function(userStr) {
// 	var output = [];
// 	var l = userStr.length;
// 	//cache the length of the string for looping
// 	var vowelObj = {
// 		'a': true,
// 		'e': true,
// 		'i': true,
// 		'o': true,
// 		'u': true
// 	};
// 	//create an object with vowels as keys, and values of true.
// 	for(var i=0; i<l; i++) {
// 		if(userStr[i] in vowelObj) {
// 			//use of 'in'
// 			output.push(userStr[i]);
// 			console.log("The vowels on the following line will console after each iteration")
// 			console.log(output);
// 		}
// 	}
// 	return output;
// };
// vowels('alabama')
// vowels('What lets in youth?')

var vowels = function(userStr){
	var output = [];
	var l = userStr.length;
	//console.log("Should equal seven: " + userStr.length);
	//use loop to iterate through arguments
	//use if statement with strict equals to search through vowels
	for (i = 0; i < l; i++) {
		if(userStr[i] === 'a' || userStr[i] === 'e' || userStr[i] === 'i' || userStr[i] === 'o' || userStr[i] === 'u') {
			output.push(userStr[i]);
			console.log(userStr[i]);
		}	
	}
		return output;
};
vowels('alabama')
vowels('What lets in youth?')