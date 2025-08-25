const expenseName = document.getElementById('expenseName');
const expenseAmount = document.getElementById('expenseAmount');
const expenseList = document.getElementById('expenseList');
const totalEl = document.getElementById('total');

let expenses = [];

function addExpense() {
    const name = expenseName.value.trim();
    const amount = parseFloat(expenseAmount.value);
    if (!name || isNaN(amount) || amount <= 0) return;

    const expense = { name, amount };
    expenses.push(expense);

    renderExpenses();
    expenseName.value = '';
    expenseAmount.value = '';
}

function removeExpense(index) {
    expenses.splice(index, 1);
    renderExpenses();
}

function renderExpenses() {
    expenseList.innerHTML = '';
    let total = 0;
    expenses.forEach((exp, i) => {
        total += exp.amount;
        const li = document.createElement('li');
        li.textContent = `${exp.name}: $${exp.amount.toFixed(2)}`;

        const delBtn = document.createElement('button');
        delBtn.textContent = 'X';
        delBtn.onclick = () => removeExpense(i);
        li.appendChild(delBtn);

        expenseList.appendChild(li);
    });
    totalEl.textContent = `Total: $${total.toFixed(2)}`;
}
