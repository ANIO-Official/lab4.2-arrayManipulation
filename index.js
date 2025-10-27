//Lab 4.2 | Array Manipulation

//Global Variables

let shoppingList = []


//----------------------------------------------
//Task 1 | 

//Add an item to the array using push
function addItem(item){
    shoppingList.push(item)
}
function removeLastItem(){
    shoppingList.pop()
}
function displayList(){
    for (let listItem of shoppingList){
        console.log(listItem) // to check if it was added. Testing purposes
    }
}
// displayList()
// addItem("sneakers")
// addItem("gloves")
// addItem("tater tots")
// displayList()
// removeLastItem()
// displayList()