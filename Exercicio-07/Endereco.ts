class Endereco {
    #logradouro: string;
    #complemento: Date //string; 

    constructor(logradouro: string, complemento: Date /*string*/) {
        this.#logradouro = logradouro;
        this.#complemento = complemento;
    }

    getLogradouro = (): string => this.#logradouro

    getComplemento = (): string => this.#complemento.toDateString() // this.complemento

    getEnderecoCompleto = (): string => `Logradouro:${this.#logradouro} Complemento:${this.#complemento.toDateString()}`

}
