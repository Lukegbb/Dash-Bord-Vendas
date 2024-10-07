// Estrutura de dados para transações financeiras
let transactions = [];

// Função para adicionar uma nova transação
function addTransaction(date, description, value, type) {
    transactions.push({ date, description, value: parseFloat(value), type });
    updateFinanceTable();
    calculateBalances();
}

// Função para atualizar a tabela de finanças
function updateFinanceTable() {
    const financeBody = document.getElementById('financeBody');
    financeBody.innerHTML = ''; // Limpar tabela antes de popular

    transactions.forEach(transaction => {
        const row = `
            <tr>
                <td>${transaction.date}</td>
                <td>${transaction.description}</td>
                <td>${transaction.value.toFixed(2)}</td>
                <td>${transaction.type}</td>
            </tr>
        `;
        financeBody.innerHTML += row;
    });
}

// Função para calcular e exibir saldos
function calculateBalances() {
    const dailyBalance = transactions.reduce((acc, trans) => {
        return trans.type === 'Entrada' ? acc + trans.value : acc - trans.value;
    }, 0);

    const weeklyTransactions = transactions.filter(trans => {
        const transactionDate = new Date(trans.date);
        const now = new Date();
        const diffTime = Math.abs(now - transactionDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 7; // Filtra transações da última semana
    });

    const weeklyBalance = weeklyTransactions.reduce((acc, trans) => {
        return trans.type === 'Entrada' ? acc + trans.value : acc - trans.value;
    }, 0);

    document.getElementById('dailyBalance').innerText = dailyBalance.toFixed(2);
    document.getElementById('weeklyBalance').innerText = weeklyBalance.toFixed(2);
}

// Evento para adicionar uma transação
document.getElementById('addTransactionBtn').addEventListener('click', () => {
    const date = prompt("Digite a data (YYYY-MM-DD):");
    const description = prompt("Digite a descrição:");
    const value = prompt("Digite o valor:");
    const type = prompt("Digite o tipo (Entrada/Saída):");
    if (type === 'Entrada' || type === 'Saída') {
        addTransaction(date, description, value, type);
    } else {
        alert("Tipo inválido! Use 'Entrada' ou 'Saída'.");
    }
});
