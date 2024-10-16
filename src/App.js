// App.js
import React, { useState } from 'react';
import MindMap from './MindMap';
import Modal from './Modal';
import { nodeContent } from './data';

function App() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [visitedNodes, setVisitedNodes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleNodeClick = (node) => {
    setSelectedNode(node);
  };

  const handleLearnClick = () => {
    if (selectedNode) {
      setShowModal(true);
    }
  };

  const handleModalClose = (completed) => {
    setShowModal(false);
    if (completed && !visitedNodes.includes(selectedNode.id)) {
      setVisitedNodes((prevVisitedNodes) => [...prevVisitedNodes, selectedNode.id]);
    }
    setSelectedNode(null);
  };

  const handleSelectNode = (nodeId) => {
    setSelectedNode({ id: nodeId });
    setShowModal(true); // Ensure the modal remains open when selecting a neighboring node
  };

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <MindMap
        onNodeClick={handleNodeClick}
        visitedNodes={visitedNodes}
        selectedNode={selectedNode}
      />
      {selectedNode && (
        <div
          style={{
            position: 'fixed',
            bottom: '100px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'white',
            textAlign: 'center',
            fontSize: '24px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '10px 20px',
            borderRadius: '10px',
          }}
        >
          {selectedNode.id}
        </div>
      )}
      {/* "LEARN" button */}
      <button
        onClick={handleLearnClick}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'darkgreen',
          color: 'white',
          border: '2px solid green',
          borderRadius: '10px',
          padding: '10px 20px',
          fontSize: '18px',
          cursor: selectedNode ? 'pointer' : 'not-allowed',
        }}
        disabled={!selectedNode}
      >
        LEARN
      </button>
      {/* Modal */}
      {showModal && selectedNode && (
        <Modal
          key={selectedNode.id} // Add key to force re-render when selectedNode changes
          nodeId={selectedNode.id}
          nodeContent={nodeContent[selectedNode.id]}
          onClose={handleModalClose}
          onSelectNode={handleSelectNode}
        />
      )}
    </div>
  );
}

export default App;
