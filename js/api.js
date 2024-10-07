// Simulação de dados de vendas
let allSalesData = [];

// Função para carregar dados de vendas
function loadSalesData() {
    // Aqui você pode adicionar a lógica para carregar dados de uma API ou banco de dados
}

// Função para adicionar uma nova venda
function addSale(product, price, quantity) {
    const sale = { product, price: parseFloat(price), quantity: parseInt(quantity) };
    allSalesData.push(sale);
    updateSalesTable();
}

// Função para atualizar a tabela de vendas
function updateSalesTable() {
    const salesBody = document.getElementById('salesBody');
    salesBody.innerHTML = ''; // Limpar tabela antes de popular

    allSalesData.forEach(sale => {
        const row = `
            <tr>
                <td>${sale.product}</td>
                <td>${sale.price.toFixed(2)}</td>
                <td>${sale.quantity}</td>
            </tr>
        `;
        salesBody.innerHTML += row;
    });
}

// Evento para adicionar uma venda
document.getElementById('addSaleBtn').addEventListener('click', () => {
    const product = prompt("Digite o nome do produto:");
    const price = prompt("Digite o preço do produto:");
    const quantity = prompt("Digite a quantidade vendida:");
    addSale(product, price, quantity);
});

// Carregar dados inicialmente
loadSalesData();
