class Pilha {
    constructor(maxSize = 5) {
        this.maxSize = maxSize;
        this.data = [];
        this.last = -1;
    }

    push(data) {
        if (this.isFull()) {
            return 'StackOverFlow';
        } else {
            return this.data[++this.last] = data;
        }
    }

    pop() {
        if (this.isEmpty()) {
            return 'StackUnderFlow';
        } else {
            return this.data[this.last--];
        }
    }

    top() {
        return this.data[this.last];
    }

    size() {
        return this.last + 1;
    }

    isFull() {
        return this.size() === this.maxSize;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        return this.last = -1;
    }
}

export default Pilha;