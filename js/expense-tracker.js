// Expense Tracker functionality

// Select the form and table elements
const expenseForm = document.getElementById('expense-form');
const expenseTableBody = document.querySelector('#expense-table tbody');

// Initialize an empty array to store expenses
let expenses = [];

// Function to render the expenses in the table
function renderExpenses() {
    // Clear the current table rows
    expenseTableBody.innerHTML = '';

    // Loop through each expense and create a row in the table
    expenses.forEach((expense, index) => {
        const row = document.createElement('tr');
        
        // Create table cells for expense name, amount, and category
        row.innerHTML = `
            <td>${expense.name}</td>
            <td>$${expense.amount}</td>
            <td>${expense.category}</td>
            <td><button class="delete-btn" data-index="${index}">Delete</button></td>
        `;

        // Append the row to the table body
        expenseTableBody.appendChild(row);
    });

    // Attach event listeners to delete buttons
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', deleteExpense);
    });
}

// Function to handle form submission and add a new expense
function addExpense(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the form fields
    const name = document.getElementById('expense-name').value;
    const amount = document.getElementById('expense-amount').value;
    const category = document.getElementById('expense-category').value;

    // Create an expense object
    const expense = {
        name: name,
        amount: parseFloat(amount).toFixed(2), // Format amount to 2 decimal places
        category: category
    };

    // Add the expense to the array
    expenses.push(expense);

    // Render the updated expense list
    renderExpenses();

    // Clear the form fields
    expenseForm.reset();
}

// Function to delete an expense
function deleteExpense(event) {
    // Get the index of the expense to delete
    const index = event.target.getAttribute('data-index');

    // Remove the expense from the array
    expenses.splice(index, 1);

    // Re-render the expense list
    renderExpenses();
}

// Add an event listener to the form to handle submission
expenseForm.addEventListener('submit', addExpense);

// Initial rendering of the expense list (empty at first)
renderExpenses();
