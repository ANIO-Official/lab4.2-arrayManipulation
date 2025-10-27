//Lab 4.2 | Array Manipulation

//Global Variables

let shoppingList = []
let query = "hat"

//----------------------------------------------
//Task 1 | Array Manipulation Basics

//Add an item to the array using push | Commented due to update task in Task 2
// function addItem(item){
//     shoppingList.push(item)
// }
function removeLastItem(){
    shoppingList.pop()
}
function displayList(){
    for (let listItem of shoppingList){
        console.log(`current item: ${listItem}`) // to check if it was added. Testing purposes
    }
}

//Task 2 | Filter and Search an Array
function addItem(item){
    shoppingList.push(item)
}
addItem("gloves")
addItem("t-shirt")
addItem("Gloves")
addItem("pink gloves")
displayList()

//For Loop to check for matches

function filterItems(query){
    //Go through entire array and search for a match for global Variable query
    function checkList(){
        for (let i = 0; i < shoppingList.length; i++){
            if(shoppingList[i] === query){
                console.log(`You already added ${shoppingList[i]}`)
                return true
            }
            else { 
                console.log("This item does not match.")
                return false}
        }
    }
    let result = shoppingList.filter((checkList))
}
filterItems(query)

// function addItem(item){
//     if(filterItems(shoppingList)){

//     }
//     else{shoppingList.push(item)} 
// }

