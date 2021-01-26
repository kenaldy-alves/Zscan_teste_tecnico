class Cliente {
    #nome: string;
    #dataNascimento: Date;
    #endereco: Endereco

    constructor(nome: string, dataNascimento: Date, endereco: Endereco) {
        this.#nome = nome;
        this.#dataNascimento = dataNascimento;
        this.#endereco = endereco;
    }

    #calculateIdade = (): number => {
        var today = new Date().getTime() 
        var age = Math.round((today - this.#dataNascimento.getTime()) / (1000 * 60 * 60 * 24 * 30 * 12))
        return age
    }    

    getEndereco = (): Endereco => this.#endereco

    getNome = (): string => this.#nome

    getIdade = (): number => this.#calculateIdade()
}
