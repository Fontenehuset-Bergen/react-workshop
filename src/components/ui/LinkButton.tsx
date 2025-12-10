import './linkbutton.css';

interface LinkButtonProps {
    label: string;
    className?: string;
    href: string;
}

export function LinkButton( { label, className="defaulthere", href }: LinkButtonProps ) {

    return (
        <a className={`${className}`} href={`${href}`}>{label}</a>
    )
}