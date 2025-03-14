class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val; // 节点值
        this.left = left; // 左子节点引用
        this.right = right; // 右子节点引用
    }
}

// 手动构建一棵二叉树
function createSampleTree() {
    // 创建节点
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    
    return root;
  }
  
  // 构建了这样一棵树:
  //     1
  //    / \
  //   2   3
  //  / \
  // 4   5



const mirrorTree = (root) => {
    if (root === null) {
        return null;
    }
    // 交换左右位置 解构赋值
    [root.left, root.right] = [mirrorTree(root.right), mirrorTree(root.left)];
    return root;
};



// 打印二叉树
function printTree(root) {
    if (root === null) {
        return;
    }
    console.log(root.val);
    printTree(root.left);
    printTree(root.right);
}

// 使用示例
const tree = createSampleTree();
const mirror = mirrorTree(tree);
printTree(mirror);
