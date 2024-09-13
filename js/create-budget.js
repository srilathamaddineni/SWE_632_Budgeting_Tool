// Select the form and table elements
const budgetForm = document.getElementById('budget-form');
const budgetTableBody = document.querySelector('#budget-table tbody');

// Event listener for form submission
budgetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the input values
    const categoryName = document.getElementById('category-name').value;
    const budgetLimit = document.getElementById('budget-limit').value;

    // Validate input
    if (categoryName === '' || budgetLimit === '') {
        alert('Please fill out both fields');
        return;
    }

    // Add the new budget item to the table
    addBudgetToTable(categoryName, budgetLimit);

    // Clear the form inputs
    budgetForm.reset();
});

// Function to add the budget item to the table
function addBudgetToTable(categoryName, budgetLimit) {
    // Create a new table row
    const row = document.createElement('tr');

    // Create and append category name cell
    const categoryCell = document.createElement('td');
    categoryCell.textContent = categoryName;
    row.appendChild(categoryCell);

    // Create and append budget limit cell
    const limitCell = document.createElement('td');
    limitCell.textContent = `$${parseFloat(budgetLimit).toFixed(2)}`;
    row.appendChild(limitCell);

    // Create and append actions cell (e.g., delete button)
    const actionsCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    actionsCell.appendChild(deleteButton);
    row.appendChild(actionsCell);

    // Append the row to the table body
    budgetTableBody.appendChild(row);

    // Add event listener to the delete button
    deleteButton.addEventListener('click', function () {
        row.remove();
    });
}
