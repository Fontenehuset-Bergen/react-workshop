type SizeUnit =
    | 'rem'
    | 'em'
    | 'px'
    | 'cm'
    | 'mm'
    | 'in'
    | 'pt'
    | '%'
    | 'vw'
    | 'vh'
    | 'vmin'
    | 'vmax'
    | 'ch'
    | 'ex';

type TextSize =
    | 'xx-small'
    | 'x-small'
    | 'smaller'
    | 'small'
    | 'medium'
    | 'large'
    | 'larger'
    | 'x-large'
    | 'xx-large'
    | `${number}${SizeUnit}`;

type ParagraphProps = {
    text: string;
    textSize: TextSize;
};

export function Paragraph(props: ParagraphProps) {
    const { text, textSize } = props;

    const lines = text.split('\n');

    return (
        <>
            <p style={{ fontSize: textSize }}>
                {lines.map((str, index) => (
                    <>
                        {str}
                        {index < lines.length - 1 && <br />}
                    </>
                ))}
            </p>
        </>
    );
}
