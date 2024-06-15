class SinglyLinkedListNode{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(arr){
        this.head = arr.length>0? new SinglyLinkedListNode(arr[0]) : null;
        let currentNode = this.head;
        for(let i=1; i<arr.length;i++){
            currentNode.next = new SinglyLinkedListNode(arr[i]);
            currentNode = currentNode.next;
        }
    }

    printList(){
        let iterator = this.head;
        let output;
        while(iterator !== null){
            output += iterator.data;
            iterator = iterator.next;
        }
        output += "END";
        return output;
    }

    preAppend(data){
        let firstNode = new SinglyLinkedListNode(data);
        firstNode.next = this.head;
        this.head = firstNode;
    }

    append(data){
        let iterator = this.head;
        while(iterator.next !== null){
            iterator = iterator.next;
            
        }
        iterator.next = new SinglyLinkedListNode(data);

    }
    
}

/*
function insertAtHead(head,data){
    let list = new SinglyLinkedList(head);
    list.preAppend(data);
    return list.printList();
}
console.log(insertAtHead([1,2,3],5))
*/

function insertAtTail(tail,data){
    let list = new SinglyLinkedList(tail);
    list.append(data);
    return list.printList();
}
console.log(insertAtTail([3,3,2,10,34,45,67,356],367));
