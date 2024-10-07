// Exemplo de dados de vendas para o gráfico
let salesData = [
    { date: '2024-01-01', sales: 500 },
    { date: '2024-01-02', sales: 700 },
    { date: '2024-01-03', sales: 600 },
    { date: '2024-01-04', sales: 800 },
    { date: '2024-01-05', sales: 900 },
];

// Função para criar o gráfico de vendas
function createSalesChart(salesData) {
    const ctx = document.getElementById('salesChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: salesData.map(item => item.date),
            datasets: [{
                label: 'Vendas',
                data: salesData.map(item => item.sales),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Função para chamar ao carregar os dados inicialmente
function initializeCharts() {
    createSalesChart(salesData);
}

// Chame a função ao carregar a página
initializeCharts();
