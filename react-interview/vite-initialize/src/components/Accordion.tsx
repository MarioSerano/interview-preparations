import { useState, type ReactNode } from "react";

export interface AccordionItemProps {
  title: string;
  content: ReactNode;
}

interface Props {
  items: AccordionItemProps[];
}

function Accordion({ items }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {items.map((item, index) => (
        <AccordionItem
          data-testid={`accordion-item-${index}`}
          title={item.title}
          content={item.content}
          key={index}
        />
      ))}
    </div>
  );
}

function AccordionItem({
  title,
  content,
  "data-testid": testId,
}: AccordionItemProps & {
  "data-testid"?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <div
        tabIndex={0}
        style={{
          display: "flex",
          cursor: "pointer",
          flexDirection: "row",
          gap: 8,
        }}
        data-testid={`${testId}-title`}
        onClick={() => setExpanded((prev) => !prev)}
      >
        <p>{title}</p>
        <span
          style={{
            transform: expanded ? "rotate(180deg)" : "unset",
          }}
        >
          V
        </span>
      </div>
      {expanded && <div>{content}</div>}
    </div>
  );
}

export default Accordion;
