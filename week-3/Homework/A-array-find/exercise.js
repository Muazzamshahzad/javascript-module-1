/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here



function findLongNameThatStartsWithA(names) {
    return names[0]== "A" && names.length > 7;  // how come it work forme only without the names A ?
  };

const names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

  const longNameA = names.find(findLongNameThatStartsWithA);
console.log(longNameA);


/* EXPECTED OUTPUT */
// "Alexandra"
