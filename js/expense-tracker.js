const expenseForm = document.getElementById('expense-form');
const expenseTableBody = document.querySelector('#expense-table tbody');
expenseForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = document.getElementById('expense-amount').value;
    const expenseCategory = document.getElementById('expense-category').value;
    const expenseDate = document.getElementById('expense-date').value;

    
    const newRow = document.createElement('tr');
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
    dateCell.textContent = expenseDate; 
    newRow.appendChild(dateCell);

    const actionsCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function () {
        newRow.remove(); 
    });
    actionsCell.appendChild(deleteButton);
    newRow.appendChild(actionsCell);

   
    expenseTableBody.appendChild(newRow);
    expenseForm.reset();
});
