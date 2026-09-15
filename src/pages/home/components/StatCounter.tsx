import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";

type StatCounterProps = {
  value: number;
  suffix?: string;
  label: string;
};

export default function StatCounter({ value, suffix = "", label }: StatCounterProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const count = useCountUp(value, inView);

  return (
    <div
      ref={ref}
      className="rounded-lg border border-background-200 bg-background-50 p-5 transition-colors hover:border-primary-300"
    >
      <p className="font-heading text-3xl font-bold text-accent-600 md:text-4xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-xs leading-relaxed text-foreground-600">{label}</p>
    </div>
  );
}