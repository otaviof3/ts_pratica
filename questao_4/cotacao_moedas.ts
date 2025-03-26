// Função assíncrona que simula a chamada de uma API de cotações de moedas, retornando um objeto com "moeda" e "valor" e simulando um atraso na resposta.
async function obterCotacao(moeda: string): Promise<{ moeda: string; valor: number }> {
    try {
        const atraso = new Promise(resolve => setTimeout(resolve, 2000));
        await atraso;

        const resposta = await fetch('https://jsonplaceholder.typicode.com/coins');
        const cotacao = await resposta.json();

        const valor = cotacao[moeda.toUpperCase()];
        if (!valor) {
            throw new Error("Moeda não encontrada");
        }

        return cotacao.map((coin: any) => ({
            moeda: coin.moeda,
            valor: coin.valor,
          }));

    } catch (erro) {
        console.error(`Erro ao obter a cotação da moeda ${moeda}: ${erro.message}`);
        throw erro;
    }
}
// Na verdade não tenho certeza se realmente faz isso tudo não entendi muito bem o negócio do JSON :(