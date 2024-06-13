/**
 * Node Class: Represents a node with data and a next pointer.
 * SinglyLinkedListNode Class: Converts an array into a linked list and provides an at method to access a node by index.
 * getIndexValue Function: Converts an array to a linked list and returns the data at a specified index.
 */

class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedListNode{
    constructor(arr){
        this.head = arr.length > 0? new Node(arr[0]) : new Node(null);
        
        let currentNode = this.head;
        for(let i=1; i<arr.length;i++){
            currentNode.next = new Node(arr[i]);
            currentNode = currentNode.next;
        }
    }

    at(index){
        let iterator = this.head;
        for(let i=1; i<index;i++){
            iterator = iterator.next
            if(iterator === null) return null;
        }
        return iterator;
    }
}

function getIndexValue(head,index){
    let list = new SinglyLinkedListNode(head);
    return list.at(index).data;
}

// console.log(getIndexValue(([3,2,1,5,6,4]),1)); 
// returns 3 