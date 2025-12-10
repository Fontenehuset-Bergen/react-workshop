/*
Badge: this should be a span element that can take the following props: labeland level. level can only be the following values: "success" | "warning" | "info"and determines what color the element can be.
    - Span element
    - Props: label, level
        - Level: Only success, warning, info  -- Different level = different color
*/

import './badge.css';

interface BadgeProps {
    label: string,
    level: "success" | "warning" | "info",
}

export function Badge({ label, level }: BadgeProps) {
    return(
        <span className={`${level}`}>
            {label}
        </span>
    )
}