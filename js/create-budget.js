
const budgetForm = document.getElementById('budget-form');
const budgetTableBody = document.querySelector('#budget-table tbody');

// Event listener for form submission
budgetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the input values
    const categoryName = document.getElementById('category-name').value;
    const budgetLimit = document.getElementById('budget-limit').value;

   
    if (categoryName === '' || budgetLimit === '') {
        alert('Please fill out both fields');
        return;
    }

   
    addBudgetToTable(categoryName, budgetLimit);

   
    budgetForm.reset();
});


function addBudgetToTable(categoryName, budgetLimit) {
    
    const row = document.createElement('tr');
    const categoryCell = document.createElement('td');
    categoryCell.textContent = categoryName;
    row.appendChild(categoryCell);

    
    const limitCell = document.createElement('td');
    limitCell.textContent = `$${parseFloat(budgetLimit).toFixed(2)}`;
    row.appendChild(limitCell);

    
    const actionsCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    actionsCell.appendChild(deleteButton);
    row.appendChild(actionsCell);

    
    budgetTableBody.appendChild(row);
 
    deleteButton.addEventListener('click', function () {
        row.remove();
    });
}
