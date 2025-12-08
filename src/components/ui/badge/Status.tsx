import "../../../assets/styles/badge.css";

interface StatusBadgeProps {
  label: string;
  level: "success" | "warning" | "info";
}

export function StatusBadge({ label, level }: StatusBadgeProps) {
  return <span className={`badge-${level} badge`}>{label}</span>;
}
