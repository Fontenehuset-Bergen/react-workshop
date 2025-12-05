interface ParagraphProps {
    text: string
    textSize: number
}

export default function Paragraph({ text, textSize }: ParagraphProps) {
    return (
        <div>
            <p style={{fontSize:textSize, padding: 20, backgroundColor: "black", color: "white"}} > {text}</p>
        </div>
    )
}