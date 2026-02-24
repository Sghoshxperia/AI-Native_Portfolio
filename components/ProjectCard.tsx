import Image from "next/image";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageToken: string;
  imageSrc?: string;
  year: string;
  liveUrl?: string;
  repoUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`group relative flex flex-col rounded-xl overflow-hidden border border-border bg-surface hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      {/* Thumbnail */}
      <div
        className={`relative bg-surface-alt overflow-hidden flex-shrink-0 ${
          featured ? "lg:w-1/2 aspect-video lg:aspect-auto" : "aspect-video"
        }`}
      >
        {project.imageSrc ? (
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            className="object-cover"
            sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 640px) 50vw, 100vw"}
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-text-muted text-xs font-mono p-4 text-center">
            {project.imageToken}
          </div>
        )}
        {/* Year badge */}
        <span className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-mono bg-background text-text-primary border border-border/60 shadow-sm">
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-300 text-zinc-900 transition-opacity duration-200 hover:opacity-70"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.liveUrl || project.repoUrl) && (
          <div className="flex gap-3 pt-2 border-t border-border mt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
                className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors"
              >
                <ExternalLinkIcon />
                Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code of ${project.title} on GitHub`}
                className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors"
              >
                <GithubIcon />
                Source
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
