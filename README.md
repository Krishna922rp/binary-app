# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


![Screenshot 2023-08-20 164315](https://github.com/Krishna922rp/binary-app/assets/120078993/9d72a0a1-d090-4aa5-b699-fe7ad4a0b6c3)
![Screenshot 2023-08-20 164315](https://github.com/Krishna922rp/binary-app/assets/120078993/e583c474-ce91-43d7-b297-d276073a5887)
![Screenshot 2023-08-20 164445](https://github.com/Krishna922rp/binary-app/assets/120078993/c324790e-5187-4403-883d-15fe3a3b2bc2)


App.js:

This is the main component that serves as the entry point of the application. It manages the state of the binary tree, handles user interactions, and displays the tree visualization along with traversal results.

useState is used to manage the state of various variables, including root, isPopupOpen, newNodeValue, valueToDelete, inOrderResult, preOrderResult, and postOrderResult.

openPopup function opens the node addition popup.

closePopup function closes the node addition popup and resets the newNodeValue.

addNode function adds a new node to the binary tree.

addMultipleNodes function adds multiple nodes to the binary tree.

createNode function creates a new node object with the given value.

insertNode function inserts a new node into the binary tree.

deleteNode function deletes a node from the binary tree.

findMinValue function finds the minimum value in the binary tree.

inOrderTraversal, preOrderTraversal, and postOrderTraversal functions are used to perform in-order, pre-order, and post-order traversals of the binary tree, respectively. They return arrays containing the traversal results.

clearAllNodes function clears all nodes from the binary tree and resets traversal results.

The handleInOrderTraversal, handlePreOrderTraversal, and handlePostOrderTraversal functions update the traversal results state variables by calling the respective traversal functions.

The component renders the Header, Controls, and BinaryTreeVisual components.

Controls.js:

This component provides user controls for adding nodes, deleting nodes, performing traversals, and clearing the tree.

useState is used to manage the state of showTraverseOptions and numNodesToAdd.

handleAddMultipleNodes function adds multiple nodes to the binary tree based on the value entered by the user.

The component renders buttons for adding a single node, deleting a node, displaying traversal options, input for adding multiple nodes, and a "Clear All" button.

BinaryTreeVisual.js:

This component visualizes the binary tree using the react-d3-tree library. It also displays the traversal results alongside the tree visualization.

generateTreeData function recursively generates a tree structure from the binary tree data.

The component receives root, inOrderResult, preOrderResult, and postOrderResult as props.

The treeData is generated using the generateTreeData function.

The component renders the tree visualization using the react-d3-tree library, and also displays the traversal results for in-order, pre-order, and post-order traversals.

Overall Flow:

Users can add nodes to the binary tree by clicking the "Add Node" button and entering a value.

Users can delete nodes by clicking the "Delete Node" button and providing the value to delete.

Users can perform in-order, pre-order, and post-order traversals by clicking the respective traversal buttons. The traversal results are displayed alongside the tree visualization.

Users can add multiple nodes by entering a number and clicking the "Add Nodes" button.

Users can clear the entire binary tree and reset traversal results by clicking the "Clear All" button.

