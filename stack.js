class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
    }

    push(data){
        let temp = this.head;
        this.head = new Node(data);
        this.head.next = temp;
    }

    pop(){
        if(this.head == null) return null;
        let temp = this.head;
        this.head = this.head.next;
        return temp.data;
    }

    peek(){
        if(this.head === null) return null;
        return this.head.data;
    }
}

function consecutiveWalk(arr) {
    let stack = [];
    stack.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (stack[stack.length - 1] < arr[i]) {
            while (stack.length > 0) {
                stack.pop();
            }
        }
        stack.push(arr[i]);
    }
    return stack;
}

console.log(consecutiveWalk([3,4,20,45,56,6,4,3,5,3,2])); // [5,3,2]
console.log(consecutiveWalk([4,5,4,2,4,3646,34,64,3,0,-34,-54])); // [64,3,0,-34,-54]
console.log(consecutiveWalk([4,5,4,2,4,3646,34,64,3,0,-34,-54,4])); // [4]