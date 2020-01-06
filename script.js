// // BMI = mass / height^2 = mass / (height * height)
//
// let marksHeight = 1.80; //kg
// let marksMass = 70; // meters
// let marksBMI = marksMass / (marksHeight * marksHeight);
// console.log(marksBMI);
//
// var johnsHeight = 1.70;
// var johnsMass = 85;
// var johnsBMI = johnsMass / (johnsHeight * johnsHeight);
// console.log(johnsBMI);
//
// let johnsHigherBMI = johnsBMI > marksBMI;
// console.log('Is John\'s BMI higher than Mark\'s ? ' + johnsHigherBMI);

// let firstName = 'John';
// let civilStatus = 'single';
//
// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }
//
// let isMarried = true;
// if (isMarried) {
//     console.log(firstName + 'is married!')
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }
//
// let marksHeight = 1.80; //kg
// let marksMass = 70; // meters
// let marksBMI = marksMass / (marksHeight * marksHeight);
//
// var johnsHeight = 1.70;
// var johnsMass = 85;
// var johnsBMI = johnsMass / (johnsHeight * johnsHeight);

// let johnsHigherBMI = johnsBMI > marksBMI;
// console.log('Is John\'s BMI higher than Mark\'s ? ' + johnsHigherBMI);
//
// if (marksBMI > johnsBMI){
//     console.log('Mark\'s BMI is greater then John\'s')
// } else {
//     console.log('John\'s BMI is greater than Mark\'s')
// }


// let firstName = 'John';
// let age = 22;
// //
// if (age < 13){
//     console.log(firstName + ' is a boy. ')
// } else if (age >=13 && age <= 18 ){
//     console.log(firstName + ' is a teenager. ')
// } else if (age >= 20 && age <30) {
//     console.log(firstName + ' is a young man.')
// }else {
//     console.log(firstName + ' is a man.')
// }


// ****** Ternary Operator *****
// let firstName = 'John';
// let age = 14;
//
// age >= 18 ? console.log(firstName + ' drinks beer. ')
//     : console.log(firstName + ' drinks juice.');
//
// let drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink)


// ***** switch statement ****

// let job = 'pool';
// switch (job) {
//     case 'teacher':
//         console.log(firstName + ' teaches kids');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives people around. ');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs cool websites. ');
//         break;
//     default:
//         console.log(firstName + ' does something else. ')
// }

// if the age turns out to be true then the .log will render. if false if
//     will continue to the next one until it finds a true statement or hits
// the default
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy. ');
//         break;
//     case age >=13 && age <= 18:
//         console.log(firstName + ' is a teenager. ');
//         break;
//     case age >= 20 && age <30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.')
// }


// ***** coding challenge 2 *****

// let johnsTeam = (89 + 119 + 103) / 3;
// let mikesTeam = (89 + 110 + 103) / 3;
// let marysTeam = (89 + 117 + 103) / 3;
//  console.log(johnsTeam);
//  console.log(mikesTeam)
// console.log(marysTeam)
//
// if (mikesTeam > johnsTeam && mikesTeam  > marysTeam) {
//     console.log(' Mike WON with an average score of ' + mikesTeam)
// } else if (johnsTeam > mikesTeam && johnsTeam > marysTeam) {
//     console.log(' John WON with an average score of ' + johnsTeam)
// }else if (marysTeam > johnsTeam && marysTeam > mikesTeam){
//     console.log(' Mary won with an average score of ' + marysTeam)
// } else {
//     console.log (' They all tied')
// }

// **** Functions *****

//  function calculateAge (birthYear) {
//      return 2019 - birthYear;
//  }
//
//     let juanAge = calculateAge(1991);
//     let pepeAge = calculateAge(1995);
//     let anaAge = calculateAge(1989);
//
// console.log(juanAge, pepeAge, anaAge);
//
// function yearsUntilRetirement(year, firstName) {
//    let age = calculateAge(year);
//    let retirement = 65 - age;
//    if(retirement > 0){
//        console.log(firstName + ' will retire in ' + retirement +
//            ' years.');
//    }else {
//        console.log(firstName + ' already retired. ')
//    }
// }
// yearsUntilRetirement(1991, 'Juan');
// yearsUntilRetirement(1985, 'Mary');
// yearsUntilRetirement(1900, 'Bob');


// ***** Function Statements and expressions*****
//
// let whatDoYouDo = function(job, firstName){
//     switch (job) {
//         case 'teacher':
//             return firstName + ' teaches young kids to read.';
//         case 'driver':
//             return firstName + ' drives people around.';
//         case 'designer':
//             return firstName + ' designs things for people';
//         default:
//             return firstName + ' does something else.'
//     }
// }
//
// console.log(whatDoYouDo('teacher', 'Juan'))
// console.log(whatDoYouDo('driver', 'Antonio'))
// console.log(whatDoYouDo('retired', 'Maria'))

// ***** ARRAYS *****

// let names = ['Juan', 'Bob', 'Marcos'];
// let years = new Array(1991, 1969, 1948);
//
// console.log(names)
// console.log(names.length)
//
//
// let juan = ['Juan', 'Cardenas', 1991, 'unemployed', true];
// console.log(juan);
//
// juan.push('red');
// juan.unshift('Mr');
// juan.pop();
// juan.shift();
// console.log(juan);
//
// console.log(juan.indexOf(1991));
//
// let isDesigner = juan.indexOf('designer') === -1 ? 'Juan is not a designer' : 'Juan us a designer';
// console.log(isDesigner)


// ***** Coding Challange 3*********
// **** first attempt****
// let bill1 = 124;
// let bill2 = 48;
// let bill3 = 268;
//
// let finalBill1 = tipCalculator(bill1)  + bill1;
// let finalBill2 = tipCalculator(bill1)  + bill2;
// let finalBill3 = tipCalculator(bill1)  + bill3;
//
//
// function tipCalculator(bill){
//     let percentage;
//     if (bill < 50 ) {
//         return bill * .2
//     }else if (bill > 50 && bill <200 ){
//         return bill * .15
//     }else{
//         return bill * .1
//     }
// }
//
// let tips = [tipCalculator(bill1), tipCalculator(bill2), tipCalculator(bill3)];
// let finalPaid = [finalBill1, finalBill2, finalBill3]
// console.log(tips, finalPaid);

// ****** codin challenge 3 ******
//     *****after looking at solution *****

// function tipCalculator(bill){
//     let percentage;
//     if(bill < 50){
//         percentage = .2
//     }else if(bill >50 && bill <200){
//         percentage = .15
//     }else {
//         percentage = .1
//     }
//     return percentage * bill;
// }
//
// let bills = [124, 48, 268];
// let tips = [tipCalculator(bills[0]),
//               tipCalculator(bills[1]),
//               tipCalculator(bills[2])];
// console.log(tips);
//
// let totalBill = [tips[0] + bills[0],
//                  tips[1] + bills[1],
//                  tips[2] + bills[2]];
// console.log(totalBill);



// ****** Objects and properties ******


// let juan = {
//     firstName: 'Juan',
//     lastName: 'Cardenas',
//     birthYear: 1991,
//     family: ['Fati','Gama','Apa','Ama'],
//     job: 'Student',
//     isMarried: false,
// };
//
// console.log(juan.firstName);
// console.log(juan['lastName']);
// let x = 'birthYear';
// console.log(juan[x]);
//
//
// let jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1990;
// jane['lastName'] = 'Smith';
// console.log(jane)


// ***** Objects & Methods *****
//
// let juan = {
//     firstName: 'Juan',
//     lastName: 'Cardenas',
//     birthYear: 1991,
//     family: ['Fati','Gama','Apa','Ama'],
//     job: 'Student',
//     isMarried: false,
//     calcAge: function() {
//         this.age = 2019 - this.birthYear;
//     }
// };
// juan.calcAge();
// console.log(juan);



// ****** Coding Challenge 4 ******

//
// let mark = {
//     firstName: 'Mark',
//     lastName: 'Cardenas',
//     height: 1.80,
//     mass: 70,
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height * this.height)
//         return this.BMI;
//     }
// };
//
// mark.calcBMI();
// console.log(mark)
//
//
// let john = {
//     firstName: 'John',
//     lastName: 'Johnson',
//     height: 1.70,
//     mass: 80,
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height * this.height)
//         return this.BMI;
//     }
// };
//
// john.calcBMI();
// console.log(john);
//
//
// if (mark.calcBMI() > john.calcBMI()) {
//     console.log( mark.firstName + ' has a higher BMI with a number of ' + mark.calcBMI())
// }else if (john.calcBMI() > mark.calcBMI()) {
//     console.log( john.firstName + ' BMI is higher with a number of ' + john.calcBMI() )
// }else {
//     console.log(' They have the same BMI ')
// }


// ******* Loops and Iterations******

// var john = ['John', 'Smith', 1990, 'designer', false];

// ****For Loop****
// for (var i = 0; i < john.length; i++){
//     console.log(john[i])
// }

// ****While Loop****
// var i = 0
// while (i < john.length){
//     console.log(john[i]);
//     i++;
// }

// ***Continue & break statements***

// var john = ['John', 'Smith', 1990, 'designer', false];

// **continue**
// for (var i = 0; i < john.length; i++){
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i])
// }

// // **Break**
// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i])
// }

// //****** challange loop backwards *****
// for (let i = john.length -1; i >=0; i--) {
//     console.log(john[i])
// }


// ********** Coding Challenge 5 **********


