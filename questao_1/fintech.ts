// Recebe os dados via JSON, e confere se Nome, CPF e Renda Mensal existem e são dos tipos corretos, lançando uma exceção caso não.
async function validarDados() {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/clients');
    const dadosCliente = await resposta.json();

    if (typeof dadosCliente.nome !== 'string') {
        throw new Error("O campo 'nome' é obrigatório e deve ser uma string.");
      }
  
      if (typeof dadosCliente.cpf !== 'string') {
        throw new Error("O campo 'cpf' é obrigatório e deve ser uma string.");
      }
  
      if (typeof dadosCliente.rendaMensal !== 'number') {
        throw new Error("O campo 'rendaMensal' é obrigatório e deve ser um número.");
      }
  
      return "Dados do cliente validados com sucesso.";
}