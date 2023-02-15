// //  These lines of code use the getElementById() method to retrieve references to the HTML elements with IDs "addToDoBtn" and "inputField". These elements are stored in the addToDoBtn and inputField variables, respectively.
// // get the 'Add' button and input field
// const addToDoBtn = document.getElementById("addToDoBtn");
// const inputField = document.getElementById("inputField");

// // This line of code retrieves a reference to the HTML element with the ID "myList" and stores it in the myList variable.
// // get the 'Todo' list
// const myList = document.getElementById("myList");


// //  This line of code adds an event listener to the "Add" button. The event listener is triggered when the button is clicked. It takes a callback function as its second argument.
// // add an event listener to the 'Add' button
// addToDoBtn.addEventListener('click', function() {

//       // These lines of code create a new li element using the createElement() method and store it in the listItem variable. The text content of the new list item is set to the value of the input field using the value property.
//     // create a new list item
//     let listItem = document.createElement('li');
//     listItem.textContent = inputField.value;

//     // This line of code appends the new list item to the "Todo" list using the appendChild() method.
//     // append the new list item to the 'Todo' list
//     myList.appendChild(listItem);

//     // This line of code adds a set of Tailwind CSS classes to the listItem element using the classList.add() method. This will style the list item with a green background, green text, rounded corners, and a border.
//     listItem.classList.add("bg-green-200", "text-green-800", "rounded-md", "py-2", "px-2", "border", "border-slate-200");
    
//     // This line of code sets the value of the input field to an empty string, effectively clearing it.
//     // clear the input field
//     inputField.value = '';

//     // This line of code sets the focus on the input field, making it ready for the user to add another item.
//     // focus on the input field
//     inputField.focus();
// });


// Get the 'Add' button and input field
const addToDoBtn = document.getElementById("addToDoBtn");
const inputField = document.getElementById("inputField");
// Get the 'Todo' list
const myList = document.getElementById("myList");

// Add a click event listener to the list element to handle item deletion
myList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});

// Add an event listener to the 'Add' button
addToDoBtn.addEventListener('click', function() {
    // Check if the input field value is not empty or only contains white space
    if (inputField.value.trim() !== '') {
        // Create a new list item
        let listItem = document.createElement('LI');
        listItem.textContent = inputField.value;
        // Append the new list item to the 'Todo' list
        myList.appendChild(listItem);
        // Add Tailwind CSS classes to the new list item
        listItem.classList.add("bg-indigo-200", "text-indigo-800", "rounded-md", "py-2", "px-2", "border", "border-slate-200", "my-2");
        // Clear the input field
        inputField.value = '';
        // Set focus on the input field
        inputField.focus();
    } else {
        // Show an alert if the input field is empty or only contains white space
        alert('Please enter a value in the input field');
    }
});

