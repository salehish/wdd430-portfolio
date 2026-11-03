import ProjectList from "@/components/Projectlist";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 font-semibold text-green-400">
          PERSONAL PORTFOLIO
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Hello, I&apos;m Saleh Ntege
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-slate-300">
          I am a Computer Programming student and aspiring software
          developer passionate about building useful applications
          and solving real-world problems through technology.
        </p>

        <h2 className="mb-6 text-3xl font-bold">
          My Projects
        </h2>

        <ProjectList />
      </section>
    </main>
  );
}
