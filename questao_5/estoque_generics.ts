// Cria classes Produtos e Estoque genéricas para garantir que produtos de tipos diferentes sejam tratados separadamente, a classe Estoque tem funções para adicionar, remover e listar produtos.
class Produto<T> {
    nome: string;
    categoria: string;
    preco: number;
    detalhes: T;

    constructor(nome: string, categoria: string, preco: number, detalhes: T) {
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.detalhes = detalhes;
    }
}

class Estoque<T> {
    private produtos: Produto<T>[] = [];

    adicionarProduto(produto: Produto<T>): void {
        this.produtos.push(produto);
    }

    removerProduto(nome: string): void {
        this.produtos = this.produtos.filter(produto => produto.nome !== nome);
    }

    listarProdutos(): void {
        if (this.produtos.length === 0) {
            console.log("Estoque vazio.");
        } else {
            console.log("Produtos no estoque:");
            this.produtos.forEach(produto => {
                console.log(`Nome: ${produto.nome}, Categoria: ${produto.categoria}, Preço: R$${produto.preco}`);
            });
        }
    }
}