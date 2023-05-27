/*
// %%%%%%%%%%%%%%%%%% REVERSE STRING %%%%%%%%%%%%%%%%%%

// METHOD 1
const str = "Balaguru";
const reverseStr = str.split('')
					  .reverse()
					  .join('')
console.log(reverseStr);  // urugalaB

// METHOD 2
const name = 'Surya Narayanan';
let reverseString = ''
for(let i = name.length - 1; i >= 0; i-- ){
	reverseString+=name[i]
}
console.log(reverseString) // nanayaraN ayruS

// %%%%%%%%%%%%%%%%%% PALINDROME %%%%%%%%%%%%%%%%%%

// Check : It is palindrome
const isPalindrome = (str) => {
	return str === str.split('').reverse().join('');
}
console.log(isPalindrome('level'));
console.log(isPalindrome('helo'));
console.log(isPalindrome('appa'));

//--------------------------------------------------
const str = "amma";
const isPalindrome = (str) => {
	let left = 0;
	let right = str.length-1;

	while (left < right){
		if (str[left] !== str[right]) return false;
		left++;
		right--;
	}
	return true;
};
console.log(isPalindrome(str))

// %%%%%%%%%%%%%%%%%%  %%%%%%%%%%%%%%%%%%
// FIND THE NUMBER OF OCCURENCES OF A CHARACTER IN A STRING

const string = prompt("Please enter a string");
const letter = prompt("Please enter a letter");
const strlen = string.length;

let count = 0;
for(let i = 0; i < strlen; i++){
	if (string[i] === letter) {
		count++;
	}
};
console.log(`${string} => ${letter} => ${count}`);

// %%%%%%%%%%%%%%%%%%  %%%%%%%%%%%%%%%%%%
// FIND IF THE GIVEN TWO STRINGS ARE ANAGARMS OR NOT

const first = 'Mary';
const second = 'Rams';

const isAnagrams = (first,second) => {
	let a = first.toLowerCase().split('').sort().join('');
	let b = second.toLowerCase().split('').sort().join('');

	return a === b;
};
console.log(isAnagrams(first,second));

// %%%%%%%%%%%%%%%%%%  %%%%%%%%%%%%%%%%%%
// HOW DO YOU CALCULATE THE NUMBER OF VOWELS AND CONSONANTS IN STRING

const string = 'javascript';
// const reg = [aeiou]
const reg = /[aeiou]/gi;
const char = string.match(reg);

console.log(char)
console.log(char.join(','))
console.log(char.length)

console.log(`Vowels : ${char.length} , Consonants : ${string.length - char.length}`)

// %%%%%%%%%%%%%%%%%%  %%%%%%%%%%%%%%%%%%
// HOW DO YOU GET MATCHING ELEMENTS IN A INTEGER ARRAY

const arr1 = [1,3,6,5]
const arr2 = [1,2,3,4]

const same = arr1.filter(el => arr2.includes(el));
console.log(same)
*/