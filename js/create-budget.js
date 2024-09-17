document.addEventListener('DOMContentLoaded', function () {
    // Variables for total budget, allocated total, and remaining budget
    let totalBudget = 0;
    let allocatedTotal = 0;

    // Access DOM elements
    const totalBudgetInput = document.getElementById('total-budget');
    const remainingBudgetDisplay = document.getElementById('remainingBudget');
    const allocatedTotalDisplay = document.getElementById('allocatedTotal');
    const budgetForm = document.getElementById('budget-form');
    const budgetTableBody = document.querySelector('#budget-table tbody');
    const progressBar = document.getElementById('progressBar');

    // Update remaining budget when total budget is set
    totalBudgetInput.addEventListener('input', function () {
        totalBudget = parseFloat(this.value) || 0;
        updateRemainingBudget();
    });

    // Handle form submission
    budgetForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const budgetName = document.getElementById('budget-name').value;
        const budgetAmount = parseFloat(document.getElementById('budget-amount').value) || 0;
        const budgetCategory = document.getElementById('budget-category').value;

        // Check if budget amount exceeds remaining budget
        if (allocatedTotal + budgetAmount > totalBudget) {
            alert('You cannot allocate more than the remaining budget!');
            return;
        }

        // Update allocated total and remaining budget
        allocatedTotal += budgetAmount;
        updateRemainingBudget();
        updateProgressBar();

        // Add new budget row to the table
        addBudgetToTable(budgetName, budgetAmount, budgetCategory);

        // Update total allocated display
        allocatedTotalDisplay.textContent = allocatedTotal.toFixed(2);

        // Reset the form after submission
        budgetForm.reset();
    });

    // Function to update remaining budget
    function updateRemainingBudget() {
        const remaining = totalBudget - allocatedTotal;
        remainingBudgetDisplay.textContent = remaining.toFixed(2);
    }

    // Function to update the progress bar
    function updateProgressBar() {
        const progress = (allocatedTotal / totalBudget) * 100;
        progressBar.style.width = `${progress}%`;
    }

    // Function to add a budget entry to the table
    function addBudgetToTable(name, amount, category) {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = name;
        row.appendChild(nameCell);

        const amountCell = document.createElement('td');
        amountCell.textContent = amount.toFixed(2);
        row.appendChild(amountCell);

        const categoryCell = document.createElement('td');
        categoryCell.textContent = category;
        row.appendChild(categoryCell);

        const actionsCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            deleteBudgetEntry(row, amount);
        });
        actionsCell.appendChild(deleteButton);
        row.appendChild(actionsCell);

        budgetTableBody.appendChild(row);
    }

    // Function to delete a budget entry and update totals
    function deleteBudgetEntry(row, amount) {
        // Update allocated total and remaining budget
        allocatedTotal -= amount;
        updateRemainingBudget();
        updateProgressBar();

        // Update total allocated display
        allocatedTotalDisplay.textContent = allocatedTotal.toFixed(2);

        // Remove the row from the table
        row.remove();
    }
});
