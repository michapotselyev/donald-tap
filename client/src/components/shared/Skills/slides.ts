import { Edge, Node } from "@xyflow/react";
import { CARD_HEIGHT, CARD_WIDTH, CARD_PADDING, SkillData } from "./SkillCard";

// Данные скиллов (карточек)
const skill01 = {
  id: "1",
  type: "skill",
  data: {
    title: "JavaScript",
    description: "Improve your JS skills",
    currentLevel: 3,
    upgradeCost: 200,
    right: "2",
  },
  position: { x: 0, y: 0 },
};

const skill02 = {
  id: "2",
  type: "skill",
  data: {
    title: "React",
    description: "Learn advanced React",
    currentLevel: 2,
    upgradeCost: 150,
    left: "1",
    down: "3",
  },
  position: { x: 120, y: 0 },
};

const skill03 = {
  id: "3",
  type: "skill",
  data: {
    title: "CSS",
    description: "Master CSS techniques",
    currentLevel: 4,
    upgradeCost: 100,
    up: "2",
  },
  position: { x: 120, y: 120 },
};

// Собираем данные скиллов в объект
export const skills = Object.fromEntries(
  [skill01, skill02, skill03].map(({ id, data }) => [id, data])
) as Record<string, SkillData>;

// Функция для преобразования скиллов в элементы React Flow
export const skillsToElements = (
  initial: string,
  skills: Record<string, SkillData>
) => {
  const stack = [{ id: initial, position: { x: 0, y: 0 } }];
  const visited = new Set();
  const nodes: Node<SkillData>[] = [];
  const edges: Edge[] = [];

  while (stack.length) {
    const { id, position } = stack.pop()!;
    const data = skills[id];
    const node = { id, type: "skill", position, data };

    if (data.left && !visited.has(data.left)) {
      const nextPosition = {
        x: position.x - (CARD_WIDTH + CARD_PADDING),
        y: position.y,
      };

      stack.push({ id: data.left, position: nextPosition });
      edges.push({
        id: `${id}->${data.left}`,
        source: id,
        target: data.left,
      });
    }

    if (data.up && !visited.has(data.up)) {
      const nextPosition = {
        x: position.x,
        y: position.y - (CARD_HEIGHT + CARD_PADDING),
      };

      stack.push({ id: data.up, position: nextPosition });
      edges.push({ id: `${id}->${data.up}`, source: id, target: data.up });
    }

    if (data.down && !visited.has(data.down)) {
      const nextPosition = {
        x: position.x,
        y: position.y + (CARD_HEIGHT + CARD_PADDING),
      };

      stack.push({ id: data.down, position: nextPosition });
      edges.push({
        id: `${id}->${data.down}`,
        source: id,
        target: data.down,
      });
    }

    if (data.right && !visited.has(data.right)) {
      const nextPosition = {
        x: position.x + (CARD_WIDTH + CARD_PADDING),
        y: position.y,
      };

      stack.push({ id: data.right, position: nextPosition });
      edges.push({
        id: `${id}->${data.right}`,
        source: id,
        target: data.right,
      });
    }

    nodes.push(node);
    visited.add(id);
  }

  return { nodes, edges };
};
