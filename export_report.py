import pandas as pd

# Função para exportar relatórios em CSV ou XLSX
def export_report(data, filename):
    df = pd.DataFrame(data)
    df.to_excel(filename + '.xlsx', index=False)  # Exporta para XLSX
    df.to_csv(filename + '.csv', index=False)     # Exporta para CSV

# Exemplo de uso
sales_data = [
    {'Produto': 'Produto A', 'Valor': 100, 'Quantidade': 10},
    {'Produto': 'Produto B', 'Valor': 200, 'Quantidade': 5},
]

export_report(sales_data, 'relatorio_vendas')
