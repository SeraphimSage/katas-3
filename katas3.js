//Jack Dekte helped with introducing me to the Reduce function in JS

const sampleArray = [
	469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848,
	179, 535, 940, 472,
];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function kata1(x) {
	//Create new div element
	var kata1 = document.createElement("p");

	//For loop says how many times to add to element
	for (let a = 1; a <= x; a++) {
		//Output1 creates text to be added
		var output1 = document.createTextNode(a + ", ");

		//Append text to the end of new div
		kata1.appendChild(output1);

		//Add new content and elements to DOM
		var currentDiv = document.getElementById("p0");
		document.body.insertBefore(kata1, currentDiv);
	}
}
document.write(
	"<h3>Takes a number and prints 1 to the given number as appened items to an object.</h3>"
);
kata1(25);

function kata2(x) {
	var kata2 = document.createElement("p");

	for (let b = x; b >= 1; b--) {
		let output2 = document.createTextNode(b + ", ");

		kata2.appendChild(output2);

		var currentDiv = document.getElementById("p1");

		document.body.insertBefore(kata2, currentDiv);
	}
}
document.write(
	"<h3>Starts at a given number, decrements by 1 at a time, till it reaches 1 and appends the result to an object.</h3>"
);
kata2(25);

function kata3(x) {
	var kata3 = document.createElement("p");

	for (let c = -1; c >= x; c--) {
		let output3 = document.createTextNode(c + ", ");

		kata3.appendChild(output3);

		var currentDiv = document.getElementById("p2");

		document.body.insertBefore(kata3, currentDiv);
	}
}
document.write(
	"<h3>Starts at negative 1, and decrements till it reaches the given negative number. Appends results to an object.</h3>"
);
kata3(-25);

function kata4(x) {
	var kata4 = document.createElement("p");

	for (let d = x; d <= -1; d++) {
		let output4 = document.createTextNode(d + ", ");

		kata4.appendChild(output4);

		var currentDiv = document.getElementById("p3");

		document.body.insertBefore(kata4, currentDiv);
	}
}
document.write(
	"<h3>Starts at negative given number, and increments till it reaches negative 1. Appends results to an object.</h3>"
);
kata4(-25);

function kata5(x, y) {
	var kata5 = document.createElement("p");

	for (let e = x; e >= y; e -= 2) {
		let output5 = document.createTextNode(e + ", ");

		kata5.appendChild(output5);

		var currentDiv = document.getElementById("p4");

		document.body.insertBefore(kata5, currentDiv);
	}
}
document.write(
	"<h3>Starts at given number, and decrements by 2 till it reaches the given negative number. Appends results to an object.</h3>"
);
kata5(25, -25);

function kata6(x, y) {
	var kata6 = document.createElement("p");

	for (let f = 1; f <= x; f++) {
		if (f % y == 0) {
			let output6 = document.createTextNode(f + ", ");

			kata6.appendChild(output6);

			var currentDiv = document.getElementById("p5");

			document.body.insertBefore(kata6, currentDiv);
		}
	}
}
document.write(
	"<h3>Takes 2 given numbers, first number is limit to be reached, second number is number for modulo operation.</h3> "
);
document.write(
	"<h3>Numbers begin at 1 and are evaluated if the number is divisable by the second given number, if it is, it's appended to an object.</h3 >"
);
kata6(100, 3);

function kata7(x, y) {
	var kata7 = document.createElement("p");

	for (let i = 1; i <= x; i++) {
		if (i % y == 0) {
			let output7 = document.createTextNode(i + ", ");

			kata7.appendChild(output7);

			var currentDiv = document.getElementById("p6");

			document.body.insertBefore(kata7, currentDiv);
		}
	}
}
document.write(
	"<h3>Takes 2 given numbers, first number is limit to be reached, second number is number for modulo operation.</h3> "
);
document.write(
	"<h3>Numbers begin at 1 and are evaluated if the number is divisable by the second given number, if it is, it's appended to an object.</h3 >"
);
kata7(100, 7);

function kata8(x, y, z) {
	var kata8 = document.createElement("p");

	for (let k = x; k >= 1; k--) {
		if (k % y == 0 || k % z == 0) {
			let output8 = document.createTextNode(k + ", ");

			kata8.appendChild(output8);

			var currentDiv = document.getElementById("p7");

			document.body.insertBefore(kata8, currentDiv);
		}
	}
}
document.write(
	"<h3>Takes 3 given numbers, first number is limit to be reached, remaining numbers are numbers for modulo operations.</h3> "
);
document.write(
	"<h3>Numbers begin at 1 and are evaluated if the number is divisable by the second or third given numbers, if it is, it's appended to an object.</h3 >"
);
kata8(100, 3, 7);

function kata9(x, y) {
	var kata9 = document.createElement("p");

	for (let l = 0; l <= x; l++) {
		if (l % 2 != 0 && l % y == 0) {
			let output9 = document.createTextNode(l + ", ");

			kata9.appendChild(output9);

			var currentDiv = document.getElementById("p8");

			document.body.insertBefore(kata9, currentDiv);
		}
	}
}
document.write(
	"<h3>Takes 2 given numbers, first number is limit to be reached, second number is number for modulo operation.</h3> "
);
document.write(
	"<h3>Numbers begin at 0 and are evaluated if the number is divisable by 2 and the second given number, if it is, it's appended to an object.</h3 >"
);
kata9(100, 5);

function kata10() {
	var kata10 = document.createElement("p");

	for (let m = 0; m <= 19; m++) {
		let output10 = document.createTextNode(sampleArray[m] + ", ");

		kata10.appendChild(output10);

		var currentDiv = document.getElementById("p9");

		document.body.insertBefore(kata10, currentDiv);
	}
}
document.write(
	"<h3>Prints out values in a given sample array that is stored globally.</h3> "
);
kata10();

function kata11() {
	var kata11 = document.createElement("p");

	for (let n = 0; n <= 19; n++) {
		if (sampleArray[n] % 2 == 0) {
			let output11 = document.createTextNode(sampleArray[n] + ", ");

			kata11.appendChild(output11);

			var currentDiv = document.getElementById("p10");

			document.body.insertBefore(kata11, currentDiv);
		}
	}
}
document.write("<h3>Returns values of the sample array that are even.</h3> ");
kata11();

function kata12() {
	var kata12 = document.createElement("p");

	for (let o = 0; o <= sampleArray.length - 1; o++) {
		if (sampleArray[o] % 2 == 1) {
			let output12 = document.createTextNode(sampleArray[o] + ", ");

			kata12.appendChild(output12);

			var currentDiv = document.getElementById("p11");

			document.body.insertBefore(kata12, currentDiv);
		}
	}
}
document.write("<h3>Returns values of the sample array that are odd.</h3> ");
kata12();

function kata13() {
	var kata13 = document.createElement("p");

	for (let p = 0; p <= sampleArray.length - 1; p++) {
		if (sampleArray[p] % 8 == 0) {
			let output13 = document.createTextNode(sampleArray[p] + ", ");

			kata13.appendChild(output13);

			var currentDiv = document.getElementById("p13");

			document.body.insertBefore(kata13, currentDiv);
		}
	}
}
document.write(
	"<h3>Returns values of the sample array that are divisible by 8.</h3> "
);
kata13();

function kata14() {
	var kata14 = document.createElement("p");

	for (let q = 0; q <= sampleArray.length - 1; q++) {
		let output14 = document.createTextNode(
			sampleArray[q] * sampleArray[q] + ", "
		);

		kata14.appendChild(output14);

		var currentDiv = document.getElementById("p14");

		document.body.insertBefore(kata14, currentDiv);
	}
}
document.write(
	"<h3>Returns values of the square of sample array items that are odd.</h3> "
);
kata14();

function kata15() {
	var kata15 = document.createElement("p");

	var arr = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	];

	let output15 = document.createTextNode((result = arr.reduce(reducer)));

	kata15.appendChild(output15);

	var currentDiv = document.getElementById("p15");

	document.body.insertBefore(kata15, currentDiv);
}
document.write(
	"<h3>Returns the sum of all values in an array using a reducer function.</h3> "
);
kata15();

function kata16() {
	var kata16 = document.createElement("p");

	let output16 = document.createTextNode(
		(result = sampleArray.reduce(reducer))
	);

	kata16.appendChild(output16);

	var currentDiv = document.getElementById("p16");

	document.body.insertBefore(kata16, currentDiv);
}
document.write(
	"<h3>Returns the sum of all values in the sample array using a reducer function.</h3> "
);
kata16();

function kata17() {
	var kata17 = document.createElement("p");

	let output17 = document.createTextNode(Math.min.apply(Math, sampleArray));

	kata17.appendChild(output17);

	var currentDiv = document.getElementById("p17");

	document.body.insertBefore(kata17, currentDiv);
}
document.write(
	"<h3>Uses a min function to return the smallest item in the sample array.</h3> "
);
kata17();

function kata18() {
	var kata18 = document.createElement("p");

	let output18 = document.createTextNode(Math.max.apply(Math, sampleArray));

	kata18.appendChild(output18);

	var currentDiv = document.getElementById("p18");

	document.body.insertBefore(kata18, currentDiv);
}
document.write(
	"<h3>Uses a max function to return the largest item in the sample array.</h3> "
);
kata18();
