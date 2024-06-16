class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(arr){
        if(arr.length <= 0){
            this.head =  new Node(null);
            this.tail = this.head;
            return;
        }

        this.head = new Node(arr[0]);
        let currentNode = this.head;
        for(let i = 1; i < arr.length; i++){
            currentNode.next = new Node(arr[i]);
            currentNode.next.prev = currentNode;
            currentNode = currentNode.next;
        }

        this.tail = currentNode;
    }

    at(index){
        let iterator = this.head;
        for(let i = 0; i < index; i++){
            iterator = iterator.next;
            if(iterator == null) return null;
        }

        return iterator;
    }

    popFront() {
        this.head = this.head.next;  
        this.head.prev = null;  
    }

    pop() {
        this.tail = this.tail.prev;  
        this.tail.next = null;  
    }

    deleteNode(node) {

        if (node === this.tail) return this.pop();
        if (node === this.head) return this.popFront();
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    preappend(newNode){
        this.head.prev = newNode;
        newNode.next = this.head;
        newNode.prev = null;
        this.head = newNode;
    }

    append(newNode){
        this.tail.next = newNode;
        newNode.next = null;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    addNextNode(node, newNode){
        let tempNode = node.next;
        node.next = newNode;
        newNode.next = tempNode;
        newNode.prev = node;

        if(node === this.tail) this.tail = newNode;
        else tempNode.prev = newNode;
    }

    reverse(){
        let reverse = this.tail;
        let iterator = this.tail.prev;

        let currentNode = reverse;
        while(iterator != null){
            currentNode.next = iterator;

            iterator = iterator.prev;
            if(iterator != null) iterator.next = null;

            currentNode.next.prev = currentNode;
            currentNode = currentNode.next;
        }

        this.tail = currentNode;
        this.head = reverse;
        this.head.prev = null;
    }

    printInReverse(){
        let iterator = this.tail;
        let str = "";
        while(iterator != null){
            str += iterator.data + " ";
            iterator = iterator.prev;
        }
        console.log(str)
    }

    printList(){
        let iterator = this.head;
        let str = "";
        while(iterator != null){
            str += iterator.data + " ";
            iterator = iterator.next;
        }
        console.log(str)
    }
}

let numList = new DoublyLinkedList([35,23,546,67,86,234,56,767,34,1,98,78,555]);

// pop
numList.printList();

numList.popFront();
numList.pop();

numList.printList();
numList.printInReverse();

// 要素を削除します
console.log("Deleting in O(1)");
numList.printList();

numList.deleteNode(numList.at(3));
numList.deleteNode(numList.at(9));
numList.deleteNode(numList.at(0));

numList.printList();
numList.printInReverse();