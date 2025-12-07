
interface ParagraphProps {
    text: string,
    textSize: Number
}

export function Paragraph({text, textSize}: ParagraphProps) {
    return (
        <p className="paragraph" style={{fontSize: `${textSize}px`}}>{text}</p>
    )
}