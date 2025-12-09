type BadgeProps = {
    label: string;
    level?: 'success' | 'warning' | 'info';
};

export function Badge(props: BadgeProps) {
    const { label, level } = props;

    return <span className={`badge ${level && level}`}>{label}</span>;
}
