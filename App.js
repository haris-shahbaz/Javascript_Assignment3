    // Chapter 6 to 9

// Question no 1
// var a = 10;
// var b = ++a;
// console.log (b); 
// var c = b++;
// console.log (c);
// var d = --c;
// console.log (d);
// var e = d--;
// console.log (e);


// Question no 2
// var a = 2;
// var b = 1;
// console.log (--a);
// console.log (--a - --b);
// console.log (--a - --b + ++b);
// console.log (--a - --b + ++b + b--);


// Question no 3
// var a = prompt ("Enter your name");
// alert ("Hello " + a);


// Question no 5
// var a = prompt ("Number");
// for (var i = 1; i <= 10; i++) {
//     if (a <= 20) {
//         console.log (a + " * " + i + " = " + a * i);
//     }
//     else {
//         console.log (6 + " * " + i + " = " + 6 * i);
//     }
// }


// Question no 6
// var subject1 = "Math";
// var subject2 = "Urdu";
// var subject3 = "English";
// var num = 100;
// var obtain1 = 54;
// var obtain2 = 54;
// var obtain3 = 48;
// var obtain = obtain1 + obtain2 + obtain3;
// console.log (subject1 + " " + num + " " + obtain1);
// console.log (subject2 + " " + num + " " + obtain2);
// console.log (subject3 + " " + num + " " + obtain3);
// console.log (" 300 " + obtain + " " + (num / obtain * 100));




// Chapter 12 to 13


// Question no 2
// var a = prompt ("Enter first number");
// var b = prompt ("Enter second number");
// if (a > b) {
//     console.log ("a is larger than b");
// }
// else if (a === b) {
//     console.log ("both are equal");
// }
// else {
//     console.log ("a is smaller than b");
// }


// Question no 3
// var a = prompt ("Enter any number");
// if (a > 0) {
//     console.log ("Positive");
// }
// else if (a < 0) {
//     console.log ("Nagative");
// } else {
//     console.log ("Zero");
// }


// Question no 4
// var a = "a, e, i, o, u";
// var b = "b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z";
// if (a !== b) {
//     console.log ("vowels");
// } else {
//     console.log ("false");
// }


// Question no 5
// var password = prompt ("Enter password");
// var conform = prompt ("Conform password");
// if (password === conform) {
//     alert("Correct password");
// } else {
//    alert ("Incorrect password");
// }


// Question no 6
// var hours = prompt ("Enter Hours");
// if (hours < 18) {
//     console.log ("Good morning");
// } else {
//     console.log ("Good evening");
// }


// Question no 7
// function categorizeTime(time) {
//     if (time >= 0 && time < 600) {
//       return "It's the middle of the night (12:00 am - 5:59 am).";
//     } else if (time >= 600 && time < 1200) {
//       return "It's the morning (6:00 am - 11:59 am).";
//     } else if (time >= 1200 && time < 1800) {
//       return "It's the afternoon (12:00 pm - 5:59 pm).";
//     } else if (time >= 1800 && time < 2400) {
//       return "It's the evening (6:00 pm - 11:59 pm).";
//     } else {
//       return "Invalid input. Please enter a time in the format HHMM (e.g., 1900 for 7pm).";
//     }
//   }
//   const timeInput = prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):");
//   const time = parseInt(timeInput);
//   if (!isNaN(time)) {
//     const result = categorizeTime(time);
//     alert(result);
//   } else {
//     alert("Invalid input. Please enter a valid number.");
//   }



// Chapter 14 to 16


// Question no 1 and 2
// var studentsName = [];


// Question no 3
// var studentsName = ["haris", "abdul rehman", "abdullah", "waris"];


// Question no 4
// var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Question no 5
// var booleanArray = [true, false, true, false];


// Question no 6
// var mixedArray = ["haris", 1, true, "abdul rehman", false, 7];


// Question no 7
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// console.log (qualifications);


// Question no 8
// const studentNames = ["John", "Alice", "Bob"];
// const studentScores = [420, 350, 480];
// for (let i = 0; i < studentNames.length; i++) {
//   const name = studentNames[i];
//   const score = studentScores[i];
//   const percentage = (score / 500) * 100;
//   console.log(`${name}'s Score: ${score} out of 500`);
//   console.log(`${name}'s Percentage: ${percentage}%`);
// }


// Question no 9
// var colors = ["red", "blue", "green", "yellow", "pink"];
// console.log (colors);

//    A
// var colors = ["red", "blue", "green", "yellow", "pink"];
// colors.unshift("purple");
// console.log (colors);

//    B
// var colors = ["red", "blue", "green", "yellow", "pink"];
// colors.push("orange");
// console.log(colors);

//    C
// var colors = ["red", "blue", "green", "yellow", "pink"];
// colors.unshift("purple", "orange");
// console.log (colors);

//    D
// var colors = ["red", "blue", "green", "yellow", "pink"];
// colors.shift();
// console.log (colors);

//    E
// var colors = ["red", "blue", "green", "yellow", "pink"];
// colors.pop();
// console.log (colors);

//    F
// var colors = ["red", "blue", "green", "yellow", "pink"];
// colors.splice(2, 0, "orange");
// console.log (colors);

//    G
// var colors = ["red", "blue", "green", "yellow", "pink"];
// var slice = colors.slice(2, 6);
// console.log (slice);


// Question no 10
// var studentNumbers = [320, 230, 480, 120];
// studentNumbers.sort();
// console.log (studentNumbers);


// Question no 11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// console.log (cities);
// var selectedCities = ["Quetta", "Islamabad"];
// console.log (selectedCities);


// Question no 12
// var array = ["This", "is", "my", "cat"];
// var join = array.join();
// console.log (join);


// Question no 13
// let fifoQueue = [];
// fifoQueue.push("keyboard");
// fifoQueue.push("mouse");
// fifoQueue.push("printer");
// fifoQueue.push("monitor");
// let firstItem = fifoQueue.shift(); 
// let secondItem = fifoQueue.shift();
// let thirdItem = fifoQueue.shift();
// let fourthItem = fifoQueue.shift();
// console.log("First Item:", firstItem);
// console.log("Second Item:", secondItem);
// console.log("third Item:", thirdItem);
// console.log("fourth Item:", fourthItem);


// Question no 15
// var mobiles = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write (mobiles);