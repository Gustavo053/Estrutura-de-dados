class Fila {
    constructor(size = 5) {
        this.size = size
        this.first = 0;
        this.last = -1;
        this.data = [];
        this.numItems = 0;
    }

    enqueue(data) {
        if (this.isFull()) {
            return 'StackOverFlow';
        } else {
            this.numItems++;
            return this.data[++this.last] = data;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'StackUnderFlow';
        } else {
            this.numItems--;
            return this.data[this.first++];
        }
    }

    front() {
        return this.data[this.first];
    }

    isEmpty() {
        return this.numItems === 0;
    }

    isFull() {
        return this.numItems === this.size;
    }

    clear() {
        this.last = - 1;
        return this.first = - 1;
    }

    length() {
        return this.numItems;
    }

    toString() {
        let i = 0;
        let result = '[';
        while (i < this.length()) {

            if (i != this.length() - 1) { //if de formatação do toString
                result += this.data[i] + " ";
            } else {
                result += this.data[i];
            }

            i++;
        }

        result += ']';

        return result;
    }
}

export default Fila;