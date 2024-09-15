// Select the form and table body elements
const expenseForm = document.getElementById('expense-form');
const expenseTableBody = document.querySelector('#expense-table tbody');

// Event listener for form submission
expenseForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = document.getElementById('expense-amount').value;
    const expenseCategory = document.getElementById('expense-category').value;
    const expenseDate = document.getElementById('expense-date').value;

    // Create a new table row
    const newRow = document.createElement('tr');

    // Create and append cells for expense name, amount, and category
    const nameCell = document.createElement('td');
    nameCell.textContent = expenseName;
    newRow.appendChild(nameCell);

    const amountCell = document.createElement('td');
    amountCell.textContent = `$${parseFloat(expenseAmount).toFixed(2)}`;
    newRow.appendChild(amountCell);

    const categoryCell = document.createElement('td');
    categoryCell.textContent = expenseCategory.charAt(0).toUpperCase() + expenseCategory.slice(1);
    newRow.appendChild(categoryCell);

    const dateCell = document.createElement('td');
    dateCell.textContent = expenseDate; // Assuming the date is in 'YYYY-MM-DD' format
    newRow.appendChild(dateCell);

    // Create and append a cell for actions (e.g., delete)
    const actionsCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function () {
        newRow.remove(); // Remove the row when the delete button is clicked
    });
    actionsCell.appendChild(deleteButton);
    newRow.appendChild(actionsCell);

    // Append the new row to the table body
    expenseTableBody.appendChild(newRow);

    // Clear the form fields after adding the expense
    expenseForm.reset();
});
