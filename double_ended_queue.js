// Define the Node class.
class Node {
  constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
  }
}

// Define the Deque class.
class Deque {
  constructor() {
      this.head = null;
      this.tail = null;
  }

  // Method to peek at the front element of the deque
  peekFront() {
      if (this.head === null) return null;
      return this.head.data;
  }

  // Method to peek at the back element of the deque
  peekBack() {
      if (this.tail === null) return null;
      return this.tail.data;
  }

  // Method to add an element to the front of the deque
  enqueueFront(data) {
      // If the deque is empty
      if (this.head === null) {
          // Create a new node and set it as the head (and tail)
          this.head = new Node(data);
          this.tail = this.head;
      }
      // If the deque already has elements
      else {
          // Create a new node and set it before the current head node
          this.head.prev = new Node(data);
          // Set the next node of the newly created node to the current head node
          this.head.prev.next = this.head;
          // Update the head node to the newly created node
          this.head = this.head.prev;
      }
  }

  // Method to add an element to the back of the deque
  enqueueBack(data) {
      // If the deque is empty
      if (this.head === null) {
          // Create a new node and set it as the head (and tail)
          this.head = new Node(data);
          this.tail = this.head;
      }
      // If the deque already has elements
      else {
          // Create a new node and set it after the current tail node
          this.tail.next = new Node(data);
          // Set the previous node of the newly created node to the current tail node
          this.tail.next.prev = this.tail;
          // Update the tail node to the newly created node
          this.tail = this.tail.next;
      }
  }

  // Method to remove and return the front element of the deque
  dequeueFront() {
      if (this.head === null) { // If the deque is empty
          return null; // There are no elements to remove, so return null
      }

      // Temporarily save the current head node
      let temp = this.head;
      // Update the head node to the next node
      this.head = this.head.next;
      if (this.head === null) { // If the deque is now empty
          this.tail = null; // Set the tail node to null as well
      } else { // If the deque still has elements
          // Set the previous node of the new head node to null as it does not exist
          this.head.prev = null;
      }

      // Return the data of the removed node
      return temp.data;
  }

  // Method to remove and return the back element of the deque
  dequeueBack() {
      // If the deque is empty
      if (this.tail === null) {
          // There are no elements to remove, so return null
          return null;
      }

      // Temporarily save the current tail node
      let temp = this.tail;
      // Update the tail node to the previous node
      this.tail = this.tail.prev;
      // If the deque is now empty
      if (this.tail === null) {
          // Set the head node to null as well
          this.head = null;
      } else {
          // Set the next node of the new tail node to null as it does not exist
          this.tail.next = null;
      }

      // Return the data of the removed node
      return temp.data;
  }
}

// Below is an example of how to use this Deque class.
let q = new Deque();

// Add 4 to the back of the deque
q.enqueueBack(4);
// Add 50 to the back of the deque
q.enqueueBack(50);

console.log(q.peekFront()); // 4
console.log(q.peekBack()); // 50

// Add 36 to the front of the deque
q.enqueueFront(36);
// Add 96 to the front of the deque
q.enqueueFront(96);

console.log(q.peekFront()); // 96
console.log(q.peekBack()); // 50
console.log(q.dequeueBack()); // 50
console.log(q.dequeueBack()); // 4
console.log(q.peekFront()); // 96
console.log(q.peekBack()); // 36

// Add 20 to the front of the deque
q.enqueueFront(20);

console.log(q.dequeueBack()); // 36
