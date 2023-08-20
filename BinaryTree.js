import React from 'react';
import './BinaryTree.css';

const TreeNode = ({ value }) => {
  return (
    <div className="tree-node">
      {value}
    </div>
  );
};

const BinaryTreeVisual = ({ root, inOrderResult, preOrderResult, postOrderResult }) => {
  const renderTree = (node) => {
    if (!node) return null;

    return (
      <div className="binary-tree">
        <div className="node-container">
          <TreeNode value={node.value} />
        </div>
        <div className="children">
          {renderTree(node.left)}
          {renderTree(node.right)}
        </div>
      </div>
    );
  };

  return (
    <div className="binary-tree-container">
      <div className="binary-tree">
        {renderTree(root)}
      </div>
      <div className="traversal-results">
        <div className="traversal">
          <h3>In Order Traversal</h3>
          <p>{inOrderResult.join(', ')}</p>
        </div>
        <div className="traversal">
          <h3>Pre Order Traversal</h3>
          <p>{preOrderResult.join(', ')}</p>
        </div>
        <div className="traversal">
          <h3>Post Order Traversal</h3>
          <p>{postOrderResult.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default BinaryTreeVisual;
