// Estrutura de dados para o inventário
let inventoryData = [];

// Função para adicionar um novo produto ao inventário
function addInventoryProduct(name, cost, price, quantity) {
    const product = { name, cost: parseFloat(cost), price: parseFloat(price), quantity: parseInt(quantity) };
    inventoryData.push(product);
    updateInventoryTable();
}

// Função para atualizar a tabela de inventário
function updateInventoryTable() {
    const inventoryBody = document.getElementById('inventoryBody');
    inventoryBody.innerHTML = ''; // Limpar tabela antes de popular

    inventoryData.forEach(product => {
        const row = `
            <tr>
                <td>${product.name}</td>
                <td>${product.cost.toFixed(2)}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>${product.quantity}</td>
            </tr>
        `;
        inventoryBody.innerHTML += row;
    });
}

// Evento para adicionar um novo produto ao inventário
document.getElementById('addInventoryBtn').addEventListener('click', () => {
    const name = prompt("Digite o nome do produto:");
    const cost = prompt("Digite o custo do produto:");
    const price = prompt("Digite o preço de venda:");
    const quantity = prompt("Digite a quantidade em estoque:");

    // Verificar se todos os campos estão preenchidos
    if (name && cost && price && quantity) {
        addInventoryProduct(name, cost, price, quantity);
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

// Carregar dados inicialmente (caso tenha algum)
function loadInventoryData() {
    // Aqui você pode adicionar a lógica para carregar dados de uma API ou banco de dados, se necessário
}

loadInventoryData();
