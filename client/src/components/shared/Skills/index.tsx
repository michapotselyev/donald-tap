import { KeyboardEventHandler, useCallback, useState } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
  NodeMouseHandler,
  Background,
  BackgroundVariant,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import "./index.css";

import { SkillCard, SkillData } from "./SkillCard";
import { skills, skillsToElements } from "./slides";
import useWindowSize from "@/hooks/useWindowSize";

const nodeTypes = {
  skill: SkillCard,
};

const initialSlide = "1";
const { nodes, edges } = skillsToElements(initialSlide, skills);

const Skills =()=> {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const { fitView } = useReactFlow();

  // const handleKeyPress = useCallback<KeyboardEventHandler>(
  //   (event) => {
  //     const slide = slides[currentSlide];

  //     switch (event.key) {
  //       case "ArrowLeft":
  //       case "ArrowUp":
  //       case "ArrowDown":
  //       case "ArrowRight": {
  //         const direction = event.key.slice(5).toLowerCase() as keyof SkillData;
  //         const target = slide[direction];

  //         event.preventDefault();

  //         if (target) {
  //           setCurrentSlide(target);
  //           fitView({ nodes: [{ id: target }], duration: 100 });
  //         }
  //       }
  //     }
  //   },
  //   [fitView, currentSlide]
  // );

  const handleNodeClick = useCallback<NodeMouseHandler>(
    (_, node) => {
      if (node.id !== currentSlide) {
        setCurrentSlide(node.id);
        fitView({ nodes: [{ id: node.id }], duration: 100 });
      }
    },
    [fitView, currentSlide]
  );

  const { height } = useWindowSize();

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      nodesDraggable={false}
      edges={edges}
      fitView
      fitViewOptions={{ nodes: [{ id: initialSlide }], duration: 100 }}
      minZoom={0.1}
      // onKeyDown={handleKeyPress}
      onNodeClick={handleNodeClick}
    >
      <Background color="#f2f2f2" variant={BackgroundVariant.Lines} />
    </ReactFlow>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <ReactFlowProvider >
    <Skills />
  </ReactFlowProvider>
);
