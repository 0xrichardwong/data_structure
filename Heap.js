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

    static maxHeapify(arr, heapEnd ,i){
        let l = Heap.left(i);
        let r = Heap.right(i);
        let biggest = i;

        if(l <= heapEnd && arr[l] > arr[biggest]) biggest = l;
        if(r <= heapEnd && arr[r] > arr[biggest]) biggest = r;

        if(biggest != i){
            let temp = arr[i];
            arr[i] = arr[biggest];
            arr[biggest] = temp;
            Heap.maxHeapify(arr, heapEnd ,biggest);
        }
    }

    static buildMaxHeap(arr){
        let middle = Heap.parent(arr.length)
        for(let i = middle; i >= 0; i--){
            Heap.maxHeapify(arr, arr.length-1, i);
        }
    }

    static heapSort(arr) {
        Heap.buildMaxHeap(arr);
        let heapEnd = arr.length - 1;
        while (heapEnd > 0) {
            let temp = arr[heapEnd];
            arr[heapEnd] = arr[0];
            arr[0] = temp;
            heapEnd -= 1;
            Heap.maxHeapify(arr, heapEnd, 0);
        }
    }
}

let heap1 = [2,42,11,30,10,7,6,5,9];
console.log(heap1);
Heap.heapSort(heap1);
console.log(heap1); 