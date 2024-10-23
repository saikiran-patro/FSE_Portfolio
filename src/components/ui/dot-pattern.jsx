import { useId } from "react";
import { cn } from "../../libs/utils";

export function DotPattern({
  width = 10,
  height = 10,
  dotSize = 2,
  rows = 10,
  columns = 10,
  fadeFactor = 0.005, // Controls the fade effect
  className,
  ...props
}) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
        >
          {/* Generating dots with fading opacity */}
          {Array.from({ length: rows * columns }).map((_, index) => {
            const row = Math.floor(index / columns);
            const col = index % columns;
            const opacity = Math.max(1 - fadeFactor * (row + col), 0);

            return (
              <circle
                key={index}
                cx={col * width}
                cy={row * height}
                r={dotSize}
                fill="#FFF6E9"
                opacity={0.05} // Decreasing opacity to create fade
              />
            );
          })}
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}

export default DotPattern;
