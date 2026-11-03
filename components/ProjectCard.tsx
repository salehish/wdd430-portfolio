
type ProjectCardProps = {
    title: string;
    description: string;
    technologies: string;
    link?: string;
};

export default function ProjectCard({
    title,
    description,
    technologies,
    link,
}: ProjectCardProps) {
    return (
        <article className="rounded-lg border border-slate-800 bg-slate-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">{title}</h3>

            <p className="mb-4 text-slate-300">{description}</p>

            <p className="mb-4 text-sm text-slate-400">{technologies}</p>

            {link && (
                <a
                    className="font-semibold text-green-400 hover:text-green-300"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View project
                </a>
            )}
        </article>
    );
}
