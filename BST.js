class BinaryTree{
    constructor(data, left=null, right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree{
    constructor(arr){
        let sortedList = arr.sort(function(a,b) {return a-b;});
        this.root = BinarySearchTree.sortedArrayToBST(sortedList);
    }

    static sortedArrayToBST(arr){
        if(arr.length === 0) return null;
        return BinarySearchTree.helper(arr,0,arr.length-1);
    }

    static helper(arr,start,end){
        if(start === end) return new BinaryTree(arr[start], null, null);
        let mid = Math.floor((start+end)/2);
        let left = null;
        let right = null;
        if(mid-1 >= start) left = BinarySearchTree.helper(arr, start,mid-1);
        if(mid+1 <= end) right = BinarySearchTree.helper(arr,mid+1,end);
        let root = new BinaryTree(arr[mid],left,right);
        return root;
    }

    keyExist(key){
        let iterator = this.root;
        while(iterator !== null){
            if(iterator.data === key) return true;
            if(iterator.data > key) iterator = iterator.left;
            else iterator = iterator.right;
        }
        return false;
    }

    search(key){
        let iterator = this.root;
        while(iterator !== null){
            if(iterator.data === key) return iterator;
            if(iterator.data > key) iterator = iterator.left;
            else iterator = iterator.right;
        }
        return null;
    }

    minimumNode(){
        let iterator = this.root;
        if(iterator === null) return null;
        while(iterator.left !== null){
            iterator = iterator.left;
            output = iterator;
        }
        return iterator;
    }

    maximumNode(){
        let iterator = this.root;
        if(iterator === null) return null;
        while(iterator.right !== null){
            iterator = iterator.right;
        }
        return iterator;
    }


}


arr1 = [0,-10,5,null,-3,null,9]; // 5 -> 9
arr2 = [5,3,6,2,4,null,7]; // 5 -> 6
arr3 = [-2,-17,8,-18,-11,3,19,null,null,null,-4,null,null,null,25]; // 8-> 19

let balancedBST = new BinarySearchTree(arr1);

console.log(`keyExist: ${balancedBST.keyExist(9)}`);
console.log(`search: ${balancedBST.search(6)}`);

console.log(`minimumNode:`);
console.log(balancedBST.minimumNode());

console.log(`maximumNode:`);
console.log(balancedBST.maximumNode());