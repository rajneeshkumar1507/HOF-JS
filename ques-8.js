function calculateTotalExpenses(expenses){
    if(!expenses || expenses.length === 0){
        return 0;
    }
    return expenses.reduce((total, expenses) => total + expenses.amount, 0);
}

const expenses = [
    {name: "Food", amount: 50},
    {name: "Transportation", amount: 30},
    {name: "Internet", amount: 45},
    {name: "Groceries", amount: 80},
];
const totalExpenses = calculateTotalExpenses(expenses);
console.log(totalExpenses);
