interface BadgeProps {
    label: string
    level: "success" | "warning" | "info"

}

export default function StatusBadge({ label, level }: BadgeProps) {
    let badgeColor = "gray"

    switch (true) {
        case level == "success":
            badgeColor = "green";
            break;
        case level == "warning":
            badgeColor = "red";
            break;
        default:
            break;
    }

    return (
        <div>
            <span style={{ backgroundColor: badgeColor, padding: 10, borderRadius: 10}}>{label}</span>
        </div>
    )
}