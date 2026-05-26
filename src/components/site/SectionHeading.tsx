import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  lead,
  align = "left",
  invert = false,
}: {
  kicker: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <div
        className={cn(
          "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase",
          invert ? "text-[var(--steel-light)]" : "text-[var(--steel)]",
        )}
      >
        <span className={cn("h-px w-8", invert ? "bg-[var(--steel-light)]" : "bg-[var(--steel)]")} />
        {kicker}
      </div>
      <h2
        className={cn(
          "mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-balance",
          invert ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-5 text-base sm:text-lg leading-relaxed",
            invert ? "text-white/90" : "text-muted-foreground",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
