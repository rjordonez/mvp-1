// MindMap.js
import React, { useState, useEffect, useRef } from 'react';
import { ForceGraph2D } from 'react-force-graph';
import { graphData as originalGraphData } from './data';

function MindMap({ onNodeClick, visitedNodes, selectedNode }) {
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const indexRef = useRef(0); // Use useRef to persist index across renders

  useEffect(() => {
    // Flatten the tree into an array of nodes in the order they should appear
    const nodesToAdd = [];
    const linksToAdd = [];

    // Helper function to traverse the graph and collect nodes and links
    const traverseGraph = (currentNodeId, visited = new Set()) => {
      if (visited.has(currentNodeId)) return;
      visited.add(currentNodeId);

      const currentNode = originalGraphData.nodes.find(node => node.id === currentNodeId);
      if (currentNode) nodesToAdd.push(currentNode);

      const childLinks = originalGraphData.links.filter(link => link.source === currentNodeId);
      for (const link of childLinks) {
        linksToAdd.push(link);
        traverseGraph(link.target, visited);
      }
    };

    // Start traversal from the root node
    traverseGraph('Multithreading');

    const totalSteps = nodesToAdd.length;

    const addNextNode = () => {
      if (indexRef.current < totalSteps) {
        const newNode = nodesToAdd[indexRef.current];
        const newLinks = linksToAdd.filter(link => link.target === newNode.id);

        setGraphData(prevData => ({
          nodes: [...prevData.nodes, newNode],
          links: [...prevData.links, ...newLinks],
        }));

        indexRef.current += 1;
        setTimeout(addNextNode, 1000); // Adjust delay as needed
      }
    };

    // Start adding nodes
    addNextNode();
  }, []);

  return (
    <ForceGraph2D
      graphData={graphData}
      nodeAutoColorBy="group"
      linkDirectionalParticles={2}
      linkDirectionalParticleSpeed={(d) => d.value * 0.01}
      backgroundColor="#1a1a1a"
      nodeLabel="id"
      onNodeClick={onNodeClick}
      nodeCanvasObject={(node, ctx, globalScale) => {
        const label = node.id;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Base font size and node radius
        const baseFontSize = 12;
        const baseNodeRadius = 12;

        // Adjust font size based on globalScale
        let fontSize = baseFontSize / globalScale;
        ctx.font = `${fontSize}px Sans-Serif`;

        // Measure text width
        let textWidth = ctx.measureText(label).width;

        // Calculate desired node radius based on text width
        let nodeRadius = textWidth / 2 + 4; // Add padding

        // Minimum and maximum node radius
        const minNodeRadius = 10;
        const maxNodeRadius = 15;

        // Ensure node radius is within bounds
        nodeRadius = Math.max(minNodeRadius, Math.min(nodeRadius, maxNodeRadius));

        // Adjust font size if textWidth exceeds node diameter
        while (textWidth > 2 * nodeRadius && fontSize > 2) {
          fontSize -= 1;
          ctx.font = `${fontSize}px Sans-Serif`;
          textWidth = ctx.measureText(label).width;
        }

        // Draw node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius, 0, 2 * Math.PI, false);

        // Change node color if visited
        ctx.fillStyle = visitedNodes.includes(node.id) ? '#01796F' : node.color || 'lightblue';
        ctx.fill();

        // Draw label inside the circle
        ctx.fillStyle = 'white'; // Text color
        ctx.fillText(label, node.x, node.y); // Position the label inside the node

        // Highlight selected node
        if (selectedNode && selectedNode.id === node.id) {
          ctx.lineWidth = 2 / globalScale;
          ctx.strokeStyle = 'yellow';
          ctx.stroke();
        }
      }}
      enableNodeDrag={true} // Allow node dragging
      linkWidth={1.5} // Ensure links are visible with a width
      linkColor={() => 'white'} // Set link color to white to ensure visibility
    />
  );
}

export default MindMap;
