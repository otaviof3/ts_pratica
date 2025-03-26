// Sistema de pagamentos que aceita dois métodos: cartão de crédito e boleto bancário, utilizando Union Types.
type Pagamento =
  | { tipo: "cartao"; numero: string; cvv: string }
  | { tipo: "boleto"; codigoBarras: string };


function processarPagamento(pagamento: Pagamento): void {
  if (pagamento.tipo === "cartao") {

    console.log(`Processando pagamento com cartão:`);
    console.log(`Número do Cartão: ${pagamento.numero}`);
    console.log(`CVV: ${pagamento.cvv}`);
  } else if (pagamento.tipo === "boleto") {

    console.log(`Processando pagamento com boleto:`);
    console.log(`Código de Barras: ${pagamento.codigoBarras}`);

  } else {
    console.log("Tipo de pagamento não aceito.");
  }
}