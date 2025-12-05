type LinkButtonProps = {
    label: string;
    href: string;
    newTab?: boolean;
};

export default function LinkButton(props: LinkButtonProps) {
    const { label, href, newTab = false } = props;
    return (
        <a href={href} className="button" {...(newTab && { target: '_blank' })}>
            {label}
        </a>
    );
}
