
export const inOrderTraversal = (node, result = []) => {
    if (!node) return result;
    inOrderTraversal(node.left, result);
    result.push(node.value);
    inOrderTraversal(node.right, result);
    return result;
  };
  

  export const preOrderTraversal = (node, result = []) => {
    if (!node) return result;
    result.push(node.value);
    preOrderTraversal(node.left, result);
    preOrderTraversal(node.right, result);
    return result;
  };

  export const postOrderTraversal = (node, result = []) => {
    if (!node) return result;
    postOrderTraversal(node.left, result);
    postOrderTraversal(node.right, result);
    result.push(node.value);
    return result;
  };
  
