class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(arr){
        if(arr.length <= 0){
            this.head = new Node(null);
            this.tail = new Node(null);
            return;
        }

    this.head = new Node(arr[0]);
    let currentNode = this.head;
    
    for (let i = 1; i < arr.length; i++) {
            let newNode = new Node(arr[i]);  // 修正: 新しいノードを作成
            currentNode.next = newNode;  // 修正: currentNodeのnextにnewNodeを設定
            newNode.prev = currentNode;  // 修正: newNodeのprevにcurrentNodeを設定
            currentNode = newNode;  // 修正: currentNodeを更新
        }

        this.tail = currentNode;  // 修正: ループの後にtailを設定
    }
}

let list = new DoublyLinkedList([1,2,3,4,5,6,7]);
console.log(list.head.data);
console.log(list.head.next.data);
console.log(list.head.next.prev.data);
console.log(list.tail.data);
console.log(list.tail.prev.data);
console.log(list.tail.prev.prev.data);