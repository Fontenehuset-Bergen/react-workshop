import './pinkbutton.css';
import './purplebutton.css';

interface ButtonProps {
    label: string;
    className?: string;
}

export function Button( { label, className }: ButtonProps ) {

    return (
        <button className={`${className}`}>
            {label}
        </button>
    )
}