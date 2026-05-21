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
}