/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi"];

var OnlyStudents = group.filter(student => students.includes(student))
let groupIsOnlyStudents = group.length == OnlyStudents.length

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
