class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Lista {
    constructor() {
        this.head = new Node(null);
    }

    add(data) {
        let newNode = new Node(data);

        newNode.next = this.head.next;
        this.head.next = newNode;
    }

    append(data) {
        let newNode = new Node(data);

        if (this.isEmpty()) {
            this.head.next = newNode;
        } else {
            let aux = this.head.next;

            while (aux.next !== null) {
                aux = aux.next;
            }

            aux.next = newNode;
        }
    }

    addAt(position, data) {
        if (position >= this.size()) {
            //adicionando no final
            this.append(data);
        } else {
            if (position <= 0) {
                //adicionando no inicio
                this.add(data);
            } else {
                let i = 0;

                let auxA = this.head;
                let auxB = this.head.next;

                while (i != position) {
                    //iteração
                    auxA = auxB;
                    auxB = auxB.next;
                    i++;
                }
                auxA.next = newNode;
                newNode.next = auxB;
            }
        }
    }

    removeBeginning() {
        if (this.isEmpty()) {
            return 'Lista vazia';
        } else {
            let aux = this.head.next;
            this.head.next = aux.next;
        }
    }

    removeEnd() {
        if (this.isEmpty()) {
            return 'Lista vazia';
        } else {
            let auxA = this.head;
            let auxB = this.head.next;

            while (auxB.next !== null) {
                auxA = auxB;
                auxB = auxB.next;
            }
            auxA.next = null;

            return auxB.data;
        }
    }

    isEmpty() {
        return this.head.next === null;
    }

    size() {
        let cont = 0;
        let tmp = this.head.next;

        while (tmp !== null) {
            tmp = tmp.next;
            cont++;
        }
        return cont;
    }

    toString() {
        let tmp = this.head.next;
        let text = "";

        while (tmp !== null) {
            text += tmp.data + (tmp.next ? "->" : "");
            tmp = tmp.next;
        }

        return text;
    }
}

export default Lista;