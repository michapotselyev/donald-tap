import { type Node, type NodeProps } from "@xyflow/react";

export type SkillNode = Node<SkillData, "skill">;

export type SkillData = {
  title: string;
  description: string;
  currentLevel: number;
  upgradeCost: number;
  left?: string;
  up?: string;
  down?: string;
  right?: string;
};

export const CARD_WIDTH = 100;
export const CARD_HEIGHT = 60;
export const CARD_PADDING = 8;

const style = {
  width: `${CARD_WIDTH}px`,
  height: `${CARD_HEIGHT}px`,
  backgroundColor: "purple",
  borderRadius: "10px",
  padding: "8px",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
} satisfies React.CSSProperties;

export function SkillCard({ data }: NodeProps<SkillNode>) {
  const { title, description, currentLevel, upgradeCost } = data;

  return (
    <article className="skill-card" style={style}>
      <header className="skill-card__header">
        <h4>{title}</h4>
      </header>
      <p className="skill-card__description">{description}</p>
      <div className="skill-card__info">
        <p>Level: {currentLevel}</p>
        <p>Cost: {upgradeCost}</p>
      </div>
      <footer className="skill-card__controls">
        <button onClick={() => alert('Upgrade purchased!')}>Buy</button>
      </footer>
    </article>
  );
}
