export function Paragraph({ text, textSize = 12, }: { text: string; textSize: number; }) {
  return <p style={{ fontSize: textSize + "px" }}>{text}</p>;
}
