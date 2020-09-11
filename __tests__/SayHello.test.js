import SayHello from '../src/SayHello';

let hello = new SayHello();

test('SayHello', () => {
    expect(hello.sayHello()).toBe('Hello');
});