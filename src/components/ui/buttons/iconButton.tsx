import type { ReactNode } from "react";


interface iIconButton {
    label: string;
    icon: ReactNode;
}

export function IconButton ({icon, label}: iIconButton) {
    return (
        <button 
            type="button"
            className="flex gap-2 items-center py-2 px-4 border rounded-md text-black bg-sky-400 border-sky-500 hover:bg-sky-300 hover:shadow-lg dark:shadow-sky-400/35 duration-200"
            >
            <span>{icon}</span>
            <p>{label}</p>    
        </button>
    );
};