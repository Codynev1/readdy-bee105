import { useInView } from "@/hooks/useInView";

type ProgressBarProps = {
  label: string;
  value: number;
  showValue?: boolean;
  tone?: "primary" | "accent";
};

export default function ProgressBar({
  label,
  value,
  showValue = true,
  tone = "primary",
}: ProgressBarProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between gap-3 text-xs">
        <span className="font-medium text-foreground-800">{label}</span>
        {showValue ? <span className="font-semibold text-foreground-500">{value}%</span> : null}
      </div>
      <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-background-200">
        <div
          className={`h-full rounded-full transition-[width] duration-[1400ms] ease-out ${
            tone === "primary" ? "bg-primary-500" : "bg-accent-500"
          }`}
          style={{ width: inView ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
}