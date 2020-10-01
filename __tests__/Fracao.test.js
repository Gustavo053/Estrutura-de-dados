import Fracao from '../exercicios/Fracao';

let fracao1 = new Fracao(10, 20);
let fracao2 = new Fracao(2, 4);

test('multiplicacao', () => {
    expect(fracao1.multiplicacao(fracao2)).toBe('20/80');
});

test('divisao', () => {
    expect(fracao1.divisao(fracao2)).toBe('40/40');
});
