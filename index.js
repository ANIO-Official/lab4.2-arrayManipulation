//Lab 4.2 | Array Manipulation

//Global Variables
let shoppingList = [];  //Array Storage of string variables to add to list.
let viewList = document.querySelector("#viewList") // List displayed in browser
let addItemBtn = document.querySelector("#addItemBtn")
let removeLastItemBtn = document.querySelector("#removeLastItemBtn")
let itemInput = document.querySelector("#itemInput")
//----------------------------------------------
//Task 1 | Array Manipulation Basics

//Add an item to the array using push | Commented due to Task 2 requirements but it remains because it was part of Task 1.
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
    //Filter first, then set the value of the result to variable foundMatch
    let foundMatch = filterItems(item)    
    if (foundMatch) {
        console.log(`You already added ${item}`); //Console Check
    }

    else{
        console.log("Notification: Adding new item to list.");//Console Check
        shoppingList.push(item);
        displayList();
    } 
}

//Task 3 | Render the List in the Broswer

function renderList(){
    //Clear the current displayList of anything in it.
    viewList.innerHTML = ""
    /*for each listItem in the shoppingList Array, make a new li element and set
    the value of the innerText equal to the listItem from the array.*/
    for(let listItem of shoppingList){
        let newItem = document.createElement("li")
        newItem.innerText = listItem 
        viewList.appendChild(newItem)
    }
}
//Add an event listener to update list by calling addItem Function and Renderlist.
addItemBtn.addEventListener("click", function(){
    let item = itemInput.value // Assign item variable the value of the item from input field
    addItem(item) //Add the input field value to the array
    renderList()
    itemInput.value = ""
})

//Add an event listener to remove the last added itme.
removeLastItemBtn.addEventListener("click", function(){
    removeLastItem()
    renderList()
})