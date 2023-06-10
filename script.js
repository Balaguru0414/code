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

// %%%%%%%%%%%%%%%%%% BUBBLE SORT  %%%%%%%%%%%%%%%%%%

let unsortedArray = [5,1,7,3,6,9,2,4,-2,-5,-9]
let swapped;

const bubbleSort = (arr) => {
	swapped = false;
	let end = arr.length - 1;
	for(let i = 0; i < end; i++){
		if (arr[i] > arr[i+1]) {
			swapped = true;
			let temp = arr[i];
			arr[i] = arr[i+1];
			arr[i+1] = temp;
		}
	}
	end--;
}

do{
	bubbleSort(unsortedArray);
} while (swapped);

console.log(unsortedArray);

// %%%%%%%%%%%%%%%%%% INSERTION SORT  %%%%%%%%%%%%%%%%%%

// METHOD --1
const array = [6,8,2,-5,3,-2,7]

const insertionSort = (nums) => {
	for (let i=1; i < nums.length; i++) {
		for(let j=i; j > 0; j--) {
			if (nums[j] < nums[j-1]) {
				[nums[j],nums[j-1]] = [nums[j-1],nums[j]];
			}
		}
	}
	return nums;
};
console.log(insertionSort(array));

// METHOD --2
const insertion = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		let curr = arr[i];
		let j = i - 1;

		while (j >= 0 && arr[j] > curr) {
			arr[j + 1] = arr[j];
			j--
		}
		arr[j + 1] = curr;
	}
	return arr;
}

console.log(insertion(array));
// %%%%%%%%%%%%%%%%%% FIBONACCI SERIES %%%%%%%%%%%%%%%%%%

let n1=0,n2=1,next,i;

const fibonacci = (num) => {
	for(let i=1; i<=num; i++){
		console.log(n1);
		next = n1+n2;
		n1 = n2;
		n2 = next;
	};
};

fibonacci(8);

// %%%%%%%%%%%%%%%%%% SECOND LARGEST NUMBER %%%%%%%%%%%%%%%%%%

const arr = [7,2,4,25,58,6,5,3,8];

const getSecondLargestNumber = (arr = []) => {
	let largestNumber = arr[0];
	let secondLargestNumber = arr[0];

	for(let i=0; i<arr.length; i++) {
		if (arr[i] > largestNumber) {
			secondLargestNumber = largestNumber;
			largestNumber = arr[i];
		} else if(arr[i] > secondLargestNumber) {
			secondLargestNumber = arr[i];
		}		
	}
	return secondLargestNumber;
};

console.log(getSecondLargestNumber(arr));

// %%%%%%%%%%%%%%%%%% PRIME OR NOT %%%%%%%%%%%%%%%%%%

let number = prompt("Please enter a number")

if (number == 1) {
	console.log(`${number} is neither prime nor composite number`);
} else if(number < 1) {
	console.log(`${number} is not a prime number`);
} else if(number == 2){
	console.log(`${number} is a prime number`);
} else {
	for(let i=2; i < number; i++){
		if (number %i == 0) {
			var res = `${number} is not a prime number`;
			break;
		} else {
			var res = `${number} is a prime number`;
		}
	}
	console.log(res)
};

// %%%%%%%%%%%%%%%%%% BINARY SEARCH %%%%%%%%%%%%%%%%%%

const values = [0,1,2,3,4,5,6,7,8,9,10];
const values1 = [21,5,25,27]

// const search = (val,arr) => {
// 	for(let i=0; i < arr.length; i++){
// 		if (val === arr[i]) return i;
// 	}
// 	return -1;
// };
// console.log(search(6,values))   // 6
// console.log(search(21,values1)) // 2

const binarySearch = (val,arr) => {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		const middle = left + Math.floor((right - left) / 2);

		if (val === arr[middle]) return middle;
		if (val < arr[middle]) right = middle - 1;
		else left = middle + 1;
	}
	return -1;
};

console.log(binarySearch(6,values));
console.log(binarySearch(21,values1));

// %%%%%%%%%%%%%%%%%% FIND FACTORIAL %%%%%%%%%%%%%%%%%%

const factorial = (n) => {
	if (n == 0) return 1;
	else return factorial(n-1) * n;
};
console.log(factorial(6));

// %%%%%%%%%%%%%%%%%% SUM ALL THE ELMENT IN AN ARRAY %%%%%%%%%%%%%%%%%%

const array = [4,5,10];
let sum = 0;
array.forEach(n => sum += n);
console.log(sum);

// %%%%%%%%%%%%%%%%%% OVER RIDING %%%%%%%%%%%%%%%%%%

class Vehicle {
	drive() {
		console.log("you drive the vehicle");
	}
};

class Car extends Vehicle {
	drive() {
		console.log("you drive the car");
	}
};

class RaceCar extends Car {
	drive() {
		console.log("you drive the Race car ");
	}
};

const racecar = new RaceCar();

racecar.drive();

// %%%%%%%%%%%%%%%%%% INHERITENCE %%%%%%%%%%%%%%%%%%

class Animal {
	constructor(){
		this.alive = true;
	}

	eat () {
		console.log("This animal is eating");
	}
};

class Rabbit extends Animal {
	run (){
		console.log("Rabbit is Running");
	}
}

class Fish extends Animal {
	swim (){
		console.log("Fish is Swimming");
	}
}

class Parrot extends Animal {
	fly (){
		console.log("Parrot is flying");
	}
}

const rabbit = new Rabbit();
const fish = new Fish();
const parrot = new Parrot();

console.log(rabbit.alive);
// rabbit.eat();
// fish.eat();
// parrot.eat();

rabbit.run();
fish.swim();
parrot.fly();
*/
// %%%%%%%%%%%%%%%%%% REVERSE LINKED LIST %%%%%%%%%%%%%%%%%%

let head = {
	val : 1,
	next : {
		val : 2,
		next : {
			val : 3,
			next : null,
		}
	}
};

function reverseLinkList(head) {
	let prev = null;
	let curr = head;

	while (curr) {
		let next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	return prev;
}

console.log(reverseLinkList(head));