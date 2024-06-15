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
    
    at(index) {
        let iterator = this.head;
        for (let i = 0; i < index; i++) {  // 修正: インデックス0から開始
            iterator = iterator.next;
            if (iterator === null) {  // 修正: インデックスが範囲外の場合に対応
                return null;
            }
        }
        return iterator.data;
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

    printList(){
        let iterator = this.head;
        let output = "";
        while(iterator !== null){
            output += iterator.data + "⇨";
            iterator = iterator.next;
        }
        output += "END";
        return output;
    }
}

function insertHeadTail(head,data){
    let list = new SinglyLinkedList(head);
    list.preAppend(data);
    list.append(data);
    return list.printList();
}

console.log(insertHeadTail([1,2,3,4,5],150));

/*
function insertAtHead(head,data){
    let list = new SinglyLinkedList(head);
    list.preAppend(data);
    return list.printList();
}
console.log(insertAtHead([1,2,3],5))
*/

/*
function insertAtTail(tail,data){
    let list = new SinglyLinkedList(tail);
    list.append(data);
    return list.printList();
}
console.log(insertAtTail([3,3,2,10,34,45,67,356],367));
*/


