class Node{
    constructor(data){
      this.data = data;
      this.head = null;
    }
  }
  
  class Queue{
    constructor(){
      this.head = null;
      this.tail = null;
    }
  
    peekFront(){
      if(this.head === null) return null;
      return this.head.data;
    }
  
    peekBack(){
      if(this.tail === null) return this.peekFront();
      return this.tail.data;
    }
  
    enqueue(data){
      if(this.head === null) {
          this.head = new Node(data);
          this.tail = this.head;
      } else {
          this.tail.next = new Node(data);
          this.tail = this.tail.next;
      }
    }
  
    dequeue(){
      if(this.head === null) return null;
      const temp = this.head;
      this.head = this.head.next;
      if(this.head === null) this.tail = null;
      return temp.data;
    }
  }
  
  const q = new Queue();
  console.log(q.peekFront());
  console.log(q.peekBack());
  
  q.enqueue(4);
  console.log(q.peekFront());
  console.log(q.peekBack());
  
  q.enqueue(50);
  console.log(q.peekFront());
  console.log(q.peekBack());
  
  q.enqueue(64);
  console.log(q.peekFront());
  console.log(q.peekBack());
  
  console.log("dequeued: " + q.dequeue());
  console.log(q.peekFront());
  console.log(q.peekBack());