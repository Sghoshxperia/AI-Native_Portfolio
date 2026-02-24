export interface ResumeEntry {
  title:    string;
  org:      string;
  orgUrl?:  string;
  period:   string;
  location: string;
  bullets:  string[];
}

export default function ResumeBlock({ entry }: { entry: ResumeEntry }) {
  return (
    <div className="relative pl-6 border-l-2 border-border hover:border-accent transition-colors group">
      {/* Timeline dot */}
      <span
        aria-hidden="true"
        className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-border group-hover:bg-accent transition-colors"
      />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
        <div>
          <h3 className="text-base font-semibold text-text-primary">
            {entry.title}
          </h3>
          {entry.orgUrl ? (
            <a
              href={entry.orgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-accent-hover transition-colors"
            >
              {entry.org}
            </a>
          ) : (
            <span className="text-sm text-accent">{entry.org}</span>
          )}
        </div>
        <div className="flex flex-col sm:items-end gap-0.5">
          <span className="text-xs font-mono text-text-muted">{entry.period}</span>
          <span className="text-xs text-text-muted">{entry.location}</span>
        </div>
      </div>

      <ul className="flex flex-col gap-1.5 mt-2" role="list">
        {entry.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2 text-sm text-text-secondary leading-relaxed">
            <span aria-hidden="true" className="text-accent mt-0.5 flex-shrink-0">›</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
