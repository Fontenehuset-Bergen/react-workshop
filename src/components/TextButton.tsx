
interface TextButtonProps {
    text: string,
    disabled?: boolean
}

export function TextButton({text, disabled = false}: TextButtonProps) {
    return (
        <button className={`textButton`} disabled={disabled}>{text}</button>
    )
}