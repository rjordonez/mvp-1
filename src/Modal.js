// Modal.js
import React, { useState, useEffect } from 'react';
import { graphData } from './data';

function Modal({ nodeId, nodeContent, onClose, onSelectNode }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = nodeContent && nodeContent.length ? nodeContent.length : 1;

  useEffect(() => {
    setCurrentPage(1);
  }, [nodeId]);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleExit = () => {
    onClose(false); // User did not complete all pages
  };

  const handleComplete = () => {
    onClose(true); // User completed all pages
  };

  const handleNeighborClick = (neighborId) => {
    onSelectNode(neighborId); // Pass neighborId as a string
  };

  // Retrieve neighboring nodes
  const neighboringNodes = getNeighboringNodes(nodeId);

  function getNeighboringNodes(nodeId) {
    const neighbors = new Set(); // Use a Set to avoid duplicates
    graphData.links.forEach((link) => {
      const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
      const targetId = typeof link.target === 'object' ? link.target.id : link.target;
      if (sourceId === nodeId) {
        neighbors.add(targetId);
      } else if (targetId === nodeId) {
        neighbors.add(sourceId);
      }
    });
    return Array.from(neighbors);
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        zIndex: 1000,
      }}
    >
      {/* Exit Button */}
      <button
        onClick={handleExit}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          fontSize: '24px',
          cursor: 'pointer',
          background: 'none',
          border: 'none',
          color: 'white',
        }}
      >
        ✕
      </button>
      {/* Title */}
      <h1 style={{ textAlign: 'center', marginTop: '40px' }}>{nodeId}</h1>
      {/* Content */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p style={{ fontSize: '24px', padding: '0 20px', textAlign: 'center' }}>
          {nodeContent && nodeContent.length > 0
            ? nodeContent[currentPage - 1]
            : 'Content not available for this node.'}
        </p>
      </div>
      {/* Page Indicator */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        Page {currentPage} of {totalPages}
      </div>
      {/* Navigation Controls */}
      <div style={{ position: 'absolute', top: '50%', width: '100%' }}>
        {/* Back Arrow */}
        {currentPage > 1 && (
          <button
            onClick={handleBack}
            style={{
              position: 'absolute',
              left: '20px',
              transform: 'translateY(-50%)',
              fontSize: '48px',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              color: 'white',
            }}
          >
            &#x276E;
          </button>
        )}
        {/* Next Arrow */}
        {currentPage < totalPages && (
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '20px',
              transform: 'translateY(-50%)',
              fontSize: '48px',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              color: 'white',
            }}
          >
            &#x276F;
          </button>
        )}
      </div>
      {/* Neighboring Nodes */}
      {currentPage === totalPages && (
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2>Select a Neighboring Node:</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {neighboringNodes.length > 0 ? (
              neighboringNodes.map((neighborId) => (
                <li key={neighborId} style={{ margin: '10px 0' }}>
                  <button
                    onClick={() => handleNeighborClick(neighborId)}
                    style={{
                      backgroundColor: '#01796F',
                      color: 'white',
                      border: 'none',
                      padding: '10px 20px',
                      fontSize: '18px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    {neighborId}
                  </button>
                </li>
              ))
            ) : (
              <p>No neighboring nodes found.</p>
            )}
          </ul>
          <button
            onClick={handleComplete}
            style={{
              marginTop: '20px',
              backgroundColor: 'darkgreen',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              fontSize: '18px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Finish
          </button>
        </div>
      )}
    </div>
  );
}

export default Modal;
