import React, { useState } from 'react';
import { inOrderTraversal, preOrderTraversal, postOrderTraversal } from './BinaryTreeUtils'; 

const Controls = ({
  onAddNode,
  onDeleteNode,
  onAddMultipleNodes,
  onInOrderTraversal,
  onPreOrderTraversal,
  onPostOrderTraversal,
  onClearAllNodes,
  isPopupOpen,
  newNodeValue,
  setNewNodeValue,
}) => {
  const [showTraverseOptions, setShowTraverseOptions] = useState(false);
  const [numNodesToAdd, setNumNodesToAdd] = useState('');

  const handleAddMultipleNodes = () => {
    if (numNodesToAdd !== '') {
      const num = parseInt(numNodesToAdd);
      if (!isNaN(num) && num > 0) {
        onAddMultipleNodes(num);
        setNumNodesToAdd('');
      }
    }
  };

  return (
    <div className="controls">
      <button onClick={onAddNode}>Add Node</button>
      <button onClick={onDeleteNode}>Delete Node</button>
      <div className="traverse-dropdown">
        <button onClick={() => setShowTraverseOptions(!showTraverseOptions)}>
          Traversals
        </button>
        {showTraverseOptions && (
          <div className="traverse-options">
            <button id='button' onClick={() => {
              onInOrderTraversal();
              setShowTraverseOptions(false);
            }}>In Order Traversal</button>
            <button id='button' onClick={() => {
              onPreOrderTraversal();
              setShowTraverseOptions(false);
            }}>Pre Order Traversal</button>
            <button id='button' onClick={() => {
              onPostOrderTraversal();
              setShowTraverseOptions(false);
            }}>Post Order Traversal</button>
          </div>
        )}
      </div>
      <input
        type="number"
        value={numNodesToAdd}
        onChange={(e) => setNumNodesToAdd(e.target.value)}
        placeholder="Number of Nodes"
      />
      <button onClick={onClearAllNodes}>Clear All</button>
    </div>
  );
};

export default Controls;
