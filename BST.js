class BinaryTree{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }

    printInOrder(){
        this.inOrderWalk(this);
        console.log("");
    }

    inOrderWalk(tRoot){
        if(tRoot != null){
            this.inOrderWalk(tRoot.left);
            process.stdout.write(tRoot.data + " ");
            this.inOrderWalk(tRoot.right);
        }    
    }
}

class BinarySearchTree{
    constructor(arrList){
        let sortedList = arrList.sort(function(a,b){return a-b;});
        this.root = BinarySearchTree.sortedArrayToBST(sortedList);
    }

    static sortedArrayToBST(array){
        if(array.length == 0) return null;
        return BinarySearchTree.sortedArrayToBSTHelper(array,0,array.length-1);
    }

    static sortedArrayToBSTHelper(array,start,end){
        if(start == end) return new BinaryTree(array[start],null,null);
        
        let mid = Math.floor((start+end)/2);

        let left = null;
        if(mid-1 >= start) left = BinarySearchTree.sortedArrayToBSTHelper(array,start,mid-1);

        let right = null;
        if(mid+1 <= end) right = BinarySearchTree.sortedArrayToBSTHelper(array,mid+1,end);

        let root = new BinaryTree(array[mid],left,right);
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
        return iterator;
    }

    insert(value){
        let iterator = this.root;
        while(iterator != null){
            if(iterator.data > value && iterator.left == null) iterator.left = new BinaryTree(value);
            else if(iterator.data < value && iterator.right == null) iterator.right = new BinaryTree(value);
            iterator = (iterator.data > value)? iterator.left: iterator.right;
        }
        return this.root;       
    }

    transplant(nodeParent, node, target){
        if (nodeParent == null) this.root = target;
        else if (nodeParent.left == node) nodeParent.left = target;
        else nodeParent.right = target;
    }    

    deleteNode(key){
        if (this.root == null) return;
        let node = this.search(key);
        if (!this.keyExist(key)) return;

        let parent = this.findParent(node);
        // case 1: ノードNが葉ノード
        // 親ノードからnodeへの参照をnullに変更してnodeを削除します。
        if (node.left == null && node.right == null) {
            if(parent.left.data == key) parent.left = null;
            else if(parent.right.data == key) parent.right = null;
        }

        // case 2: ノードNの左が空
        if (node.left == null) this.transplant(parent, node, node.right);
        // case 3: ノードNの右が空
        else if (node.right == null) this.transplant(parent, node, node.left);
        // case 4: 2つの子を持っている場合
        else{
            let successor = this.findSuccessor(node);
            let successorP = this.findParent(successor);

            // case 4 後続ノードSがすぐ右側にいる場合 : この場合、ノードNが後続ノードSの親になっているため、case4は必要ありません。単純にNの親であるPの部分木とSを移植すればokです。
            // 特別なケース (case 4) 後続ノードSがすぐ右側にいない場合 : この場合、後続Sの親も変更しなければいけません。
            if (successor != node.right){
                // 後続ノードSをSの右部分木で移植します。Sをアップデートします。
                this.transplant(successorP, successor, successor.right);
                // Sの右側はノードNの右側になっている必要があります。
                successor.right = node.right;

            }
            // ノードNを後続Sで移植します。Sの左部分木をノードNの左部分木にします。
            this.transplant(parent, node, successor);
            successor.left = node.left;
        }
    }          

    findParent(node){
        let iterator = this.root;
        let parent;
        while (iterator != node){
            parent = iterator;
            iterator = iterator.data > node.data ? iterator.left: iterator.right;
        }    
        return parent;
    }
    
    findSuccessor(node){

        // 部分木
        let targetNode = node;
        // keyがBST内に存在しない場合、nullを返します。
        if (targetNode == null) return null;
        // keyのノードの右にある最小値を探します。
        if (targetNode.right != null) return this.minimumNode(targetNode.right);

        let successor = null;
        let iterator = this.root;

        while (iterator != null) {
            if (targetNode.data == iterator.data) return successor;
            // successorを左方向へずらしていきます。
            if (targetNode.data < iterator.data && (successor == null || iterator.data < successor.data)) successor = iterator;
            if (targetNode.data < iterator.data) iterator = iterator.left;
            else iterator = iterator.right;
        }    
        return successor;
    }

    minimumNode(node){
        let iterator = node;
        while (iterator != null && iterator.left != null) iterator = iterator.left;
        return iterator;
    }
    
    printSorted(){
        this.root.printInOrder();
    }
}

let balancedBST = new BinarySearchTree([4,43,36,46,32,7,97,95,34,8,96,35,85,1010,232]);

balancedBST.printSorted();
balancedBST.deleteNode(43);
balancedBST.printSorted();
balancedBST.deleteNode(7);
balancedBST.printSorted();
balancedBST.deleteNode(4);
balancedBST.printSorted();
balancedBST.deleteNode(1010);
balancedBST.printSorted();
// 存在しない0をdeleteNodeします。
balancedBST.deleteNode(0);
balancedBST.printSorted();