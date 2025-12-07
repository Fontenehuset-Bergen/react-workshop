interface LinkButtonProps {
    label: string,
    href?: string,
    disabled?: boolean,
}

export function LinkButton({label, href = "#", disabled = false}: LinkButtonProps) {
    return (
        <a className={`linkButton ${disabled && 'disabled'}`} href={href}>{`${label} >`}</a>
    )
}