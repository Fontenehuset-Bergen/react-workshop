type TextButtonProps = {
    label: string;
};

export default function TextButton(props: TextButtonProps) {
    const { label } = props;

    return <button className="button">{label}</button>;
}
