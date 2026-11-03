type SkillCardProps = {
    title: string;
    description: string;
};

export default function SkillCard({
    title,
    description,
}: SkillCardProps) {
    return (
        <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
            <h3 className="mb-3 text-xl font-semibold text-green-400">
                {title}
            </h3>

            <p className="text-slate-300">
                {description}
            </p>
        </div>
    );
}