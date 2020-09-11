import Pilha from '../src/Pilha';

let pilha;

beforeEach(() => {
    pilha = new Pilha();
});

test('push', () => {
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);
    pilha.push(4);
    expect(pilha.push(5)).toBe(5);
});

test('pop', () => {
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);
    pilha.push(4);
    pilha.push(5);

    pilha.pop();
    expect(pilha.pop()).toBe(4);
});

test('top', () => {
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);
    pilha.push(4);
    pilha.push(5);

    expect(pilha.top()).toBe(5);
});

test('size', () => {
    pilha.push(1);
    pilha.push(2);

    expect(pilha.size()).toBe(2);
});

test('isFull', () => {
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);
    pilha.push(4);
    pilha.push(5);

    expect(pilha.isFull()).toBe(true);
});

test('isEmpty', () => {
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);
    expect(pilha.isEmpty()).toBe(false);
});

test('clear', () => {
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);
    pilha.push(4);
    pilha.push(5);

    expect(pilha.clear()).toBe(-1);
});

test('StackOverFlow', () => {
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);
    pilha.push(4);
    pilha.push(5);

    expect(pilha.push(6)).toBe('StackOverFlow');
});

test('StackUnderFlow', () => {
    pilha.push(1);
    pilha.push(2);
    pilha.pop();
    pilha.pop();

    expect(pilha.pop()).toBe('StackUnderFlow');
});