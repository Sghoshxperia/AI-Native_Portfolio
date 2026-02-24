import SectionWrapper from "./SectionWrapper";
import ResumeBlock, { ResumeEntry } from "./ResumeBlock";

const EXPERIENCE: ResumeEntry[] = [
  {
    title:    "[[JOB_1_TITLE]]",
    org:      "[[JOB_1_COMPANY]]",
    orgUrl:   "[[JOB_1_COMPANY_URL]]",
    period:   "[[JOB_1_PERIOD]]",
    location: "[[JOB_1_LOCATION]]",
    bullets: [
      "[[JOB_1_BULLET_1]]",
      "[[JOB_1_BULLET_2]]",
      "[[JOB_1_BULLET_3]]",
    ],
  },
  {
    title:    "[[JOB_2_TITLE]]",
    org:      "[[JOB_2_COMPANY]]",
    orgUrl:   "[[JOB_2_COMPANY_URL]]",
    period:   "[[JOB_2_PERIOD]]",
    location: "[[JOB_2_LOCATION]]",
    bullets: [
      "[[JOB_2_BULLET_1]]",
      "[[JOB_2_BULLET_2]]",
    ],
  },
];

const EDUCATION: ResumeEntry[] = [
  {
    title:    "B.Tech — Electronics and Communication Engineering",
    org:      "Manipal Institute of Technology",
    period:   "2019 – 2023",
    location: "Manipal, India",
    bullets: [
      "[[EDU_1_DETAIL_1]]",
      "[[EDU_1_DETAIL_2]]",
    ],
  },
];

export default function Resume() {
  return (
    <SectionWrapper id="resume" className="border-t border-border">
      {/* Swipe-in section header */}
      <div className="swipe-left mb-12 flex items-end justify-between flex-wrap gap-4">
        <div>
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-2">
            My journey
          </p>
          <h2
            id="resume-heading"
            className="text-3xl sm:text-4xl font-bold text-text-primary"
          >
            Resume
          </h2>
        </div>
        <a
          href="[[RESUME_PDF_URL]]"
          download
          aria-label="Download full resume as PDF"
          className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent text-text-secondary hover:text-accent text-sm font-medium transition-colors"
        >
          <DownloadIcon />
          Download PDF
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Experience */}
        <div>
          <h3 className="reveal flex items-center gap-3 text-lg font-semibold text-text-primary mb-8">
            <BriefcaseIcon />
            Experience
          </h3>
          <div className="flex flex-col gap-10">
            {EXPERIENCE.map((entry, i) => (
              <div key={entry.title} className={`reveal reveal-delay-${i + 1}`}>
                <ResumeBlock entry={entry} />
              </div>
            ))}
          </div>
        </div>

        {/* Education + Achievements */}
        <div>
          <h3 className="reveal flex items-center gap-3 text-lg font-semibold text-text-primary mb-8">
            <GraduationIcon />
            Education
          </h3>
          <div className="flex flex-col gap-10">
            {EDUCATION.map((entry, i) => (
              <div key={entry.title} className={`reveal reveal-delay-${i + 1}`}>
                <ResumeBlock entry={entry} />
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="reveal flex items-center gap-3 text-lg font-semibold text-text-primary mb-6">
              <TrophyIcon />
              Achievements
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {["[[ACHIEVEMENT_1]]", "[[ACHIEVEMENT_2]]", "[[ACHIEVEMENT_3]]"].map(
                (a, i) => (
                  <li
                    key={i}
                    className={`reveal reveal-delay-${i + 1} flex gap-3 items-start text-sm text-text-secondary`}
                  >
                    <span className="text-accent mt-0.5 flex-shrink-0" aria-hidden="true">✦</span>
                    <span>{a}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

    </SectionWrapper>
  );
}

function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
function BriefcaseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-accent">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}
function GraduationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-accent">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}
function TrophyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-accent">
      <polyline points="14.5 17.5 3 22 8.5 12.5" />
      <path d="M17 22h-9.17a2 2 0 0 1-1.81-2.86L9 14h6l2.98 5.14A2 2 0 0 1 16.17 22z" />
      <circle cx="12" cy="8" r="5" />
      <path d="M12 3v10" />
    </svg>
  );
}
