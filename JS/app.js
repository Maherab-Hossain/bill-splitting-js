

// ** bill spilting
// ** num of friend
// ** main + desert + Vat
// ** total / num
// ** spilting





// function spiltingBillProgram (mainCourseAmount,desertAmount,vatAmount, numOfFrd = 1) {
// let numOfFriend = numOfFrd;
// let mainCourse = mainCourseAmount;
// let desert = desertAmount;
// let vat = vatAmount;
// let totalBill = mainCourse + desert + vat;
// let splitBill = totalBill / numOfFriend;

// document.write(`Per Person Bill is ${splitBill} TK <br>`);

// }
// spiltingBillProgram(600,300,150,5);


let numFrd = prompt(`Number of Friend`);
let mainCourse = parseInt(prompt(`Main Course Amount`));
let desert = parseInt(prompt (`Desert Amount`));
let vat = parseInt(prompt(`VAT`));
let totalbill = (mainCourse + desert + vat) / numFrd ;

console.log(`Per Person Bill ${totalbill}`);