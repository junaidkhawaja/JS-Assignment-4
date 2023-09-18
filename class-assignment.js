// Chapter 17 - 20

// Q1 - skipped by sir
// Q2 - skipped by sir

// Q3
for (var i=1;i<=10;i++) {
    document.write(i + "<br>");
}

document.write("<br><br>");

// Q4
var table = 1
var tablePrompt = +prompt("Enter the number for the table you want?");
var tableLength = +prompt("Enter length of the table");
for (table; table <= tableLength; table++) {
    document.write(tablePrompt + " x " + table + " = " + table*tablePrompt + "<br>");
}

document.write("<br><br>");

// Q5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (var t = 0; t < fruits.length; t++) {
    document.write(fruits[t] + "<br>");
}

document.write("<br><br>");

for (var a = 0; a < fruits.length; a++) {
    document.write("Element at index " + a + " is " + fruits[a] + "<br>");
}

document.write("<br><br>");

// Q6
document.write("<br><h2>Counting</h2><br>");
for (c = 1; c <= 15; c++) {
    document.write(c + ", ");
}
document.write("<br><h2>Reverse Counting</h2><br>");
for (d = 10; d > 0; d--) {
    document.write(d + ", ");
}

document.write("<br><h2>Even</h2><br>");
for (e = 0; e <= 20; e = e + 2) {
    document.write(e + ", ");
}

document.write("<br><h2>Odd</h2><br>");
for (f = 1; f < 20; f = f + 2) {
    document.write(f + ", ");
}
document.write("<br><h2>Series</h2><br>");
for (g = 2; g <= 20; g = g + 2) {
    document.write(g + "k, ");
}

document.write("<br><br>");

// Q7
var deserts = ["cake", "apple pie", "cookie", "chips", "patties"];
var askDesert = prompt("Welcome to ABC Bakery. What do you want to order Sir/Madam?");

for(var h = 0; h < deserts.length; h++) {
    if(askDesert === deserts[h]) {
        document.write(deserts[h] + " is available at index " + h + " in our bakery.<br>");
    }
}


// Q8

var numbersArray = [24, 53, 78, 91, 12];
 
var max = numbersArray[0];
for (var m = 0; m < numbersArray.length; m++) {
    if (numbersArray[m] > max) {
        max = numbersArray[m]; 
    }
}
document.write("The largest number is " + max);
document.write("<br><br>");

// Q9

var min = numbersArray[0];

for (var m = 0; m < numbersArray.length; m++) {
    if (numbersArray[m] < min) {
        min = numbersArray[m]; 
    }
}


document.write("The smallest number is " + min);
document.write("<br><br>");

// Q10

for (var gg = 5; gg <= 100; gg = gg + 5) {
    document.write(gg + ", ");
}
document.write("<br><br>");
