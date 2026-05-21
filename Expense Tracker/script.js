let expenses = [];

function addExpense() {

    let title = document.getElementById('title').value;

    let amount = document.getElementById('amount').value;

    if(title === '' || amount === '') {

        alert('Please fill in all fields');
        return;
    }

    let expense = {
        title: title,
        amount: Number(amount)
    };

    expenses.push(expense);

    displayExpenses();

    document.getElementById('title').value = '';
    document.getElementById('amount').value = '';
}


function displayExpenses() {

    let list = document.getElementById("expenseList");

    let balance = document.getElementById("balance");

    list.innerHTML = '';

    let total = 0;

    expenses.forEach(item => {

        total += item.amount;

        list.innerHTML += `
        <div class="expense-item">
            <span>${item.title}</span>
            <span>₹${item.amount.toFixed(2)}</span>
        </div>
        `;

    });

    balance.textContent = `₹${total.toFixed(2)}`;
}