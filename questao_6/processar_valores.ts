// Função para processar array de valores numéricos, conforme as especificações.
function processarValores(valores: number[], minimo: number, taxa: number) { 
    valores = valores.filter(v => v > minimo)
    valores = valores.map(v => v * (1 + taxa))
    valores = valores.sort((a, b) => b - a);
    return valores
}