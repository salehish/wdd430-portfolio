
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Personal Expense Tracker",
        description:
            "A personal finance application that helps users record and manage their expenses.",
        technologies: "Python, SQLite",
        link: "https://github.com/salehish/PersonalExpenseTracker",
    },
    {
        title: "BookTrack",
        description:
            "A book discovery and reading tracker application that helps users manage their reading lists and progress.",
        technologies: "JavaScript, HTML, CSS, Local Storage",
        link: "https://github.com/salehish/BookTrack",
    },
    {
        title: "CareerLaunch",
        description:
            "A career development platform designed to help users manage career preparation activities.",
        technologies: "TypeScript, Prisma",
        link: "https://github.com/bbrain777/CareerLaunch",
    },
];

export default function ProjectList() {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
                <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    link={project.link}
                />
            ))}
        </div>
    );
}
