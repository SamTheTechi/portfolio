import type { ReactNode } from 'react';

type TerminalNode = {
  label: ReactNode;
  items?: TerminalNode[];
};

type TerminalListProps = {
  items: TerminalNode[];
  depth?: number;
};

function TerminalList({ items, depth = 0 }: TerminalListProps) {
  return (
    <ul className="list-none m-0 pl-8">
      {items.map((item, index) => (
        <li key={index} className="m-0">
          <div className="flex items-start gap-3 mb-2">
            <span className="text-[#00ff41]">{depth === 0 ? '■' : '-'}</span>
            <div className="[text-shadow:0_0_8px_rgba(0,255,65,0.4)]">{item.label}</div>
          </div>
          {item.items && item.items.length > 0 ? (
            <TerminalList items={item.items} depth={depth + 1} />
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export type { TerminalNode };
export default TerminalList;
