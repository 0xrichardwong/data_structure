class BinaryTree{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }

    // 'printInOrder'関数を定義します。この関数は、二分木の各ノードのデータを間順走査で表示します。
    printInOrder() {
        // 'inOrderWalk'関数を使って、二分木を間順走査します。起点となるノードは二分木のルートノードとします。
        this.inOrderWalk(this);
        // 全てのノードのデータを表示し終わったら、改行を出力します。
        console.log("");
    }

    // 'inOrderWalk'関数を定義します。この関数は、指定したノードから始まる部分木を間順走査します。
    inOrderWalk(tRoot) {
        // 指定したノードがnullでなければ、以下の処理を行います。（nullは通常、二分木の末端を表す）
        if (tRoot !== null) {
            // 左部分木を間順走査します。再帰的にこの関数を呼び出すことで、巡回を行います。
            this.inOrderWalk(tRoot.left);
            // 左部分木を巡回した後、自ノードのデータを出力します。出力の末尾にスペースを追加することで、データが分かりやすく表示されます。
            process.stdout.write(tRoot.data + " ");
            // 最後に、右部分木を間順走査します。これも再帰的にこの関数を呼び出すことで、巡回を行います。
            this.inOrderWalk(tRoot.right);
        }
    }
}

class BinarySearchTree{
    constructor(arrList){
        // JS ソートライブラリの sort() は文字列に対しては問題なくソートしますが、数値に対しては特別なルールが必要です。sort関数は引数に関数を指定でき、関数でソートのルールを定義できます。aとbを比較する関数で、a-bが負の場合はa < b、0の場合はa == b、そうでない場合はa > bとなります。自分でソート関数を作成することができます。
        let sortedList = arrList.sort(function(a, b) {return a - b;});
        this.root = BinarySearchTree.sortedArrayToBST(sortedList);
    }

    static sortedArrayToBST(array) {
        if(array.length == 0) return null;
        return BinarySearchTree.sortedArrayToBSTHelper(array, 0, array.length-1);
    }

    static sortedArrayToBSTHelper(arr, start, end) {
        if(start === end) return new BinaryTree(arr[start], null,null);

        let mid = Math.floor((start+end)/2);

        let left = null;
        if(mid-1 >= start) left = BinarySearchTree.sortedArrayToBSTHelper(arr, start, mid-1);

        let right = null;
        if(mid+1 <= end) right = BinarySearchTree.sortedArrayToBSTHelper(arr, mid+1, end);

        let root = new BinaryTree(arr[mid], left, right);
        return root;
    }

    keyExist(key){
        let iterator = this.root;
        while(iterator != null){
            if(iterator.data == key) return true;
            if(iterator.data > key) iterator = iterator.left;
            else iterator = iterator.right;
        }

        return false;
    }

    search(key){
        let iterator = this.root;
        while(iterator != null){
            if(iterator.data == key) return iterator;
            if(iterator.data > key) iterator = iterator.left;
            else iterator = iterator.right;
        }

        return null;
    }

    printSorted(){
        this.root.printInOrder();
    }
}

let balancedBST = new BinarySearchTree([1,2,3,4,5,6,7,8,9,10,11]);
let balancedBST2 = new BinarySearchTree([4,43,36,46,32,7,97,95,34,8,96,35,85,1010,232]);
balancedBST.printSorted();
balancedBST2.printSorted();