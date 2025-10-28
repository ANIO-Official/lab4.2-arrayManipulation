# 4.2 Lab Variables and Functions
## Lab Overview
The purpose of this project is to practice creating variables and functions. This lab is focused on:

- Manipulating variables to perform mathmatical operations and string manipulation.
- Write and call functions that use parameters and return values.
- Use conditional logic inside functions to create more dynamic behavior.
- Refactor code to improve readability and reusability.
------------------------------------------------
## Table of contents

- [Overview](#overview)
  - [GitHub](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [Reflection Questions](#reflection)
  - [Useful resources](#useful-resources)
- [Author](#author)

### GitHub Link
https://github.com/ANIO-Official/lab4.2-arrayManipulation 
## My process
To complete this lab, I started by adding the index.html, index.js, and README files. Then I followed these steps:
 1. **Starting in the JS file, I created an empty global array variable called 'shoppingList'**

    This will hold all the data for the shopping list.
 2. **Created functions for Adding, Removing, and displaying the shopping list. Tested functionality.**

    addItem function recieved the parameter item to represent the item being added.
    addItem also uses push to add the item to the array.
    removeLastItem function removes the last item in the array using pop.
    displayList function displays the resulting array in the console specifically.
    Tested the functions using temporary variables and inputs.
    Researched and fixed any bugs found.
    Tested again to make sure fixes worked.
    Add, Commit once any part worked.
 3. **Modified the addItem function**

    I commented out the previous version of the function for documentation of a task completed.
    Updated the addItem function with conditional to only add an item if it was not already in the array.
    Created a new function called filterItems that took 'item' as a parameter to search for in the array.
    Used a 'for of' loop to check through the shoppingList Array for matches. Console logged for each result.
    Tested the functions using temporary variables and inputs.
    Researched and fixed any bugs found. Including refactoring the filterItems function.
    Tested again to make sure fixes worked.
    Add, Commit once any part worked.
 4. **Update the HTML File & DOM Manipulation**

    Added base HTML format using ! shortcut in VSCode.
    Used semantic html to add header, new input field, an unordered list, and buttons.
    Set new global variables in index.js equal to buttons, input field, and unordered list.
    Added event listeners by calling the appropriate variables.
    Event listeners performed previously created functions such as addItem() to perform tasks.
    Tested the buttons in browser by dragging HTML file into the browser.
    Adjusted code and looked over querySelectors to fix bugs.
    Tested again to make sure fixes worked.
    Add, Commit once any part worked.
5. **Style, README update, & Complete**

    Added Bootstrap via link in html code to add basic styling.
    Updated README with template and filled it out.
    Done :D

### Built with
- JavaScript
- Semantic HTML
- Bootstrap CSS Library

## Reflection Questions

 1. **How did array methods like push() and filter() help you manipulate data in this activity?**
    
    Push() updated my shoppingList array by adding new items using shoppingList.push(item).
    I set 'item' equal to the input field's value. It made it easy to update the list.
    Pop() was used in my removeLastItem function to remove the last item from the array.

 2. **What challenges did you face when trying to filter and search for items in the array?**
  
    Filter() was difficult to understand and I found it inefficient for filtering the
    data because it led to a lot bugs and a need for an external or internal function to call.
    Initially I made a second function for the filter() method to call but it caused a lot of issues
    due to the scope of variable values. Even when I *thought* I had it working, it resulted in variables returning as undefined. 
    I did reference [MDN Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). But I could not implement it properly.

    Upside, it really helped to console.log A LOT throughout the process to check variable and boolean values. It is top bug finding method.
    
    Ultimately, I did follow the main instructions of creating a function called filterItems. Instead of using the filter() method, I used a 'for of' loop to check and search through the items in the array for a match to the input item's value.

    Also a very small thing, I notice sometimes I forget to put the querySelector search value inside quotation marks or I forget the # for ids. They're small things but they can wreck havoc. :'D

    I did also make a infitie loop at one point when testing the filter function. Luckily my VSCode had a limiter that stopped it before I even pressed Ctrl + C.

 3. **How would you modify this code to make it more efficient or user-friendly?**

    If I were to modify this code to make it more efficent or user friendly, I would definitely try
    to implement the filter() method. It looks like it could be cleaner and streamlined for the code,
    but my understanding of it led to too many errors and ALOT of extra code.

### Useful resources

- [MDN Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) - Though I couldn't use this method in my code efficiently, it did help with the logic of building my filter function.
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction) I referenced for styling.

## Author

- LinkedIn - [Amanda Ogletree](https://www.linkedin.com/in/amanda-ogletree-a61b60168)