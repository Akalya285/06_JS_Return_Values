var totalCost;

totalCost = function (callOutCharge, costPerHour, numberOfHours, discount) {
    return (callOutCharge + costPerHour * numberOfHours) - discount;
};

// Cost for 12 hours of work
console.log("$" + totalCost(30, 40, 12, 0));

// Cost for 3 hours of work with a $20 off coupon
console.log("$" + totalCost(30, 40, 3, 20));  // Should display $130


