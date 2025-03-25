// Interface para criar as tarefas, uma tarefa possui um número de identificação e pode estar em 1 de 3 estados.
interface Tarefa {
    id: number;
    estado: 'pendente' | 'fazendo' | 'concluída';
}

// Classe para a gestão das tarefas
class GestorTarefas {
    private tarefas: Tarefa[] = [];

    // Funcionalidade para criar as tarefas, cria elas com um ID baseado no tamanho da lista de tarefas e em estado "pendente".
    criarTarefa() {
        const tarefaCriada: Tarefa = {
            id: this.tarefas.length + 1,
            estado: 'pendente'
        }
        this.tarefas.push(tarefaCriada);
    }

    // Funcionalidade para alterar o estado das tarefas, identifica qual tarefa a alterar o estado por ID e altera o estado com base no recebido pela função.
    alterarStatus(id: number, estado: Tarefa['estado']) {
        const tarefa = this.tarefas.find(task => task.id === id);
        if (tarefa) {
            tarefa.estado = estado; 
        }
    }

    // Funcionalidades para listarem as tarefas pelo estado recebido pela função.
    listagemEstado(estado: Tarefa['estado']) {
        const listaTarefas: Tarefa[] = [];

        for (let tarefa of this.tarefas) {
            if (tarefa.estado === estado) {
              listaTarefas.push(tarefa);  
            }
          }
        return listaTarefas;
    }

    // Funcionalidade para calcular quantas tarefas concluídas existem.
    tarefasConcluidas() {
        let concluidas: number = 0;
        for (let tarefa of this.tarefas) {
            if (tarefa.estado === 'concluída') {
                concluidas += 1;
            }
        }
        return concluidas;
    }
}