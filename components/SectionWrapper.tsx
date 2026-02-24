import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  className?: string;
  /** If true: min-h-screen + vertically centred content */
  fullScreen?: boolean;
  /** Optional absolutely-positioned scroll cue rendered outside the inner container */
  scrollCue?: ReactNode;
  children: ReactNode;
}

export default function SectionWrapper({
  id,
  className = "",
  fullScreen = false,
  scrollCue,
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`${
        fullScreen ? "min-h-screen flex flex-col justify-center" : "py-24"
      } px-4 relative ${className}`}
    >
      <div className="mx-auto w-full max-w-container">{children}</div>
      {scrollCue}
    </section>
  );
}
