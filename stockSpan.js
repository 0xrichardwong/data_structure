function stockSpan(stocks) {
    let spans = [];
    let stack = new Stack();

    for (let i = 0; i < stocks.length; i++) {
        let days = 1;
        
        while (stack.head !== null && stocks[stack.head.data] <= stocks[i]) {
            days += spans[stack.pop()];
        }
        
        spans.push(days);
        stack.push(i);
    }

    return spans;
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
    }

    push(data) {
        let temp = this.head;
        this.head = new Node(data);
        this.head.next = temp;
    }

    pop() {
        if (this.head === null) return null;
        let temp = this.head;
        this.head = this.head.next;
        return temp.data;
    }

    seek() {
        if (this.head === null) return null;
        return console.log(this.head.data);
    }
}

// example
let stocks = [30,50,60,20,30,64,80];
console.log(stockSpan(stocks)); // [1, 1, 1, 2, 1, 4, 6]
