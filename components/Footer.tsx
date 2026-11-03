
export default function Footer() {
    return (
        <footer className="border-t border-slate-800 px-6 py-6 text-center text-sm text-slate-400">
            <p>
                © {new Date().getFullYear()} Saleh Ntege.
                All rights reserved.
            </p>
        </footer>
    );
}
