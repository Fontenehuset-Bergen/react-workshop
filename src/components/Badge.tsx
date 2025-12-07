interface BadgeProps {
    label: string,
    level: "success" | "warning" | "info"
}

export function Badge({label, level}: BadgeProps) {
    return (
        <span className={`badge ${level}`}>{label}</span>
    )
}