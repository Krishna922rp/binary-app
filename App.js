import React, { useState } from 'react';
import Header from './Header';
import Controls from './Controls';
import BinaryTreeVisual from './BinaryTreeVisual';
import './App.css';

const App = () => {
  const [root, setRoot] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newNodeValue, setNewNodeValue] = useState('');
  const [valueToDelete, setValueToDelete] = useState('');
  const [inOrderResult, setInOrderResult] = useState([]);
  const [preOrderResult, setPreOrderResult] = useState([]);
  const [postOrderResult, setPostOrderResult] = useState([]);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setNewNodeValue('');
  };

  const addNode = () => {
    if (newNodeValue !== '') {
      const newNode = createNode(Number(newNodeValue));
      if (!root) {
        setRoot(newNode);
      } else {
        insertNode(root, newNode);
      }
      closePopup();
    }
  };

  const addMultipleNodes = (numNodes) => {
    for (let i = 1; i <= numNodes; i++) {
      const newNode = createNode(i);
      if (!root) {
        setRoot(newNode);
      } else {
        insertNode(root, newNode);
      }
    }
  };

  const createNode = (value) => {
    return {
      value,
      left: null,
      right: null,
    };
  };

  const insertNode = (node, newNode) => {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };

  const deleteNode = (node, value) => {
    if (!node) return null;

    if (value < node.value) {
      node.left = deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = deleteNode(node.right, value);
    } else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      const minValue = findMinValue(node.right);
      node.value = minValue;
      node.right = deleteNode(node.right, minValue);
    }

    return node;
  };

  const findMinValue = (node) => {
    while (node.left) {
      node = node.left;
    }
    return node.value;
  };

  const inOrderTraversal = (node, result = []) => {
    if (!node) return result;
    inOrderTraversal(node.left, result);
    result.push(node.value);
    inOrderTraversal(node.right, result);
    return result;
  };

  const preOrderTraversal = (node, result = []) => {
    if (!node) return result;
    result.push(node.value);
    preOrderTraversal(node.left, result);
    preOrderTraversal(node.right, result);
    return result;
  };

  const postOrderTraversal = (node, result = []) => {
    if (!node) return result;
    postOrderTraversal(node.left, result);
    postOrderTraversal(node.right, result);
    result.push(node.value);
    return result;
  };

  const clearAllNodes = () => {
    setRoot(null);
    setInOrderResult([]);
    setPreOrderResult([]);
    setPostOrderResult([]);
  };

  const handleInOrderTraversal = () => {
    const result = inOrderTraversal(root);
    setInOrderResult(result);
  };

  const handlePreOrderTraversal = () => {
    const result = preOrderTraversal(root);
    setPreOrderResult(result);
  };

  const handlePostOrderTraversal = () => {
    const result = postOrderTraversal(root);
    setPostOrderResult(result);
  };

  return (
    <div className="app">
      <Header />
      <Controls
        onAddNode={openPopup}
        onDeleteNode={() => setRoot(deleteNode(root, Number(valueToDelete)))}
        onAddMultipleNodes={addMultipleNodes}
        onInOrderTraversal={handleInOrderTraversal}
        onPreOrderTraversal={handlePreOrderTraversal}
        onPostOrderTraversal={handlePostOrderTraversal}
        onClearAllNodes={clearAllNodes}
        isPopupOpen={isPopupOpen}
        newNodeValue={newNodeValue}
        setNewNodeValue={setNewNodeValue}
      />
      <div className="content">
        {root && (
          <BinaryTreeVisual
            root={root}
            inOrderResult={inOrderResult}
            preOrderResult={preOrderResult}
            postOrderResult={postOrderResult}
          />
        )}
      </div>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <label htmlFor="newNodeValue">Enter Node Value:</label>
            <input
              type="number"
              id="newNodeValue"
              value={newNodeValue}
              onChange={(e) => setNewNodeValue(e.target.value)}
            />
            <button id="button"  onClick={addNode}>Add Node</button>
            <button id="button" onClick={closePopup}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
