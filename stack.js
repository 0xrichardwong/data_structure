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
      const temp = this.head;
      this.head = new Node(data);
      this.head.next = temp;
    }
  
    pop(){
      if(this.head === null) return null;
      const temp = this.head;
      this.head = this.head.next;
      return temp.data;
    }
  
    peek(){
      if(this.head ===null) return null;
      return this.head.data;
    }
  }
  
  function reverse(arr){
    let s = new Stack();
    for(let i=0; i<arr.length;i++){
      s.push(arr[i]);
    }
  
    let output = [];
    let count = arr.length;
    while(count > 0){
      output.push(s.pop());
      count--;
    }
  
    return output;
  }
  
  console.log(reverse([1,2,3]));
  