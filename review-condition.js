// Exercise 1
function checkNumber(num) {
  
  // Write an if statement to check if the number is positive
  // If it is positive, display "Positive number"
  if(num>0)return "Positive number"
  else if (num<0) return "Negative number"
  else return "Zero"
  // Write an else if statement to check if the number is negative
  // If it is negative, display "Negative number"
  
  // Write an else statement for the case when the number is zero
  // If it is zero, display "Zero"
}

// Exercise 2
function checkAge(age) {
  
  // Write an if statement to check if the age is less than 18
  // If it is less than 18, display "You are a minor"
  if(age<18) return "You are a minor"
  else "You are an adult"

  //return age<18? "you are a minor":"You are an adult"

  // Write an else statement for the case when the age is 18 or older
  // If it is 18 or older, display "You are an adult"
}

// Exercise 3
function checkLeapYear(year) {

  if((year%4===0 && year$100!==0) || (year % 400 ===0)) return "Leap Year"
  return "Not a leap year"
  // Write an if statement to check if the year is a leap year
  // Use the conditions: divisible by 4 but not divisible by 100, unless divisible by 400
  // If it is a leap year, display "Leap year"
  
  // Write an else statement for the case when the year is not a leap year
  // If it is not a leap year, display "Not a leap year"
}

// Exercise 4
function findLargestNumber(num1, num2, num3) {
  let largestNumber = num1;

  if (num2 > largestNumber) {
    largestNumber = num2;
  }

  if (num3 > largestNumber) {
    largestNumber = num3;
  }

  return largestNumber;
}
  // Write an if statement to compare the numbers and find the largest one
  // Display the largest number


module.exports = {
    checkNumber,
    checkAge,
    checkLeapYear,
    findLargestNumber,
  };