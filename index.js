var average = 0;
var count = 0; 

var currentNum = prompt("Please enter a number or press -1 to end: ");
while (currentNum != -1) {
  count++;
  average = average + currentNum;
  currentNum = prompt("Please enter a number or press -1 to end: ");
}

console.log(average);
console.log(count);
console.log("The average of  is: " + average);