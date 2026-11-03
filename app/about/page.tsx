import SkillCard from "@/components/SkillCard";
export default function About() {
    return (
        <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
            <section className="mx-auto max-w-5xl">
                <h1 className="mb-6 text-4xl font-bold">
                    About Me
                </h1>

                <p className="mb-10 max-w-2xl text-lg text-slate-300">
                    I am a Computer Programming student passionate about
                    software development, problem-solving, and building
                    useful technology solutions.
                </p>

                <h2 className="mb-6 text-2xl font-bold">
                    My Skills
                </h2>

                <SkillCard
                    title="Software Development"
                    description="Building applications using programming languages and modern development tools."
                />
            </section>
        </main>
    );
}