class Heap{
    static left(i){
        return 2*i + 1;
    }

    static right(i){
        return 2*i + 2;
    }
    
    static parent(i){
        return Math.floor((i-1) / 2);
    }    

    static maxHeapify(arr, i){
        let l = Heap.left(i);
        let r = Heap.right(i);

        let biggest = i;
        if(l < arr.length && arr[l] > arr[biggest]) biggest = l;
        if(r < arr.length && arr[r] > arr[biggest]) biggest = r;

        if(biggest != i){
            let temp = arr[i];
            arr[i] = arr[biggest];
            arr[biggest] = temp;
            Heap.maxHeapify(arr,biggest);
        }
    }

    static buildMaxHeap(arr){
        let middle = Heap.parent(arr.length)
        for(let i = middle; i >=0; i--){
            Heap.maxHeapify(arr,i);
        }    
    } 
}   