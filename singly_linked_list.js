class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(arr){
        this.head = arr.length >0? new Node(arr[0]) : new Node(null);
        
        let currentNode = this.head;
        for(let i=1; i<arr.length; i++){
            currentNode.next = new Node(arr[i]);
            currentNode = currentNode.next;
        }        
    }

    at(index){
        let iterator = this.head;
        for(let i=1; i<index; i++){
            iterator = iterator.next;
            if(iterator === null) return null;
        }
        return iterator;
    }

    printList(){
        let iterator = this.head;
        let output = '';
        while(iterator !== null){
            output += iterator.data + " ";
            iterator = iterator.next;
        }
        return output;
    }
}

// let list = new SinglyLinkedList([1,2,3,4,5]);
// console.log(list.printList());