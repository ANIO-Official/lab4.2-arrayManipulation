//Lab 4.2 | Array Manipulation

//Global Variables
let shoppingList = [];
let displayList = document.querySelector("#displayList")
let addItemBtn = document.querySelector("#addItemBtn")
let removeLastItemBtn = document.querySelector("#removeLastItemBtn")
//----------------------------------------------
//Task 1 | Array Manipulation Basics

//Add an item to the array using push | Commented due to update task in Task 2
// function addItem(item){
//     shoppingList.push(item)
// }
function removeLastItem() {
  shoppingList.pop();
}
function displayList() {
  for (let listItem of shoppingList) {
    console.log(listItem); // to check if it was added. Testing purposes
  }
}

//Task 2 | Filter and Search an Array

function filterItems(item) {
    //Go through entire array and search for a match for item being added
    for (let listItem of shoppingList){
        if(listItem === item){
            console.log(`Yup, ${listItem} is in here.`)
            return true
        }
        else if (listItem !== item){
            console.log(`Nope, ${listItem} isn't ${item}.`)
        }
    }

}

//check for a match then, add or ignore the new item.
function addItem(item) {
    //set the value of the result to variable foundMatch
    let foundMatch = filterItems(item)    
    if (foundMatch) {
        console.log(`You already added ${item}`);
    }

    else{
        console.log("Notification: Adding new item to list.");
        shoppingList.push(item);
        displayList();
    } 
}

//Task 3 | Render the List in the Broswer


