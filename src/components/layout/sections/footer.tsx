export function Footer() {
    return (
        <footer className="flex justify-around items-center gap-8 h-64 text-sm bg-stone-900 text-slate-200">
            <div className="flex flex-col items-center gap-2">
                <p>React + Vite = 😍</p>
                <p className="italic text-stone-400">Workshop for</p>
                <p>Fontenehuset Bergen</p>
            </div>
            <div className="flex flex-col gap-2">
                <p className="border-b">Links</p>
            </div>
        </footer>
    );
}