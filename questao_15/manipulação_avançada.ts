// Função que omite informações privadas do cliente pelo Omit.
type Cliente = {
    nome: string;
    email: string;
    senha: string;
    cpf: string;
  };
  
  function criarClientePublico(cliente: Cliente) {
    const clientePublico: Omit<Cliente, 'senha' | 'cpf'> = {
      nome: cliente.nome,
      email: cliente.email,
    };
    
    return clientePublico;
  }