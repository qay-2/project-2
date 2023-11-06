// Arrays

// HOMEWORK

// Q1) From you understanding of array create an array with 15 items inside

var fruitbasket = ["apple", "orange","pear", "kiwi", "plum", "apricot", "melon", "grape", "mango", "passionfruit", "pineapple", "lychee", "watermelon","pineapple", "blueberry",]
console.log(fruitbasket.length)

// Q2)From the array just created in the above question remove the last item in the array. You cannot alter the original array.
fruitbasket.pop()
console.log(fruitbasket)

// Q3) Add an item to the end of the list. Cannot alter the original array

fruitbasket.push("peach")
console.log(fruitbasket)



// Q4) Find the position of the first item, middle item and last item of the list and print them off separately.

console.log( fruitbasket.indexOf ("apple"))
console.log( fruitbasket.indexOf ("grape"))
console.log( fruitbasket.indexOf ("blueberry"))

// Q5) Modify 3 items in the array and print them off


fruitbasket [0]="rasin"
console.log(fruitbasket)

fruitbasket [7]="tamarind"
console.log(fruitbasket)

fruitbasket [14]="date"
console.log(fruitbasket)

