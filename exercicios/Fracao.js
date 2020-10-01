class Fracao {
    constructor(numerador, denominador) {
        this.numerador = numerador;
        this.denominador = denominador;
    }

    multiplicacao(fracao) {
        let resultNum = this.numerador * fracao.numerador;
        let resultDen = this.denominador * fracao.denominador;

        return `${resultNum}/${resultDen}`;
    }

    divisao(fracao) {
        let resultNum = this.numerador * fracao.denominador;
        let resultDen = this.denominador * fracao.numerador;

        return `${resultNum}/${resultDen}`;
    }
}

export default Fracao;