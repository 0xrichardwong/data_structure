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

    midNode(){
        // calculation of midpoint
        let iterator = this.head;
        let count = 0;
        while(iterator !== null){
            count += 1;
            iterator = iterator.next;
        }
        let midPoint = Math.floor(count/2);

        // finding midNode
        iterator = this.head;
        count = 0;
        for(let i=0; i<midPoint; i++){
            iterator = iterator.next;
        }
        return iterator;
    }

    popFront(){
        this.head = this.head.next;
    }

    delete(index){
        if(index == 0) return this.popFront();

        let iterator = this.head;
        for(let i = 0; i < index-1; i++){
            if(iterator.next == null) return null;
            iterator = iterator.next;
        }
        iterator.next = iterator.next.next;
    }

    findMergeNode() {
        let iterator = this.head;
        let output = [];

        while (iterator !== null) {
            output.push(iterator.data);
            iterator = iterator.next;
        }
        return output;
    }

    reproduceByN(arr, n) {
        let count = n;
        let iterator = this.head;

        while (iterator.next !== null) {
            iterator = iterator.next;
        }

        while (count > 1) {
            for (let i = 0; i < arr.length; i++) {
                iterator.next = new SinglyLinkedListNode(arr[i]);
                iterator = iterator.next;
            }
            count--;
        }
    }

    headToArr() {
        let iterator = this.head;
        let output = [];
        while (iterator !== null) {
            output.push(iterator.data);
            iterator = iterator.next;
        }
        return output;
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
