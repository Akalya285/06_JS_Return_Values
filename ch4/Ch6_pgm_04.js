var add;

add = function (number1, number2) {
    var total = number1 + number2;
    return total;
};

var sum = add(50, 23);
console.log('The sum of 50 and 23 is ' + sum); // The sum of 50 and 23 is 73

// Different pair of numbers
var sum1 = add(15, 42);
console.log(sum1); // 57

// Adding more than two numbers by nesting calls
var total = add(add(10, 20), 30); // 60
console.log(total);

// Function to add three numbers
var addThreeNumbers;

addThreeNumbers = function (number1, number2, number3) {
    var total = number1 + number2 + number3;
    return total;
};

var sumThree = addThreeNumbers(5, 10, 15);
console.log(sumThree); // 30
