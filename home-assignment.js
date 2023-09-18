// Chapter 17 - 20 Home Assignment

// Q1
for (var a = 1; a <= 10; a++) {
    document.write(a + ", ");
}

document.write("<br><br>");

// Q2
for (var i = 1; i <= 12; i++) {
    document.write(i + ", ");
}
document.write("<br><br>");

// Q3

for (var i = 0; i <= 4; i++) {

}
document.write("<br><br>");

// Q4

for (var b = 0; b < 100; b++) {
    document.write(b + ", ");
}
document.write("<br><br>");

// Q5

for (var i = 0; i < 3; i++) {
    document.write(i + ", ");
}
document.write("<br><br>");

// Q6

var statementArray = [10, "ABC", "Naseem", true, null];

// Q7

var flag = true

// Q8

var pets = ["crocodile", "tiger", "lion", "cat", "dog", "elephant", "zebra", "camel", "monkey", "racoon"]
for (var i=0;i < pets.length; i++) {
    document.write("Element of " + pets[i] + " at " + i + "<br> ");
}
document.write("<br><br>");

// Q9

for (var i = 0; i < 10; i++) {
    if (i == 1) {
        alert(i);
    }
}

// Q10

var userNames = ["ali", "junaid", "ahmed", "khawaja", "waqar", "sameer", "muhammad", "fatima", "yaseen", "hamid", "sohail"]

var firstNamePrompt = prompt("Please enter your First Name");

for (var i = 0; i < userNames.length; i++) {
    if (firstNamePrompt == userNames[i]) {
        alert("Enter");
    }
}

// Q11
var list = ["junaid", "qamar", "shaheen", "ibtisam", "zunair"]
var userInput = prompt("Enter the username yet again to match with q11")
var matchFound = false;
for (var i = 0; i < list.length; i++) {
     if (userInput === list[i]) {
         alert("Match found");
          matchFound = true;
          break;
} 
}

// Q12
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {

    for (var a = 0; a < secondArr.length; a++) {
        document.write(firstArr[i].concat(secondArr[a]) + ", <br>");
    }
}