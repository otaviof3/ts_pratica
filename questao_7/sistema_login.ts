// Sistema de login e permissão de acesso para uma aplicação web, utiliza interface e classes para gerenciar a lógica de autenticação e autorização.
interface Usuario {
    email: string;
    senha: string;
}

class Autenticacao {
    private usuarios: Usuario[] = [{ email: "admin@site.com", senha: "1234" }];

    autenticar(email: string, senha: string): boolean {
        const usuario = this.usuarios.find(user => user.email === email && user.senha === senha);
        return usuario !== undefined;
    }
}

class Sistema {
    private autenticacao: Autenticacao;

    constructor() {
        this.autenticacao = new Autenticacao();
    }

    login(email: string, senha: string): boolean {
        if (this.autenticacao.autenticar(email, senha)) {
            console.log("Login bem-sucedido.");
            return true;
        } else {
            console.log("Credenciais inválidas.");
            return false;
        }
    }

    acessarRecurso(email: string, senha: string): void {
        if (this.login(email, senha)) {
            console.log("Acesso ao recurso autorizado.");
        } else {
            console.log("Acesso negado. Login necessário.");
        }
    }
}