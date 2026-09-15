type CheckListProps = {
  items: string[];
  columns?: 1 | 2;
  tone?: "primary" | "accent" | "secondary";
};

const toneMap = {
  primary: "bg-primary-100 text-primary-700",
  accent: "bg-accent-100 text-accent-700",
  secondary: "bg-secondary-100 text-secondary-700",
};

export default function CheckList({ items, columns = 1, tone = "primary" }: CheckListProps) {
  return (
    <ul className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${toneMap[tone]}`}
          >
            <i className="ri-check-line text-sm" aria-hidden="true" />
          </span>
          <span className="text-sm leading-relaxed text-foreground-700 md:text-base">{item}</span>
        </li>
      ))}
    </ul>
  );
}