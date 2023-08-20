import React from 'react';
import Tree from 'react-d3-tree';

const generateTreeData = (node) => {
  if (!node) return null;

  const data = { name: node.value.toString() };

  if (node.left) {
    data.children = [generateTreeData(node.left)];
  }

  if (node.right) {
    data.children = [...(data.children || []), generateTreeData(node.right)];
  }

  return data;
};

const BinaryTreeVisual = ({ root, inOrderResult, preOrderResult, postOrderResult }) => {
  const treeData = generateTreeData(root);

  return (
    <div className="binary-tree-visual">
      <div className="tree-container">
        <div id="treeWrapper" style={{ width: '100%', height: '100vh' }}>
          <Tree data={treeData} orientation="vertical" />
        </div>
      </div>
      <div className="traversal-results">
        <h3>In Order Traversal:</h3>
        <p>{inOrderResult.join(' -> ')}</p>
        <h3>Pre Order Traversal:</h3>
        <p>{preOrderResult.join(' -> ')}</p>
        <h3>Post Order Traversal:</h3>
        <p>{postOrderResult.join(' -> ')}</p>
      </div>
    </div>
  );
};

export default BinaryTreeVisual;
