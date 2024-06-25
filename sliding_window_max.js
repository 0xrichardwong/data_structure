
function getMaxWindows(arr, k) {
    
    // deque stores index number
    let deque = [0];
    console.log(`Initial deque: ${deque}`);
    let output = [];
    
    // check the max number for the 1st window

    console.log("-------------------- Initialisation (check 1st set of k) --------------------");
    for(let i=1; i<k; i++){
        
        console.log(`step: ${i}`);
        // check if the new item in arr is larger than the existing item in deque
        // if true (new item is larger), pop smaller existing items, then push the new item
        // if false (new item is smaller), just push it 
        while(deque.length >= 1 && arr[deque[deque.length-1]] <= arr[i]){
            console.log(`new large item (indexNum/number): ${i}/${arr[i]}`);
            deque.pop();
        }

        // push number into deque
        deque.push(i);
        console.log(`Deque status (array index): ${deque}`);
    }

    // push the largest number in deque which is on the very left, into output
    output.push(arr[deque[0]]);
    console.log(`Current Output after initialisation: ${output}`);
    console.log(`Current Deque after initialisation: ${deque}`);


    // check the max numbers for the following windows
    console.log("-------------------- Sliding Window --------------------");

    for(let i=k; i<arr.length; i++){

        console.log(`step: ${i}`);
        
        while(deque[0] <= i-k){
            deque.shift();
        }

        while(deque.length >= 1 && arr[deque[deque.length-1]] <= arr[i]){
            console.log(`new large item (indexNum/number): ${i}/${arr[i]}`);
            deque.pop();
        }

        // push the new item to the deque
        deque.push(i);
        console.log(`Current Deque: ${deque}`);
        
        // push the new item from deque to output
        output.push(arr[deque[0]]);
        console.log(`Current Output: ${output}`);
    }


    return output;
}

// console.log(getMaxWindows([8,7,6,9], 2)); // [8,7,9]
console.log(getMaxWindows([1,9,5,3,2,4,7], 4)); // [9,9,5,7]
