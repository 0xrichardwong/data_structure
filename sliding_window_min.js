function minWindowArrK(arr, k) {
    
    let deque = [0];
    console.log(`Initial deque: ${deque}`);
    let output = [];

    console.log("-------------------- Initialisation (check 1st set of k) --------------------");
    for(let i=1; i<k; i++){
        
        console.log(`step: ${i}`);

        while(deque.length >= 1 && arr[deque[deque.length-1]] >= arr[i]){
            console.log(`new large item (indexNum/number): ${i}/${arr[i]}`);
            deque.pop();
        }

        deque.push(i);
        console.log(`Deque status (array index): ${deque}`);
    }

    output.push(arr[deque[0]]);
    console.log(`Current Output after initialisation: ${output}`);
    console.log(`Current Deque after initialisation: ${deque}`);

    console.log("-------------------- Sliding Window --------------------");

    for(let i=k; i<arr.length; i++){

        console.log(`step: ${i}`);
        
        while(deque[0] <= i-k){
            deque.shift();
        }

        while(deque.length >= 1 && arr[deque[deque.length-1]] >= arr[i]){
            console.log(`new small item (indexNum/number): ${i}/${arr[i]}`);
            deque.pop();
        }

        deque.push(i);
        console.log(`Current Deque: ${deque}`);

        output.push(arr[deque[0]]);
        console.log(`Current Output: ${output}`);
    }

    return output;
}
